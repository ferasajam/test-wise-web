import {
  ArrowRight,
  BookOpen,
  Bot,
  Bug,
  Check,
  Gauge,
  Globe2,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Seo, { getCanonicalUrl, getOrganizationStructuredData } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe2,
    title: "Webentwicklung",
    description: "Moderne, performante Websites und Web-Anwendungen - von der Konzeption bis zum Launch.",
    features: ["Responsive Webdesign", "Technische SEO-Basis", "CMS & E-Commerce", "Wartung und Support"],
    tools: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Android & iOS Apps",
    description: "Mobile Anwendungen, die sich auf allen relevanten Geräten natürlich, sicher und schnell anfühlen.",
    features: ["Native & Cross-Platform", "UI/UX Design", "API-Integration", "Store-Launch & Updates"],
    tools: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Bot,
    title: "KI-Agenten & Automatisierung",
    description: "Individuelle KI-Lösungen, Chatbots und intelligente Workflows für produktivere Prozesse.",
    features: ["Chatbots & Assistenten", "Prozessautomatisierung", "KI-API-Integration", "Datenanalyse"],
    tools: ["OpenAI", "LangChain", "Node.js", "n8n"],
  },
  {
    icon: Bug,
    title: "Manuelle Tests",
    description: "Erfahrene, gründliche Prüfung dort, wo menschliche Perspektive und Kontext entscheidend sind.",
    features: ["Funktionale Tests", "Explorative Tests", "Usability Testing", "Regression Testing"],
    tools: ["Jira", "TestRail", "Confluence", "Bug Tracking"],
  },
  {
    icon: Zap,
    title: "Automatisierte Tests",
    description: "Wiederholbare Testläufe für UI, APIs und Integrationen, sinnvoll in Ihre Delivery-Pipeline eingebettet.",
    features: ["Frontend & E2E Tests", "API Testing", "Continuous Testing", "Cross-Browser Tests"],
    tools: ["Playwright", "Cypress", "Selenium", "Postman"],
  },
  {
    icon: ShieldCheck,
    title: "Penetrationstests",
    description: "Strukturierte Sicherheitstests nach OWASP-orientierten Standards für belastbare Schutzmaßnahmen.",
    features: ["OWASP Top 10", "Authentifizierung", "Autorisierung", "Vulnerability Checks"],
    tools: ["OWASP ZAP", "Burp Suite", "Nmap", "Custom Scripts"],
  },
  {
    icon: Gauge,
    title: "Last- & Performancetests",
    description: "Systemverhalten unter realistischen und anspruchsvollen Lasten sichtbar machen und gezielt verbessern.",
    features: ["Load Testing", "Stress Testing", "Spike Testing", "Endurance Testing"],
    tools: ["k6", "JMeter", "Gatling", "LoadRunner"],
  },
  {
    icon: BookOpen,
    title: "Testberatung & Schulung",
    description: "Know-how und passende Prozesse für Teams, die Qualität langfristig selbst weiterentwickeln wollen.",
    features: ["Teststrategie", "Tool-Evaluierung", "Team-Schulungen", "Prozessoptimierung"],
    tools: ["Workshops", "Hands-on Training", "Dokumentation", "Best Practices"],
  },
];

const testingSignals = [
  ["Manuell", "Komplexe Workflows, Usability und fachlicher Kontext"],
  ["Automatisiert", "Wiederholbare Regressionen, APIs und Release-Sicherheit"],
  ["Security", "Risiken früh erkennen und technische Schutzmaßnahmen stärken"],
  ["Performance", "Stabilität und Reaktionszeit unter realer Last prüfen"],
] as const;

const ServicesRedesign = () => (
  <>
    <Seo
      title="Leistungen | Softwareentwicklung, Testing & KI | Quality1st"
      description="Quality1st unterstützt mit Webentwicklung, Apps, KI-Agenten, manuellen und automatisierten Tests, Penetrationstests sowie Performance-Analysen."
      path="/services"
      keywords={["Webentwicklung", "App Entwicklung", "KI Agenten", "Testautomatisierung", "Penetrationstests", "Performance Tests"]}
      structuredData={[
        getOrganizationStructuredData(),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digitale Services und Softwaretests von Quality1st",
          provider: { "@type": "Organization", name: "Quality1st", url: getCanonicalUrl("/") },
          areaServed: "DE",
          serviceType: services.map((service) => service.title),
          url: getCanonicalUrl("/services"),
          inLanguage: "de-DE",
        },
      ]}
    />

    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,hsl(211_34%_8%),hsl(214_30%_12%),hsl(197_38%_13%))]" />
      <div className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.68fr)] lg:items-end lg:gap-16">
        <div className="reveal-up">
          <p className="eyebrow"><span className="h-1.5 w-1.5 bg-accent" /> Leistungen</p>
          <h1 className="display-heading mt-6 text-balance text-foreground">Engineering für Produkte, die zuverlässig vorankommen.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Von der ersten Idee bis zum stabilen Betrieb: Wir entwickeln, testen und verbessern digitale Lösungen mit einem passenden Mix aus Technologie, Methodik und Erfahrung.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]">
            <Link to="/contact">Projekt besprechen <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
        <div className="border border-border bg-[hsl(var(--surface)/0.86)] p-5 shadow-[0_30px_66px_-38px_hsl(202_100%_56%/0.3)] backdrop-blur reveal-up" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="font-display text-sm font-semibold text-foreground">Delivery coverage</span>
            <span className="text-xs font-bold tracking-[0.08em] text-primary">Q1 SYSTEM</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-px border border-border bg-border">
            {[
              ["Build", "Software & Web", "bg-primary/10"],
              ["Assure", "Testing & QA", "bg-accent/10"],
              ["Secure", "Security", "bg-primary/10"],
              ["Improve", "Support", "bg-accent/10"],
            ].map(([label, detail, color]) => (
              <div key={label} className={`min-h-28 ${color} p-4`}>
                <p className="font-display text-sm font-semibold text-foreground">{label}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <AnimatedSection>
      <section className="section-space" aria-label="Leistungen im Detail">
        <div className="site-container">
          <SectionHeading
            eyebrow="Kompetenzen"
            title="Die passende Tiefe für Ihre technische Herausforderung."
            description="Jede Leistung kann eigenständig unterstützen oder Teil eines durchgängigen Produkt- und Qualitätsprozesses sein."
            className="mb-12"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card group relative overflow-hidden border border-border bg-card p-6 sm:p-7">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 items-center justify-center border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-xs font-bold tracking-[0.08em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-7 font-display text-2xl font-semibold text-foreground">{service.title}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <div className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-[minmax(0,1fr)_minmax(10rem,0.8fr)]">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">Leistungsumfang</h3>
                      <ul className="mt-3 grid gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm leading-5 text-foreground"><Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">Tools & Tech</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {service.tools.map((tool) => (
                          <span key={tool} className="border border-border bg-background/40 px-2 py-1 text-xs font-semibold text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <section className="border-y border-border bg-[linear-gradient(135deg,hsl(var(--surface-raised)),hsl(var(--surface)))] py-[clamp(4.5rem,9vw,8rem)] text-foreground" aria-labelledby="testing-heading">
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="eyebrow mb-4">Quality & Testing</p>
            <h2 id="testing-heading" className="section-heading text-balance text-foreground">Qualität, die sich an Ihrem echten Risiko orientiert.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Nicht jeder Testtyp löst dasselbe Problem. Wir kombinieren Testebenen sinnvoll, damit Teams genau dort Sicherheit gewinnen, wo sie sie für sichere Releases brauchen.
            </p>
          </div>
          <ol className="grid border-y border-border">
            {testingSignals.map(([label, description], index) => (
              <li key={label} className="grid gap-3 border-b border-border py-4 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1.45fr)] sm:items-center">
                <span className="font-display text-sm font-bold text-primary">0{index + 1}</span>
                <strong className="font-display text-base font-semibold text-foreground">{label}</strong>
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </AnimatedSection>

    <section className="border-b border-border py-[clamp(4.5rem,8vw,7rem)]">
      <div className="site-container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Nächster Schritt</p>
          <h2 className="mt-5 section-heading text-balance text-foreground">Lassen Sie uns die passende Lösung strukturieren.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">Ob einzelner Testauftrag oder ein komplettes digitales Produkt: Wir starten mit einer klaren Einschätzung Ihrer Ausgangslage.</p>
        </div>
        <Button asChild size="lg" className="h-12 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_hsl(202_90%_32%)] hover:translate-y-px hover:bg-primary hover:shadow-[0_5px_0_hsl(202_90%_32%)]">
          <Link to="/contact">Erstgespräch anfragen <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default ServicesRedesign;