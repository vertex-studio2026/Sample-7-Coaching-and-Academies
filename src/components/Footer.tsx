import { MapPin, Phone, Mail, Clock, MessageCircle, GraduationCap, Globe, Share2, Image, Video, Users } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-navy relative overflow-hidden pb-24 sm:pb-0">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-navy" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Edu<span className="text-accent">Vantage</span></span>
                <p className="text-[10px] text-blue-light -mt-1 tracking-widest uppercase">Academy</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming academic dreams into reality since 2009. India's most trusted coaching academy for competitive exam preparation.
            </p>
            <div className="flex gap-3">
              {[{Icon: Globe, label: 'Website'}, {Icon: Share2, label: 'Share'}, {Icon: Image, label: 'Photos'}, {Icon: Video, label: 'Videos'}, {Icon: Users, label: 'Community'}].map(({Icon, label}, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors group" aria-label={label}>
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Faculty', 'Student Results', 'Testimonials', 'Gallery', 'Careers', 'Blog'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {['JEE Mains & Advanced', 'NEET Preparation', 'CBSE Board Classes', 'Foundation Course', 'Olympiad Prep', 'Crash Course'].map(course => (
                <li key={course}>
                  <a href="#courses" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">402, Knowledge Tower, Rajouri Garden, New Delhi - 110027</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors text-sm">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="https://wa.me/919876543210" className="text-gray-400 hover:text-green-400 transition-colors text-sm">WhatsApp: +91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@eduvantage.edu.in" className="text-gray-400 hover:text-white transition-colors text-sm">info@eduvantage.edu.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">Mon - Sat: 8:00 AM - 9:00 PM</p>
              </div>
            </div>
            <button onClick={() => setModalOpen(true)} className="w-full gradient-accent text-navy font-bold py-3 rounded-xl hover:opacity-90 transition-all text-sm">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 EduVantage Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
