import { ArrowUpRight, Linkedin, Mail, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  ["Start", "/"],
  ["Leistungen", "/services"],
  ["Über uns", "/about"],
  ["Projekte", "/projects"],
  ["Kontakt", "/contact"],
] as const;

const services = ["Softwareentwicklung", "Software Testing & QA", "Webentwicklung", "KI-Automatisierung", "IT-Beratung"];

const Footer = () => (
  <footer className="border-t border-border bg-[hsl(213_31%_7%)]">
    <div className="site-container pt-16 sm:pt-20">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-8">
        <div className="max-w-sm">
          <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Quality1st Startseite">
            <span className="flex h-10 w-10 items-center justify-center border border-primary/35 bg-primary/10 text-primary">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="font-display text-xl font-semibold text-foreground">Quality<span className="text-primary">1st</span></span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Softwareentwicklung, Testing und Automatisierung für digitale Produkte, die stabil, verständlich und bereit für den nächsten Schritt sind.
          </p>
          <a
            href="https://www.linkedin.com/company/quality1stde"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Quality1st auf LinkedIn"
            title="Quality1st auf LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <nav aria-label="Footer Navigation">
          <h2 className="font-display text-sm font-semibold text-foreground">Navigation</h2>
          <ul className="mt-5 grid gap-3">
            {navigation.map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">Leistungen</h2>
          <ul className="mt-5 grid gap-3">
            {services.map((service) => (
              <li key={service}>
                <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-foreground">Kontakt</h2>
          <ul className="mt-5 grid gap-4 text-sm">
            <li>
              <a href="mailto:info@quality-1st.de" className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>info@quality-1st.de</span>
              </a>
            </li>
            <li>
              <a href="tel:+491705975430" className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+49 (0) 170 5975430</span>
              </a>
            </li>
          </ul>
          <Link to="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Projekt besprechen
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Quality1st. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/impressum" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Impressum</Link>
          <Link to="/datenschutz" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;