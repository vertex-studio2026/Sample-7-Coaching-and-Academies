import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Trophy, Star } from 'lucide-react';

function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Target, value: 50000, suffix: '+', label: 'Students Trained Since 2009', description: 'Across all programs' },
  { icon: Award, value: 98, suffix: '%', label: 'Exam Selection Rate', description: 'Consistent over 5 years' },
  { icon: Trophy, value: 200, suffix: '+', label: 'Top 1000 Ranks', description: 'JEE & NEET combined' },
  { icon: Star, value: 50, suffix: '+', label: 'AIR Under 100', description: 'In JEE Advanced' },
];

const achievements = [
  { year: '2024', title: 'JEE Advanced', detail: '50+ AIR under 100', color: 'bg-blue-500' },
  { year: '2024', title: 'NEET', detail: '35+ scored above 700', color: 'bg-emerald-500' },
  { year: '2023', title: 'JEE Advanced', detail: '45+ AIR under 100', color: 'bg-purple-500' },
  { year: '2023', title: 'NEET', detail: '30+ scored above 700', color: 'bg-amber-500' },
  { year: '2022', title: 'JEE Advanced', detail: '40+ AIR under 100', color: 'bg-rose-500' },
  { year: '2022', title: 'NEET', detail: '28+ scored above 700', color: 'bg-cyan-500' },
];

export default function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-accent tracking-widest uppercase mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
          >
            Results & Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            Numbers That{' '}
            <span className="gradient-text">Speak Volumes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Our results don't lie. Every year, we set new benchmarks in competitive exam preparation.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 text-center group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Year-wise Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors"
              >
                <div className={`w-3 h-3 ${ach.color} rounded-full mt-2 flex-shrink-0`} />
                <div>
                  <span className="text-accent font-bold text-sm">{ach.year}</span>
                  <h4 className="text-white font-bold text-lg">{ach.title}</h4>
                  <p className="text-gray-400 text-sm">{ach.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
