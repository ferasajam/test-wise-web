import { useEffect, useState } from "react";
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Start", path: "/" },
  { name: "Leistungen", path: "/services" },
  { name: "Über uns", path: "/about" },
  { name: "Projekte", path: "/projects" },
  { name: "Kontakt", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="site-container">
        <div className="glass-panel flex min-h-[4.25rem] items-center justify-between px-3 sm:px-4">
          <Link to="/" className="group inline-flex min-h-11 items-center gap-2.5" aria-label="Quality1st Startseite">
            <span className="flex h-9 w-9 items-center justify-center border border-primary/35 bg-primary/10 text-primary transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="font-display text-lg font-semibold tracking-normal text-foreground sm:text-xl">
              Quality<span className="text-primary">1st</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`relative min-h-11 px-3 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && <span aria-hidden="true" className="absolute inset-x-3 bottom-2 h-px bg-primary" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden h-10 rounded-md bg-primary px-3.5 text-xs font-bold text-primary-foreground shadow-[0_4px_0_hsl(202_90%_32%)] transition-all hover:translate-y-px hover:bg-primary hover:shadow-[0_3px_0_hsl(202_90%_32%)] lg:inline-flex"
            >
              <Link to="/contact">Erstgespräch</Link>
            </Button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              title={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] bg-[hsl(211_34%_5%/0.7)] p-3 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Menü schließen"
            onClick={() => setIsMenuOpen(false)}
          />
          <div id="mobile-navigation" className="glass-panel relative mx-auto flex min-h-[calc(100dvh-1.5rem)] max-w-xl flex-col p-5">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <span className="font-display text-lg font-semibold text-foreground">Navigation</span>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-border text-foreground hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Menü schließen"
                title="Menü schließen"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-7 grid gap-1" aria-label="Mobile Hauptnavigation">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex min-h-14 items-center justify-between border-b border-border px-1 font-display text-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold tracking-[0.08em] text-muted-foreground">0{index + 1}</span>
                    {item.name}
                  </span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Button asChild className="h-12 w-full rounded-md bg-primary text-sm font-bold text-primary-foreground">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Projekt besprechen
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">Quality1st - Software & Quality Engineering</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;