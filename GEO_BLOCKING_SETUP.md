# Geo-Blocking Setup: US-Only Access

This guide explains how to restrict your website to visitors from the United States only.

## Implementation

A `middleware.js` file has been created in the project root that uses Vercel Edge Middleware to check visitor locations and block non-US visitors.

## How It Works

1. **Vercel Geolocation**: Vercel automatically detects visitor locations using IP geolocation
2. **Country Check**: The middleware checks if the visitor's country code is "US"
3. **Blocking**: Non-US visitors receive a friendly 403 Forbidden page
4. **Allowing**: US visitors proceed normally to the website

## Configuration

The middleware is configured to run on all routes except:
- API routes (`/api/*`)
- Static assets (images, fonts, CSS, JS files)
- SEO files (`robots.txt`, `sitemap.xml`, `favicon.ico`)

## Testing

### Test from US
- The site should work normally
- No blocking should occur

### Test from Non-US (using VPN)
1. Connect to a VPN server outside the US
2. Visit your website
3. You should see the "Access Restricted" page

### Test Locally
- The middleware may not work in local development
- Deploy to Vercel to test geo-blocking functionality

## Customization

### Change the Blocked Message

Edit the HTML in `middleware.js` to customize the message shown to blocked visitors.

### Allow Additional Countries

To allow multiple countries, modify the check in `middleware.js`:

```javascript
// Allow US and Canada
const allowedCountries = ['US', 'CA'];
if (!allowedCountries.includes(country)) {
  // Block access
}
```

### Disable Geo-Blocking Temporarily

To temporarily disable geo-blocking:

1. Comment out the middleware check, or
2. Rename `middleware.js` to `middleware.js.disabled`

## Important Notes

### Accuracy
- IP geolocation is generally accurate at the country level
- Some users may use VPNs to bypass restrictions
- Mobile users traveling internationally may be incorrectly blocked

### Legal Considerations
- Ensure geo-blocking complies with applicable laws
- Consider GDPR and other privacy regulations
- Some jurisdictions may require access regardless of location

### SEO Impact
- Search engines may crawl from different countries
- Consider allowing search engine bots
- Update `robots.txt` if needed

### API Routes
- API routes are excluded from geo-blocking by default
- If you want to block API routes too, modify the `matcher` config

## Troubleshooting

### Middleware Not Working
1. Ensure `middleware.js` is in the project root
2. Verify it's committed to git (Vercel deploys from git)
3. Check Vercel deployment logs for errors
4. Ensure you're on a Vercel plan that supports Edge Middleware

### False Positives
- Some US visitors may be incorrectly blocked
- Check Vercel logs to see detected country codes
- Consider adding a contact form for appeals

### Performance
- Edge Middleware runs at the edge (fast)
- Minimal performance impact
- Blocks happen before page load (saves bandwidth)

## Alternative Methods

If Edge Middleware doesn't work for your setup, consider:

1. **Cloudflare**: Use Cloudflare's geo-blocking features
2. **Server-Side**: Implement geo-blocking in your API routes
3. **CDN-Level**: Configure geo-blocking at your CDN level

## Support

If you need to allow specific non-US visitors:
- They can contact you at rock@rockurbody.com
- You can temporarily disable geo-blocking
- Or implement an allowlist system

---

**Current Status**: ✅ Geo-blocking enabled - US visitors only

