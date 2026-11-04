import { useState } from 'react';
import { MessageCircle, Phone, CalendarDays } from 'lucide-react';
import ContactModal from './ContactModal';
import { site, whatsappLink } from '../data/site';

export default function StickyCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-900/25 hover:bg-green-700 hover:scale-105 transition-all"
        aria-label="Chat with the centre on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden glass-dark border-t border-white/10 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-2.5">
          <a
            href={site.phoneHref}
            className="flex-1 bg-white/10 border border-white/15 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call
          </a>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="flex-[1.6] gradient-accent text-navy font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
          >
            <CalendarDays className="w-4 h-4" aria-hidden="true" />
            Book free classes
          </button>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
