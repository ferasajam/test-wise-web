import {  Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Quality1st</h3>
            <p className="text-primary-foreground/80 mb-4">
              Ihr Partner für professionelle Softwaretests. Zuverlässig, 
              individuell und effizient - damit Ihre Software perfekt funktioniert.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/quality1stde" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail size={16} />
                <span>info@quality-1st.de</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone size={16} />
                <span>+4915167543709</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Quality1st Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <Link to="/impressum" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;