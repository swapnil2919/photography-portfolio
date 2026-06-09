import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiX } from 'react-icons/fi';
import { categories } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import Lightbox from './Lightbox';

// ── Gallery modal shown when a category card is clicked ──────────
function GalleryModal({ category, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const prev = () =>
    setLightboxIndex((i) => (i - 1 + category.images.length) % category.images.length);
  const next = () =>
    setLightboxIndex((i) => (i + 1) % category.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/92 overflow-hidden"
    >
      {/* Scrollable inner area */}
      <div className="h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <span className="text-4xl">{category.icon}</span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">
                {category.title}
              </h3>
              <p className="text-yellow-400 text-sm mt-1">{category.subtitle}</p>
              <p className="text-white/50 text-sm mt-2 max-w-lg">{category.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors flex-shrink-0 ml-4"
            >
              <FiX size={22} />
            </button>
          </div>

          {/* Masonry photo grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {category.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FiEye className="text-white drop-shadow" size={26} />
                </div>
                <p className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={category.images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Single category card ─────────────────────────────────────────
function CategoryCard({ category, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-[420px]"
      onClick={() => onOpen(category)}
    >
      {/* Cover image */}
      <img
        src={category.coverImage}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Hover tint */}
      <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-3xl block mb-3">{category.icon}</span>
        <h3 className="font-serif text-xl font-bold text-white mb-1">{category.title}</h3>
        <p className="text-yellow-400 text-sm mb-3">{category.subtitle}</p>

        {/* Description — slides in on hover */}
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          {category.description}
        </p>

        <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
          <FiEye size={15} />
          <span>View Gallery · {category.images.length} photos</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────
export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="categories" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="My Work"
          title="Photography Specialties"
          subtitle="Each category represents a unique approach to capturing life's most meaningful moments. Click any card to explore the gallery."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              onOpen={setActiveCategory}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCategory && (
          <GalleryModal
            category={activeCategory}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
