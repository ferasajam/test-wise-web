import { ArrowUpRight, Linkedin, Mail, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/serviceCatalog";

const navigation = [
  ["Start", "/"],
  ["Leistungen", "/services"],
  ["Über uns", "/about"],
  ["Projekte", "/projects"],
  ["Insights", "/insights"],
  ["Kontakt", "/contact"],
] as const;

const Footer = () => (
  <footer className="border-t border-[#d9ded9] bg-white text-[#172522]">
    <div className="site-container pt-12 sm:pt-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-8">
        <div className="max-w-sm">
          <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Quality1st Startseite">
            <span className="flex h-10 w-10 items-center justify-center border border-[#cad7d0] bg-[#edf3ef] text-[#24574b]">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="font-display text-xl font-semibold text-[#172522]">Quality<span className="text-[#376457]">1st</span></span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-[#5b6964]">
            IT-Dienstleistungen, Softwareentwicklung und Quality Engineering für digitale Lösungen, die im Alltag funktionieren.
          </p>
          <a
            href="https://www.linkedin.com/company/quality1stde"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center border border-[#cad7d0] text-[#53645d] transition-colors hover:border-[#376457] hover:bg-[#edf3ef] hover:text-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]"
            aria-label="Quality1st auf LinkedIn"
            title="Quality1st auf LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <nav aria-label="Footer Navigation">
          <h2 className="font-display text-sm font-semibold text-[#172522]">Navigation</h2>
          <ul className="mt-5 grid gap-3">
            {navigation.map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-sm text-[#5b6964] transition-colors hover:text-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold text-[#172522]">Leistungen</h2>
          <ul className="mt-5 grid gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="text-sm text-[#5b6964] transition-colors hover:text-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                  {service.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-[#172522]">Kontakt</h2>
          <ul className="mt-5 grid gap-4 text-sm">
            <li>
              <a href="mailto:info@quality-1st.de" className="flex items-start gap-3 text-[#5b6964] transition-colors hover:text-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>info@quality-1st.de</span>
              </a>
            </li>
            <li>
              <a href="tel:+491705975430" className="flex items-start gap-3 text-[#5b6964] transition-colors hover:text-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+49 (0) 170 5975430</span>
              </a>
            </li>
          </ul>
          <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#24574b] transition-colors hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">
            Projekt besprechen
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-[#d9ded9] py-6 text-xs text-[#697772] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Quality1st. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/impressum" className="transition-colors hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">Impressum</Link>
          <Link to="/datenschutz" className="transition-colors hover:text-[#172522] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;