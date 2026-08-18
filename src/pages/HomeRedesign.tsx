import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Bug,
  Check,
  CheckCircle2,
  Code2,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  Lightbulb,
  Network,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import QualityDashboard from "@/components/QualityDashboard";
import SectionHeading from "@/components/SectionHeading";
import Seo, {
  getCanonicalUrl,
  getOrganizationStructuredData,
  getWebsiteStructuredData,
} from "@/components/Seo";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import testingHero from "@/assets/testing-hero.jpg";

const services = [
  {
    icon: Code2,
    index: "01",
    title: "Softwareentwicklung",
    description: "Digitale Produkte, APIs und Anwendungen, die mit Ihrem Unternehmen mitwachsen.",
  },
  {
    icon: Bug,
    index: "02",
    title: "Software Testing & QA",
    description: "Manuelle und automatisierte Tests für belastbare Releases, weniger Risiken und klare Reports.",
  },
  {
    icon: Globe2,
    index: "03",
    title: "Webentwicklung",
    description: "Schnelle, zugängliche Websites und Web-Apps mit klarer Nutzerführung und technischer SEO-Basis.",
  },
  {
    icon: Bot,
    index: "04",
    title: "KI-Automatisierung",
    description: "Sinnvolle KI-Agenten und Workflows, die wiederkehrende Prozesse wirklich erleichtern.",
  },
  {
    icon: Lightbulb,
    index: "05",
    title: "IT-Beratung",
    description: "Technische Entscheidungen, Architektur und Tooling pragmatisch auf Ihre Ziele ausgerichtet.",
  },
  {
    icon: Settings,
    index: "06",
    title: "Technische IT-Services",
    description: "Konfiguration, Integration, Performance und Support für einen verlässlichen Betrieb.",
  },
];

const qualityPillars = [
  {
    icon: ShieldCheck,
    title: "Qualität eingebaut",
    description: "Testing begleitet die Umsetzung von Anfang an, nicht erst kurz vor dem Release.",
  },
  {
    icon: Workflow,
    title: "Klare Abläufe",
    description: "Transparente Prioritäten, nachvollziehbare Ergebnisse und direkte Kommunikation.",
  },
  {
    icon: Gauge,
    title: "Nachhaltig betreibbar",
    description: "Wir denken Performance, Sicherheit und Wartbarkeit in jeder technischen Entscheidung mit.",
  },
];

const technologies = [
  "TypeScript",
  "React",
  "Node.js",
  "Playwright",
  "Cypress",
  "Selenium",
  "REST APIs",
  "GitHub Actions",
  "CI/CD",
  "Docker",
];

const process = [
  ["01", "Analyse", "Ziele, Risiken und Rahmenbedingungen präzise erfassen."],
  ["02", "Planung", "Lösung, Aufwand und Qualitätsstrategie gemeinsam schärfen."],
  ["03", "Entwicklung", "In kurzen, transparenten Schritten sauber umsetzen."],
  ["04", "Testing", "Funktionen, Sicherheit und Performance gezielt prüfen."],
  ["05", "Deployment", "Kontrolliert ausliefern und die Übergabe absichern."],
  ["06", "Support", "Weiterentwickeln, optimieren und verlässlich begleiten."],
] as const;

const projects = [
  {
    name: "SpendWise",
    type: "KI-gestützte Web-App",
    url: "https://spendwise.quality-1st.de/",
    description: "Belege erfassen, kategorisieren und Budgets nachvollziehbar auswerten.",
    stack: ["Web-App", "KI", "Reports"],
  },
  {
    name: "Quality1st Chat",
    type: "KI-Plattform",
    url: "https://chat.quality-1st.de/",
    description: "Mehrere führende KI-Modelle in einer klaren, zentralen Oberfläche.",
    stack: ["AI", "Web-App", "UX"],
  },
  {
    name: "Diva Haarstudio",
    type: "Marken-Website",
    url: "https://diva-haarstudio.de/",
    description: "Ein moderner Markenauftritt mit klaren Leistungen und mobilen Kontaktwegen.",
    stack: ["Website", "Brand", "Mobile"],
  },
] as const;

const faqs = [
  {
    question: "Für welche Unternehmen ist Quality1st geeignet?",
    answer:
      "Wir arbeiten für Start-ups, KMU und etablierte Unternehmen, die eine Website, App, KI-Automatisierung oder messbar bessere Softwarequalität benötigen.",
  },
  {
    question: "Welche Tests bietet Quality1st an?",
    answer:
      "Wir unterstützen mit manuellen Tests, Testautomatisierung, Penetrationstests sowie Last- und Performancetests für sichere, stabile und skalierbare digitale Produkte.",
  },
  {
    question: "Unterstützt Quality1st auch Suchmaschinenoptimierung?",
    answer:
      "Ja. Bei Websites verbinden wir klare Inhalte und Nutzerführung mit einer technischen Basis für Performance, mobile Lesbarkeit und Suchmaschinen.",
  },
];

const CookieConsentBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!localStorage.getItem("cookieConsent"));
  }, []);

  const choose = (choice: "all" | "necessary" | "none") => {
    localStorage.setItem("cookieConsent", choice);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-4xl border border-border bg-[hsl(var(--surface-raised)/0.97)] p-3 shadow-[0_18px_54px_-24px_hsl(211_48%_3%/0.85)] backdrop-blur-xl sm:p-4"
      aria-label="Cookie-Einstellungen"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
          Wir verwenden technisch notwendige Speicherungen. Weitere Optionen können Sie jederzeit über die
          Datenschutzerklärung nachvollziehen.
        </p>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            onClick={() => choose("none")}
            className="min-h-10 px-3 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="min-h-10 border border-border px-3 text-xs font-semibold text-foreground transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="min-h-10 bg-primary px-3 text-xs font-bold text-primary-foreground shadow-[0_4px_0_hsl(202_90%_32%)] transition-transform hover:translate-y-px hover:shadow-[0_3px_0_hsl(202_90%_32%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </aside>
  );
};

const HomeRedesign = () => (
  <>
    <Seo
      title="Quality1st | Softwareentwicklung, Testing & KI-Automatisierung"
      description="Quality1st entwickelt digitale Produkte, testet Software professionell und automatisiert Prozesse. Für stabile Releases, klare Nutzererlebnisse und technische Lösungen mit Substanz."
      path="/"
      keywords={[
        "Softwareentwicklung",
        "Software Testing",
        "Testautomatisierung",
        "Webentwicklung",
        "KI Agenten für Unternehmen",
        "Penetrationstests",
        "Qualitätssicherung Software",
      ]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          ...getWebsiteStructuredData(),
          potentialAction: {
            "@type": "CommunicateAction",
            name: "Kostenloses Erstgespräch anfragen",
            target: getCanonicalUrl("/contact"),
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ]}
    />

    <CookieConsentBanner />

    <section className="relative isolate overflow-hidden border-b border-border/75">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,hsl(211_34%_8%)_0%,hsl(214_30%_11%)_58%,hsl(197_43%_13%)_100%)]" />
      <div className="site-container section-space grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.9fr)] lg:gap-16">
        <div className="max-w-2xl reveal-up">
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 bg-accent" />
            Software & Quality Engineering
          </p>
          <h1 className="display-heading mt-6 text-balance text-foreground">
            Quality1st bringt digitale Produkte in <span className="text-primary">Bestform.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Entwicklung, Testing und intelligente Automatisierung für Software, die zuverlässig funktioniert,
            Menschen überzeugt und mit Ihren Zielen wächst.
          </p>
          <ul className="mt-7 grid gap-3 text-sm text-foreground sm:grid-cols-2">
            {[
              "Entwicklung und Qualität aus einer Hand",
              "Klare Kommunikation ohne Umwege",
              "Moderne Technologien mit Augenmaß",
              "Pragmatisch von der Idee bis zum Betrieb",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] transition-all hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)] active:translate-y-[4px] active:shadow-[0_2px_0_hsl(202_90%_32%)]"
            >
              <Link to="/contact">
                Erstgespräch anfragen
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-md border-border bg-transparent px-5 text-sm font-semibold text-foreground hover:border-primary/70 hover:bg-primary/10 hover:text-foreground"
            >
              <Link to="/services">Leistungen entdecken</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Unverbindlich. Persönlich. Technisch fundiert.</p>
        </div>

        <div className="relative mx-auto w-full max-w-xl [perspective:1200px] reveal-up" style={{ animationDelay: "120ms" }}>
          <div className="relative min-h-[430px] overflow-hidden border border-primary/20 bg-[hsl(var(--surface))] shadow-[0_38px_88px_-44px_hsl(202_100%_56%/0.42)] sm:min-h-[500px] sm:[transform:rotateY(-7deg)_rotateX(3deg)]">
            <figure className="absolute inset-0">
              <img
                src={testingHero}
                alt="Quality1st Team bei der Arbeit an Software und Tests"
                className="h-full w-full object-cover object-[65%_center] opacity-45"
                width="1536"
                height="1024"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(211_34%_8%/0.9),hsl(211_34%_8%/0.46),hsl(202_80%_24%/0.8))]" />
            </figure>
            <div className="absolute inset-0 bg-[linear-gradient(hsl(202_90%_60%/0.13)_1px,transparent_1px),linear-gradient(90deg,hsl(202_90%_60%/0.13)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="relative flex h-full min-h-[430px] flex-col justify-between p-5 sm:min-h-[500px] sm:p-7">
              <div className="flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-2 border border-border/80 bg-background/55 px-3 py-2 font-display font-semibold tracking-[0.08em] text-foreground backdrop-blur">
                  <Network aria-hidden="true" className="h-3.5 w-3.5 text-primary" /> SYSTEM MAP
                </span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="h-2 w-2 bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />
                  READY
                </span>
              </div>

              <div className="ml-auto w-[88%] border border-border/90 bg-[hsl(var(--surface-raised)/0.94)] p-4 shadow-[0_22px_48px_-30px_hsl(211_48%_3%/0.9)] backdrop-blur sm:w-[82%]">
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <span className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
                    <Layers3 aria-hidden="true" className="h-4 w-4 text-primary" /> Release control
                  </span>
                  <span className="text-xs text-muted-foreground">v2.4.0</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    ["Build pipeline", "passed", "bg-accent"],
                    ["API contract", "verified", "bg-primary"],
                    ["Security scan", "clear", "bg-accent"],
                  ].map(([label, state, color]) => (
                    <div key={label} className="flex items-center justify-between gap-3 text-xs">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="flex items-center gap-2 font-semibold text-foreground">
                        <span className={`h-1.5 w-1.5 ${color}`} />
                        {state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="border border-primary/30 bg-primary/10 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-muted-foreground">Quality signal</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-foreground">Reliable by design</p>
                </div>
                <div className="hidden h-20 w-20 border border-accent/30 bg-accent/10 p-3 sm:block">
                  <GitBranch aria-hidden="true" className="h-full w-full text-accent" strokeWidth={1.25} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 border border-border/90 bg-[hsl(var(--surface-raised)/0.95)] px-4 py-3 shadow-[0_20px_45px_-30px_hsl(211_48%_3%/0.92)] backdrop-blur sm:-left-9">
            <span className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent" />
              Qualität sichtbar machen
            </span>
          </div>
        </div>
      </div>
    </section>

    <AnimatedSection>
      <section className="section-space" aria-label="Leistungen von Quality1st">
        <div className="site-container">
          <SectionHeading
            eyebrow="Leistungen"
            title="Technik, die nicht nur gut aussieht, sondern zuverlässig liefert."
            description="Wir verbinden Produktentwicklung, Testing und technische Beratung zu Lösungen, die für Teams und Endnutzer verständlich, schnell und wartbar bleiben."
            className="mb-12"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.index} {...service} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Alle Leistungen im Detail
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="border-y border-border bg-[linear-gradient(135deg,hsl(var(--surface-raised)),hsl(var(--surface)))] py-[clamp(4.5rem,9vw,8rem)] text-foreground" aria-labelledby="why-heading">
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Warum Quality1st</p>
            <h2 id="why-heading" className="section-heading text-balance text-foreground">
              Verlässliche Ergebnisse brauchen mehr als gute Ideen.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Qualität ist kein letzter Projektabschnitt. Sie entsteht aus passender Architektur, klaren Abläufen,
              echter Testtiefe und der Bereitschaft, technische Details sauber zu Ende zu denken.
            </p>
            <Button asChild size="lg" className="mt-8 h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]">
              <Link to="/about">Mehr über unsere Arbeitsweise</Link>
            </Button>
          </div>
          <div className="grid divide-y divide-border border-y border-border">
            {qualityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="grid gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
                  <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="section-space" aria-label="Technologie-Stack">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <SectionHeading
            eyebrow="Technologie-Stack"
            title="Bewährte Werkzeuge. Passend zu Ihrem Projekt gewählt."
            description="Von modernen Frontends über APIs und CI/CD bis zu Testautomatisierung: Wir wählen Technik nach Nutzen, nicht nach Trend."
          />
          <div>
            <ul className="flex flex-wrap gap-2.5" aria-label="Technologien">
              {technologies.map((technology, index) => (
                <li key={technology}>
                  <span className="inline-flex min-h-11 items-center gap-2 border border-border bg-card px-3.5 text-sm font-semibold text-foreground transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-primary/65 hover:bg-primary/10">
                    <span className={`h-2 w-2 ${index % 3 === 0 ? "bg-accent" : "bg-primary"}`} />
                    {technology}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center gap-3 border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">
              <Network aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
              <span>Wir integrieren uns auch in vorhandene Architekturen und bevorzugte Toolchains.</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="relative overflow-hidden border-y border-border bg-[hsl(214_29%_10%)] py-[clamp(4.5rem,9vw,8rem)]" aria-labelledby="quality-heading">
        <div className="absolute inset-0 bg-[linear-gradient(hsl(202_90%_60%/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(202_90%_60%/0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="site-container relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,0.72fr)] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Qualität sichtbar machen</p>
            <h2 id="quality-heading" className="section-heading text-balance text-foreground">
              Gute Software ist messbar ruhiger im Betrieb.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Teststrategie, Automatisierung, Security und Performance geben Teams die Sicherheit, schneller und mit
              weniger Überraschungen auszuliefern.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-foreground sm:grid-cols-2">
              {[
                "Manuelle und explorative Tests",
                "E2E- und API-Testautomatisierung",
                "Security- und Penetrationstests",
                "Last- und Performance-Analysen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <QualityDashboard />
            <p className="mt-3 text-xs text-muted-foreground">Illustratives Beispiel eines kompakten Test-Reports.</p>
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="section-space" aria-label="Zusammenarbeit in sechs Schritten">
        <div className="site-container">
          <SectionHeading
            eyebrow="Zusammenarbeit"
            title="Ein Prozess, der Fortschritt sichtbar macht."
            description="Klare Phasen schaffen Tempo ohne hektische Übergaben. Sie wissen, woran wir arbeiten, warum es wichtig ist und was als Nächstes passiert."
            className="mb-12"
          />
          <ol className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-3 lg:border-l-0">
            {process.map(([number, title, description]) => (
              <li key={number} className="relative border-b border-border px-6 py-7 last:border-b-0 sm:odd:border-r sm:even:border-r-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
                <span className="absolute -left-1.5 top-8 h-3 w-3 bg-primary sm:hidden" />
                <p className="font-display text-xs font-bold tracking-[0.1em] text-primary">{number}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="border-y border-border bg-[linear-gradient(135deg,hsl(var(--surface)),hsl(var(--surface-raised)))] py-[clamp(4.5rem,9vw,8rem)] text-foreground" aria-labelledby="projects-heading">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Ausgewählte Projekte</p>
              <h2 id="projects-heading" className="section-heading text-balance text-foreground">
                Produkte und Auftritte mit einem klaren Zweck.
              </h2>
            </div>
            <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Alle Projekte <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[22rem] flex-col overflow-hidden border border-border bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_24px_52px_-34px_hsl(202_100%_56%/0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative min-h-40 overflow-hidden border border-primary/25 bg-[hsl(var(--surface-raised))] p-4">
                  <div className="absolute inset-0 bg-[linear-gradient(hsl(202_90%_60%/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(202_90%_60%/0.12)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="w-fit border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{project.type}</span>
                    <div className="border border-border bg-[hsl(var(--surface)/0.92)] p-3 backdrop-blur">
                      <p className="font-display text-lg font-semibold text-foreground">{project.name}</p>
                      <div className="mt-3 flex gap-1.5">
                        {[0, 1, 2, 3].map((bar) => (
                          <span key={bar} className={`h-1.5 ${bar === index ? "w-16 bg-accent" : "w-8 bg-primary/25"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="border border-border bg-background/35 px-2 py-1 text-xs font-semibold text-muted-foreground">{item}</span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-primary">
                    Projekt ansehen <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="section-space" aria-label="Häufige Fragen">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Die wichtigsten Fragen, klar beantwortet."
            description="Für ein konkretes Vorhaben klären wir Aufwand, Vorgehen und passende technische Optionen gern direkt im Erstgespräch."
          />
          <div>
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-border py-5 first:border-t">
                <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-foreground marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {faq.question}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-border text-primary transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-4 pr-9 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>

    <section className="relative overflow-hidden border-y border-primary/30 bg-[linear-gradient(120deg,hsl(214_38%_13%),hsl(202_65%_20%),hsl(165_48%_16%))] py-[clamp(4.5rem,8vw,7rem)]">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(202_100%_70%/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(202_100%_70%/0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="site-container relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            Nächster Schritt
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.06] text-foreground">
            Geben wir Ihrem nächsten Release ein solides Fundament.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Erzählen Sie uns, woran Sie arbeiten. Wir besprechen den passenden nächsten Schritt unverbindlich und auf Augenhöhe.
          </p>
        </div>
        <Button asChild size="lg" className="h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]">
          <Link to="/contact">
            Kontakt aufnehmen
            <Rocket aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default HomeRedesign;