import { Helmet } from 'react-helmet-async';
import { structuredData } from '../data/structuredData';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = '/apple-touch-icon.png',
  ogType = 'website' 
}: SEOProps) {
  const siteUrl = 'https://flexconsulting.ca';
  const fullCanonical = `${siteUrl}${canonical}`;
  const fullTitle = `${title} | Flex Consulting - Software Consultants Guelph`;
  const defaultOgImage = `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:site_name" content="Flex Consulting" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Flex Consulting Solutions Inc." />
      
      {/* Structured Data - Only on homepage */}
      {canonical === '/' && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
