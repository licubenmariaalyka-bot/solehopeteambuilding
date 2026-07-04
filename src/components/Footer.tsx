import { Globe, ShieldCheck, ArrowUpRight } from "lucide-react";

const logoImg = "/images/sole-hope-logo-wide.png";

interface FooterProps {
  onNavigate?: (view: string, section?: string) => void;
  onOpenContact?: (experience?: string) => void;
}

export default function Footer({ onNavigate, onOpenContact }: FooterProps) {
  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact("General Inquiry");
    }
  };

  const handleNavClick = (view: string, section?: string) => {
    if (onNavigate) {
      onNavigate(view, section);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-deep-ocean text-white font-sans pt-16 pb-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Sole Hope Logo" 
                className="h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => handleNavClick("home")}
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              Sole Hope helps provide protective shoes, care, and hope for children and families in Uganda. Turning donated denim into life-changing protection.
            </p>
            <p className="text-[11px] text-white/50 pt-1 font-mono">
              Registered 501(c)(3) Nonprofit Humanitarian Organization.
            </p>
          </div>

          {/* ABOUT Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-clay">
              ABOUT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a 
                  href="https://www.solehope.org/why-we-exist" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-clay transition-colors inline-flex items-center gap-1"
                >
                  About Sole Hope <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://solehope.org/financials" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-clay transition-colors inline-flex items-center gap-1"
                >
                  Financials <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://solehope.org/blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-clay transition-colors inline-flex items-center gap-1"
                >
                  Blog <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* DONATE Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-clay">
              DONATE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <a 
                  href="https://solehope.org/give" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-clay transition-colors inline-flex items-center gap-1"
                >
                  Give <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>

            </ul>
          </div>

          {/* CONNECT Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-clay">
              CONNECT
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <button 
                  onClick={handleContactClick}
                  className="hover:text-clay transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-semibold"
                >
                  Contact Us
                </button>
              </li>

            </ul>

            {/* Social Media Icons */}
            <div className="pt-2">
              <p className="text-[10px] font-mono uppercase tracking-wider text-white/50 mb-2">Follow Us</p>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a 
                  href="https://facebook.com/solehope" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-clay text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/solehope" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-clay text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://x.com/solehope" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter X"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-clay text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/solehope" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-clay text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Website */}
                <a 
                  href="https://solehope.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-clay text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2010 - 2026 SOLE HOPE INC. All rights reserved. 501(c)(3) organization.</p>
          <div className="flex gap-6 font-mono">
            <a href="https://solehope.org" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-all flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> solehope.org
            </a>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Jinja-Franklin Verified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
