import { motion } from 'framer-motion';
import { Rocket, ChevronRight, Users, Target, Trophy } from 'lucide-react';
import ContactModal from './ContactModal';
import { useState } from 'react';

export default function FinalCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8">
            <Rocket className="w-5 h-5 text-accent" />
            <span className="text-sm text-gray-300 font-medium">Limited Seats Available for 2025-26</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
        >
          Ready to Take the{' '}
          <span className="gradient-text">Next Step?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Don't let another year pass without taking action. Join 50,000+ students who chose EduVantage and transformed their academic careers. Your dream is one demo class away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="gradient-accent text-navy font-bold px-10 py-5 rounded-xl text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-amber-500/25"
          >
            Book Your Free Demo Class
            <ChevronRight className="w-5 h-5" />
          </button>
          <a
            href="tel:+919876543210"
            className="glass text-white font-semibold px-10 py-5 rounded-xl text-lg hover:bg-white/15 transition-all flex items-center justify-center gap-3"
          >
            <Rocket className="w-5 h-5" />
            Talk to Our Counselor
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { icon: Users, value: '50,000+', label: 'Students' },
            { icon: Target, value: '98%', label: 'Results' },
            { icon: Trophy, value: '15+', label: 'Years' },
          ].map((item) => (
            <div className="text-center">
              <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl font-black text-white">{item.value}</p>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
