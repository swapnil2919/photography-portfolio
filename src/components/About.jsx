import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutData, siteConfig } from '../data/portfolioData';

function StatCard({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold font-serif text-yellow-400">{value}</div>
      <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutData.image}
              alt="Photographer"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
            {/* Decorative offset border */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-yellow-500/25 rounded-2xl -z-10" />
            {/* Small accent badge */}
            <div className="absolute -bottom-4 left-8 bg-yellow-500 text-black text-sm font-bold px-5 py-2 rounded-full shadow-lg">
              {siteConfig.stats[0].value} Years of Experience
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-400 tracking-[0.3em] text-sm font-medium uppercase mb-3">
              {aboutData.title}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {aboutData.subtitle}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              {aboutData.description}
            </p>
            <p className="text-white/50 leading-relaxed mb-12">
              {aboutData.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {siteConfig.stats.map((stat, i) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
