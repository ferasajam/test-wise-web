import { useEffect } from "react";

export const SITE_NAME = "Quality1st";
export const SITE_URL = "https://quality-1st.de";

const DEFAULT_TITLE = "Quality1st | Webseiten, Apps, KI-Agenten und Softwaretests";
const DEFAULT_DESCRIPTION =
  "Quality1st entwickelt Webseiten, Apps und KI-Agenten und sorgt mit professionellen Softwaretests für stabile, sichere und performante digitale Produkte.";
const DEFAULT_KEYWORDS = [
  "Quality1st",
  "Webseiten erstellen",
  "App Entwicklung",
  "KI Agenten",
  "Softwaretests",
  "Testautomatisierung",
  "Penetrationstests",
  "Performance Tests",
  "Qualitätssicherung",
];

type StructuredData = Record<string, unknown>;

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
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

export const getOrganizationStructuredData = (): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: "info@quality-1st.de",
  telephone: "+49 170 5975430",
  areaServed: "DE",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corrensstr. 88",
    postalCode: "48149",
    addressLocality: "Münster",
    addressCountry: "DE",
  },
  sameAs: ["https://www.linkedin.com/company/quality1stde"],
  serviceType: [
    "Webentwicklung",
    "App-Entwicklung",
    "KI-Agenten",
    "Softwaretests",
    "Testautomatisierung",
    "Penetrationstests",
    "Performance Tests",
  ],
});

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  type = "website",
  noindex = false,
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    const robotsContent = noindex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

    document.documentElement.lang = "de";
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
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).content = "summary";
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).content = title;
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).content = description;

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
  }, [description, keywords, noindex, path, structuredData, title, type]);

  return null;
};

export default Seo;