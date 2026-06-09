import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Categories      from './components/Categories';
import Services        from './components/Services';
import Testimonials    from './components/Testimonials';
import Contact         from './components/Contact';
import Footer          from './components/Footer';
import WhatsAppButton   from './components/WhatsAppButton';
import InstagramButton  from './components/InstagramButton';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating action buttons */}
      <InstagramButton />
      <WhatsAppButton />

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-xl shadow-yellow-500/30 transition-colors"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
