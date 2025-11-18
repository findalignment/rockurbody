/**
 * Vercel Serverless Function to log chat questions to Airtable
 * 
 * This function acts as a secure bridge between your frontend and Airtable.
 * It receives chat logs from the frontend and sends them to Airtable using
 * server-side environment variables (keeping API keys secure).
 * 
 * Environment variables required:
 * - AIRTABLE_API_KEY: Your Airtable personal access token (pat...)
 * - AIRTABLE_BASE_ID: Your Airtable base ID (app...)
 * - AIRTABLE_TABLE_NAME: Your table name (e.g., "Chat Logs")
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check for required environment variables
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID || !process.env.AIRTABLE_TABLE_NAME) {
    console.error('Missing Airtable environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { subject, message } = req.body;
    
    // Parse the message to extract question and metadata
    // Format: "Question: <question>\n\nMetadata: <json>"
    const questionMatch = message.match(/Question: (.+?)\n\n/);
    const metadataMatch = message.match(/Metadata: (.+)$/s);
    
    if (!questionMatch || !metadataMatch) {
      console.error('Invalid message format:', message);
      return res.status(400).json({ error: 'Invalid message format' });
    }

    const question = questionMatch[1];
    let metadata;
    
    try {
      metadata = JSON.parse(metadataMatch[1]);
    } catch (parseError) {
      console.error('Failed to parse metadata:', parseError);
      return res.status(400).json({ error: 'Invalid metadata format' });
    }

    // Prepare Airtable record
    // Make sure field names match exactly what you created in Airtable
    const airtableRecord = {
      fields: {
        'Timestamp': metadata.timestamp,
        'Question': question,
        'SessionID': metadata.sessionId || 'unknown',
        'UserId': metadata.userId || 'anonymous',
        'DetectedIntent': metadata.detectedIntent || '',
        'QuestionNumber': metadata.questionNumber || null,
        'UserAgent': metadata.userAgent || '',
        'Page': metadata.page || '',
        'Referrer': metadata.referrer || 'direct',
      }
    };

    // Send to Airtable API
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`;
    
    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableRecord),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('Airtable API error:', {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        error: errorText
      });
      return res.status(500).json({ 
        error: 'Failed to log to Airtable',
        details: errorText 
      });
    }

    const result = await airtableResponse.json();
    return res.status(200).json({ success: true, recordId: result.id });
  } catch (error) {
    console.error('Logging error:', error);
    return res.status(500).json({ error: error.message });
  }
}

