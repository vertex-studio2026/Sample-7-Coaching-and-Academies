import { useEffect, useMemo, useRef, useState } from 'react';
import {
  X,
  User,
  Phone,
  Mail,
  BookOpen,
  ChevronDown,
  MessageSquare,
  Send,
  Copy,
  Check,
  Pencil,
  ShieldCheck,
} from 'lucide-react';
import { contactCourses, site, whatsappLink } from '../data/site';

interface Props {
  open: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const timeSlots = [
  'Weekday mornings (7–10 am)',
  'Weekday evenings (4–7 pm)',
  'Saturday (8 am – 1 pm)',
  'Not decided yet',
];

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'course', string>>;

export default function ContactModal({ open, onClose, defaultCourse = '' }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(defaultCourse);
  const [slot, setSlot] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [step, setStep] = useState<'form' | 'ready'>('form');
  const [copied, setCopied] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  // Reset the flow whenever the modal is opened from a new CTA.
  useEffect(() => {
    if (open) {
      setStep('form');
      setCopied(false);
      setCourse(defaultCourse);
      lastFocused.current = document.activeElement as HTMLElement;
      const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 80);
      return () => window.clearTimeout(timer);
    }
    lastFocused.current?.focus?.();
  }, [open, defaultCourse]);

  // Lock background scrolling while the dialog is open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // Escape closes, Tab is trapped inside the dialog.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const summary = useMemo(() => {
    const lines = [
      'Demo class request — EduVantage Academy',
      `Student: ${name.trim() || '—'}`,
      `Phone: ${phone.trim() || '—'}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Course: ${course || '—'}`,
      slot ? `Preferred time: ${slot}` : null,
      message.trim() ? `Notes: ${message.trim()}` : null,
    ].filter(Boolean);
    return lines.join('\n');
  }, [name, phone, email, course, slot, message]);

  const waHref = whatsappLink(summary);
  const mailHref = `${site.emailHref}?subject=${encodeURIComponent(
    'Demo class request — EduVantage Academy'
  )}&body=${encodeURIComponent(summary)}`;

  const validate = () => {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Please enter the student’s or parent’s name.';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) next.phone = 'Enter a 10-digit mobile number.';
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      next.email = 'That email address looks incomplete.';
    }
    if (!course) next.course = 'Choose a course, or pick “Not sure yet”.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) setStep('ready');
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  if (!open) return null;

  const fieldClass = (hasError?: string) =>
    `w-full pl-11 pr-4 py-3 rounded-xl border bg-white text-navy placeholder:text-slate-400 outline-none transition-colors ${
      hasError ? 'border-red-300 focus:border-red-400' : 'border-slate-200 focus:border-blue-500'
    }`;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-form-title"
        className="relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full text-slate-500 hover:text-navy hover:bg-slate-100 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'ready' ? (
          <div className="p-7 sm:p-8">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
              <Check className="w-7 h-7 text-green-700" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">Your enquiry is ready</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Nothing has been stored or sent yet. Send it on WhatsApp or by email, and the centre will reply within
              one working day (Monday to Saturday).
            </p>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Summary</p>
              <pre className="whitespace-pre-wrap break-words font-sans text-sm text-slate-700 leading-relaxed">
                {summary}
              </pre>
            </div>

            <div className="space-y-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3.5 rounded-xl hover:bg-green-700 transition-colors"
              >
                <Send className="w-4 h-4" /> Send on WhatsApp
              </a>
              <a
                href={mailHref}
                className="w-full flex items-center justify-center gap-2 border border-slate-300 text-navy font-semibold py-3.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-4 h-4" /> Send by email
              </a>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={copySummary}
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy details'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Pencil className="w-4 h-4" /> Edit details
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-7 sm:p-8">
            <div className="mb-6 pr-8">
              <h3 id="demo-form-title" className="text-2xl font-bold text-navy mb-1.5">
                Book two free classes
              </h3>
              <p className="text-slate-500 text-sm">
                Tell us the class and target exam. We will suggest a batch and a demo slot.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Student or parent name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <input
                    ref={firstFieldRef}
                    id="demo-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'demo-name-error' : undefined}
                    className={fieldClass(errors.name)}
                  />
                </div>
                {errors.name && (
                  <p id="demo-name-error" className="text-xs text-red-600 mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      id="demo-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'demo-phone-error' : undefined}
                      className={fieldClass(errors.phone)}
                    />
                  </div>
                  {errors.phone && (
                    <p id="demo-phone-error" className="text-xs text-red-600 mt-1.5">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="demo-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <input
                      id="demo-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'demo-email-error' : undefined}
                      className={fieldClass(errors.email)}
                    />
                  </div>
                  {errors.email && (
                    <p id="demo-email-error" className="text-xs text-red-600 mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-course" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" aria-hidden="true" />
                    <select
                      id="demo-course"
                      value={course}
                      onChange={(event) => setCourse(event.target.value)}
                      aria-invalid={Boolean(errors.course)}
                      aria-describedby={errors.course ? 'demo-course-error' : undefined}
                      className={`${fieldClass(errors.course)} appearance-none ${
                        course ? 'text-navy' : 'text-slate-400'
                      }`}
                    >
                      <option value="">Select a course</option>
                      {contactCourses.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3.5 w-5 h-5 text-slate-400 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                  {errors.course && (
                    <p id="demo-course-error" className="text-xs text-red-600 mt-1.5">
                      {errors.course}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="demo-slot" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Preferred time <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <ChevronDown
                      className="absolute right-3 top-3.5 w-5 h-5 text-slate-400 pointer-events-none"
                      aria-hidden="true"
                    />
                    <select
                      id="demo-slot"
                      value={slot}
                      onChange={(event) => setSlot(event.target.value)}
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-navy focus:border-blue-500 outline-none transition-colors appearance-none"
                    >
                      <option value="">Any slot</option>
                      {timeSlots.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="demo-notes" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Anything we should know? <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <textarea
                    id="demo-notes"
                    placeholder="Current school, board, last test score, or a question about fees"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={3}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-navy placeholder:text-slate-400 focus:border-blue-500 outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 gradient-accent text-navy font-bold py-4 rounded-xl text-base hover:brightness-105 transition-all"
            >
              Continue
            </button>
            <p className="flex items-start gap-2 text-xs text-slate-500 mt-3 leading-relaxed">
              <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                This sample form stores nothing. On the next step you choose WhatsApp or email to send the enquiry.
                We never share your number.
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
