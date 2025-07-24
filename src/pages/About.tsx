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

  const teamStats = [
    {
      number: "10+",
      label: "Jahre Erfahrung",
      icon: <Award className="h-6 w-6" />
    },
    {
      number: "500+",
      label: "Erfolgreiche Projekte",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      number: "50+",
      label: "Zufriedene Kunden",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "99%",
      label: "Kundenzufriedenheit",
      icon: <Star className="h-6 w-6" />
    }
  ];

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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary">
                    Unsere Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Wir glauben, dass qualitativ hochwertige Software das Fundament 
                    für erfolgreiche Unternehmen ist. Unser Ziel ist es, durch 
                    professionelle und umfassende Softwaretests sicherzustellen, 
                    dass Ihre Anwendungen fehlerfrei funktionieren und Ihre Nutzer 
                    begeistern.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Mit modernsten Testmethoden, individuellen Lösungsansätzen und 
                    jahrelanger Erfahrung sind wir Ihr zuverlässiger Partner für 
                    alle Aspekte der Qualitätssicherung.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {teamStats.map((stat, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="flex justify-center mb-2 text-primary">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
                  <p className="text-primary font-bold">QualityFirst</p>
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
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Link to="/contact">Kostenloses Kennenlern-Gespräch vereinbaren</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;