import { MapPin, Phone, Mail, Clock, MessageCircle, GraduationCap, ArrowUpRight } from 'lucide-react';
import { demoNote, navLinks, site, whatsappLink } from '../data/site';

const courseLinks = [
  'JEE Main & Advanced',
  'NEET (UG)',
  'Board classes (11 & 12)',
  'Foundation (Class 8–10)',
  'Crash course (January)',
  'Test series only',
];

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden pb-28 sm:pb-0">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-navy" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Edu<span className="text-accent">Vantage</span>
                </span>
                <p className="text-[10px] text-blue-light -mt-1 tracking-[0.18em] uppercase">Academy · Kothrud</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm mb-5">{site.tagline}</p>
            <p className="text-xs text-slate-500 leading-relaxed border-l-2 border-white/15 pl-3">{demoNote}</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Pages</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Programmes</h3>
            <ul className="space-y-3">
              {courseLinks.map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a href={site.phoneHref} className="text-slate-400 hover:text-white transition-colors text-sm">
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a href={site.emailHref} className="text-slate-400 hover:text-white transition-colors text-sm">
                  {site.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-slate-400 text-sm">
                  Mon–Fri 8 am – 9 pm
                  <br />
                  Sat 8 am – 6 pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm">
            © 2026 {site.name}. Sample site — illustrative content only.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#courses" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">
              Fees &amp; refunds
            </a>
            <a href="#faq" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">
              Common questions
            </a>
            <a
              href={site.studioCredit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5 font-medium"
            >
              {site.studioCredit.label}
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
