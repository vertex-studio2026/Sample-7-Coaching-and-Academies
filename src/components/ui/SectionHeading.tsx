import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: 'center' | 'left';
};

export default function SectionHeading({ eyebrow, title, description, dark = false, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const descriptionWidth = align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl';

  return (
    <div className={`flex flex-col ${alignment} ${align === 'center' ? 'max-w-3xl mx-auto' : ''} mb-14`}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={
          dark
            ? 'inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-accent'
            : 'inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700'
        }
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`text-3xl sm:text-4xl lg:text-[2.9rem] font-black tracking-tight leading-[1.12] mb-5 ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-base sm:text-lg leading-relaxed ${descriptionWidth} ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
