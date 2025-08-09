import React from "react";
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
      description: "Penetrationstests nach OWASP Top 10 Standards"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automatisierung", 
      description: "Moderne Tools wie Selenium, Playwright und Postman"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Präzision",
      description: "Manuelle Tests für maximale Genauigkeit"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Performance",
      description: "Last- und Performancetests mit JMeter und k6"
    }
  ];

  const services = [
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

  return (
    <div className="min-h-screen">
      {/* Hero Section (Simplified) */}
      <section className="relative bg-white dark:bg-background py-20 lg:py-32 border-b border-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <h1
                className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4 text-primary animate-fadein"
                style={{ letterSpacing: '0.01em', lineHeight: '1.1' }}
              >
                Wir testen für Sie
              </h1>
              <p
                className="text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground animate-fadein-slow"
                style={{ letterSpacing: '0.01em', lineHeight: '1.3' }}
              >
                Zuverlässige Qualitätssicherung – individuell, sicher und effizient
              </p>
              <div className="space-y-4">
                <Button size="lg" className="bg-primary text-primary-foreground font-bold tracking-wide shadow hover:shadow-lg transition-all animate-fadein">
                  <Link to="/contact">Jetzt kostenloses Erstgespräch buchen</Link>
                </Button>
                <p className="text-base text-muted-foreground animate-fadein-slow">
                  Unverbindliche Beratung · Schnelle Antwort · Individuelle Lösungen
                </p>
              </div>
            </div>
            <div className="relative animate-fadein-slow">
              <img 
                src={testingHero} 
                alt="Software Testing Hero" 
                className="rounded-lg shadow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ihre Vorteile mit Quality1st
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionelle Softwaretests mit modernsten Methoden und jahrelanger Erfahrung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Umfassende Testdienstleistungen für alle Anforderungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            <Button variant="outline" size="lg">
              <Link to="/services">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bereit für professionelle Softwaretests?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie uns Ihre Software auf Herz und Nieren prüfen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link to="/contact">Kostenloses Erstgespräch</Link>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link to="/services">Leistungen entdecken</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
