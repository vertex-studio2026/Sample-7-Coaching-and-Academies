import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MapPin, Clock } from 'lucide-react';
import classroomImg from '../assets/classroom.jpg';
import ContactModal from './ContactModal';
import { heroFacts, site } from '../data/site';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="top" className="hero-gradient relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 grain opacity-40" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/15 rounded-full px-4 py-2 mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-sm text-slate-200">{site.admissionLine}</span>
              </div>

              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem] font-black text-white leading-[1.06] tracking-tight mb-5">
                Class 8–12 coaching
                <br />
                <span className="gradient-text">in Kothrud, Pune.</span>
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-accent mb-3">
                Small batches. Clear reports. No hype.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-9 leading-relaxed">
                JEE, NEET and board preparation with twenty students per batch, two free demo classes, and a written
                progress report for parents every month.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 mb-11">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="gradient-accent text-navy font-bold px-7 py-4 rounded-xl text-base hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  Book two free classes
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#courses"
                  className="glass text-white font-semibold px-7 py-4 rounded-xl text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  See courses &amp; fees
                </a>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 max-w-xl">
                {heroFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                  >
                    <dt className="flex items-center gap-1.5 text-white font-bold text-lg leading-none mb-1.5">
                      <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                      {fact.value}
                    </dt>
                    <dd className="text-xs text-slate-400 leading-snug">{fact.label}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40">
                <img
                  src={classroomImg}
                  alt="A classroom at the EduVantage centre in Kothrud with twenty desks and a whiteboard"
                  width={1100}
                  height={600}
                  className="w-full h-[300px] sm:h-[380px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" aria-hidden="true" />

                <div className="absolute top-4 right-4 glass rounded-xl px-3 py-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs text-white font-medium">Doubt desk 6:00–8:30 pm</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="text-white font-semibold">Classroom · Kothrud centre</p>
                  <p className="text-slate-300 text-sm">Twenty desks. The twenty-first chair does not exist.</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Next batch</p>
                  <p className="text-sm font-bold text-navy">12 January 2027</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs sm:text-sm text-slate-600">
            <span className="font-semibold text-navy">JEE Main &amp; Advanced</span> · NEET (UG) · CBSE &amp; State
            board · Foundation Class 8–10
          </p>
          <a
            href={site.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-slate-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-blue-600" aria-hidden="true" />
            {site.addressLines[1]} · Mon–Sat
          </a>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
