/**
 * Vercel Edge Middleware
 * Restricts access to visitors from the United States only
 * 
 * This middleware checks the visitor's country code using Vercel's geolocation
 * and blocks access for non-US visitors with a friendly 403 page.
 * 
 * Vercel automatically provides geolocation data via:
 * - request.geo.country (Edge Runtime)
 * - x-vercel-ip-country header
 */

export default function middleware(request) {
  // Get the country code from Vercel's geolocation
  // Try multiple methods to get country code
  const country = 
    request.geo?.country || 
    request.headers.get('x-vercel-ip-country') || 
    request.headers.get('cf-ipcountry') || // Cloudflare fallback
    'US'; // Default to US if not detected
  
  // Allow only US visitors
  if (country !== 'US') {
    // Return a 403 Forbidden response for non-US visitors
    return new Response(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Restricted - Rock Your Body</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%);
      color: #333;
      padding: 1rem;
    }
    .container {
      background: white;
      padding: 3rem 2rem;
      border-radius: 1rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      max-width: 500px;
      text-align: center;
    }
    .flag {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    h1 {
      color: #1e3a8a;
      margin-bottom: 1rem;
      font-size: 1.75rem;
    }
    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 1rem;
    }
    a {
      color: #06b6d4;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="flag">🇺🇸</div>
    <h1>Access Restricted</h1>
    <p>This website is currently only available to visitors from the United States.</p>
    <p>If you believe this is an error, please contact us at <a href="mailto:rock@rockurbody.com">rock@rockurbody.com</a></p>
  </div>
</body>
</html>`,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      }
    );
  }

  // Allow US visitors to proceed
  // Return a new Response to continue (Vercel Edge Middleware format)
  return new Response(null, {
    status: 200,
  });
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (these are handled separately)
     * - static assets (images, fonts, etc.)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|js|css)).*)',
  ],
};
