import { useEffect } from "react";

export const SITE_NAME = "Quality1st";
export const SITE_URL = "https://quality-1st.de";
export const SITE_SOCIAL_IMAGE = `${SITE_URL}/quality1st-social.jpg`;

const DEFAULT_TITLE = "Quality1st | Softwareentwicklung, Testing & KI-Automatisierung";
const DEFAULT_DESCRIPTION =
  "Quality1st entwickelt digitale Produkte, testet Software professionell und automatisiert Prozesse für stabile Releases und technische Lösungen mit Substanz.";
const DEFAULT_KEYWORDS = [
  "Quality1st",
  "Webentwicklung",
  "KI Agenten",
  "Softwaretests",
  "Testautomatisierung",
  "Penetrationstests",
  "Qualitätssicherung",
];

const CONTACT_EMAIL = "info@quality-1st.de";
const CONTACT_PHONE = "+49 170 5975430";

type StructuredData = Record<string, unknown>;

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  structuredData?: StructuredData | StructuredData[];
};

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
};

const ensureLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  return element;
};

export const getCanonicalUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const getAbsoluteAssetUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const getOrganizationStructuredData = (): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Quality1st unterstützt Unternehmen jeder Größe, Selbstständige, Start-ups und Privatkunden in Deutschland bei Softwareentwicklung, Quality Engineering & Testautomatisierung, digitalen Lösungen und IT-Automatisierung.",
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  areaServed: { "@type": "Country", name: "Deutschland" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    availableLanguage: ["de", "en"],
  },
  sameAs: ["https://www.linkedin.com/company/quality1stde"],
  knowsAbout: [
    "Softwareentwicklung",
    "Software Testing",
    "Quality Engineering & Testautomatisierung",
    "IT-Automatisierung",
    "Webentwicklung",
    "API-Entwicklung",
    "DevOps",
    "IT-Security",
  ],
});

export const getWebsiteStructuredData = (): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "quality-1st.de",
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
});

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  image = SITE_SOCIAL_IMAGE,
  imageAlt = `${SITE_NAME} Vorschau`,
  type = "website",
  noindex = false,
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    const imageUrl = image.startsWith("http") ? image : getAbsoluteAssetUrl(image);
    const robotsContent = noindex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

    document.documentElement.lang = "de-DE";
    document.title = title;

    ensureMeta('meta[name="description"]', { name: "description" }).content = description;
    ensureMeta('meta[name="keywords"]', { name: "keywords" }).content = keywords.join(", ");
    ensureMeta('meta[name="author"]', { name: "author" }).content = SITE_NAME;
    ensureMeta('meta[name="application-name"]', { name: "application-name" }).content = SITE_NAME;
    ensureMeta('meta[name="robots"]', { name: "robots" }).content = robotsContent;
    ensureMeta('meta[property="og:title"]', { property: "og:title" }).content = title;
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).content = description;
    ensureMeta('meta[property="og:type"]', { property: "og:type" }).content = type;
    ensureMeta('meta[property="og:url"]', { property: "og:url" }).content = canonicalUrl;
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).content = SITE_NAME;
    ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).content = "de_DE";
    ensureMeta('meta[property="og:image"]', { property: "og:image" }).content = imageUrl;
    ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }).content = imageAlt;
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).content = "summary_large_image";
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).content = title;
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).content = description;
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image" }).content = imageUrl;
    ensureMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }).content = imageAlt;

    ensureLink('link[rel="canonical"]', { rel: "canonical" }).href = canonicalUrl;
    const alternate = ensureLink('link[rel="alternate"][hreflang="de-DE"]', {
      rel: "alternate",
      hreflang: "de-DE",
    });
    alternate.href = canonicalUrl;

    document.head
      .querySelectorAll('script[data-managed-seo="true"]')
      .forEach((element) => element.remove());

    if (structuredData) {
      const entries = Array.isArray(structuredData) ? structuredData : [structuredData];

      entries.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.managedSeo = "true";
        script.textContent = JSON.stringify(entry);
        document.head.appendChild(script);
      });
    }
  }, [description, image, imageAlt, keywords, noindex, path, structuredData, title, type]);

  return null;
};

export default Seo;