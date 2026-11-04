import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { faqs, site, whatsappLink } from '../data/site';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              The questions parents <span className="text-gradient-blue">actually ask</span>
            </>
          }
          description="Fees, batch size, refunds and what happens when a teacher leaves — answered without a sales call."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'border-blue-200 bg-blue-50/40' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
                  >
                    <span className="font-semibold text-navy text-[15px] sm:text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 bg-surface border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-navy mb-1">Still unsure? Ask a direct question.</p>
            <p className="text-sm text-slate-600">{site.replyPromise}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-navy-light transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 text-navy font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
