import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";

const principles = [
  ["Erst zuhören, dann planen", "Wir möchten Ihr Geschäft, Ihre Kunden und Ihr Ziel verstehen, bevor wir eine Lösung vorschlagen."],
  ["Direkt zusammenarbeiten", "Quality1st wird von Feras Ajam geführt. Sie sprechen direkt mit der verantwortlichen Person und erhalten nachvollziehbare Entscheidungen."],
  ["Verständlich bleiben", "Wir erklären Möglichkeiten, Kosten und nächste Schritte in klarer Sprache, ohne unnötige Fachbegriffe."],
];

const AboutEditorial = () => (
  <>
    <Seo
      title="Über Quality1st | Persönlicher IT-Dienstleister aus Münster"
      description="Lernen Sie Feras Ajam kennen: Ihr direkter Ansprechpartner für Websites, Apps und digitale Sichtbarkeit – von Münster aus für Unternehmen in ganz Deutschland."
      path="/about"
      keywords={["IT-Dienstleister Münster", "Webdesign Münster", "App Entwicklung Münster", "Quality1st"]}
      structuredData={[
        getOrganizationStructuredData(),
        { "@context": "https://schema.org", "@type": "AboutPage", name: "Über Quality1st", url: getCanonicalUrl("/about"), inLanguage: "de-DE", about: { "@type": "Organization", name: "Quality1st" } },
      ]}
    />
    <div className="bg-[#f5f6f3] text-[#172522]">
      <section className="border-b border-[#d9ded9] bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]"><Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link><span aria-hidden="true" className="px-2">/</span> Über Quality1st</nav>
            <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Über Quality1st / Münster</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#172522] sm:text-6xl">Ein Ansprechpartner. Klare Entscheidungen. Gute digitale Arbeit.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">
              Hinter Quality1st steht Feras Ajam. Sie arbeiten direkt mit einer Ansprechperson, die mit Ihnen Ziele, Budget und Inhalte priorisiert. Von der Website bis zum Google-Auftritt entsteht eine Lösung, die zu Ihrem Unternehmen und Ihren Kunden passt.
            </p>
          </div>
          <aside className="border-l-2 border-[#b25336] py-1 pl-5 sm:pl-7">
            <p className="text-xs font-bold uppercase text-[#697772]">Was uns wichtig ist</p>
            <ul className="mt-4 space-y-3 text-sm font-medium text-[#263732]">
              {["Klare Empfehlungen", "Direkter Kontakt", "Passende Lösungen statt Standardpakete", "Verständliche nächste Schritte"].map((item) => <li key={item} className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#376457]" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#d9ded9]" aria-labelledby="person-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase text-[#3c645a]">Ansprechpartner</p>
            <h2 id="person-heading" className="mt-3 font-display text-3xl font-semibold text-[#172522]">Feras Ajam</h2>
            <p className="mt-2 text-sm text-[#697772]">Quality1st, Münster</p>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-7 text-[#4b5b56]">
              Sie kennen Ihr Geschäft am besten. Wir übersetzen Ihre Anforderungen in konkrete Seiten, Inhalte und digitale Werkzeuge. Vor dem Start klären wir Umfang, Reihenfolge und Kostenrahmen.
            </p>
            <p className="mt-4 text-base leading-7 text-[#4b5b56]">
              Sie behalten den Überblick und entscheiden mit. Wir erklären Optionen in verständlicher Sprache und empfehlen nur Schritte, die zu Ihrem Vorhaben passen.
            </p>
            <a href="mailto:info@quality-1st.de" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">Feras Ajam kontaktieren <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9ded9] bg-white" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-bold uppercase text-[#3c645a]">Arbeitsweise</p>
          <h2 id="principles-heading" className="mt-3 max-w-2xl font-display text-3xl font-semibold text-[#172522] sm:text-4xl">Was die Zusammenarbeit prägt.</h2>
          <div className="mt-8 grid border-y border-[#cfd7d1] md:grid-cols-3 md:divide-x md:divide-[#d9ded9]">
            {principles.map(([title, description], index) => (
              <article key={title} className="border-b border-[#d9ded9] py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <p className="text-xs font-semibold text-[#9a5a42]">0{index + 1}</p>
                <h3 className="mt-4 font-display text-lg font-semibold text-[#1b2b26]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6964]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9ded9]" aria-labelledby="regional-heading">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase text-[#3c645a]">Standort</p>
            <h2 id="regional-heading" className="mt-3 font-display text-2xl font-semibold text-[#172522]">Münster und ganz Deutschland.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#5b6964]">Quality1st hat seinen Sitz in Münster und betreut Unternehmen bundesweit. Der Standort ist im Impressum angegeben; die Zusammenarbeit kann je nach Projekt remote oder abgestimmt vor Ort stattfinden.</p>
        </div>
      </section>

      <section className="bg-[#173f36] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 sm:py-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase text-[#c1d6cb]">Persönlich besprechen</p><h2 className="mt-3 font-display text-3xl font-semibold">Sie haben eine Idee, aber noch keinen fertigen Plan?</h2><p className="mt-3 text-sm leading-6 text-[#d6e1dc]">Im ersten Gespräch sortieren wir Ihre Fragen und legen fest, was als Nächstes wirklich wichtig ist.</p></div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-white px-5 text-sm font-semibold text-[#173f36] hover:bg-[#e6eee9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173f36]">Unverbindlich anfragen <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  </>
);

export default AboutEditorial;