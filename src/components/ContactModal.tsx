import { useState } from 'react';
import { X, User, Mail, Phone, MessageSquare, BookOpen, ChevronDown } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const courseOptions = [
  'JEE Mains & Advanced',
  'NEET Preparation',
  'CBSE Board Classes (Class 11)',
  'CBSE Board Classes (Class 12)',
  'Foundation Course (Class 8-10)',
  'Olympiad Preparation',
  'Other',
];

export default function ContactModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [course, setCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setCourse('');
      onClose();
    }, 3000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Thank You! 🎉</h3>
            <p className="text-gray-600">Our team will contact you within 24 hours to schedule your free demo class.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-navy mb-1">Book Your Free Demo Class</h3>
              <p className="text-gray-500 text-sm">Fill in your details and we'll get back to you shortly.</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input required type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-navy" />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input required type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-navy" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input required type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-navy" />
              </div>
              <div className="relative">
                <BookOpen className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <select value={course} onChange={e => setCourse(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-navy appearance-none bg-white">
                  <option value="">Select Course</option>
                  {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <textarea placeholder="Any message or specific requirement..." value={message} onChange={e => setMessage(e.target.value)} rows={3}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-navy resize-none" />
              </div>
            </div>

            <button type="submit" className="w-full mt-6 gradient-accent text-navy font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-all transform hover:scale-[1.02]">
              Book My Free Demo Class
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">No commitment required. Your data is safe with us.</p>
          </form>
        )}
      </div>
    </div>
  );
}
