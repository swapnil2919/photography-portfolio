import { FiInstagram, FiFacebook, FiMail, FiArrowUp } from 'react-icons/fi';
import { BsPinterest } from 'react-icons/bs';
import { siteConfig } from '../data/portfolioData';

const NAV = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Work',         href: '#categories' },
  { label: 'Services',     href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Footer() {
  const nameParts = siteConfig.name.split(' ');

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">
              {nameParts[0]}
              <span className="text-yellow-400"> {nameParts.slice(1).join(' ')}</span>
            </h3>
            <p className="text-white/35 text-sm mb-5">{siteConfig.tagline}</p>
            <div className="flex gap-3">
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} className="text-white/35 hover:text-yellow-400 transition-colors">
                  <FiInstagram size={18} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} className="text-white/35 hover:text-yellow-400 transition-colors">
                  <FiFacebook size={18} />
                </a>
              )}
              {siteConfig.social.pinterest && (
                <a href={siteConfig.social.pinterest} className="text-white/35 hover:text-yellow-400 transition-colors">
                  <BsPinterest size={18} />
                </a>
              )}
              <a href={`mailto:${siteConfig.email}`} className="text-white/35 hover:text-yellow-400 transition-colors">
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/45 hover:text-yellow-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-2">
              <p className="text-white/45 text-sm">{siteConfig.email}</p>
              <p className="text-white/45 text-sm">{siteConfig.phone}</p>
              <p className="text-white/45 text-sm">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-white/25 hover:text-yellow-400 text-xs transition-colors"
          >
            Back to top <FiArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
