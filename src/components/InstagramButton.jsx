import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { siteConfig } from '../data/portfolioData';

export default function InstagramButton() {
  if (!siteConfig.social.instagram) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.4, type: 'spring' }}
      className="fixed bottom-40 right-6 z-40 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <div className="hidden sm:block bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Check out my Instagram
      </div>

      {/* Button */}
      <a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram profile"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
          style={{
            background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
          }}
        >
          <FaInstagram size={26} className="text-white" />
        </motion.div>
      </a>
    </motion.div>
  );
}
