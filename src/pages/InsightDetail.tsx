import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";
import { insights } from "@/lib/insightCatalog";

const InsightDetail = () => {
  const { slug } = useParams();
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) return <Navigate to="/insights" replace />;

  return (
    <>
      <Seo
        title={`${insight.title} | Quality1st Insights`}
        description={insight.summary}
        path={`/insights/${insight.slug}`}
        type="article"
        structuredData={[
          getOrganizationStructuredData(),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: insight.title,
            description: insight.summary,
            mainEntityOfPage: getCanonicalUrl(`/insights/${insight.slug}`),
            publisher: { "@type": "Organization", name: "Quality1st", url: getCanonicalUrl("/") },
            inLanguage: "de-DE",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: getCanonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: "Insights", item: getCanonicalUrl("/insights") },
              { "@type": "ListItem", position: 3, name: insight.title, item: getCanonicalUrl(`/insights/${insight.slug}`) },
            ],
          },
        ]}
      />
      <article className="bg-[#f5f6f3] text-[#172522]">
        <header className="border-b border-[#d9ded9] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]">
              <Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link><span aria-hidden="true" className="px-2">/</span>
              <Link to="/insights" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Insights</Link>
            </nav>
            <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Engineering-Praxis <span className="px-2 text-[#9aa69f]">/</span>{insight.readingTime}</p>
            <h1 className="mt-3 max-w-full break-words font-display text-[clamp(1.5rem,7vw,3.75rem)] font-semibold leading-tight text-[#172522] sm:max-w-4xl sm:text-6xl">{insight.title}</h1>
            <p className="mt-6 max-w-full break-words text-base leading-7 text-[#4b5b56] sm:max-w-2xl sm:text-lg sm:leading-8">{insight.summary}</p>
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
            <div className="max-w-full min-w-0 break-words sm:max-w-3xl">
              {insight.sections.map((section) => (
                <section key={section.heading} className="mb-10 last:mb-0">
                  <h2 className="font-display text-2xl font-semibold text-[#1b2b26]">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-7 text-[#465750]">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-4 grid gap-3 pl-5 text-sm leading-6 text-[#465750] marker:text-[#9a5a42]">{section.bullets.map((item) => <li key={item} className="list-disc">{item}</li>)}</ul>}
                  {section.code && <pre className="mt-5 overflow-x-auto border border-[#d9ded9] bg-[#1d2d28] p-4 text-xs leading-6 text-[#e8f0eb] sm:p-5"><code>{section.code}</code></pre>}
                </section>
              ))}
              <div className="mt-12 flex flex-col gap-3 border-t border-[#cfd7d1] pt-6 sm:flex-row sm:justify-between">
                <Link to="/insights" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Alle Insights</Link>
                <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">Projekt besprechen <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            </div>
            <aside className="h-fit border-t-2 border-[#b25336] pt-4 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase text-[#697772]">Themen</p>
              <ul className="mt-4 grid gap-3 text-sm text-[#465750]">
                <li><Link to="/services/quality-engineering" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Quality Engineering</Link></li>
                <li><Link to="/services/testautomatisierung" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Testautomatisierung</Link></li>
                <li><Link to="/services/it-devops" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">IT & DevOps</Link></li>
              </ul>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default InsightDetail;