import { motion } from 'framer-motion';
import { Clock, GraduationCap, ArrowRight, CalendarDays } from 'lucide-react';
import ContactModal from './ContactModal';
import { useState } from 'react';

const courses = [
  {
    title: 'JEE Mains & Advanced',
    description: 'Comprehensive preparation for engineering entrance exams. Complete syllabus coverage with advanced problem-solving techniques.',
    duration: '2 Years',
    level: 'Class 11-12',
    students: '1,200+',
    price: '₹45,000/year',
    badge: 'Most Popular',
    color: 'from-blue-600 to-blue-800',
    image: '🚀',
  },
  {
    title: 'NEET Preparation',
    description: 'Complete medical entrance exam preparation with extensive theory, NCERT mastery, and high-yield question practice.',
    duration: '2 Years',
    level: 'Class 11-12',
    students: '800+',
    price: '₹42,000/year',
    badge: 'Top Choice',
    color: 'from-emerald-600 to-emerald-800',
    image: '🩺',
  },
  {
    title: 'CBSE Board Classes',
    description: 'Board exam-focused preparation with complete syllabus coverage, previous year papers, and answer writing practice.',
    duration: '1 Year',
    level: 'Class 11-12',
    students: '600+',
    price: '₹25,000/year',
    badge: '',
    color: 'from-purple-600 to-purple-800',
    image: '📚',
  },
  {
    title: 'Foundation Course',
    description: 'Build strong conceptual foundations for competitive exams. Designed for early identification of talent and aptitude.',
    duration: '3 Years',
    level: 'Class 8-10',
    students: '400+',
    price: '₹18,000/year',
    badge: 'Early Start',
    color: 'from-amber-600 to-amber-800',
    image: '🏗️',
  },
  {
    title: 'Olympiad Preparation',
    description: 'Specialized training for NTSE, KVPY, Olympiads in Mathematics, Science, and other competitive examinations.',
    duration: '1 Year',
    level: 'Class 8-12',
    students: '200+',
    price: '₹15,000/year',
    badge: '',
    color: 'from-rose-600 to-rose-800',
    image: '🏆',
  },
  {
    title: 'Crash Course',
    description: 'Intensive short-term program for last-minute preparation. Perfect for students who need a quick revision boost.',
    duration: '6 Months',
    level: 'Class 11-12',
    students: '300+',
    price: '₹28,000',
    badge: 'Limited Seats',
    color: 'from-cyan-600 to-cyan-800',
    image: '⚡',
  },
];

const cardAnim = (i: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, delay: i * 0.1 },
});

export default function Courses() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Our Courses
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Programs Designed for{' '}
            <span className="gradient-text">Your Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Choose from our comprehensive range of courses, each meticulously designed to help you achieve your academic goals.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              {...cardAnim(i)}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 hover:border-blue-200"
            >
              {course.badge && (
                <div className="absolute top-4 right-4 bg-accent text-navy text-xs font-bold px-3 py-1 rounded-full z-10">
                  {course.badge}
                </div>
              )}
              <div className={`bg-gradient-to-br ${course.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <span className="text-5xl">{course.image}</span>
                <h3 className="text-2xl font-bold text-white mt-4">{course.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-5">{course.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <GraduationCap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <CalendarDays className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{course.students} enrolled</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-navy">{course.price}</span>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group/btn"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-light transition-colors">
            Can't Find What You Need?
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-gray-500 text-sm mt-3">Contact us for customized learning plans</p>
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
