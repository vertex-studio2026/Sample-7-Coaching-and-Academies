import { motion } from 'framer-motion';
import { FileText, MessageCircle, Phone, ShieldCheck, Users, ListChecks } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SampleNote from './ui/SampleNote';
import { resultRules, sampleResultSheet, site, whatsappLink } from '../data/site';

const ruleIcons = [ListChecks, ShieldCheck, Users];

export default function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Results, reported honestly"
          title={
            <>
              Scores with a <span className="gradient-text">denominator</span>
            </>
          }
          description="A top rank with no batch size next to it tells you nothing. Every sheet we publish states how many students were in the batch, how many wrote the exam, and how the rest of the class did."
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-start">
          <div className="space-y-4">
            {resultRules.map((rule, index) => {
              const Icon = ruleIcons[index] ?? FileText;
              return (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass rounded-2xl p-6 flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1.5">{rule.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{rule.body}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a
                href={whatsappLink('Hi, could you send me the last published batch-wise result sheet?')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Request the last result sheet
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl shadow-black/30"
          >
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="text-lg font-bold text-navy tracking-tight">What a result sheet looks like</h3>
              <span className="flex-shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded">
                Sample
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-5">{sampleResultSheet.batch}</p>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {[sampleResultSheet.strength, sampleResultSheet.sat, sampleResultSheet.consent].map((item) => (
                <div key={item} className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-2">
                  <p className="text-[11px] text-slate-600 leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-50 text-[11px] font-semibold uppercase tracking-wider text-slate-500 px-3 py-2">
                <span>Student</span>
                <span className="text-right">Board</span>
                <span className="text-right">Test avg.</span>
                <span className="text-right">Change</span>
              </div>
              {sampleResultSheet.rows.map((row) => (
                <div
                  key={row.roll}
                  className="grid grid-cols-4 px-3 py-2.5 text-sm border-t border-slate-100 text-slate-700"
                >
                  <span className="font-medium text-navy">{row.roll}</span>
                  <span className="text-right tabular-nums">{row.board}</span>
                  <span className="text-right tabular-nums">{row.testAvg}</span>
                  <span
                    className={`text-right tabular-nums font-semibold ${
                      row.change.startsWith('−') ? 'text-red-600' : 'text-green-700'
                    }`}
                  >
                    {row.change}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Names are replaced by roll numbers until a parent signs the consent form. Change is measured against
              the student’s first diagnostic test, not against the topper.
            </p>
          </motion.div>
        </div>

        <SampleNote tone="dark">
          The sheet above is a sample built for this demo, not a record of real students. A live academy should paste
          its own verified data here — and delete the section entirely until it has a full cycle to publish.
        </SampleNote>
      </div>
    </section>
  );
}
