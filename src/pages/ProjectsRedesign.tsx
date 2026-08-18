import { ArrowRight, ArrowUpRight, CheckCircle2, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "SpendWise",
    type: "KI-gestützte Web-App",
    url: "https://spendwise.quality-1st.de/",
    tagline: "Belege einfach erfassen. Finanzen klar im Blick.",
    description: "SpendWise verarbeitet Rechnungen und Belege mit KI, kategorisiert automatisch und erstellt aussagekräftige Analysen, Budgets und Berichte - auf Desktop und mobil.",
    highlights: ["KI-gestützte Beleg- & Rechnungsverarbeitung", "Automatische Kategorisierung", "Budgets, Reports und Analysen"],
    tags: ["AI", "Web-App", "Analytics"],
    accent: "border-primary/45",
  },
  {
    name: "Quality1st Chat",
    type: "KI-Plattform",
    url: "https://chat.quality-1st.de/",
    tagline: "Mehrere führende KI-Modelle in einer Oberfläche.",
    description: "Quality1st Chat vereint führende KI-Modelle in einer Plattform und ermöglicht einen schnellen, klaren Wechsel je nach Anwendungsfall.",
    highlights: ["Mehrere Modelle in einer Oberfläche", "Schneller Wechsel je nach Use-Case", "Ein zentraler Zugang für Teams"],
    tags: ["AI", "Platform", "UX"],
    accent: "border-accent/45",
  },
  {
    name: "Diva Haarstudio",
    type: "Marken-Website",
    url: "https://diva-haarstudio.de/",
    tagline: "Salon-Auftritt mit Leistungen und eigener Marke.",
    description: "Ein moderner Markenauftritt für ein Haarstudio mit klarer Darstellung der Leistungen, starker visueller Identität und optimierter mobiler Erfahrung.",
    highlights: ["Klares Design und Markenwirkung", "Leistungsübersicht mit Service-Fokus", "Optimiert für mobile Endgeräte"],
    tags: ["Website", "Brand", "Mobile"],
    accent: "border-primary/45",
  },
  {
    name: "Profischnitt",
    type: "Service-Website",
    url: "https://profischnitt.de/",
    tagline: "Ein klarer Auftritt für Friseur und Barber.",
    description: "Ein professioneller Webauftritt mit Fokus auf Services, Vertrauen sowie schnellen Kontakt- und Terminwegen für Kundinnen und Kunden.",
    highlights: ["Service- und Leistungsdarstellung", "Vertrauensaufbau durch klare Information", "Schnelle Kontakt- und Terminwege"],
    tags: ["Website", "Services", "Conversion"],
    accent: "border-accent/45",
  },
] as const;

const ProjectsRedesign = () => (
  <>
    <Seo
      title="Projekte | Digitale Produkte von Quality1st"
      description="Ausgewählte Projekte von Quality1st: KI-gestützte Web-Apps, Marken-Websites und digitale Produkte mit Fokus auf Performance, Nutzererlebnis und Qualität."
      path="/projects"
      keywords={["Webdesign Referenzen", "Web App Projekte", "KI Projekte", "Quality1st Projekte", "Website Referenzen"]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projekte | Quality1st",
          url: getCanonicalUrl("/projects"),
          inLanguage: "de-DE",
          hasPart: projects.map((project) => ({ "@type": "CreativeWork", name: project.name, url: project.url, description: project.description })),
        },
      ]}
    />

    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,hsl(211_34%_8%),hsl(214_30%_12%),hsl(197_38%_13%))]" />
      <div className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.7fr)] lg:items-end lg:gap-16">
        <div className="reveal-up">
          <p className="eyebrow"><span className="h-1.5 w-1.5 bg-accent" /> Ausgewählte Projekte</p>
          <h1 className="display-heading mt-6 text-balance text-foreground">Digitale Arbeit, die für einen echten Zweck gebaut wurde.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Von KI-gestützten Anwendungen bis zu starken Marken-Websites: Diese Projekte zeigen, wie klarer Fokus, passende Technik und gute Produktentscheidungen zusammenwirken.
          </p>
        </div>
        <div className="border border-border bg-[hsl(var(--surface)/0.82)] p-5 shadow-[0_30px_66px_-38px_hsl(202_100%_56%/0.3)] backdrop-blur reveal-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <span className="flex h-10 w-10 items-center justify-center border border-primary/25 bg-primary/10 text-primary"><Layers3 aria-hidden="true" className="h-5 w-5" /></span>
            <div><p className="font-display text-sm font-semibold text-foreground">Portfolio overview</p><p className="text-xs text-muted-foreground">Produkte, Plattformen, Markenauftritte</p></div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[["4", "Live-Projekte"], ["3", "Produktarten"], ["1", "Gemeinsamer Anspruch"], ["∞", "Nächste Ideen"]].map(([value, label]) => (
              <div key={label} className="border border-border bg-background/45 p-3"><p className="font-display text-2xl font-semibold text-primary">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <AnimatedSection>
      <section className="section-space" aria-label="Ausgewählte Quality1st Projekte">
        <div className="site-container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Unterschiedliche Branchen. Ein klarer Qualitätsanspruch."
            description="Die folgenden Links führen direkt zu den jeweiligen Live-Projekten. Projektbilder wurden bewusst nicht simuliert, damit die Darstellung bei den realen Produkten bleibt."
            className="mb-12"
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} in einem neuen Tab öffnen`} className="group block focus-visible:outline-none">
                <article className={`relative overflow-hidden border ${project.accent} bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_58px_-36px_hsl(202_100%_56%/0.34)] sm:p-6`}>
                  <div className="absolute inset-0 bg-[linear-gradient(hsl(202_90%_60%/0.07)_1px,transparent_1px),linear-gradient(90deg,hsl(202_90%_60%/0.07)_1px,transparent_1px)] bg-[size:28px_28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex min-h-48 flex-col justify-between border border-border bg-[hsl(var(--background)/0.42)] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <span className="border border-border bg-background/80 px-2.5 py-1 text-xs font-semibold text-muted-foreground">{project.type}</span>
                      <span className="font-display text-xs font-bold tracking-[0.1em] text-primary">0{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-semibold text-foreground">{project.name}</p>
                      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{project.tagline}</p>
                      <div className="mt-5 flex gap-1.5"><span className="h-1.5 w-16 bg-primary" /><span className="h-1.5 w-10 bg-border" /><span className="h-1.5 w-6 bg-accent" /></div>
                    </div>
                  </div>
                  <div className="relative pt-6">
                    <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                    <ul className="mt-5 grid gap-2">
                      {project.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-sm text-foreground"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{highlight}</li>)}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-border px-2 py-1 text-xs font-semibold text-muted-foreground">{tag}</span>)}</div>
                    <span className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary">Projekt öffnen <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>

    <section className="border-y border-border bg-[hsl(214_29%_10%)] py-[clamp(4.5rem,8vw,7rem)]">
      <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow"><Sparkles aria-hidden="true" className="h-3.5 w-3.5" /> Ihr Projekt</p>
          <h2 className="mt-5 section-heading text-balance text-foreground">Planen Sie etwas, das genauso klar funktionieren soll?</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">Wir unterstützen bei Produktideen, Neuentwicklungen und der gezielten Verbesserung bestehender Systeme.</p>
        </div>
        <Button asChild size="lg" className="h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]"><Link to="/contact">Projekt besprechen <ArrowRight aria-hidden="true" /></Link></Button>
      </div>
    </section>
  </>
);

export default ProjectsRedesign;