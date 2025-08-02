import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS Integration
    emailjs.send(
      "service_ctpuc3t", // <-- Ersetze mit deinem Service ID
      "template_2ggxhgi", // <-- Ersetze mit deinem Template ID
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message
      },
      "4H9jvO3X2gzA483bC" // <-- Ersetze mit deinem Public Key
    )
    .then(() => {
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: ""
      });
    })
    .catch(() => {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail",
      content: "info@wir-testen.de",
      description: "Schreiben Sie uns jederzeit"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      content: "+49 (0) 123 456789",
      description: "Mo-Fr 9:00-18:00 Uhr"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Standort",
      content: "Deutschland",
      description: "Bundesweite Betreuung"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Antwortzeit",
      content: "< 24 Stunden",
      description: "Schnelle Rückmeldung garantiert"
    }
  ];

  const benefits = [
    "Kostenloses und unverbindliches Erstgespräch",
    "Individuelle Beratung für Ihr Projekt",
    "Transparente Kostenvoranschläge",
    "Flexible Terminvereinbarung",
    "Erfahrenes Team mit nachgewiesener Expertise"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Kontakt
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bereit für professionelle Softwaretests? Lassen Sie uns über Ihr Projekt sprechen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                  Kostenloses Erstgespräch vereinbaren
                </CardTitle>
                <p className="text-muted-foreground">
                  Erzählen Sie uns von Ihrem Projekt und wir entwickeln gemeinsam 
                  die optimale Teststrategie für Ihre Anforderungen.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ihre.email@beispiel.de"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+49 (0) 123 456789"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectType">Art des Projekts</Label>
                    <Input
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      placeholder="z.B. Web-App, Mobile App, API, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Projektbeschreibung *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Beschreiben Sie kurz Ihr Projekt und welche Art von Tests Sie benötigen..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button id="btn" type="submit" size="lg" className="w-full">
                    Nachricht senden
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Kontaktinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-primary font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-primary-light border-none">
              <CardHeader>
                <CardTitle>Was Sie erwartet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">
                  Sofortiger Kontakt gewünscht?
                </h3>
                <p className="mb-4 opacity-90">
                  Rufen Sie uns direkt an für eine erste Beratung
                </p>
                <Button 
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +49 (0) 123 456789
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;