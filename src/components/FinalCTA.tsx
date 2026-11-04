import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, CalendarDays } from 'lucide-react';
import ContactModal from './ContactModal';
import { site } from '../data/site';

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/15 rounded-full px-4 py-2 mb-7"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true" />
          <span className="text-sm text-slate-200">{site.admissionLine}</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white mb-6 leading-[1.08] tracking-tight"
        >
          Come and count <span className="gradient-text">the desks.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          Two free classes, then decide. No deposit, no registration form, and no follow-up calls after you say no.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center mb-12"
        >
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="gradient-accent text-navy font-bold px-8 py-4 rounded-xl text-base hover:brightness-105 transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/20"
          >
            Book two free classes
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <a
            href={site.phoneHref}
            className="glass text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto text-left"
        >
          {[
            {
              icon: MapPin,
              label: 'The centre',
              lines: site.addressLines,
            },
            {
              icon: CalendarDays,
              label: 'Batches',
              lines: ['Next batch starts 12 January 2027', 'June batch: 8 June 2027'],
            },
            {
              icon: Phone,
              label: 'Talk to us',
              lines: ['Mon–Sat, 8 am – 9 pm', site.email],
            },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl p-5">
              <item.icon className="w-4 h-4 text-accent mb-2.5" aria-hidden="true" />
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                {item.label}
              </p>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-white/90 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
