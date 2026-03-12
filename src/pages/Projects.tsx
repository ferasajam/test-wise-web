import React from "react";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  name: string;
  url: string;
  typeLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
};

const Projects = () => {
  const projects: Project[] = [
    {
      name: "SpendWise",
      url: "https://spendwise.quality-1st.de/",
      typeLabel: "Web-App",
      tagline: "Belege einfach erfassen. Finanzen klar im Blick.",
      description:
        "SpendWise verarbeitet Rechnungen und Belege mit KI, kategorisiert automatisch und erstellt aussagekräftige Analysen, Budgets und Berichte – auf Desktop und als mobile App.",
      highlights: [
        "KI-gestützte Beleg- & Rechnungsverarbeitung",
        "Automatische Kategorisierung und Auswertungen",
        "Budgets, Reports und Analysen für klare Entscheidungen",
      ],
    },
    {
      name: "Quality1st Chat (Quality1stGPT)",
      url: "https://chat.quality-1st.de/",
      typeLabel: "Web-App",
      tagline: "Warum mehrere KI-Abos bezahlen, wenn eines reicht?",
      description:
        "Quality1stGPT vereint GPT-5.2, Gemini Pro 3, Grok 4.1 und DeepSeek-V3.2 in einer Plattform – ab nur 4,99 € pro Monat.",
      highlights: [
        "Mehrere Top-Modelle in einer Oberfläche",
        "Schneller Wechsel je nach Use-Case",
        "Ein Abo statt vieler Einzellösungen",
      ],
    },
    {
      name: "Diva Haarstudio",
      url: "https://diva-haarstudio.de/",
      typeLabel: "Website",
      tagline: "Salon-Auftritt mit Leistungen & Marke.",
      description:
        "Moderne Salon-Website mit klarer Darstellung von Leistungen, Brand-Auftritt und optionalen Termin-/Service-Infos.",
      highlights: [
        "Klares Design und starke Markenwirkung",
        "Leistungsübersicht inkl. Infos zu Services",
        "Optimiert für mobile Endgeräte",
      ],
    },
    {
      name: "Profischnitt",
      url: "https://profischnitt.de/",
      typeLabel: "Website",
      tagline: "Friseur/Barber-Auftritt mit Service-Fokus.",
      description:
        "Professioneller Webauftritt für Friseur/Barber – mit Fokus auf Services, Vertrauen und optionalen Termin-/Service-Infos.",
      highlights: [
        "Service- und Leistungsdarstellung",
        "Vertrauensaufbau durch klaren Auftritt",
        "Schnelle Kontakt- und Terminwege",
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Projekte | Quality1st"
        description="Ausgewählte Projekte von Quality1st: Web-Apps, Marken-Websites und digitale Produkte mit Fokus auf Performance, Nutzererlebnis und Qualität."
        path="/projects"
        keywords={[
          "Webdesign Referenzen",
          "App Projekte",
          "KI Projekte",
          "Web App Referenzen",
          "Quality1st Projekte",
        ]}
        structuredData={[
          getOrganizationStructuredData(),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projekte | Quality1st",
            url: getCanonicalUrl("/projects"),
            inLanguage: "de-DE",
            hasPart: projects.map((project) => ({
              "@type": "CreativeWork",
              name: project.name,
              url: project.url,
              description: project.description,
            })),
          },
        ]}
      />
      <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Unsere Projekte</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ein Überblick über ausgewählte Projekte von Quality1st – von KI-gestützten Web-Apps bis zu modernen
            Marken-Websites.
          </p>
        </div>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} in neuem Tab öffnen`}
                className="group block focus:outline-none"
              >
                <Card className="relative overflow-hidden bg-white dark:bg-background border-0 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-primary group-focus:ring-2 group-focus:ring-primary">
                  <span className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 via-blue-400/20 to-purple-400/10 rounded-full blur-2xl opacity-60 pointer-events-none transition-all duration-300 group-hover:scale-110 group-focus:scale-110" />

                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <CardTitle className="text-2xl text-primary group-hover:text-blue-600 transition-colors duration-200">
                            {project.name}
                          </CardTitle>
                          <Badge variant="secondary">{project.typeLabel}</Badge>
                        </div>
                        <p className="text-muted-foreground">{project.tagline}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <p className="text-muted-foreground">{project.description}</p>

                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-3">Highlights</h3>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-muted text-primary w-full transition-colors group-hover:bg-muted/80 group-focus:bg-muted/80">
                        Projekt öffnen
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Interesse an einem ähnlichen Projekt?</h2>
              <p className="text-xl mb-6 opacity-90">
                Wir entwickeln Web-Apps, Websites, mobile Apps und KI-Lösungen – inkl. professioneller Qualitätssicherung.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Link to="/contact">Kostenloses Erstgespräch</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </>
  );
};

export default Projects;
