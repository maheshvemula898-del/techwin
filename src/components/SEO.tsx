import { Helmet } from "react-helmet-async";
import { useData } from "@/context/DataContext";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const { content } = useData();

  // Branding configuration resolving with fallback to defaults
  const companyName = content?.branding?.companyName || "Techwen Systems Pvt Limited";
  const brandName = content?.branding?.brandName || "Techwen Systems";
  const domain = content?.branding?.domain || "techwensys.com";
  const rawTwitterHandle = (content?.branding?.twitterHandle || "").replace(/^@/, "").trim();
  const twitterHandle = /^[A-Za-z0-9_]{1,15}$/.test(rawTwitterHandle) ? rawTwitterHandle : null;
  const faviconUrl = content?.branding?.faviconUrl || "/techwen-favicon.png";
  const previewImageUrl = content?.branding?.previewImageUrl || "/hero-preview.png";

  const imageSource = ogImage || previewImageUrl;
  const resolvedOgImage = /^(https?:|data:)/.test(imageSource) ? imageSource : `https://${domain}${imageSource.startsWith("/") ? imageSource : `/${imageSource}`}`;
  const ogImageType = resolvedOgImage.startsWith("data:image/")
    ? resolvedOgImage.slice(5, resolvedOgImage.indexOf(";"))
    : resolvedOgImage.toLowerCase().endsWith(".webp") ? "image/webp"
      : resolvedOgImage.toLowerCase().match(/\.jpe?g(?:$|\?)/) ? "image/jpeg" : "image/png";

  // Replace default branding names in metadata dynamically to make it whitelabel
  const rawTitle = title || "";
  const rawDesc = description || "";
  const rawKeywords = keywords || "";

  const finalTitle = rawTitle
    .replace(/Techw(?:in|en) Systems Pvt Limited/gi, companyName)
    .replace(/Techwen Systems/gi, brandName);

  const finalDesc = rawDesc
    .replace(/Techw(?:in|en) Systems Pvt Limited/gi, companyName)
    .replace(/Techwen Systems/gi, brandName);

  const pageKeywords = rawKeywords
    .replace(/Techw(?:in|en) Systems Pvt Limited/gi, companyName)
    .replace(/Techwen Systems/gi, brandName);
  const domainKeywords = [domain, `www.${domain}`, `info@${domain}`, brandName, companyName];
  const finalKeywords = Array.from(
    new Set(
      `${pageKeywords}, ${domainKeywords.join(", ")}`
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    )
  ).join(", ");

  const fullTitle = finalTitle.includes(brandName) ? finalTitle : `${finalTitle} | ${companyName}`;

  // Ensure canonical URL is always absolute and reflects the active domain
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonicalUrl = canonical 
    ? canonical.replace(/techwensys\.com/gi, domain) 
    : `https://${domain}${currentPath}`;
  const ogUrl = canonicalUrl;
  const pageStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: finalTitle,
    description: finalDesc,
    url: canonicalUrl,
    isPartOf: { "@type": "WebSite", name: brandName, url: `https://${domain}` },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={companyName} />
      <meta name="pagename" content={finalTitle} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href={faviconUrl} />
      <link rel="apple-touch-icon" href={faviconUrl} />
      <link rel="shortcut icon" href={faviconUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:secure_url" content={resolvedOgImage} />
      <meta property="og:image:type" content={ogImageType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={brandName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:alt" content={`${finalTitle} - ${companyName}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={`${finalTitle} - ${companyName}`} />
      {twitterHandle && <meta name="twitter:site" content={`@${twitterHandle}`} />}
      {twitterHandle && <meta name="twitter:creator" content={`@${twitterHandle}`} />}
      
      {/* Additional SEO Meta Tags */}
      {finalKeywords && <meta name="subject" content={finalKeywords.split(", ").slice(0, 5).join(", ")} />}
      <meta name="classification" content="Business, Information Technology, Cloud, Cybersecurity, Software Services" />
      <meta name="category" content="Enterprise Technology Services, DevOps, Cybersecurity, Cloud, Software Engineering" />
      <meta name="topic" content={finalTitle} />
      <meta name="summary" content={finalDesc} />
      <meta name="abstract" content={finalDesc} />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(pageStructuredData)}
      </script>
    </Helmet>
  );
};
