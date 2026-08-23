import { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Courses', href: '#courses' },
    { label: 'Results', href: '#results' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                <GraduationCap className="w-6 h-6 text-navy" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Edu<span className="text-accent">Vantage</span></span>
                <p className="text-[10px] text-blue-light -mt-1 tracking-widest uppercase">Academy</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <button onClick={() => setModalOpen(true)} className="gradient-accent text-navy font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-90 transition-all transform hover:scale-105">
                Free Demo Class
              </button>
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-white p-2">
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden bg-navy/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMobileMenu(false)} className="block text-gray-300 hover:text-white py-2 text-lg">{link.label}</a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-300 py-2"><Phone className="w-4 h-4" />+91 98765 43210</a>
                <button onClick={() => { setModalOpen(true); setMobileMenu(false); }} className="w-full gradient-accent text-navy font-bold px-6 py-3 rounded-xl">Book Free Demo Class</button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
