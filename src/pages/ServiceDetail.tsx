import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";
import { services } from "@/lib/serviceCatalog";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <Seo
        title={`${service.title} | Quality1st`}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        keywords={[service.title, ...service.scope.slice(0, 3)]}
        structuredData={[
          getOrganizationStructuredData(),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: { "@type": "Organization", name: "Quality1st", url: getCanonicalUrl("/") },
            areaServed: { "@type": "Country", name: "Deutschland" },
            url: getCanonicalUrl(`/services/${service.slug}`),
            serviceType: service.scope,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: getCanonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: "Leistungen", item: getCanonicalUrl("/services") },
              { "@type": "ListItem", position: 3, name: service.title, item: getCanonicalUrl(`/services/${service.slug}`) },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faq.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />
      <div className="bg-[#f5f6f3] text-[#172522]">
        <section className="border-b border-[#d9ded9] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]">
              <Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link>
              <span aria-hidden="true" className="px-2">/</span>
              <Link to="/services" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Leistungen</Link>
              <span aria-hidden="true" className="px-2">/</span>{service.navTitle}
            </nav>
            <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Quality1st / Leistungen</p>
            <h1 className="mt-3 max-w-4xl font-display text-[clamp(1.5rem,7vw,3.75rem)] font-semibold leading-tight text-[#172522] sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#173f36] px-5 text-sm font-semibold text-white hover:bg-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] focus-visible:ring-offset-2">
                Projekt besprechen <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#aebbb4] px-5 text-sm font-semibold text-[#173f36] hover:border-[#173f36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Alle Leistungen
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d9ded9]" aria-labelledby="scope-heading">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-18 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-xs font-bold uppercase text-[#3c645a]">Leistungsumfang</p>
              <h2 id="scope-heading" className="mt-3 font-display text-3xl font-semibold text-[#172522]">Wobei wir unterstützen.</h2>
            </div>
            <ul className="grid border-t border-[#cfd7d1] sm:grid-cols-2 sm:gap-x-8">
              {service.scope.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-[#d9ded9] py-5 text-sm leading-6 text-[#33443d]">
                  <span className="text-xs font-semibold text-[#89958f]">0{index + 1}</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[#d9ded9] bg-white" aria-labelledby="approach-heading">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="text-xs font-bold uppercase text-[#3c645a]">Vorgehen</p>
              <h2 id="approach-heading" className="mt-3 font-display text-3xl font-semibold text-[#172522]">Klarer Ablauf, passende Tiefe.</h2>
            </div>
            <ol className="border-t border-[#cfd7d1]">
              {service.approach.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-[#d9ded9] py-5 text-sm leading-6 text-[#33443d]">
                  <span className="text-xs font-semibold text-[#9a5a42]">0{index + 1}</span>{item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-[#d9ded9]" aria-labelledby="tools-heading">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-16">
            <h2 id="tools-heading" className="font-display text-xl font-semibold text-[#172522]">Werkzeuge im Kontext</h2>
            <div>
              <p className="text-sm leading-6 text-[#5b6964]">Die Auswahl hängt von Ihrem Produkt und Ihrer vorhandenen Umgebung ab. Beispiele aus diesem Leistungsbereich:</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#24574b]">
                {service.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d9ded9] bg-white" aria-labelledby="service-faq-heading">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-[#3c645a]">Fragen & Antworten</p>
              <h2 id="service-faq-heading" className="mt-3 font-display text-2xl font-semibold text-[#172522] sm:text-3xl">{service.navTitle} verstehen.</h2>
            </div>
            <div className="min-w-0 border-t border-[#d9ded9]">
              {service.faq.map((faq) => (
                <details key={faq.question} className="group min-w-0 border-b border-[#d9ded9] py-5">
                  <summary className="flex min-h-11 min-w-0 cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-[#1b2b26] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                    {faq.question}<span aria-hidden="true" className="text-xl font-normal text-[#9a5a42] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-1 pr-8 text-sm leading-7 text-[#5b6964]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#173f36] text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 sm:py-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase text-[#c1d6cb]">Nächster Schritt</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Lassen Sie uns den Bedarf gemeinsam einordnen.</h2>
            </div>
            <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-white px-5 text-sm font-semibold text-[#173f36] hover:bg-[#e6eee9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173f36]">
              Projekt besprechen <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <nav aria-label="Weitere Leistungen" className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-8 sm:px-8">
          {services.filter((item) => item.slug !== service.slug).map((item) => (
            <Link key={item.slug} to={`/services/${item.slug}`} className="inline-flex min-h-11 items-center gap-1 text-sm text-[#53645d] underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
              {item.navTitle}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default ServiceDetail;