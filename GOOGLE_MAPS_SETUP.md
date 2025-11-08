# Google Maps Integration Setup

## Overview

The location pages now include an embedded Google Map showing driving directions from your Santa Cruz studio (311 Soquel Ave) to each city you serve. This helps clients visualize the drive and understand travel costs.

## Requirements

To display the embedded maps, you need a **Google Maps API Key** with the Maps Embed API enabled.

## Setup Instructions

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable the **Maps Embed API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Maps Embed API"
   - Click "Enable"
4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key that's generated

### 2. Restrict Your API Key (Recommended)

For security, restrict your API key to only your domain:

1. Click on the API key in the Credentials page
2. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your domains:
     - `https://rockyourbody.com/*`
     - `https://www.rockyourbody.com/*`
     - `http://localhost:*` (for local development)
3. Under "API restrictions":
   - Select "Restrict key"
   - Select only "Maps Embed API"
4. Click "Save"

### 3. Add API Key to Your Project

#### Option A: Environment Variable (Recommended for Production)

1. Create a `.env` file in your project root:
```bash
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

2. Update `.gitignore` to exclude `.env`:
```
.env
.env.local
.env.production
```

3. Update the LocationPageTemplate component to use the environment variable:
```jsx
const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// In the iframe src:
src={`https://www.google.com/maps/embed/v1/directions?key=${MAPS_API_KEY}&origin=311+Soquel+Ave+Santa+Cruz+CA+95062&destination=${encodeURIComponent(city + ', CA')}&mode=driving`}
```

4. Add the environment variable to Vercel:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add `VITE_GOOGLE_MAPS_API_KEY` with your API key
   - Redeploy your site

#### Option B: Direct Replacement (Quick but Less Secure)

1. Open `src/components/LocationPageTemplate.jsx`
2. Find the line with `key=YOUR_API_KEY`
3. Replace `YOUR_API_KEY` with your actual API key:
```jsx
src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyC1234567890abcdefghijklmnop&origin=311+Soquel+Ave+Santa+Cruz+CA+95062&destination=${encodeURIComponent(city + ', CA')}&mode=driving`}
```

**Note:** This approach exposes your API key in the source code. Use Option A for production.

### 4. Verify It Works

1. Visit any location page (e.g., `/capitola-personal-training`)
2. Scroll to the "Drive Time & Session Cost from Santa Cruz" section
3. You should see an embedded map with directions
4. The "Get Directions in Google Maps" link should open in a new tab

### 5. Monitor API Usage

- Google provides 28,000 free map loads per month
- After that, it's $7 per 1,000 loads
- Monitor usage at [Google Cloud Console](https://console.cloud.google.com/) > "APIs & Services" > "Dashboard"

## Pricing Calculator Features

The component automatically calculates:

1. **Round-trip drive time** - Based on the `driveTime` prop passed to each location page
2. **Example session cost** - Shows a 90-minute SI session breakdown:
   - Session time cost (90 min @ $180/hr = $270)
   - Drive time cost (calculated from driveTime @ $180/hr)
   - Total investment

### How Drive Time is Calculated

Each location page specifies its own drive time:

```jsx
// Example: Capitola.jsx
<LocationPageTemplate
  city="Capitola"
  county="Santa Cruz County"
  driveTime="15 minutes"  // One-way time
  // ...
/>
```

The calculator automatically:
- Doubles the drive time for round-trip (15 min → 30 min)
- Converts to hours (30 min → 0.5 hr)
- Multiplies by hourly rate ($180/hr)
- Adds to session cost

## Fallback Behavior

If the API key is missing or invalid:
- The map iframe will show an error message from Google
- The "Get Directions in Google Maps" link will still work (it uses regular Google Maps, no API key required)
- The pricing calculator will still function correctly

## Troubleshooting

### Map shows "Oops! Something went wrong."

**Cause:** Invalid or missing API key

**Solution:** 
1. Check that your API key is correctly set
2. Verify Maps Embed API is enabled in Google Cloud Console
3. Check domain restrictions aren't blocking your site

### Map loads but shows wrong location

**Cause:** City name encoding issue

**Solution:** The component automatically encodes city names, but if you have complex city names (e.g., "Santa Clara"), make sure they match Google's location database.

### API key exposed in browser

**Cause:** Using Option B (direct replacement)

**Solution:** This is expected for Maps Embed API. For additional security:
1. Use domain restrictions in Google Cloud Console
2. Enable billing alerts to prevent unexpected charges
3. Consider Option A (environment variables) to hide the key in source control

## Cost Optimization

To minimize API usage:
1. Maps use `loading="lazy"` - only load when scrolled into view
2. Each page load counts as 1 map load
3. Consider static map screenshots for pages with low traffic
4. Set up billing alerts in Google Cloud Console

---

**Current Status:** 
- ⚠️ API key placeholder `YOUR_API_KEY` needs to be replaced
- ✅ Map markup and styling complete
- ✅ Pricing calculator functional
- ✅ Fallback links working

**Next Step:** Follow setup instructions above to add your Google Maps API key.

---

**Last Updated:** November 8, 2025

