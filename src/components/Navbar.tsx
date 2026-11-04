import { useEffect, useState } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import ContactModal from './ContactModal';
import { navLinks, site } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile panel on Escape and lock the page behind it.
  useEffect(() => {
    if (!mobileMenu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenu(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenu(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = overflow;
    };
  }, [mobileMenu]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenu ? 'glass-dark py-2.5' : 'bg-transparent py-4'
        }`}
        aria-label="Main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                <GraduationCap className="w-6 h-6 text-navy" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-white leading-none">
                  Edu<span className="text-accent">Vantage</span>
                </span>
                <p className="text-[9px] sm:text-[10px] text-blue-light mt-0.5 tracking-[0.18em] uppercase">
                  Academy · Kothrud
                </p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] xl:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xl:inline">{site.phoneDisplay}</span>
                <span className="xl:hidden">Call</span>
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="gradient-accent text-navy font-bold px-5 py-2.5 rounded-xl text-sm hover:brightness-105 transition-all"
              >
                Free demo class
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenu((open) => !open)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-expanded={mobileMenu}
              aria-controls="mobile-menu"
              aria-label={mobileMenu ? 'Close menu' : 'Open menu'}
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div id="mobile-menu" className="lg:hidden bg-navy border-t border-white/10 mt-2.5">
            <div className="px-4 py-5">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    className="text-slate-200 hover:text-white py-3 text-base border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="pt-5 space-y-3">
                <a href={site.phoneHref} className="flex items-center gap-2 text-slate-300 py-1 text-sm">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(true);
                    setMobileMenu(false);
                  }}
                  className="w-full gradient-accent text-navy font-bold px-6 py-3 rounded-xl"
                >
                  Book two free classes
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
