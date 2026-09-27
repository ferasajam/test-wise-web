import { type ReactNode } from "react";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";

const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-b border-[#d9ded9] py-7 last:border-b-0 sm:py-8">
    <h2 className="font-display text-xl font-semibold text-[#172522] sm:text-2xl">{title}</h2>
    <div className="mt-4 space-y-4 text-sm leading-7 text-[#53645d]">{children}</div>
  </section>
);

const Imprint = () => (
  <>
    <LegalSection title="Angaben gemäß § 5 TMG">
      <p>Quality1st<br />Feras Ajam<br />Corrensstr. 88<br />48149 Münster<br />Deutschland</p>
    </LegalSection>
    <LegalSection title="Kontakt">
      <p>Telefon: +49 (0) 170 5975430<br />E-Mail: info@quality-1st.de</p>
    </LegalSection>
    <LegalSection title="Umsatzsteuer-ID">
      <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />DE449943837</p>
    </LegalSection>
    <LegalSection title="Steuernummer (Gewerbe)">
      <p>336/5002/7234</p>
    </LegalSection>
    <LegalSection title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
      <p>Feras Ajam<br />Corrensstr. 88<br />48149 Münster</p>
    </LegalSection>
    <LegalSection title="Haftungsausschluss">
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Haftung für Inhalte</h3>
        <p className="mt-2">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      </div>
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Haftung für Links</h3>
        <p className="mt-2">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
      </div>
    </LegalSection>
  </>
);

const PrivacyPolicy = () => (
  <>
    <LegalSection title="1. Datenschutz auf einen Blick">
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Allgemeine Hinweise</h3>
        <p className="mt-2">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
      </div>
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Datenerfassung auf unserer Website</h3>
        <p className="mt-2">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im Impressum.</p>
      </div>
    </LegalSection>
    <LegalSection title="2. Hosting & Content Delivery Networks (CDN)">
      <p>Diese Website wird bei einem externen Dienstleister gehostet. Alle auf dieser Website erfassten personenbezogenen Daten werden auf den Servern dieses Hosters gespeichert.</p>
    </LegalSection>
    <LegalSection title="3. Allgemeine Hinweise & Pflichtinformationen">
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Datenschutz</h3>
        <p className="mt-2">Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
      </div>
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Verantwortliche Stelle</h3>
        <p className="mt-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <p className="mt-2">Quality1st<br />Feras Ajam<br />Corrensstr. 88<br />48149 Münster<br />Telefon: +49 (0) 170 5975430<br />E-Mail: info@quality-1st.de</p>
      </div>
    </LegalSection>
    <LegalSection title="4. Datenerfassung auf unserer Website">
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Kontaktformular</h3>
        <p className="mt-2">Wenn Sie uns per Kontaktformular eine Anfrage senden, verarbeiten wir die von Ihnen eingegebenen Angaben zur Bearbeitung und Beantwortung Ihrer Nachricht. Die Übermittlung der Nachricht erfolgt über EmailJS.</p>
      </div>
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Spam-Schutz durch Google reCAPTCHA</h3>
        <p className="mt-2">Auf der Kontaktseite wird Google reCAPTCHA eingesetzt, um automatisierte Formularanfragen zu erkennen. Dabei können Nutzungs- und Geräteinformationen an Google übermittelt werden. Weitere Informationen finden Sie in den Datenschutz- und Nutzungsbedingungen von Google.</p>
      </div>
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Externe Schriftarten und Tracking</h3>
        <p className="mt-2">Die Website lädt Schriftarten lokal über die Geräteschriftarten. Es werden keine Analyse- oder Werbe-Trackingdienste eingebunden.</p>
      </div>
      <div>
        <h3 className="font-display font-semibold text-[#24352e]">Server-Log-Dateien</h3>
        <p className="mt-2">Unser Provider erhebt und speichert automatisch Informationen in Server-Log-Dateien. Dazu zählen: Browsertyp/-version, Betriebssystem, Referrer, Hostname, Uhrzeit der Anfrage und IP-Adresse.</p>
      </div>
    </LegalSection>
    <LegalSection title="5. Ihre Rechte">
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich dazu an die im Impressum genannte Adresse.</p>
    </LegalSection>
  </>
);

const LegalRedesign = () => {
  const location = useLocation();
  const isImpressum = location.pathname === "/impressum";
  const title = isImpressum ? "Impressum" : "Datenschutzerklärung";
  const description = isImpressum
    ? "Impressum von Quality1st mit allen Pflichtangaben, Kontaktinformationen und rechtlichen Hinweisen."
    : "Datenschutzerklärung von Quality1st mit Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.";

  return (
    <>
      <Seo
        title={`${title} | Quality1st`}
        description={description}
        path={isImpressum ? "/impressum" : "/datenschutz"}
        keywords={isImpressum ? ["Impressum Quality1st"] : ["Datenschutz Quality1st"]}
        structuredData={[
          getOrganizationStructuredData(),
          { "@context": "https://schema.org", "@type": "WebPage", name: `${title} | Quality1st`, url: getCanonicalUrl(isImpressum ? "/impressum" : "/datenschutz"), inLanguage: "de-DE" },
        ]}
      />

      <div className="bg-[#f5f6f3] text-[#172522]">
        <section className="border-b border-[#d9ded9] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]">
              <Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link>
              <span aria-hidden="true" className="px-2">/</span> Rechtliches
            </nav>
            <p className="mt-8 flex items-center gap-2 text-xs font-bold uppercase text-[#3c645a]"><FileText aria-hidden="true" className="h-3.5 w-3.5" /> Quality1st / Rechtliches</p>
            <h1 className="mt-3 font-display text-[clamp(1.75rem,8vw,3.75rem)] font-semibold leading-tight text-[#172522]">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#53645d] sm:text-lg">Hier finden Sie die rechtlichen Informationen von Quality1st in gut lesbarer Form.</p>
          </div>
        </section>

        <section>
          <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
            {isImpressum ? <Imprint /> : <PrivacyPolicy />}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#d9ded9] pt-6">
              <span className="flex items-center gap-2 text-xs text-[#697772]"><ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#376457]" /> Quality1st</span>
              <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">Kontakt aufnehmen <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default LegalRedesign;