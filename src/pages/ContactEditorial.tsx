import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";

const ContactEditorial = () => (
  <>
    <Seo
      title="Kontakt | Quality1st IT-Dienstleistungen Münster"
      description="Besprechen Sie Ihr Vorhaben mit Quality1st in Münster: Softwareentwicklung, Testautomatisierung, digitale Lösungen und IT-Automatisierung für Unternehmen."
      path="/contact"
      keywords={["IT Beratung Münster", "Softwareentwicklung Münster Kontakt", "Quality1st Kontakt", "Testautomatisierung Anfrage"]}
      structuredData={[
        getOrganizationStructuredData(),
        { "@context": "https://schema.org", "@type": "ContactPage", name: "Kontakt | Quality1st", url: getCanonicalUrl("/contact"), inLanguage: "de-DE", mainEntity: { "@type": "Organization", name: "Quality1st", email: "info@quality-1st.de", telephone: "+49 170 5975430" } },
      ]}
    />
    <div className="bg-[#f5f6f3] text-[#172522]">
      <section className="border-b border-[#d9ded9] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]"><Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link><span aria-hidden="true" className="px-2">/</span> Kontakt</nav>
          <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Kontakt / Quality1st Münster</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#172522] sm:text-6xl">Woran arbeiten Sie gerade?</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">Ein erster Austausch hilft, Ziel, technischen Rahmen und sinnvolle nächste Schritte einzuordnen. Schreiben Sie uns ein paar Sätze zu Ihrem Vorhaben.</p>
        </div>
      </section>

      <section aria-label="Projektanfrage und Kontaktinformationen">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:gap-16">
          <div className="border border-[#31433c] bg-[#1d2d28] p-5 text-white sm:p-8">
            <p className="text-xs font-bold uppercase text-[#c1d6cb]">Projektanfrage</p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Erzählen Sie uns, was Sie vorhaben.</h2>
            <p className="mt-3 text-sm leading-6 text-[#d6e1dc]">Name, E-Mail-Adresse und eine kurze Projektbeschreibung genügen für den Anfang. Unternehmen, Anliegen und Telefon sind optional.</p>
            <div className="mt-7"><ContactForm /></div>
          </div>

          <aside className="self-start">
            <p className="text-xs font-bold uppercase text-[#3c645a]">Direkter Kontakt</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-[#172522]">Quality1st, Münster</h2>
            <p className="mt-3 text-sm leading-6 text-[#5b6964]">Bundesweite Betreuung. Die vollständigen Unternehmensangaben finden Sie im Impressum.</p>
            <address className="mt-7 not-italic">
              <ul className="border-y border-[#cfd7d1]">
                <li className="border-b border-[#d9ded9] py-4">
                  <a href="mailto:info@quality-1st.de" className="flex min-h-11 items-center gap-3 text-sm font-medium text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]"><Mail aria-hidden="true" className="h-4 w-4" />info@quality-1st.de<ArrowRight aria-hidden="true" className="ml-auto h-4 w-4" /></a>
                </li>
                <li className="border-b border-[#d9ded9] py-4">
                  <a href="tel:+491705975430" className="flex min-h-11 items-center gap-3 text-sm font-medium text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]"><Phone aria-hidden="true" className="h-4 w-4" />+49 (0) 170 5975430<ArrowRight aria-hidden="true" className="ml-auto h-4 w-4" /></a>
                </li>
                <li className="flex min-h-14 items-center gap-3 py-4 text-sm text-[#53645d]"><MapPin aria-hidden="true" className="h-4 w-4 text-[#376457]" />Münster, Deutschland</li>
              </ul>
            </address>
            <p className="mt-5 text-xs leading-5 text-[#697772]">Beim Absenden des Formulars werden die erforderlichen Daten zur Beantwortung Ihrer Anfrage übermittelt. Das Formular nutzt EmailJS und Google reCAPTCHA; Details stehen in der <Link to="/datenschutz" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Datenschutzerklärung</Link>.</p>
          </aside>
        </div>
      </section>
    </div>
  </>
);

export default ContactEditorial;