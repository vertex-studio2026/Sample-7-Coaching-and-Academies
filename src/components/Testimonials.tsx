import { motion } from 'framer-motion';
import { Quote, Star, ClipboardCheck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SampleNote from './ui/SampleNote';
import { reviews } from '../data/site';

const reviewProcess = [
  'At the end of every term, parents and students fill the same five-question form — not a testimonial written by us.',
  'Quotes are published with a signed consent and without edits, including the critical ones.',
  'Ratings are shown as the average of all returned forms, and the number of forms is printed next to it.',
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What families say"
          title={
            <>
              Reviews we can <span className="text-gradient-blue">show the source of</span>
            </>
          }
          description="Short, specific notes from parents and students — no ranks, no college names, no “changed my life” copy. Each one comes from a term-end feedback form."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.blockquote
              key={review.attribution}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 card-shadow hover:border-blue-200 flex flex-col"
            >
              <Quote className="w-7 h-7 text-blue-200 mb-4" aria-hidden="true" />
              <p className="text-slate-700 leading-relaxed text-[15px] mb-6">{review.quote}</p>
              <footer className="mt-auto flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${review.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{review.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{review.attribution}</p>
                  <div
                    role="img"
                    className="flex items-center gap-0.5 mt-1"
                    aria-label="Rated 5 out of 5 in the term feedback form"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white border border-slate-200 rounded-2xl p-7 lg:p-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <ClipboardCheck className="w-5 h-5 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">How we collect these</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Published reviews should have a paper trail. Ours starts with the same form every family fills in.
            </p>
          </div>
          <ul className="space-y-3">
            {reviewProcess.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <SampleNote>
          Sample reviews for layout only. Replace them with quotes from real feedback forms, used with written
          consent — and never invent a student, a rank or a college for a testimonial card.
        </SampleNote>
      </div>
    </section>
  );
}
