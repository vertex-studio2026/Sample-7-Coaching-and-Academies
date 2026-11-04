import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Users, IndianRupee, FileText } from 'lucide-react';
import ContactModal from './ContactModal';
import SectionHeading from './ui/SectionHeading';
import SampleNote from './ui/SampleNote';
import { courses, feeNotes, site } from '../data/site';

export default function Courses() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const openFor = (courseName: string) => {
    setSelectedCourse(courseName);
    setModalOpen(true);
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Courses & fees"
          title={
            <>
              Every fee, <span className="text-gradient-blue">before you call</span>
            </>
          }
          description="Six programmes, one price list. Fees are per year and include material, tests, the doubt desk and recordings — so there is no second invoice three months in."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col bg-white rounded-2xl border border-slate-200 p-7 card-shadow hover:border-blue-200"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold text-navy tracking-tight leading-snug">{course.name}</h3>
                {course.highlight && (
                  <span className="flex-shrink-0 bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {course.highlight}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-500 mb-5">{course.who}</p>

              <div className="flex items-end gap-1.5 mb-5">
                <span className="text-3xl font-black text-navy tracking-tight">{course.fee}</span>
                <span className="text-sm text-slate-500 pb-1">{course.feeUnit}</span>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500 mb-5">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                  {course.batch}
                </span>
              </div>

              <p className="text-slate-600 text-[15px] leading-relaxed mb-5">{course.summary}</p>

              <ul className="space-y-2.5 mb-7">
                {course.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => openFor(course.name)}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-blue-900 transition-colors"
                >
                  Book a demo
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <span className="text-xs text-slate-400">2 free classes</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid lg:grid-cols-[1.35fr_0.65fr] gap-6"
        >
          <div className="bg-white rounded-2xl border border-slate-200 p-7 lg:p-8">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy mb-4">
              <IndianRupee className="w-5 h-5 text-blue-600" aria-hidden="true" />
              The fine print, in plain language
            </h3>
            <ul className="space-y-3">
              {feeNotes.map((note) => (
                <li key={note} className="flex items-start gap-2.5 text-[15px] text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy rounded-2xl p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <FileText className="w-8 h-8 text-accent mb-4" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white mb-2.5">Not sure which batch fits?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A 15-minute call is usually enough to place a student. If a batch is wrong for your child, we will
                say so — including when the right answer is a different academy.
              </p>
            </div>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => openFor('Not sure yet — please advise')}
                className="w-full bg-white text-navy font-bold px-5 py-3 rounded-xl text-sm hover:bg-slate-100 transition-colors"
              >
                Ask for advice
              </button>
              <a
                href={site.phoneHref}
                className="w-full border border-white/25 text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>

        <SampleNote>
          Sample price list for this demo. Before launch, replace these figures with the academy’s actual fee
          structure — including the instalment dates and the refund terms printed on its fee sheet. Prices are the
          first thing a parent screenshots, so they should never be placeholders.
        </SampleNote>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} defaultCourse={selectedCourse} />
    </section>
  );
}
