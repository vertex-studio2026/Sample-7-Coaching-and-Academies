import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What courses does EduVantage Academy offer?',
    answer: 'We offer comprehensive preparation for JEE Mains & Advanced, NEET, CBSE Board Classes (Class 11 & 12), Foundation Courses (Class 8-10), Olympiad Preparation (NTSE, KVPY), and intensive Crash Courses. Each program is designed by subject experts following the latest exam patterns and syllabus.',
  },
  {
    question: 'What is the fee structure for the courses?',
    answer: 'Our fees vary based on the course and duration. JEE & NEET preparation starts at ₹42,000/year, Board Classes at ₹25,000/year, Foundation Course at ₹18,000/year, and Crash Courses at ₹28,000. We also offer early-bird discounts and sibling discounts. Contact us for a detailed fee breakdown.',
  },
  {
    question: 'Do you offer free demo classes?',
    answer: 'Yes! We strongly believe in letting you experience our teaching methodology before committing. Book a free demo class through our website or call us at +91 98765 43210. During the demo, you can interact with faculty, understand the teaching approach, and evaluate the learning environment.',
  },
  {
    question: 'What are the batch timings?',
    answer: 'We offer flexible timings to suit all students:\n\n• Morning Batch: 8:00 AM – 12:00 PM\n• Day Batch: 10:00 AM – 2:00 PM\n• Evening Batch: 4:00 PM – 8:00 PM\n• Weekend Batch: Saturday & Sunday, 9:00 AM – 4:00 PM\n\nDoubt-solving sessions are available daily from 6:00 PM – 9:00 PM.',
  },
  {
    question: 'Do you offer online classes as well?',
    answer: 'Absolutely! We offer three learning modes:\n\n• Offline: Face-to-face classes at our center\n• Online Live: Real-time interactive classes via Zoom\n• Hybrid: Combination of offline and online\n\nAll online students receive the same study material, test series, and doubt-solving support as offline students.',
  },
  {
    question: 'What is the batch size?',
    answer: 'We maintain small batch sizes of maximum 25 students per class to ensure personalized attention. For our premium one-on-one mentorship program, we have even smaller groups of 10-15 students.',
  },
  {
    question: 'How is the test series structured?',
    answer: 'Our test series includes:\n\n• Chapter-wise tests (weekly)\n• Full syllabus tests (monthly)\n• Mock exams (bi-monthly, exam-like environment)\n• Previous year papers analysis\n\nEach test comes with detailed performance reports, rank analysis, and personalized improvement plans.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 7-day no-questions-asked refund policy from the date of enrollment. After 7 days, pro-rata refunds are available. We also offer the option to defer admission to the next batch or academic year at no extra cost.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-navy pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-surface rounded-2xl"
        >
          <p className="text-gray-600 mb-3">Still have questions?</p>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors">
            Call us at +91 98765 43210
          </a>
        </motion.div>
      </div>
    </section>
  );
}
