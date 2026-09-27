import { useState, type ChangeEvent, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const contactTestSelectors = {
  name: 'input[name="name"]',
  email: 'input[name="email"]',
  company: 'input[name="company"]',
  phone: 'input[name="phone"]',
  projectType: 'input[name="projectType"]',
  message: 'textarea[name="message"]',
};

const initialFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  message: "",
};

const fieldClassName = "mt-2 h-12 rounded-none border-border bg-background/55 px-3.5 text-foreground placeholder:text-muted-foreground/75 focus-visible:border-primary focus-visible:ring-primary/30";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((currentData) => ({ ...currentData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!captchaValue) {
      toast({ title: "Bitte bestätigen Sie das reCAPTCHA.", variant: "destructive" });
      return;
    }

    setSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_ctpuc3t",
        "template_2ggxhgi",
        formData,
        "4H9jvO3X2gzA483bC",
      );
      setSuccess(true);
      setFormData(initialFormData);
      setCaptchaValue(null);
    } catch {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate={false}>
      {success && (
        <div className="flex gap-3 border border-accent/35 bg-accent/10 p-4 text-sm leading-6 text-foreground" role="status" aria-live="polite">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p><strong className="font-display font-semibold">Nachricht erfolgreich gesendet.</strong><br />Vielen Dank für Ihre Anfrage. Wir melden uns persönlich bei Ihnen.</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-sm font-semibold text-foreground">Name <span className="text-primary">*</span></Label>
          <Input id="name" name="name" autoComplete="name" value={formData.name} onChange={handleInputChange} placeholder="Ihr vollständiger Name" required className={fieldClassName} />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-semibold text-foreground">E-Mail <span className="text-primary">*</span></Label>
          <Input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleInputChange} placeholder="ihre.email@beispiel.de" required className={fieldClassName} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="company" className="text-sm font-semibold text-foreground">Unternehmen / Organisation (optional)</Label>
          <Input id="company" name="company" autoComplete="organization" value={formData.company} onChange={handleInputChange} placeholder="Falls zutreffend" className={fieldClassName} />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Telefon</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleInputChange} placeholder="+49 (0) ..." className={fieldClassName} />
        </div>
      </div>

      <div>
        <Label htmlFor="projectType" className="text-sm font-semibold text-foreground">Worum geht es?</Label>
        <Input id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} placeholder="z. B. Website, Web-App, Testing oder Automatisierung" className={fieldClassName} />
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-semibold text-foreground">Projektbeschreibung <span className="text-primary">*</span></Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Beschreiben Sie kurz Ihr Vorhaben, den aktuellen Stand und Ihre Ziele." rows={6} required className="mt-2 min-h-36 rounded-none border-border bg-background/55 px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/75 focus-visible:border-primary focus-visible:ring-primary/30 md:text-sm" />
      </div>

      <div className="overflow-x-auto border border-border bg-background/35 p-3">
        <ReCAPTCHA sitekey="6LdEFp8rAAAAAA7AwP0ODoX7GWg3Mm2NJOVVfuA_" onChange={setCaptchaValue} theme="dark" />
      </div>

      <Button type="submit" size="lg" disabled={sending} className="h-12 w-full rounded-md bg-primary text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)] disabled:translate-y-0 disabled:shadow-none">
        {sending ? "Nachricht wird gesendet..." : <><Send aria-hidden="true" /> Nachricht senden <ArrowRight aria-hidden="true" /></>}
      </Button>

      <p className="text-center text-xs leading-5 text-muted-foreground">
        Mit dem Absenden stimmen Sie unserer <Link to="/datenschutz" className="font-semibold text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Datenschutzerklärung</Link> zu.
      </p>
    </form>
  );
};

export default ContactForm;