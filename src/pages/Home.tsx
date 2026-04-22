import React, { useState, useEffect } from "react";
// CookieConsentBanner as section with multiple options
import Seo, {
  SITE_NAME,
  SITE_URL,
  getCanonicalUrl,
  getOrganizationStructuredData,
  getWebsiteStructuredData,
} from "@/components/Seo";
const CookieConsentBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setOpen(true);
  }, []);

  const choose = (choice: "all" | "necessary" | "none") => {
    localStorage.setItem("cookieConsent", choice);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <section aria-label="Cookie-Banner" className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-t border-muted pb-[env(safe-area-inset-bottom)]">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground flex-1 min-w-[240px]">
          Wir verwenden Cookies, um Ihr Erlebnis zu verbessern. Sie können auswählen, welche Cookies Sie zulassen möchten.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            className="bg-muted text-primary hover:bg-muted/80 whitespace-nowrap px-3 py-2 text-sm"
            onClick={() => choose("none")}
          >
            Alle ablehnen
          </Button>
          <Button
            className="bg-muted text-primary hover:bg-muted/80 whitespace-nowrap px-3 py-2 text-sm"
            onClick={() => choose("necessary")}
          >
            Nur notwendige Cookies
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap px-3 py-2 text-sm"
            onClick={() => choose("all")}
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Target, 
  Users, 
  CheckCircle, 
  Clock,
  Bug,
  Settings,
  Gauge,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import testingHero from "@/assets/testing-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sicherheit",
      description: "Höchste Systemsicherheit durch frühzeitige Erkennung kritischer Schwachstellen"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automatisierung", 
      description: "Zeiteinsparung und Effizienzsteigerung durch automatisierte Testabläufe"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Präzision",
      description: "Detaillierte Prüfungen für höchste Testgenauigkeit"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Performance",
      description: "Hohe Stabilität und Geschwindigkeit auch unter Spitzenlast"
    }
  ];

  const services = [
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Webseiten-Erstellung",
      description: "Moderne, performante Webseiten für Ihr Business"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Android & iOS Apps",
      description: "Mobile Apps für alle Plattformen – benutzerfreundlich und sicher"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "KI-Agenten & Automatisierung",
      description: "Individuelle KI-Lösungen und Automatisierung für Ihr Unternehmen"
    },
    {
      icon: <Bug className="h-8 w-8 text-primary" />,
      title: "Manuelle Tests",
      description: "Gründliche manuelle Testverfahren für optimale Qualitätssicherung"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Automatisierte Tests",
      description: "Effiziente Testautomatisierung mit modernsten Tools und Frameworks"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Penetrationstests",
      description: "Sicherheitstests nach OWASP Top 10 für maximalen Schutz"
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "Performance Tests",
      description: "Last- und Performancetests für optimale Systemleistung"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Beratung & Schulung",
      description: "Expertenwissen und Schulungen für Ihr Team"
    }
  ];

  const seoHighlights = [
    {
      title: "Webentwicklung mit SEO-Fokus",
      description:
        "Wir erstellen schnelle, responsive Webseiten mit klarer Struktur, starker Nutzerführung und technischer Basis für bessere Rankings und mehr Anfragen.",
      points: ["Responsive Webdesign", "Klare Landingpages", "Performance und Core Web Vitals"],
    },
    {
      title: "Apps und digitale Produkte",
      description:
        "Wir entwickeln Web-Apps und mobile Apps, die Prozesse vereinfachen, Teams entlasten und auf allen relevanten Geräten zuverlässig funktionieren.",
      points: ["Android und iOS", "Web-Apps für Unternehmen", "Saubere APIs und Tests"],
    },
    {
      title: "KI-Agenten und Automatisierung",
      description:
        "Wir bauen KI-Agenten, Chatbots und automatisierte Workflows, die Serviceprozesse beschleunigen und wiederkehrende Aufgaben effizient übernehmen.",
      points: ["Individuelle Automationen", "Chatbots und Assistenten", "Praxisnahe Integration"],
    },
  ];

  const faqs = [
    {
      question: "Für welche Unternehmen ist Quality1st geeignet?",
      answer:
        "Wir arbeiten für Start-ups, KMU und etablierte Unternehmen, die eine neue Website, eine App, KI-Automatisierung oder messbar bessere Softwarequalität benötigen.",
    },
    {
      question: "Unterstützt Quality1st auch Suchmaschinenoptimierung?",
      answer:
        "Ja. Wir verbinden Webentwicklung mit technischer und inhaltlicher SEO, damit Inhalte sauber strukturiert, mobil gut lesbar und für relevante Suchanfragen sichtbar sind.",
    },
    {
      question: "Welche Tests bietet Quality1st an?",
      answer:
        "Wir unterstützen mit manuellen Tests, Testautomatisierung, Penetrationstests sowie Last- und Performancetests für sichere, stabile und skalierbare digitale Produkte.",
    },
  ];

  return (
    <>
      <Seo
        title="Webentwicklung, Apps, KI-Agenten und Softwaretests | Quality1st"
        description="Quality1st entwickelt SEO-starke Webseiten, mobile Apps, KI-Agenten und professionelle Softwaretests für Unternehmen in Deutschland. Schnell, sicher und auf nachhaltige Sichtbarkeit ausgerichtet."
        path="/"
        keywords={[
          "Webentwicklung Deutschland",
          "SEO Webseiten erstellen lassen",
          "App Entwicklung Deutschland",
          "KI Agenten für Unternehmen",
          "Softwaretests Unternehmen",
          "Testautomatisierung Deutschland",
          "Penetrationstests Deutschland",
          "Performance Tests",
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />
      <div className="min-h-screen">
  <CookieConsentBanner />
      {/* Hero Section (Simplified) */}
      <section className="relative bg-white dark:bg-background py-12 sm:py-16 md:py-20 lg:py-32 border-b border-muted">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8 sm:space-y-10">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold leading-tight mb-4 text-primary animate-fadein"
                style={{ letterSpacing: '0.01em', lineHeight: '1.15' }}
              >
                Webentwicklung, Apps, KI-Agenten und Softwaretests aus Deutschland
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-muted-foreground animate-fadein-slow"
                style={{ letterSpacing: '0.01em', lineHeight: '1.3' }}
              >
                Wir entwickeln digitale Produkte mit klarem Mehrwert: schnelle Webseiten, nutzerfreundliche Apps, smarte KI-Automatisierung und professionelle Qualitätssicherung.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl animate-fadein-slow">
                Quality1st unterstützt Unternehmen bei Webentwicklung, App-Entwicklung, Testautomatisierung,
                Penetrationstests und Performance-Optimierung. So entstehen digitale Lösungen, die besser gefunden,
                leichter genutzt und langfristig stabil betrieben werden können.
              </p>
              <div className="space-y-2 sm:space-y-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-bold tracking-wide shadow hover:shadow-lg transition-all animate-fadein">
                  <Link to="/contact">Jetzt kostenloses Erstgespräch buchen</Link>
                </Button>
                <p className="text-sm sm:text-base text-muted-foreground animate-fadein-slow">
                  Unverbindliche Beratung · Schnelle Antwort · Individuelle Lösungen für Web, App, KI und Testing
                </p>
              </div>
            </div>
            <div className="relative animate-fadein-slow">
              <img 
                src={testingHero} 
                alt="Quality1st entwickelt Webseiten, Apps, KI-Agenten und professionelle Softwaretests für Unternehmen" 
                className="rounded-lg shadow w-full max-h-64 sm:max-h-80 md:max-h-none object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Digitale Lösungen, die Reichweite, Effizienz und Qualität verbinden
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Ob Unternehmenswebsite, mobile App, KI-Agent oder Teststrategie: Wir richten jedes Projekt an klaren
              Zielen aus, damit Ihre Inhalte sichtbar, Ihre Prozesse effizient und Ihre Systeme verlässlich werden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {seoHighlights.map((highlight) => (
              <Card key={highlight.title} className="border-0 shadow-md bg-white dark:bg-background">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-3 text-primary">{highlight.title}</h3>
                  <p className="text-muted-foreground mb-4">{highlight.description}</p>
                  <ul className="space-y-2">
                    {highlight.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Ihre Vorteile mit Quality1st
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionelle Dienstleistungen mit modernsten Methoden und jahrelanger Erfahrung
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                tabIndex={0}
                className="group relative overflow-hidden bg-white dark:bg-background border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:ring-2 hover:ring-primary focus:shadow-xl focus:scale-[1.03] focus:ring-2 focus:ring-primary text-center cursor-pointer outline-none"
                style={{ minHeight: 180 }}
              >
                <span className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/30 via-blue-400/20 to-purple-400/10 rounded-full blur-2xl opacity-60 pointer-events-none transition-all duration-300 group-hover:scale-110 group-focus:scale-110" />
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary via-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 group-focus:scale-110 transition-transform duration-300 animate-fadein">
                      {React.cloneElement(feature.icon, {
                        className: 'h-6 w-6 transition-colors duration-300 text-primary/80 group-hover:text-white group-focus:text-white',
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-blue-600 group-focus:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Webentwicklung, App-Entwicklung, KI-Automatisierung und Softwaretests aus einer Hand
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {services.map((service, index) => (
              <Link to="/services" key={index} className="block group">
                <Card
                  className="relative overflow-hidden bg-white dark:bg-background border-0 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.03] group-hover:ring-2 group-hover:ring-primary cursor-pointer"
                  style={{ minHeight: 260 }}
                >
                  <span className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 via-blue-400/20 to-purple-400/10 rounded-full blur-2xl opacity-60 pointer-events-none transition-all duration-300 group-hover:scale-110" />
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="mb-4 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 animate-fadein">
                        {React.cloneElement(service.icon, {
                          className: 'h-8 w-8 transition-colors duration-300 text-primary/80 group-hover:text-white',
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-base text-muted-foreground mb-2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground font-bold tracking-wide shadow hover:shadow-lg transition-all"
            >
              <Link to="/services">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Häufige Fragen zu Webentwicklung, KI und Softwaretests
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Diese Fragen stellen uns Unternehmen besonders oft, wenn sie eine neue Website, eine App,
              KI-Automatisierung oder professionelle Tests planen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-0 shadow-md bg-white dark:bg-background">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            Bereit für professionelle Beratung?
          </h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-8 opacity-90">
            Lassen Sie uns Ihre Software auf Herz und Nieren prüfen
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto bg-background text-primary hover:bg-background/90"
            >
              <Link to="/contact">Kostenloses Erstgespräch</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto bg-background text-primary hover:bg-background/90"
            >
              <Link to="/services">Leistungen entdecken</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
