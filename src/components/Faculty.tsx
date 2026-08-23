import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Clock } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Head of Physics',
    qualification: 'Ph.D. Physics, IIT Delhi',
    experience: '18 Years',
    subject: 'Physics — JEE & Boards',
    specialty: 'Advanced Mechanics & Electromagnetism',
    initial: 'RK',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'Prof. Meera Sharma',
    role: 'Senior Mathematics Faculty',
    qualification: 'M.Tech Mathematics, IIT Bombay',
    experience: '15 Years',
    subject: 'Mathematics — JEE Advanced',
    specialty: 'Calculus & Algebra Expert',
    initial: 'MS',
    color: 'from-purple-600 to-purple-800',
  },
  {
    name: 'Dr. Amit Patel',
    role: 'Head of Chemistry',
    qualification: 'Ph.D. Chemistry, IISc Bangalore',
    experience: '20 Years',
    subject: 'Chemistry — JEE & NEET',
    specialty: 'Organic & Physical Chemistry',
    initial: 'AP',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    name: 'Dr. Sneha Reddy',
    role: 'Head of Biology',
    qualification: 'Ph.D. Biology, AIIMS Delhi',
    experience: '12 Years',
    subject: 'Biology — NEET',
    specialty: 'Human Physiology & Genetics',
    initial: 'SR',
    color: 'from-rose-600 to-rose-800',
  },
  {
    name: 'Mr. Vikram Singh',
    role: 'Senior Physics Faculty',
    qualification: 'M.Sc Physics, IISER Pune',
    experience: '10 Years',
    subject: 'Physics — NEET & Boards',
    specialty: 'Optics & Modern Physics',
    initial: 'VS',
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Mrs. Anjali Gupta',
    role: 'Senior Mathematics Faculty',
    qualification: 'M.Sc Mathematics, DU',
    experience: '14 Years',
    subject: 'Mathematics — NEET & Boards',
    specialty: 'Trigonometry & Coordinate Geometry',
    initial: 'AG',
    color: 'from-cyan-600 to-cyan-800',
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Meet Our Faculty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Learn From the{' '}
            <span className="gradient-text">Best in the Field</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Our faculty members are not just teachers — they are mentors who have shaped thousands of successful careers.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-shadow hover:border-blue-200"
            >
              <div className={`bg-gradient-to-br ${teacher.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">{teacher.initial}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{teacher.role}</p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <GraduationCap className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{teacher.experience} of Teaching Experience</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{teacher.subject}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{teacher.specialty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
