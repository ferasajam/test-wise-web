import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";

const contactDetails = [
  { icon: Mail, label: "E-Mail", value: "info@quality-1st.de", href: "mailto:info@quality-1st.de", note: "Schreiben Sie uns jederzeit" },
  { icon: Phone, label: "Telefon", value: "+49 (0) 170 5975430", href: "tel:+491705975430", note: "Mo-Fr, 9:00 bis 18:00 Uhr" },
  { icon: MapPin, label: "Standort", value: "Deutschland", href: undefined, note: "Bundesweite Betreuung" },
  { icon: Clock, label: "Antwortzeit", value: "< 24 Stunden", href: undefined, note: "Schnelle persönliche Rückmeldung" },
];

const ContactRedesign = () => (
  <>
    <Seo
      title="Kontakt | Quality1st"
      description="Kontaktieren Sie Quality1st für Webentwicklung, Apps, KI-Automatisierung und professionelle Softwaretests. Kostenlose Erstberatung und eine persönliche Rückmeldung innerhalb von 24 Stunden."
      path="/contact"
      keywords={["Quality1st Kontakt", "Kostenloses Erstgespräch", "Softwaretests Anfrage", "Webentwicklung Kontakt", "KI Beratung"]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt | Quality1st",
          url: getCanonicalUrl("/contact"),
          inLanguage: "de-DE",
          mainEntity: { "@type": "Organization", name: "Quality1st", email: "info@quality-1st.de", telephone: "+49 170 5975430" },
        },
      ]}
    />

    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,hsl(211_34%_8%),hsl(214_30%_12%),hsl(197_38%_13%))]" />
      <div className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.64fr)] lg:items-end lg:gap-16">
        <div className="reveal-up">
          <p className="eyebrow"><span className="h-1.5 w-1.5 bg-accent" /> Kontakt</p>
          <h1 className="display-heading mt-6 text-balance text-foreground">Ihr nächster Schritt zu besserer Software beginnt mit einem guten Gespräch.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">Erzählen Sie uns von Ihrem Vorhaben. Wir hören zu, ordnen die Ausgangslage ein und entwickeln gemeinsam einen klaren nächsten Schritt.</p>
          <Link to="/services" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Leistungen ansehen <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
        <div className="border border-border bg-[hsl(var(--surface)/0.85)] p-5 shadow-[0_30px_66px_-38px_hsl(202_100%_56%/0.3)] backdrop-blur reveal-up" style={{ animationDelay: "100ms" }}>
          <MessageCircle aria-hidden="true" className="h-7 w-7 text-primary" strokeWidth={1.5} />
          <p className="mt-6 font-display text-xl font-semibold text-foreground">Unverbindlich und konkret.</p>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            {["Kostenloses Erstgespräch", "Individuelle technische Einschätzung", "Transparente nächste Schritte"].map((item) => <li key={item} className="flex gap-2"><ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />{item}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <AnimatedSection>
      <section className="section-space" aria-label="Kontaktformular und Kontaktinformationen">
        <div className="site-container grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] xl:gap-14">
          <div className="border border-border bg-card p-5 sm:p-8">
            <div className="border-b border-border pb-6">
              <p className="eyebrow">Projektanfrage</p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">Erzählen Sie uns, woran Sie arbeiten.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">Je mehr Kontext Sie uns geben, desto besser können wir das Gespräch vorbereiten. Pflichtfelder sind markiert.</p>
            </div>
            <div className="pt-7"><ContactForm /></div>
          </div>

          <aside className="grid content-start gap-4" aria-label="Kontaktinformationen">
            <div className="border border-border bg-[hsl(var(--surface)/0.65)] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">Business Card</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="rounded-xl border border-border bg-white p-2 shadow-sm">
                  <img
                    src="/quality1st-qr.png"
                    alt="QR-Code zur Quality1st Website"
                    className="h-[110px] w-[110px] rounded-md"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Quality1st</p>
                  <p className="mt-1 text-sm text-muted-foreground">Softwareentwicklung · Testing · KI</p>
                  <a href="https://quality-1st.de/" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-bold text-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    quality-1st.de
                  </a>
                </div>
              </div>
            </div>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = <><p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">{detail.label}</p><p className="mt-2 font-display text-base font-semibold text-foreground">{detail.value}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail.note}</p></>;
              return detail.href ? (
                <a key={detail.label} href={detail.href} className="group flex min-h-28 gap-4 border border-border bg-[hsl(var(--surface)/0.65)] p-5 transition-[border-color,background-color] hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.6} /><div>{content}</div>
                </a>
              ) : (
                <div key={detail.label} className="flex min-h-28 gap-4 border border-border bg-[hsl(var(--surface)/0.65)] p-5"><Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.6} /><div>{content}</div></div>
              );
            })}
            <div className="border-l-2 border-accent bg-accent/5 p-5">
              <p className="font-display text-sm font-semibold text-foreground">Lieber direkt sprechen?</p>
              <a href="tel:+491705975430" className="mt-2 inline-flex text-sm font-bold text-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">+49 (0) 170 5975430</a>
            </div>
          </aside>
        </div>
      </section>
    </AnimatedSection>
  </>
);

export default ContactRedesign;