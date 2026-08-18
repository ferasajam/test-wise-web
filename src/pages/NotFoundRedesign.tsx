import { ArrowRight, Compass } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Seo, { getCanonicalUrl } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const NotFoundRedesign = () => {
  const location = useLocation();

  return (
    <>
      <Seo
        title="Seite nicht gefunden | Quality1st"
        description="Die angeforderte Seite wurde nicht gefunden. Nutzen Sie die Navigation, um zu Quality1st zurückzukehren."
        path={location.pathname}
        noindex
        structuredData={{ "@context": "https://schema.org", "@type": "WebPage", name: "Seite nicht gefunden | Quality1st", url: getCanonicalUrl(location.pathname), inLanguage: "de-DE" }}
      />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,hsl(211_34%_8%),hsl(214_30%_12%),hsl(197_38%_13%))]" />
        <div className="site-container relative text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center border border-primary/35 bg-primary/10 text-primary"><Compass aria-hidden="true" className="h-7 w-7" /></span>
          <p className="mt-7 font-display text-sm font-bold tracking-[0.12em] text-primary">ERROR 404</p>
          <h1 className="mt-4 display-heading text-foreground">Diese Route führt ins Leere.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Die angeforderte Seite existiert nicht oder wurde verschoben. Zurück auf der Startseite finden Sie alle relevanten Wege.</p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]"><Link to="/">Zur Startseite <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </>
  );
};

export default NotFoundRedesign;