import Seo, { getCanonicalUrl } from "@/components/Seo";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Seite nicht gefunden | Quality1st"
        description="Die angeforderte Seite wurde nicht gefunden. Nutzen Sie die Navigation, um zu den Inhalten von Quality1st zurückzukehren."
        path={location.pathname}
        noindex
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Seite nicht gefunden | Quality1st",
          url: getCanonicalUrl(location.pathname),
          inLanguage: "de-DE",
        }}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Diese Seite wurde nicht gefunden.</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Zur Startseite
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
