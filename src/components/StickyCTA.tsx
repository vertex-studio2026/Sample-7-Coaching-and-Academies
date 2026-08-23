import { MessageCircle, Phone } from 'lucide-react';
import ContactModal from './ContactModal';
import { useState } from 'react';

export default function StickyCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20EduVantage%20courses.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">1</span>
      </a>

      {/* Call floating button (mobile) */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-110 transition-all sm:hidden"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden glass-dark border-t border-white/10 p-3">
        <div className="flex gap-3">
          <a
            href="tel:+919876543210"
            className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="flex-[2] gradient-accent text-navy font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            Book Free Demo
          </button>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
