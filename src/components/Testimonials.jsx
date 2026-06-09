import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsStarFill, BsQuote } from 'react-icons/bs';
import { testimonialsData } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const AUTO_PLAY_MS = 5000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const list = testimonialsData.testimonials;

  const next = useCallback(() => setCurrent((c) => (c + 1) % list.length), [list.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + list.length) % list.length), [list.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = list[current];

  return (
    <section id="testimonials" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          eyebrow="Testimonials"
          title={testimonialsData.title}
          subtitle={testimonialsData.subtitle}
        />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 border border-white/8 rounded-2xl p-8 md:p-12 text-center"
            >
              <BsQuote className="text-yellow-400/25 mx-auto mb-6" size={52} />

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <BsStarFill key={i} className="text-yellow-400" size={14} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/30"
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-yellow-400 text-xs">{t.category} Session</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 text-white/50 hover:text-white bg-white/8 hover:bg-white/15 rounded-full transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-yellow-400 w-6' : 'bg-white/25 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 text-white/50 hover:text-white bg-white/8 hover:bg-white/15 rounded-full transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
