import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'JEE Advanced — AIR 42',
    college: 'IIT Bombay',
    text: "EduVantage changed my life completely. The faculty here doesn't just teach formulas — they build concepts from scratch. Dr. Rajesh Sir's physics classes were the backbone of my preparation. I'm so grateful for the guidance and support throughout my journey.",
    rating: 5,
    initial: 'PS',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Arjun Mehta',
    role: 'NEET — Scored 712/720',
    college: 'AIIMS Delhi',
    text: "The structured approach to NEET preparation at EduVantage is unmatched. Regular tests, detailed analysis, and personalized doubt-solving sessions helped me stay on track. I never felt lost during my preparation. This academy truly cares about every student.",
    rating: 5,
    initial: 'AM',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    name: 'Mrs. Kavita Gupta',
    role: 'Parent of Rohan Gupta (JEE AIR 156)',
    college: 'IIT Madras',
    text: "As a parent, I was looking for an institution that provides not just quality education but also a safe and supportive environment. EduVantage exceeded my expectations. They kept me updated on Rohan's progress and were always available for guidance.",
    rating: 5,
    initial: 'KG',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Deepak Nair',
    role: 'JEE Advanced — AIR 89',
    college: 'IIT Delhi',
    text: "The small batch size meant I got personal attention from every teacher. The test series was extremely well-designed and perfectly mimicked the actual exam pattern. I was always ready for the real exam thanks to the rigorous practice here.",
    rating: 5,
    initial: 'DN',
    color: 'from-amber-500 to-amber-700',
  },
  {
    name: 'Ananya Patel',
    role: 'NEET — Scored 689/720',
    college: 'Maulana Azad Medical College',
    text: "Dr. Sneha Ma'am's biology classes were incredibly detailed. She made complex topics so easy to understand. The regular revision sessions and mock tests helped me maintain consistency. I would recommend EduVantage to every aspiring medical student.",
    rating: 5,
    initial: 'AP',
    color: 'from-rose-500 to-rose-700',
  },
  {
    name: 'Mr. Sanjay Reddy',
    role: 'Parent of Ananya Patel',
    college: 'N/A',
    text: "What impressed us the most was the transparent communication. They provided detailed performance reports and regular parent-teacher meetings. We could always see our daughter's progress and areas needing improvement. Worth every penny.",
    rating: 5,
    initial: 'SR',
    color: 'from-cyan-500 to-cyan-700',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-4 bg-blue-50 px-4 py-1.5 rounded-full"
          >
            Student Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-6"
          >
            Hear From Our{' '}
            <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Real stories from real students and parents who transformed their academic journey with EduVantage.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 card-shadow border border-gray-100 hover:border-blue-200 relative"
            >
              <div className="absolute top-6 right-6 text-5xl text-blue-100 font-serif leading-none">"</div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">{testimonial.text}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.college}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
