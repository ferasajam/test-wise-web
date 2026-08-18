import {
  ArrowRight,
  Check,
  Code2,
  Compass,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: ShieldCheck,
    title: "Qualität als Haltung",
    description: "Wir prüfen nicht nur Ergebnisse. Wir schaffen technische Voraussetzungen, damit Qualität im Alltag verlässlich entsteht.",
  },
  {
    icon: Code2,
    title: "Technik mit Substanz",
    description: "Moderne Technologien sind für uns Mittel zum Zweck: sinnvoll gewählt, sauber integriert und langfristig wartbar.",
  },
  {
    icon: Users,
    title: "Partnerschaftlich arbeiten",
    description: "Sie erhalten nachvollziehbare Entscheidungen, ehrliche Einschätzungen und eine Zusammenarbeit auf Augenhöhe.",
  },
];

const workingStyle = [
  "Anforderungen zuerst verstehen, bevor Lösungen festgelegt werden.",
  "Komplexität sichtbar machen und nur dort einführen, wo sie echten Nutzen stiftet.",
  "Ergebnisse in kurzen, transparenten Schleifen mit Ihrem Team absichern.",
  "Qualität, Sicherheit und Betrieb von Beginn an mitdenken.",
];

const AboutRedesign = () => (
  <>
    <Seo
      title="Über Quality1st | Engineering mit Qualitätsanspruch"
      description="Quality1st verbindet Softwareentwicklung, Testing, Webentwicklung und KI-Automatisierung zu digitalen Lösungen mit klarer Qualität und verlässlichem Betrieb."
      path="/about"
      keywords={["Über Quality1st", "Softwarequalität", "Webentwicklung Team", "Testautomatisierung", "IT Beratung"]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Über Quality1st",
          url: getCanonicalUrl("/about"),
          inLanguage: "de-DE",
        },
      ]}
    />

    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,hsl(211_34%_8%),hsl(214_30%_12%),hsl(197_38%_13%))]" />
      <div className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.72fr)] lg:items-center lg:gap-16">
        <div className="reveal-up">
          <p className="eyebrow"><span className="h-1.5 w-1.5 bg-accent" /> Über Quality1st</p>
          <h1 className="display-heading mt-6 text-balance text-foreground">Engineering, das Verantwortung für das Ergebnis übernimmt.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Quality1st ist Ihr Partner für Webentwicklung, Apps, KI-Lösungen und professionelle Qualitätssicherung. Wir verbinden technisches Detailverständnis mit einem klaren Blick auf Ihr Produkt und Ihre Ziele.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground">
            {[
              "Digitale Produkte aus einer Hand",
              "Qualitätsorientiert von Anfang an",
              "Pragmatisch und transparent",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4 text-accent" />{item}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md border border-border bg-[hsl(var(--surface)/0.84)] p-5 shadow-[0_32px_70px_-38px_hsl(202_100%_56%/0.36)] backdrop-blur reveal-up" style={{ animationDelay: "100ms" }}>
          <div className="absolute inset-0 bg-[linear-gradient(hsl(202_90%_60%/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(202_90%_60%/0.1)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="relative">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-display text-sm font-semibold text-foreground">Quality system</span>
              <span className="flex items-center gap-2 text-xs font-semibold text-accent"><span className="h-1.5 w-1.5 bg-accent" /> ACTIVE</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Discover", Compass],
                ["Build", Code2],
                ["Assure", ShieldCheck],
              ].map(([label, Icon], index) => {
                const StepIcon = Icon as typeof Compass;
                return (
                  <div key={label as string} className="relative border border-border bg-background/50 p-3">
                    <span className="font-display text-xs font-bold text-primary">0{index + 1}</span>
                    <StepIcon aria-hidden="true" className="mt-5 h-5 w-5 text-foreground" strokeWidth={1.5} />
                    <p className="mt-3 text-xs font-semibold text-muted-foreground">{label as string}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 border border-primary/25 bg-primary/10 p-4">
              <div className="flex items-start gap-3">
                <Network aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Ein durchgängiger Blick auf Ihr Produkt</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">Von der Idee und Architektur bis zum stabilen Betrieb.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AnimatedSection>
      <section className="border-y border-border bg-[linear-gradient(135deg,hsl(var(--surface-raised)),hsl(var(--surface)))] py-[clamp(4.5rem,9vw,8rem)] text-foreground" aria-labelledby="mission-heading">
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Unsere Mission</p>
            <h2 id="mission-heading" className="section-heading text-balance text-foreground">Digitale Lösungen schaffen, die Menschen und Unternehmen wirklich weiterbringen.</h2>
          </div>
          <div className="border-l-2 border-[hsl(165_65%_34%)] pl-6 sm:pl-8">
            <p className="font-display text-xl font-medium leading-8 text-foreground sm:text-2xl sm:leading-9">
              Innovation ist nur dann wertvoll, wenn sie im Alltag zuverlässig funktioniert. Deshalb verbinden wir Ideen, Umsetzung und Qualitätsdenken konsequent miteinander.
            </p>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Mit individuellen Lösungen und moderner Technik begleiten wir Sie von der ersten Orientierung bis zur erfolgreichen Weiterentwicklung Ihres Produkts.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="section-space" aria-label="Arbeitsprinzipien von Quality1st">
        <div className="site-container">
          <SectionHeading
            eyebrow="Unser Qualitätsversprechen"
            title="Was unsere Zusammenarbeit prägt."
            description="Ein starkes Ergebnis entsteht, wenn Strategie, Engineering und Kommunikation dieselbe Richtung haben."
            className="mb-12"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title} className="relative border-t border-border pt-6">
                  <span className="font-display text-xs font-bold tracking-[0.1em] text-primary">0{index + 1}</span>
                  <Icon aria-hidden="true" className="mt-7 h-7 w-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="border-y border-border bg-[hsl(214_29%_10%)] py-[clamp(4.5rem,9vw,8rem)]" aria-labelledby="working-style-heading">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Unser Ansatz</p>
            <h2 id="working-style-heading" className="section-heading text-balance text-foreground">Klar denken. Sauber bauen. Gemeinsam vorankommen.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Wir arbeiten strukturiert, ohne den Blick für pragmatische Lösungen zu verlieren. So bleibt Ihr Projekt steuerbar und die technische Basis belastbar.
            </p>
          </div>
          <ol className="border-y border-border">
            {workingStyle.map((item, index) => (
              <li key={item} className="flex gap-5 border-b border-border py-5 last:border-b-0">
                <span className="font-display text-sm font-bold text-primary">0{index + 1}</span>
                <p className="text-sm leading-6 text-foreground">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </AnimatedSection>

    <section className="border-b border-border py-[clamp(4.5rem,8vw,7rem)]">
      <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow"><Sparkles aria-hidden="true" className="h-3.5 w-3.5" /> Ihr nächster Schritt</p>
          <h2 className="mt-5 section-heading text-balance text-foreground">Lernen wir Ihr Vorhaben kennen.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">Wir besprechen Ziele, technische Ausgangslage und einen sinnvollen Weg zu einer starken Lösung.</p>
        </div>
        <Button asChild size="lg" className="h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]">
          <Link to="/contact">Gespräch vereinbaren <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default AboutRedesign;