import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { servicesData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

// ── Single package card ──────────────────────────────────────────
function PackageCard({ pkg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        pkg.popular
          ? 'border-yellow-500/60 bg-yellow-500/5 shadow-lg shadow-yellow-500/10'
          : 'border-white/10 bg-white/5 hover:bg-white/8'
      }`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-5 py-1 rounded-full whitespace-nowrap">
          MOST POPULAR
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-white mb-1">{pkg.name}</h3>
        <p className="text-white/40 text-sm mb-4">{pkg.duration}</p>
        <div className="text-4xl font-bold text-yellow-400 mb-3">{pkg.price}</div>
        <p className="text-white/50 text-sm leading-relaxed">{pkg.description}</p>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-8">
        {pkg.features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
            <FiCheck className="text-yellow-400 flex-shrink-0 mt-0.5" />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`block text-center py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
          pkg.popular
            ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-md shadow-yellow-500/30'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Book This Package
      </a>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────
export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeType = servicesData.types[activeIndex];

  return (
    <section id="services" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Packages"
          title={servicesData.title}
          subtitle={servicesData.subtitle}
        />

        {/* ── Type tabs ──────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {servicesData.types.map((type, i) => (
            <button
              key={type.id}
              onClick={() => setActiveIndex(i)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-base">{type.icon}</span>
              {type.label}

              {/* Active underline dot */}
              {activeIndex === i && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Package cards for active type ─────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Type label strip */}
            <div className="flex items-center gap-3 justify-center mb-10">
              <span className="text-2xl">{activeType.icon}</span>
              <h3 className="font-serif text-xl font-semibold text-white/80">
                {activeType.label} Packages
              </h3>
              <span className="block h-px flex-1 max-w-[80px] bg-white/10" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeType.packages.map((pkg, i) => (
                <PackageCard key={pkg.name} pkg={pkg} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/30 text-sm mt-12"
        >
          All packages include a consultation call. Custom packages available on request.
        </motion.p>
      </div>
    </section>
  );
}
