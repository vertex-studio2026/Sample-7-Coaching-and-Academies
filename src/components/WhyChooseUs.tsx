import { motion } from 'framer-motion';
import { Users, Eye, ClipboardList, HelpCircle, Trophy } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Industry-Expert Faculty',
    description: 'Learn from IIT, AIIMS alumni and subject matter experts with 10+ years of teaching experience.',
  },
  {
    icon: Eye,
    title: 'Personalized Attention',
    description: 'Every student gets a personalized study plan with weekly one-on-one progress review sessions.',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'Maximum 25 students per batch ensuring focused teaching and interactive learning experience.',
  },
  {
    icon: ClipboardList,
    title: 'Regular Tests & Analysis',
    description: 'Weekly chapter tests, monthly full syllabus tests with detailed performance analytics.',
  },
  {
    icon: HelpCircle,
    title: 'Doubt-Solving Sessions',
    description: 'Dedicated doubt-clearing sessions every evening with subject experts available for 1-on-1 help.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: '98% selection rate in top exams with 200+ students in top 1000 ranks over the last 5 years.',
  },
];

const fadeInUp = (i: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay: i * 0.1 },
});

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Why Students & Parents{' '}
            <span className="gradient-text">Trust EduVantage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We don't just teach — we transform. Our holistic approach to education combines expert guidance with proven strategies.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeInUp(i)}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-100 rounded-2xl p-8 card-shadow hover:border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Commitment to Your Success</h3>
              <p className="text-blue-200 leading-relaxed">
                We believe every student has unlimited potential. Our mission is to unlock that potential through personalized coaching, regular assessment, and unwavering support — turning aspirations into achievements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years of Excellence' },
                { value: '50K+', label: 'Students Impacted' },
                { value: '50+', label: 'Expert Faculty' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center">
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
