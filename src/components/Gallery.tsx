import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SampleNote from './ui/SampleNote';
import { facilities, site } from '../data/site';

export default function Gallery() {
  return (
    <section id="centre" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="The centre"
          title={
            <>
              See the rooms <span className="text-gradient-blue">before you visit</span>
            </>
          }
          description="Four rooms and a front desk, on Paud Road in Kothrud. Photos are unretouched and show the actual furniture — including how many chairs fit in a batch."
        />

        <div className="grid lg:grid-cols-3 gap-5">
          {facilities.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-navy ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={`${item.title} at the EduVantage centre, ${site.locality}`}
                width={1100}
                height={600}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent mb-1.5">
                  {item.tag}
                </span>
                <p className="text-white font-bold text-lg leading-tight mb-1">{item.title}</p>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">{item.caption}</p>
              </figcaption>
            </motion.figure>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-navy mb-4">Visit the centre</h3>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {site.addressLines[0]}
                    <br />
                    {site.addressLines[1]}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <dl className="text-sm text-slate-600 space-y-1">
                    {site.hours.map((entry) => (
                      <div key={entry.days} className="flex flex-col">
                        <dt className="font-medium text-navy">{entry.days}</dt>
                        <dd>{entry.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            <a
              href={site.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-between gap-2 bg-navy text-white font-semibold px-5 py-3 rounded-xl text-sm hover:bg-navy-light transition-colors"
            >
              Open in Google Maps
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <SampleNote>
          Representative images for this demo. Swap in real, properly lit photographs of the academy’s own rooms —
          no stock photos of other people’s classrooms, and no images of students without a signed consent form.
        </SampleNote>
      </div>
    </section>
  );
}
