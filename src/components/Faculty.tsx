import { motion } from 'framer-motion';
import { GraduationCap, Clock, BookOpen, Lightbulb } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SampleNote from './ui/SampleNote';
import { faculty } from '../data/site';

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Faculty"
          title={
            <>
              The teacher who will <span className="text-gradient-blue">actually take the class</span>
            </>
          }
          description="No visiting “star faculty” who appears once a month. The person below teaches your batch every week, and their name is printed on your fee sheet."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((teacher, index) => (
            <motion.article
              key={teacher.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden card-shadow hover:border-blue-200"
            >
              <div className={`bg-gradient-to-br ${teacher.color} p-6 flex items-center gap-4`}>
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">{teacher.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{teacher.name}</h3>
                  <p className="text-white/80 text-sm">{teacher.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <GraduationCap className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{teacher.years}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <BookOpen className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{teacher.teaches}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{teacher.note}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4"
        >
          <strong className="text-navy">Ask for documents, not adjectives.</strong> We keep degree certificates and
          previous teaching references on file at the front desk. Any parent can see them before paying — you do not
          have to take a website’s word for it.
        </motion.p>

        <SampleNote>
          Sample profiles for this demo. A live site should carry the real names and qualifications of the
          academy’s teachers, checked against documents, with each teacher’s written consent to be listed.
        </SampleNote>
      </div>
    </section>
  );
}
