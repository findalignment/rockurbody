# Airtable Setup Guide

## Finding Your Airtable Credentials

### 1. Base ID

Your Base ID should look like: `appXXXXXXXXXXXXXX` (starts with "app" followed by 14 characters)

**How to find it:**

1. Open your Airtable base in a web browser
2. Look at the URL, it will look like:
   ```
   https://airtable.com/appABC1234567890/tblXYZ987654321/...
                        ^^^^^^^^^^^^^^^^
                        This is your Base ID
   ```
3. Copy just the part that starts with `app` (17 characters total)

**Current issue:** Your `.env.local` has `AeB6tFMIhlzY4R?` which:
- Doesn't start with `app`
- Has a `?` at the end
- Is too short

### 2. Personal Access Token (API Key)

**How to create one:**

1. Go to https://airtable.com/create/tokens
2. Click "Create new token"
3. Give it a name like "Rock Your Body Site Images"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write` (optional, for future updates)
   - `schema.bases:read`
5. Add access to your specific base:
   - Click "Add a base"
   - Select your "Site Images" base
6. Click "Create token"
7. Copy the token (it starts with `pat` and is very long)

**Current status:** ✅ Token looks good (`patWGVUY0yiZq3L...`)

### 3. Table Name

The table name in your Airtable base. Default is `Site Images`.

**How to check:**
1. Open your base
2. Look at the tabs at the top of your base
3. One should be named "Site Images" (or whatever you called it)

**Current status:** Using `Site Images`

## Your .env.local File Should Look Like:

```env
# Airtable Configuration
AIRTABLE_API_KEY=patWGVUY0yiZq3L1234567890abcdefghijklmnop
AIRTABLE_BASE_ID=appABC1234567890
AIRTABLE_TABLE_NAME=Site Images
```

## Quick Fix

**Right now, you need to:**

1. Open your `.env.local` file
2. Find the line with `AIRTABLE_BASE_ID`
3. Replace `AeB6tFMIhlzY4R?` with your correct Base ID from the Airtable URL
4. Make sure it starts with `app` and has no `?` at the end
5. Save the file
6. Run `npm run download-images` again

## Example URL Breakdown

If your Airtable URL is:
```
https://airtable.com/appABC1234567890/tblDEF9876543210/viwGHI1122334455?blocks=hide
```

Then:
- **Base ID:** `appABC1234567890`
- **Table ID:** `tblDEF9876543210` (you don't need this)
- **View ID:** `viwGHI1122334455` (you don't need this)

Just grab the part that starts with `app`!

## Testing the Connection

Once you've updated your `.env.local` file, test it with:

```bash
npm run download-images
```

You should see:
```
✅ Loaded .env.local
🚀 Starting Airtable image download...
📦 Base ID: appXXXXXXXXXXXXXX
📊 Table: Site Images
📁 Output: /Users/rockhudson/Desktop/rockurbody/public

📥 Fetching records from Airtable...
✅ Found XX records
```

## Troubleshooting

### Still getting 404?
- Double-check the Base ID starts with `app`
- Make sure your token has access to this specific base
- Verify the table name matches exactly (case-sensitive)

### Getting 401 Unauthorized?
- Your token might be expired or invalid
- Create a new token at https://airtable.com/create/tokens
- Make sure the token has the right scopes and base access

### Getting 403 Forbidden?
- Your token doesn't have access to this base
- Edit your token to add access to this specific base

---

**Need help?** The error messages will guide you through common issues!
