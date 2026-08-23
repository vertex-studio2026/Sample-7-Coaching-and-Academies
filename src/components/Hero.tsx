import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Star, BookOpen, Play, ChevronRight } from 'lucide-react';
import ContactModal from './ContactModal';
import { useState } from 'react';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Admissions Open for 2025-26</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
              Learn Better.
              <br />
              <span className="gradient-text">Score Higher.</span>
              <br />
              <span className="text-gray-400">Build Your Future.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Join India's most trusted coaching academy with 15+ years of excellence. 
              Our proven methodology has helped 50,000+ students crack their dream exams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => setModalOpen(true)} className="gradient-accent text-navy font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25">
                Book a Free Demo Class
                <ChevronRight className="w-5 h-5" />
              </button>
              <a href="#courses" className="group glass text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/15 transition-all flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explore Our Courses
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, value: '50,000+', label: 'Students Trained' },
                { icon: Award, value: '98%', label: 'Results Rate' },
                { icon: TrendingUp, value: '15+', label: 'Years Experience' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-5 h-5 text-accent" />
                    <span className="text-2xl sm:text-3xl font-black text-white">{item.value}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-3xl p-8 relative z-10">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80 text-sm">Live Class in Progress</span>
                    <span className="flex items-center gap-1.5 text-green-400 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">PK</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Physics - JEE Advanced</h4>
                      <p className="text-white/60 text-sm">Chapter: Rotational Mechanics</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between text-white/80 text-sm mb-2">
                      <span>Progress</span>
                      <span>72%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-accent rounded-full h-2 w-[72%]" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Star className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-white font-bold text-xl">4.9/5</p>
                    <p className="text-gray-500 text-xs">Student Rating</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Play className="w-6 h-6 text-blue-light mx-auto mb-2" />
                    <p className="text-white font-bold text-xl">500+</p>
                    <p className="text-gray-500 text-xs">Video Lectures</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">AIR 42</p>
                    <p className="text-gray-500 text-xs">JEE Advanced 2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">100% Selection</p>
                    <p className="text-gray-500 text-xs">in Top 100 Colleges</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
