import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo, { getOrganizationStructuredData } from "@/components/Seo";
import { insights } from "@/lib/insightCatalog";

const InsightsEditorial = () => (
  <>
    <Seo
      title="Insights | Webentwicklung, Apps, Testing & Automation | Quality1st"
      description="Praxisnahe Einblicke von Quality1st zu Angular und Webentwicklung, nativen und Cross-Platform-Apps, Softwaretesting, APIs, CI/CD und Automatisierung."
      path="/insights"
      keywords={["Angular Webentwicklung", "Mobile App Entwicklung Ratgeber", "Native oder Cross-Platform App", "Testautomatisierung Ratgeber", "Playwright Cypress Vergleich", "API Testing", "CI/CD Testing"]}
      structuredData={[
        getOrganizationStructuredData(),
        { "@context": "https://schema.org", "@type": "Blog", name: "Quality1st Insights", url: "https://quality-1st.de/insights", inLanguage: "de-DE" },
      ]}
    />
    <div className="bg-[#f5f6f3] text-[#172522]">
      <section className="border-b border-[#d9ded9] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <nav aria-label="Brotkrumennavigation" className="text-xs text-[#697772]"><Link to="/" className="underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Startseite</Link><span aria-hidden="true" className="px-2">/</span> Insights</nav>
          <p className="mt-8 text-xs font-bold uppercase text-[#3c645a]">Insights / Engineering-Praxis</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#172522] sm:text-6xl">Technische Fragen, konkret beantwortet.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4b5b56] sm:text-lg sm:leading-8">Einblicke zu Webentwicklung mit Angular, nativen und Cross-Platform-Apps, Softwarequalität und Automatisierung. Keine Trendmeldungen, sondern Hinweise, die technische Entscheidungen verständlicher machen.</p>
        </div>
      </section>
      <section aria-labelledby="articles-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 id="articles-heading" className="sr-only">Artikel</h2>
          <div className="border-y border-[#cfd7d1]">
            {insights.map((insight, index) => (
              <article key={insight.slug} className="grid gap-3 border-b border-[#d9ded9] py-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                <span className="pt-1 text-xs font-semibold text-[#89958f]">0{index + 1}</span>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#78847e]">{insight.readingTime}</p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-[#1b2b26] sm:text-2xl"><Link to={`/insights/${insight.slug}`} className="hover:text-[#376457] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">{insight.title}</Link></h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b6964]">{insight.summary}</p>
                </div>
                <Link to={`/insights/${insight.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                  Lesen <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-[#5b6964]">Sie haben eine konkrete technische Frage? <Link to="/contact" className="inline-flex items-center gap-1 font-semibold text-[#24574b] underline decoration-[#9ab1a7] underline-offset-4 hover:text-[#172522]">Sprechen Sie mit Quality1st <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></Link></p>
        </div>
      </section>
    </div>
  </>
);

export default InsightsEditorial;