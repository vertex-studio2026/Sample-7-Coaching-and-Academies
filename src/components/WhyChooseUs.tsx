import { motion } from 'framer-motion';
import { Users, UserCheck, NotebookPen, FileText, MessageCircle, Video, X } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { commitments, noList } from '../data/site';

const icons = [Users, UserCheck, NotebookPen, FileText, MessageCircle, Video];

export default function WhyChooseUs() {
  return (
    <section id="how-we-teach" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we teach"
          title={
            <>
              Six promises you can <span className="text-gradient-blue">check on a visit</span>
            </>
          }
          description="We do not advertise ranks or percentages. These are the things a parent can verify by walking in, counting chairs and asking for the fee sheet — so we put them in writing instead of in a slogan."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, index) => {
            const Icon = icons[index] ?? Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group bg-white border border-slate-200 rounded-2xl p-7 card-shadow hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2.5 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{item.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 gradient-navy rounded-2xl p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 grain opacity-30" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                What you will <span className="text-accent">not</span> get from us
              </h3>
              <p className="text-slate-300 leading-relaxed text-[15px]">
                Most coaching ads in Pune promise a rank in the headline and bury the batch size in the fine print.
                We decided to leave that list out entirely.
              </p>
            </div>
            <ul className="space-y-3">
              {noList.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200 text-[15px]">
                  <span className="w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
