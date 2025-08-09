import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bug, 
  Settings, 
  Shield, 
  Gauge, 
  BookOpen,
  CheckCircle,
  Zap,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Bug className="h-12 w-12 text-primary" />,
      title: "Manuelle Tests",
      description: "Gründliche manuelle Testverfahren durch erfahrene Tester für maximale Qualitätssicherung.",
      features: [
        "Funktionale Tests",
        "Usability Testing",
        "Explorative Tests",
        "Regression Testing",
        "User Acceptance Tests"
      ],
      tools: ["Testfall-Management", "Bug-Tracking", "Screen Recording","TestRail", "Confluence", "Jira"],
      benefits: "Erkennung komplexer Fehler, die automatisierte Tests übersehen könnten"
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Automatisierte Tests",
      description: "Effiziente Testautomatisierung mit modernsten Tools für wiederkehrende und umfangreiche Tests.",
      features: [
        "UI/Frontend Tests",
        "API Testing", 
        "Integration Tests",
        "Continuous Testing",
        "Cross-Browser Testing",
        "Mobile Testing"
      ],
      tools: ["Selenium", "Playwright", "Postman", "Cypress", "Espresso", "XCUITest","Appium"],
      benefits: "Schnelle Ausführung, wiederholbare Tests, frühzeitige Fehlererkennung"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Penetrationstests",
      description: "Umfassende Sicherheitstests nach OWASP Top 10 Standards zum Schutz vor Cyberangriffen.",
      features: [
        "OWASP Top 10 Tests",
        "SQL Injection Tests",
        "XSS Vulnerability Tests",
        "Authentication Tests",
        "Authorization Tests"
      ],
      tools: ["OWASP ZAP", "Burp Suite", "Nmap", "Custom Scripts"],
      benefits: "Identifikation von Sicherheitslücken bevor Angreifer sie finden"
    },
    {
      icon: <Gauge className="h-12 w-12 text-primary" />,
      title: "Last- und Performancetests",
      description: "Optimierung der Systemleistung durch professionelle Last- und Performanceanalysen.",
      features: [
        "Load Testing",
        "Stress Testing",
        "Volume Testing",
        "Spike Testing",
        "Endurance Testing"
      ],
      tools: ["JMeter", "k6", "LoadRunner", "Gatling"],
      benefits: "Gewährleistung optimaler Performance unter verschiedenen Lastbedingungen"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Testberatung und Schulung",
      description: "Wissenstransfer und Schulungen für Ihr Team zur nachhaltigen Qualitätssicherung.",
      features: [
        "Test Strategy Beratung",
        "Tool-Evaluierung",
        "Team Schulungen",
        "Best Practices Workshop",
        "Prozess Optimierung"
      ],
      tools: ["Workshop-Materialien", "Hands-on Training", "Dokumentation"],
      benefits: "Aufbau interner Testkompetenzen und nachhaltiger Qualitätsprozesse"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Beratung",
      description: "Wir analysieren Ihre Anforderungen und entwickeln eine maßgeschneiderte Teststrategie."
    },
    {
      step: "02", 
      title: "Testplanung",
      description: "Erstellung eines detaillierten Testplans mit Zeitrahmen und Ressourcenplanung."
    },
    {
      step: "03",
      title: "Durchführung",
      description: "Professionelle Testdurchführung mit modernsten Tools und bewährten Methoden."
    },
    {
      step: "04",
      title: "Dokumentation",
      description: "Umfassende Berichte mit klaren Handlungsempfehlungen und Prioritäten."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Umfassende Testdienstleistungen für alle Phasen Ihres Softwareentwicklungsprozesses
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                tabIndex={0}
                className="relative overflow-hidden bg-white dark:bg-background border-0 shadow-md hover:shadow-xl focus:shadow-xl transition-all duration-300 hover:scale-[1.03] focus:scale-[1.03] hover:ring-2 focus:ring-2 hover:ring-primary focus:ring-primary cursor-pointer group"
                style={{ minHeight: 260 }}
              >
                <span className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 via-blue-400/20 to-purple-400/10 rounded-full blur-2xl opacity-60 pointer-events-none transition-all duration-300 group-hover:scale-110 group-focus:scale-110" />
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 group-focus:scale-110 transition-transform duration-300 animate-fadein">
                      {React.cloneElement(service.icon, {
                        className: 'h-10 w-10 transition-colors duration-300 text-primary/80 group-hover:text-white group-focus:text-white',
                      })}
                    </span>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Leistungsumfang
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Zap className="h-4 w-4 text-primary mr-2" />
                      Tools & Technologien
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-focus:bg-primary group-focus:text-primary-foreground group-focus:border-primary"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-start space-x-2">
                      <Target className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{service.benefits}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Unser Vorgehen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ein strukturierter Prozess für optimale Ergebnisse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-20">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Tools & Technologien
                </h2>
                <p className="text-lg text-muted-foreground">
                  Wir arbeiten mit branchenführenden Tools oder setzen gerne Ihre bevorzugten Tools ein
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Selenium", "Playwright", "Postman", "JMeter", "Confluence", "Cypress",
                  "OWASP ZAP", "Burp Suite", "Appium", "LoadRunner", "Jira", "TestRail"
                ].map((tool, index) => (
                  <Badge key={index} variant="outline" className="p-3 text-center justify-center">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Bereit für professionelle Tests?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Lassen Sie uns gemeinsam die perfekte Teststrategie für Ihr Projekt entwickeln
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90"
                >
                  <Link to="/contact">Beratungstermin vereinbaren</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background text-primary hover:bg-background/90"
                >
                  <Link to="/about">Mehr über uns erfahren</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;