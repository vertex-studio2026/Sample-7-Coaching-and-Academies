import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, GraduationCap, Trophy, BookOpen, Music } from 'lucide-react';

const galleryItems = [
  { icon: Camera, title: 'Classroom Sessions', description: 'Interactive and engaging classroom learning', color: 'bg-blue-500', emoji: '📸' },
  { icon: Users, title: 'Student Activities', description: 'Group discussions and peer learning', color: 'bg-emerald-500', emoji: '👥' },
  { icon: GraduationCap, title: 'Workshop Events', description: 'Special workshops and seminars', color: 'bg-purple-500', emoji: '🎓' },
  { icon: Trophy, title: 'Award Ceremonies', description: 'Celebrating student achievements', color: 'bg-amber-500', emoji: '🏆' },
  { icon: BookOpen, title: 'Study Camps', description: 'Intensive pre-exam preparation camps', color: 'bg-rose-500', emoji: '📖' },
  { icon: Music, title: 'Cultural Events', description: 'Annual day celebrations and events', color: 'bg-cyan-500', emoji: '🎉' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Classes', 'Events', 'Achievements'];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Life at{' '}
            <span className="gradient-text">EduVantage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Take a glimpse into the vibrant learning environment that makes EduVantage special.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 relative overflow-hidden h-64 flex flex-col items-center justify-center`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 text-center">
                  <span className="text-6xl mb-4 block">{item.emoji}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
