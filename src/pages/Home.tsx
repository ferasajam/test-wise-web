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
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "JUnit Tests",
      description: "Professionelle Unit-Tests für Java-Anwendungen mit JUnit Framework"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary-light py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Wir testen für Sie
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Zuverlässige Softwaretests – individuell, sicher und effizient
              </p>
              <div className="space-y-4">
                <Button size="lg" className="bg-tech-gradient shadow-blue hover:shadow-lg transition-all">
                  <Link to="/contact">Jetzt kostenloses Erstgespräch buchen</Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Unverbindliche Beratung · Schnelle Antwort · Individuelle Lösungen
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={testingHero} 
                alt="Software Testing Hero" 
                className="rounded-lg shadow-blue w-full"
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
              Warum Wir testen für Sie?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionelle Softwaretests mit modernsten Methoden und jahrelanger Erfahrung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
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
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
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