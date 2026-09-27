import { useEffect, useState } from "react";
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Start", path: "/" },
  { name: "Leistungen", path: "/services" },
  { name: "Über uns", path: "/about" },
  { name: "Projekte", path: "/projects" },
  { name: "Insights", path: "/insights" },
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

  const isActive = (path: string) => path === "/" ? location.pathname === path : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9ded9] bg-white/95">
      <div className="site-container">
        <div className="flex min-h-[4.25rem] items-center justify-between gap-3">
          <Link to="/" className="group inline-flex min-h-11 items-center gap-2.5" aria-label="Quality1st Startseite">
            <span className="flex h-9 w-9 items-center justify-center border border-[#cad7d0] bg-[#edf3ef] text-[#24574b]">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <span className="font-display text-lg font-semibold tracking-normal text-[#172522] sm:text-xl">
              Quality<span className="text-[#376457]">1st</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`relative min-h-11 px-2 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] xl:px-3 ${
                  isActive(item.path) ? "text-[#24574b]" : "text-[#586760] hover:text-[#172522]"
                }`}
              >
                {item.name}
                {isActive(item.path) && <span aria-hidden="true" className="absolute inset-x-2 bottom-2 h-px bg-[#b25336] xl:inset-x-3" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden min-h-10 items-center bg-[#173f36] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#24574b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] lg:inline-flex">Projekt besprechen</Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-[#cad7d0] text-[#172522] transition-colors hover:border-[#376457] hover:bg-[#edf3ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] lg:hidden"
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
        <div className="fixed inset-0 z-[70] bg-[#172522]/55 p-3 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Menü schließen"
            onClick={() => setIsMenuOpen(false)}
          />
          <div id="mobile-navigation" className="relative mx-auto flex min-h-[calc(100dvh-1.5rem)] max-w-xl flex-col border border-[#d9ded9] bg-white p-5">
            <div className="flex items-center justify-between border-b border-[#d9ded9] pb-5">
              <span className="font-display text-lg font-semibold text-[#172522]">Navigation</span>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-[#cad7d0] text-[#172522] hover:border-[#376457] hover:bg-[#edf3ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336]"
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
                  className={`flex min-h-14 items-center justify-between border-b border-[#d9ded9] px-1 font-display text-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b25336] ${
                    isActive(item.path) ? "text-[#24574b]" : "text-[#172522] hover:text-[#376457]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#89958f]">0{index + 1}</span>
                    {item.name}
                  </span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex h-12 w-full items-center justify-center gap-2 bg-[#173f36] text-sm font-semibold text-white hover:bg-[#24574b]">
                Projekt besprechen <ArrowRight aria-hidden="true" />
              </Link>
              <p className="mt-4 text-center text-xs text-[#697772]">IT-Dienstleistungen, Entwicklung & Quality Engineering</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;