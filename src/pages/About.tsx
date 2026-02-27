import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Leidenschaft",
      description: "Unsere Passion ist es, innovative digitale Lösungen zu schaffen – von modernen Webseiten bis zu smarten KI-Agenten."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Präzision & Qualität",
      description: "Klare Standards, saubere Umsetzung und verlässliche Ergebnisse – von der Konzeption bis zum stabilen Betrieb."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Technologie-Expertise",
      description: "Fundierte Erfahrung in Web, Mobile, KI und Testing – kombiniert mit pragmatischem Engineering und Best Practices."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Partnerschaft",
      description: "Wir arbeiten transparent und agil- eng mit Ihnen abgestimmt, damit Lösungen wirklich zu Ihrem Bedarf passen."
    }
  ];

  // const teamStats = [
  //   {
  //     number: "10+",
  //     label: "Jahre Erfahrung",
  //     icon: <Award className="h-6 w-6" />
  //   },
  //   {
  //     number: "500+",
  //     label: "Erfolgreiche Projekte",
  //     icon: <CheckCircle className="h-6 w-6" />
  //   },
  //   {
  //     number: "50+",
  //     label: "Zufriedene Kunden",
  //     icon: <Users className="h-6 w-6" />
  //   },
  //   {
  //     number: "99%",
  //     label: "Kundenzufriedenheit",
  //     icon: <Star className="h-6 w-6" />
  //   }
  // ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Über uns
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind ein erfahrenes Team für Qualitätssicherung, Webentwicklung, App-Entwicklung und KI-Lösungen. Unsere Leidenschaft: Digitale Innovation und nachhaltige Qualität für Ihr Unternehmen.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="bg-primary-light border-none">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <h2 className="text-3xl font-bold mb-6 text-primary text-center">
                  Unsere Mission
                </h2>
                <p
                  className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fadein text-center"
                  style={{
                    letterSpacing: '0.01em',
                    lineHeight: '1.3',
                    transition: 'color 0.3s',
                  }}
                >
                  Wir glauben, dass digitale Innovation und Qualität die Basis für nachhaltigen Unternehmenserfolg sind. Unser Ziel: Webseiten, Apps, KI-Agenten und Softwaretests, die begeistern – und Ihr Business spürbar voranbringen.
                </p>
                <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                  Mit modernen Technologien, individuellen Lösungen und viel Erfahrung begleiten wir Sie von der Idee bis zum erfolgreichen Produkt – und darüber hinaus.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei jedem Projekt und jeder Kundenbeziehung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                tabIndex={0}
                className="group relative overflow-hidden bg-white dark:bg-background border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:ring-2 hover:ring-primary focus:shadow-xl focus:scale-[1.03] focus:ring-2 focus:ring-primary text-center cursor-pointer outline-none"
                style={{ minHeight: 220 }}
              >
                <span className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 via-blue-400/20 to-purple-400/10 rounded-full blur-2xl opacity-60 pointer-events-none transition-all duration-300 group-hover:scale-110 group-focus:scale-110" />
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary via-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 group-focus:scale-110 transition-transform duration-300 animate-fadein">
                      {React.cloneElement(value.icon, {
                        className: 'h-8 w-8 transition-colors duration-300 text-primary/80 group-hover:text-white group-focus:text-white',
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-blue-600 group-focus:text-blue-600 transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-2">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Unser Ansatz
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Ganzheitliche Beratung</h3>
                    <p className="text-muted-foreground">
                      Wir begleiten Sie von der Idee bis zum fertigen Produkt – ob Webseite, App, KI-Agent oder Teststrategie.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Transparente Kommunikation</h3>
                    <p className="text-muted-foreground">
                      Sie erhalten verständliche Beratung, regelmäßige Updates und nachvollziehbare Ergebnisse.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Technologische Weiterentwicklung</h3>
                    <p className="text-muted-foreground">
                      Wir setzen auf moderne Technologien und bilden uns stetig weiter – für innovative, zukunftssichere Lösungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Qualität ist unser Versprechen
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  "Wir verstehen, dass hinter jeder Software Menschen stehen, 
                  die darauf vertrauen, dass alles einwandfrei funktioniert. 
                  Diese Verantwortung nehmen wir ernst."
                </p>
                <div className="text-center">
                  <p className="font-semibold">Das Team von</p>
                  <p className="text-primary font-bold">Quality1st</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Lernen Sie unser Team & unsere Services kennen
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Überzeugen Sie sich von unserer Expertise in Webentwicklung, App-Entwicklung, KI-Agenten und Qualitätssicherung!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto"
                >
                  <Link to="/contact" className="block px-4">
                    Kostenloses Gespräch vereinbaren
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;