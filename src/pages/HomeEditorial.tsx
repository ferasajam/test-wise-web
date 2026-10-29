import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Megaphone,
  Search,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Seo, {
  getCanonicalUrl,
  getOrganizationStructuredData,
  getWebsiteStructuredData,
} from "@/components/Seo";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Websites & Webshops",
    description: "Zeigen Sie auf den ersten Blick, was Sie anbieten, wo Sie arbeiten und wie Kunden Sie erreichen.",
    href: "/services/websites-webshops",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Apps für iOS & Android",
    description: "Machen Sie wiederkehrende Aufgaben für Ihre Kunden oder Ihr Team einfacher.",
    href: "/services/mobile-app-entwicklung",
  },
  {
    number: "03",
    icon: Search,
    title: "SEO & Google-Sichtbarkeit",
    description: "Bringen Sie Ihren Betrieb bei lokalen Suchen und auf Google Maps ins Blickfeld.",
    href: "/services/seo-google-sichtbarkeit",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Social Media & Online-Marketing",
    description: "Planen Sie Beiträge, die Einblicke geben und Ihr Angebot im Gespräch halten.",
    href: "/services/social-media-online-marketing",
  },
];

const projects = [
  {
    name: "Diva Haarstudio",
    type: "Website",
    url: "https://diva-haarstudio.de/",
    description: "Salonleistungen und Kontaktmöglichkeiten, die Kundinnen schnell auf dem Handy finden.",
  },
  {
    name: "KAFI Transporte",
    type: "Unternehmenswebsite",
    url: "https://kafitransporte.de/",
    description: "Umzugsleistungen und Einsatzgebiet auf einen Blick, mit direktem Weg zur Anfrage.",
  },
  
] as const;

const faqs = [
  {
    question: "Wobei unterstützt Quality1st?",
    answer: "Von der Unternehmenswebsite bis zur mobilen App: Wir helfen dabei, digitale Angebote verständlich zu präsentieren und im Alltag nutzbar zu machen.",
  },
  {
    question: "Für wen arbeitet Quality1st?",
    answer: "Wir arbeiten vor allem mit Inhaberinnen und Inhabern kleiner Betriebe, die online professioneller auftreten oder Abläufe für ihre Kunden vereinfachen möchten.",
  },
  {
    question: "Können Sie auch eine bestehende Website verbessern?",
    answer: "Ja. Wir schauen uns gemeinsam an, was bereits gut funktioniert und wie Inhalte, mobile Darstellung, Google-Auffindbarkeit oder Kontaktmöglichkeiten verbessert werden können.",
  },
  {
    question: "Versprechen Sie einen festen Platz bei Google?",
    answer: "Nein. Google bestimmt die Suchergebnisse selbst. Wir verbessern die Grundlagen und erklären verständlich, welche Maßnahmen sinnvoll sind, ohne bestimmte Rankings zu versprechen.",
  },
];

const HomeEditorial = () => (
  <>
    <Seo
      title="IT-Dienstleistungen für kleine Unternehmen | Quality1st"
      description="IT-Dienstleister aus Münster für kleine Unternehmen: Websites, Apps, Google-Sichtbarkeit und Social Media für Salons, Umzugsfirmen und lokale Betriebe."
      path="/"
      keywords={[
        "Website erstellen lassen",
        "IT-Dienstleistungen für kleine Unternehmen",
        "IT-Dienstleister für kleine Unternehmen",
        "IT Dienstleistungen in der Nähe",
        "Webdesign für kleine Unternehmen",
        "App Entwicklung",
        "SEO für lokale Unternehmen",
        "Social Media Betreuung",
        "Online Marketing",
      ]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          ...getWebsiteStructuredData(),
          potentialAction: {
            "@type": "CommunicateAction",
            name: "Projekt besprechen",
            target: getCanonicalUrl("/contact"),
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ]}
    />

    <div className="bg-[#f5f6f3] text-[#172522]">
      <section className="border-b border-[#d9ded9]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase text-[#3c645a]">
              <span className="h-px w-8 bg-[#b25336]" /> IT-Dienstleister aus Münster für kleine Unternehmen
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-[#172522] sm:text-6xl">
              IT-Dienstleistungen für kleine Unternehmen.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">
              Wir machen es Kunden leicht, Ihr Angebot online zu verstehen und Kontakt aufzunehmen. Von der Website bis zu Google und Social Media.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#173f36] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] focus-visible:ring-offset-2"
              >
                Projekt besprechen <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center border border-[#aebbb4] px-5 text-sm font-semibold text-[#173f36] transition-colors hover:border-[#173f36] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] focus-visible:ring-offset-2"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <aside className="border-l-2 border-[#b25336] py-1 pl-5 sm:pl-7" aria-label="Leistungsprofil">
            <p className="text-xs font-bold uppercase text-[#697772]">Für Ihren Betrieb</p>
            <ul className="mt-4 space-y-3 text-sm font-medium text-[#263732]">
              <li>Eine Website, die Ihr Angebot klar zeigt</li>
              <li>Mehr Sichtbarkeit bei Google</li>
              <li>Social Media sinnvoll nutzen</li>
              <li>Apps für Kunden und Mitarbeitende</li>
            </ul>
            <p className="mt-6 max-w-xs text-xs leading-5 text-[#697772]">
              Direkt mit einer Ansprechperson aus Münster, bundesweit im Einsatz.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#d9ded9] bg-white" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-[0.75fr_1.25fr] sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-[#3c645a]">Leistungen</p>
              <h2 id="services-heading" className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight text-[#172522] sm:text-4xl">
                Was Ihr Unternehmen online weiterbringt.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#4b5b56] sm:justify-self-end">
              Wählen Sie, was Sie gerade brauchen. Wir erklären die nächsten Schritte ohne Fachjargon.
            </p>
          </div>
          <div className="mt-10 grid border-t border-[#d9ded9] sm:grid-cols-2 sm:gap-x-10">
            {services.map(({ number, icon: Icon, title, description, href }) => (
              <Link
                key={number}
                to={href}
                className="group grid min-h-40 grid-cols-[2.5rem_2rem_minmax(0,1fr)] items-start gap-3 border-b border-[#d9ded9] py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#b25336] sm:gap-4"
              >
                <span className="pt-1 text-xs font-semibold text-[#8b9892]">{number}</span>
                <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 text-[#376457]" strokeWidth={1.7} />
                <span>
                  <span className="flex items-center justify-between gap-3 font-display text-lg font-semibold text-[#1b2b26]">
                    {title}
                    <ArrowUpRight aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-[#9a5a42] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block" />
                  </span>
                  <span className="mt-2 block max-w-md text-sm leading-6 text-[#5b6964]">{description}</span>
                </span>
              </Link>
            ))}
          </div>
          <Link to="/services" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
            Alle Angebote ansehen <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-[#d9ded9]" aria-labelledby="approach-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase text-[#3c645a]">Sorgfältig umgesetzt</p>
            <h2 id="approach-heading" className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight text-[#172522] sm:text-4xl">
              Einfach zu nutzen. Zuverlässig im Alltag.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-[#4b5b56]">
              Ihre Website soll auf dem Handy gut funktionieren, schnell laden und es Kunden leicht machen, Sie zu erreichen. Darauf achten wir bei der Umsetzung.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4b5b56]">
              Technische Prüfungen gehören im Hintergrund dazu. Für Sie zählen ein verständlicher Auftritt und ein reibungsloser Weg von der Suche bis zur Anfrage.
            </p>
            <Link to="/services/quality-engineering" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
              So arbeiten wir <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9ded9] bg-white" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-[#3c645a]">Ausgewählte Arbeit</p>
              <h2 id="projects-heading" className="mt-3 font-display text-3xl font-semibold text-[#172522] sm:text-4xl">Bestehende Produkte und Webauftritte.</h2>
            </div>
            <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
              Alle Projekte <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid border-y border-[#d9ded9] md:grid-cols-2 md:divide-x md:divide-[#d9ded9]">
            {projects.map((project, index) => (
              <article key={project.name} className="flex min-h-52 flex-col border-b border-[#d9ded9] py-6 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <p className="text-xs font-semibold uppercase text-[#78847e]">0{index + 1} / {project.type}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#172522]">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6964]">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                  Projekt öffnen <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-[#78847e]">Ausgewählte eigene und betreute digitale Produkte. Wo keine belastbaren Projektergebnisse veröffentlicht sind, nennen wir bewusst keine Kennzahlen.</p>
        </div>
      </section>

      <section className="border-b border-[#d9ded9]" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase text-[#3c645a]">Häufige Fragen</p>
            <h2 id="faq-heading" className="mt-3 font-display text-3xl font-semibold text-[#172522] sm:text-4xl">Kurz und konkret.</h2>
          </div>
          <div className="border-t border-[#d9ded9]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-[#d9ded9] py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-[#1b2b26] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                  {faq.question}
                  <span aria-hidden="true" className="text-xl font-normal text-[#9a5a42] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-1 pr-8 text-sm leading-7 text-[#5b6964]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173f36] text-white" aria-labelledby="contact-heading">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase text-[#c1d6cb]">Kontakt</p>
            <h2 id="contact-heading" className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">Was möchten Sie online erreichen?</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#d6e1dc]">Erzählen Sie uns kurz von Ihrem Betrieb. Gemeinsam finden wir heraus, welcher nächste Schritt für Sie sinnvoll ist.</p>
          </div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-white px-5 text-sm font-semibold text-[#173f36] transition-colors hover:bg-[#e6eee9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173f36]">
            Unverbindlich anfragen <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  </>
);

export default HomeEditorial;