import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo, { getOrganizationStructuredData } from "@/components/Seo";
import { services } from "@/lib/serviceCatalog";

const ServicesEditorial = () => (
  <>
    <Seo
      title="IT-Leistungen | Softwareentwicklung, Testing & Automation | Quality1st"
      description="IT-Dienstleistungen für Unternehmen, Selbstständige, Start-ups und Privatkunden: Softwareentwicklung, Quality Engineering & Testautomatisierung, Automation und Security."
      path="/services"
      keywords={["IT Dienstleistungen", "Softwareentwicklung", "Software Testing", "Quality Engineering Testautomatisierung", "n8n", "DevOps", "IT Security"]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "IT-Dienstleistungen von Quality1st",
          provider: { "@type": "Organization", name: "Quality1st" },
          areaServed: { "@type": "Country", name: "Deutschland" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Leistungen",
            itemListElement: services.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                url: `https://quality-1st.de/services/${service.slug}`,
                description: service.description,
              },
            })),
          },
        },
      ]}
    />
    <div className="bg-[#f5f6f3] text-[#172522]">
      <section className="border-b border-[#d9ded9] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]">
            <Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link>
            <span aria-hidden="true" className="px-2">/</span> Leistungen
          </nav>
          <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Leistungen</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#172522] sm:text-6xl">Technische Unterstützung, die zum Vorhaben passt.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">
            Quality1st entwickelt und verbessert digitale Lösungen für Unternehmen jeder Größe, Selbstständige, Start-ups und Privatkunden in Deutschland. Softwarequalität und Testing sind Kernkompetenzen neben Entwicklung, Automatisierung und technischem Betrieb.
          </p>
          <Link to="/contact" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-[#173f36] px-5 text-sm font-semibold text-white hover:bg-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] focus-visible:ring-offset-2">
            Projekt besprechen <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="service-list-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-4 border-b border-[#cfd7d1] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-[#3c645a]">Kompetenzen</p>
              <h2 id="service-list-heading" className="mt-3 font-display text-3xl font-semibold text-[#172522] sm:text-4xl">Sechs Bereiche, ein technischer Blick.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5b6964]">Leistungsumfang und Technologie richten sich nach Ihrer Ausgangslage. Jede Zusammenarbeit beginnt mit einer konkreten Klärung des Bedarfs.</p>
          </div>
          <div className="border-b border-[#cfd7d1]">
            {services.map((service, index) => (
              <article key={service.slug} className="grid gap-3 border-b border-[#d9ded9] py-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                <span className="pt-1 text-xs font-semibold text-[#89958f]">0{index + 1}</span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#1b2b26] sm:text-2xl">{service.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b6964]">{service.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#53645d]">
                    {service.scope.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <Link to={`/services/${service.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] sm:mt-0">
                  Details <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ServicesEditorial;