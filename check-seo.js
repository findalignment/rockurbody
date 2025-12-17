const fs = require('fs');
const path = require('path');

// Find all .jsx files in src/pages
function findAllPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAllPages(filePath, fileList);
    } else if (file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Check if file has SEO component or Helmet with description
function checkSEO(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const hasSEOComponent = content.includes('<SEO');
  const hasHelmet = content.includes('<Helmet') || content.includes('from \'react-helmet-async\'');
  const hasDescription = content.includes('description=');
  
  return {
    filePath: filePath.replace(/.*\/src\/pages\//, 'src/pages/'),
    hasSEOComponent,
    hasHelmet,
    hasDescription,
    needsWork: !hasDescription && !content.includes('LocationPageTemplate')
  };
}

// Main
const pages = findAllPages('src/pages');
const results = pages.map(checkSEO);

console.log('\n=== Pages MISSING Meta Descriptions ===\n');
const missing = results.filter(r => r.needsWork);
missing.forEach(r => {
  console.log(`❌ ${r.filePath}`);
});

console.log(`\n\nTotal pages: ${results.length}`);
console.log(`Pages with descriptions: ${results.filter(r => r.hasDescription).length}`);
console.log(`Pages MISSING descriptions: ${missing.length}\n`);

