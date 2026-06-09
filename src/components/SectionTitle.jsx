import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <p className="text-yellow-400 tracking-[0.3em] text-sm font-medium uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
