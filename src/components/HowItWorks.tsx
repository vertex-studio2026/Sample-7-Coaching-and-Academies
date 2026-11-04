import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, UserCheck, ClipboardCheck, FileText, Check, ArrowRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import ContactModal from './ContactModal';
import { includedInWriting, steps, site } from '../data/site';

const icons = [Phone, UserCheck, ClipboardCheck, FileText];

export default function HowItWorks() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="admission" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Admission process"
          title={
            <>
              Four steps, and <span className="text-gradient-blue">none of them is a deposit</span>
            </>
          }
          description="You should be able to decide without pressure. The demo classes are free, the fee sheet is in writing, and the refund terms are on the same page you sign."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = icons[index] ?? Phone;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center group-hover:bg-navy transition-colors">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6"
        >
          <div className="bg-surface border border-slate-200 rounded-2xl p-7 lg:p-8">
            <h3 className="text-lg font-bold text-navy mb-2">What you leave with, in writing</h3>
            <p className="text-sm text-slate-600 mb-5">
              Before any payment, the front desk hands you a single sheet with all four items below. If something is
              not on it, it is not part of the deal.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {includedInWriting.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy rounded-2xl p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Start with a visit</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {site.demoPromise} The centre is open six days a week — walk in, count the desks, and ask the front
                desk for the last result sheet.
              </p>
            </div>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full gradient-accent text-navy font-bold px-5 py-3 rounded-xl text-sm hover:brightness-105 transition-all flex items-center justify-center gap-2"
              >
                Book two free classes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={site.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-white/25 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Get directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
