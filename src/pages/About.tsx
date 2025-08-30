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
      description: "Wir brennen für Qualität und perfekte Software"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Präzision",
      description: "Jeder Test wird mit höchster Sorgfalt durchgeführt"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Expertise",
      description: "Jahrelange Erfahrung in allen Bereichen des Softwaretestings"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Teamarbeit",
      description: "Enge Zusammenarbeit mit unseren Kunden für optimale Ergebnisse"
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
            Ein erfahrenes Team mit Leidenschaft für Qualität und dem Anspruch, 
            jeden Auftrag mit größter Sorgfalt und Präzision zu bearbeiten.
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
                  Wir glauben, dass qualitativ hochwertige Software das Fundament für erfolgreiche Unternehmen ist. Unser Ziel ist es, durch professionelle und umfassende Softwaretests sicherzustellen, dass Ihre Anwendungen fehlerfrei funktionieren und Ihre Nutzer begeistern.
                </p>
                <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                  Mit modernsten Testmethoden, individuellen Lösungsansätzen und jahrelanger Erfahrung sind wir Ihr zuverlässiger Partner für alle Aspekte der Qualitätssicherung.
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
                    <h3 className="font-semibold mb-1">Individuelle Beratung</h3>
                    <p className="text-muted-foreground">
                      Jedes Projekt ist einzigartig. Wir entwickeln maßgeschneiderte 
                      Teststrategien für Ihre spezifischen Anforderungen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Transparente Kommunikation</h3>
                    <p className="text-muted-foreground">
                      Sie werden über jeden Schritt informiert und erhalten 
                      verständliche, ausführliche Testberichte.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Kontinuierliche Weiterbildung</h3>
                    <p className="text-muted-foreground">
                      Wir bleiben stets auf dem neuesten Stand der Technik und 
                      Best Practices im Softwaretesting.
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
                Lernen Sie uns kennen
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Überzeugen Sie sich selbst von unserer Expertise und Leidenschaft
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