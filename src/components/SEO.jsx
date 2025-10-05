import { Helmet } from 'react-helmet-async';

/**
 * SEO Component with comprehensive metadata
 * 
 * Features:
 * - Dynamic title and meta descriptions
 * - Open Graph tags for social sharing
 * - Twitter Card tags
 * - Structured Data (JSON-LD)
 * - Canonical URLs
 * - robots meta tags
 */

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'Rock Hudson',
  publishedTime,
  modifiedTime,
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  // Site configuration
  const siteConfig = {
    siteName: 'Rock Your Body',
    siteUrl: 'https://rockyourbody.com', // Update with your actual domain
    defaultImage: '/og-image.jpg', // Update with your actual OG image
    twitterHandle: '@rockyourbody', // Update with your actual Twitter handle
    locale: 'en_US',
  };

  // Construct full title
  const fullTitle = title 
    ? `${title} | ${siteConfig.siteName}` 
    : `${siteConfig.siteName} - Movement Education & Structural Integration in Santa Cruz, CA`;

  // Construct full URL
  const fullUrl = url ? `${siteConfig.siteUrl}${url}` : siteConfig.siteUrl;

  // Use provided image or default
  const ogImage = image ? `${siteConfig.siteUrl}${image}` : `${siteConfig.siteUrl}${siteConfig.defaultImage}`;

  // Default description
  const defaultDescription = 'Expert movement education and structural integration in Santa Cruz, CA. Specializing in pain relief, posture correction, and performance enhancement through hands-on fascia work and personalized movement coaching.';
  const metaDescription = description || defaultDescription;

  // Robots meta
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={siteConfig.locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
