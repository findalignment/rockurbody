#!/usr/bin/env node

/**
 * Download Images from Airtable
 * 
 * This script:
 * 1. Connects to your Airtable "Site Images" table
 * 2. Downloads all images
 * 3. Saves them to /public/ folder
 * 4. Generates WebP versions
 */

import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local file explicitly
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log('✅ Loaded .env.local\n');
} else {
  console.error('❌ .env.local file not found at:', envPath);
  process.exit(1);
}

// Airtable configuration from .env.local
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN || process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN || process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Site Images';

// Validate configuration
if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
  console.error('❌ Error: Missing Airtable credentials in .env.local');
  console.error('Required: AIRTABLE_TOKEN (or AIRTABLE_PERSONAL_ACCESS_TOKEN) and AIRTABLE_BASE_ID');
  console.error('\nFound environment variables starting with AIRTABLE:');
  Object.keys(process.env).filter(key => key.startsWith('AIRTABLE')).forEach(key => {
    console.error(`  - ${key}: ${process.env[key] ? '✓ Set' : '✗ Not set'}`);
  });
  console.error('\nPlease add to your .env.local file:');
  console.error('AIRTABLE_TOKEN=your_personal_access_token_here');
  console.error('AIRTABLE_BASE_ID=your_base_id_here');
  console.error('AIRTABLE_TABLE_NAME=Site Images  # (optional, defaults to "Site Images")');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

console.log('🚀 Starting Airtable image download...\n');
console.log(`📦 Base ID: ${AIRTABLE_BASE_ID}`);
console.log(`📊 Table: ${AIRTABLE_TABLE_NAME}`);
console.log(`📁 Output: ${PUBLIC_DIR}\n`);

/**
 * Fetch all records from Airtable
 */
async function fetchAirtableRecords() {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
  
  console.log(`🔗 Request URL: ${url}`);
  console.log(`🔑 Using token: ${AIRTABLE_TOKEN.substring(0, 15)}...`);
  
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('\n❌ Airtable API Error Details:');
      console.error(`   Status: ${response.status}`);
      console.error(`   Response: ${error}`);
      console.error(`\n💡 Common issues:`);
      console.error(`   - Check your Base ID is correct (currently: ${AIRTABLE_BASE_ID})`);
      console.error(`   - Check your Table Name is correct (currently: "${AIRTABLE_TABLE_NAME}")`);
      console.error(`   - Make sure your token has access to this base`);
      console.error(`   - Base ID should look like: appXXXXXXXXXXXXXX`);
      throw new Error(`Airtable API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.records;
  } catch (error) {
    console.error('❌ Error fetching from Airtable:', error.message);
    throw error;
  }
}

/**
 * Download an image from URL
 */
async function downloadImage(url, filepath) {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
  }

  const buffer = await response.buffer();
  fs.writeFileSync(filepath, buffer);
  return filepath;
}

/**
 * Convert image to WebP using cwebp
 */
async function convertToWebP(inputPath) {
  return new Promise((resolve, reject) => {
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    const cwebp = spawn('cwebp', [
      '-q', '85',  // Quality 85%
      inputPath,
      '-o', outputPath
    ]);

    let stderr = '';
    cwebp.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    cwebp.on('close', (code) => {
      if (code === 0) {
        resolve(outputPath);
      } else {
        reject(new Error(`cwebp failed: ${stderr}`));
      }
    });

    cwebp.on('error', (err) => {
      if (err.code === 'ENOENT') {
        reject(new Error('cwebp not found. Install with: brew install webp'));
      } else {
        reject(err);
      }
    });
  });
}

/**
 * Process all images from Airtable
 */
async function processImages() {
  try {
    // Fetch records from Airtable
    console.log('📥 Fetching records from Airtable...');
    const records = await fetchAirtableRecords();
    console.log(`✅ Found ${records.length} records\n`);

    if (records.length === 0) {
      console.log('⚠️  No records found in the table.');
      return;
    }

    // Create public directory if it doesn't exist
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    let downloaded = 0;
    let skipped = 0;
    let errors = 0;

    // Process each record
    for (const record of records) {
      const fields = record.fields;
      
      // Try different possible field names
      const name = fields.Name || fields.name || fields.Filename || fields.filename;
      const imageField = fields.Image || fields.image || fields.Attachment || fields.attachment || fields.File || fields.file;
      const urlField = fields.URL || fields.url || fields.Link || fields.link || fields.Cloudinary || fields.cloudinary;

      if (!name) {
        console.log(`⚠️  Skipping record ${record.id}: No Name field`);
        skipped++;
        continue;
      }

      let imageUrl;
      let originalFilename;

      // Check if it's a URL field (Cloudinary link)
      if (urlField && typeof urlField === 'string') {
        imageUrl = urlField;
        // Extract extension from URL or default to .jpg
        const urlMatch = imageUrl.match(/\.([a-zA-Z]{3,4})(?:[?#]|$)/);
        originalFilename = urlMatch ? `temp.${urlMatch[1]}` : 'temp.jpg';
        console.log(`🔗 Found URL field for "${name}"`);
      }
      // Check if it's an attachment field
      else if (imageField && Array.isArray(imageField) && imageField.length > 0) {
        const attachment = imageField[0];
        imageUrl = attachment.url;
        originalFilename = attachment.filename;
        console.log(`📎 Found attachment for "${name}"`);
      }
      // No image found
      else {
        console.log(`⚠️  Skipping "${name}": No image URL or attachment found`);
        skipped++;
        continue;
      }
      
      // Determine file extension from original filename
      const ext = path.extname(originalFilename).toLowerCase();
      
      // Construct output filename (name from Airtable + original extension)
      let outputFilename = name;
      if (!outputFilename.endsWith(ext)) {
        outputFilename += ext;
      }

      const outputPath = path.join(PUBLIC_DIR, outputFilename);

      try {
        console.log(`📥 Downloading: ${name}${ext}`);
        console.log(`   URL: ${imageUrl}`);
        
        // Download the image
        await downloadImage(imageUrl, outputPath);
        console.log(`   ✅ Saved to: ${outputPath}`);
        
        // Convert to WebP if it's a JPG or PNG
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          try {
            const webpPath = await convertToWebP(outputPath);
            console.log(`   ✅ WebP created: ${path.basename(webpPath)}`);
          } catch (webpError) {
            console.log(`   ⚠️  WebP conversion failed: ${webpError.message}`);
          }
        }
        
        downloaded++;
        console.log('');
        
      } catch (error) {
        console.error(`   ❌ Error downloading "${name}": ${error.message}\n`);
        errors++;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Downloaded: ${downloaded}`);
    console.log(`⚠️  Skipped: ${skipped}`);
    console.log(`❌ Errors: ${errors}`);
    console.log(`📁 Location: ${PUBLIC_DIR}`);
    console.log('='.repeat(60));

    if (downloaded > 0) {
      console.log('\n✨ Images are ready! You can now view them on your site.');
    }

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
processImages();

