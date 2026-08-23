import { motion } from 'framer-motion';
import { BookOpen, UserCheck, GraduationCap, Trophy } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    step: '01',
    title: 'Choose Your Course',
    description: 'Browse our comprehensive catalog of courses and select the one that matches your academic goals and aspirations.',
    color: 'bg-blue-600',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'Attend a Free Demo',
    description: 'Experience our teaching methodology firsthand. Attend a free demo class and meet our expert faculty members.',
    color: 'bg-emerald-600',
  },
  {
    icon: GraduationCap,
    step: '03',
    title: 'Start Learning',
    description: 'Join your batch and begin your journey with personalized study plans, regular tests, and continuous mentorship.',
    color: 'bg-purple-600',
  },
  {
    icon: Trophy,
    step: '04',
    title: 'Achieve Your Goals',
    description: 'With consistent effort and our proven system, crack your dream exam and secure admission to top institutions.',
    color: 'bg-amber-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Your Journey to{' '}
            <span className="gradient-text">Success Starts Here</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Four simple steps to transform your academic potential into outstanding results.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-amber-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative text-center"
            >
              <div className="relative inline-flex mb-6">
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-lg`}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
