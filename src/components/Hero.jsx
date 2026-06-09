import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { heroData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          {...fadeUp(0.2)}
          className="text-yellow-400 tracking-[0.35em] text-xs font-medium uppercase mb-5"
        >
          Professional Photography
        </motion.p>

        <motion.h1
          {...fadeUp(0.4)}
          className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-2"
        >
          {heroData.title}
        </motion.h1>

        <motion.h1
          {...fadeUp(0.6)}
          className="font-serif text-5xl md:text-7xl font-bold text-yellow-400 italic leading-tight mb-7"
        >
          {heroData.titleAccent}
        </motion.h1>

        <motion.p
          {...fadeUp(0.8)}
          className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          {...fadeUp(1.0)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={heroData.cta.href}
            className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            {heroData.cta.text}
          </a>
          <a
            href={heroData.ctaSecondary.href}
            className="px-8 py-4 border border-white/40 text-white rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            {heroData.ctaSecondary.text}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
