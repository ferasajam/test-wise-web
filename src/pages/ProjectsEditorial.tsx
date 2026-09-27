import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";

const projects = [
  {
    name: "SpendWise",
    type: "KI-gestützte Web-App",
    url: "https://spendwise.quality-1st.de/",
    description: "Digitale Anwendung zur Erfassung und Kategorisierung von Belegen sowie zur Übersicht von Budgets und Ausgaben.",
  },
  {
    name: "Quality1st Chat",
    type: "KI-Anwendung",
    url: "https://chat.quality-1st.de/",
    description: "Web-Anwendung, die den Zugang zu mehreren KI-Modellen in einer gemeinsamen Oberfläche bündelt.",
  },
  {
    name: "Diva Haarstudio",
    type: "Unternehmenswebsite",
    url: "https://diva-haarstudio.de/",
    description: "Website mit Informationen zu Marke, Leistungen und Kontakt für ein Haarstudio.",
  },
  {
    name: "Profischnitt",
    type: "Unternehmenswebsite",
    url: "https://profischnitt.de/",
    description: "Webauftritt zur Darstellung von Services und Kontaktmöglichkeiten eines Friseur- und Barber-Angebots.",
  },
] as const;

const ProjectsEditorial = () => (
  <>
    <Seo
      title="Projekte | Digitale Produkte & Websites | Quality1st"
      description="Ausgewählte digitale Produkte und Unternehmenswebsites von Quality1st – darunter Webanwendungen, KI-gestützte Produkte und Markenauftritte."
      path="/projects"
      keywords={["Quality1st Projekte", "Webentwicklung Projekte", "KI Web-App", "Unternehmenswebsite"]}
      structuredData={[
        getOrganizationStructuredData(),
        { "@context": "https://schema.org", "@type": "CollectionPage", name: "Projekte | Quality1st", url: getCanonicalUrl("/projects"), inLanguage: "de-DE", hasPart: projects.map((project) => ({ "@type": "CreativeWork", name: project.name, url: project.url, description: project.description })) },
      ]}
    />
    <div className="bg-[#f5f6f3] text-[#172522]">
      <section className="border-b border-[#d9ded9] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]"><Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link><span aria-hidden="true" className="px-2">/</span> Projekte</nav>
          <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Projekte / Auswahl</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#172522] sm:text-6xl">Digitale Arbeit für konkrete Aufgaben.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">Eine Auswahl öffentlich erreichbarer Produkte und Webauftritte. Detaillierte Projektverläufe und belastbare Ergebniskennzahlen liegen nicht für alle Arbeiten vor; wir ergänzen sie erst, wenn sie nachvollziehbar veröffentlicht werden können.</p>
        </div>
      </section>

      <section aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 id="portfolio-heading" className="sr-only">Ausgewählte Projekte</h2>
          <div className="border-y border-[#cfd7d1]">
            {projects.map((project, index) => (
              <article key={project.name} className="grid gap-3 border-b border-[#d9ded9] py-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
                <span className="text-xs font-semibold text-[#89958f]">0{index + 1}</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#78847e]">{project.type}</p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-[#1b2b26] sm:text-2xl">{project.name}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b6964]">{project.description}</p>
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                  Live ansehen <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9ded9] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 sm:py-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase text-[#3c645a]">Ihr Vorhaben</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#172522]">Was soll Ihre Software leisten?</h2><p className="mt-3 text-sm leading-6 text-[#5b6964]">Wir sprechen über Ziel, technische Ausgangslage und passende Umsetzung.</p></div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#173f36] px-5 text-sm font-semibold text-white hover:bg-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] focus-visible:ring-offset-2">Projekt besprechen <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  </>
);

export default ProjectsEditorial;