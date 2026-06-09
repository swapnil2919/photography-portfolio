import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/portfolioData';

// Strips spaces and + from phone number for wa.me URL
const waNumber = siteConfig.phone.replace(/[\s+\-()]/g, '');

const waMessage = encodeURIComponent(
  `Hi ${siteConfig.name.split(' ')[0]}! I'm interested in your photography services. Can you please share more details?`
);

const WA_URL = `https://wa.me/${waNumber}?text=${waMessage}`;

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring' }}
      className="fixed bottom-24 right-6 z-40 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden sm:block bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
      >
        Chat on WhatsApp
      </motion.div>

      {/* Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 cursor-pointer"
        >
          <FaWhatsapp size={28} className="text-white" />

          {/* Ping animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        </motion.div>
      </a>
    </motion.div>
  );
}
