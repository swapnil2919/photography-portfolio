import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { BsPinterest } from 'react-icons/bs';
import { contactData, siteConfig } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const EMPTY_FORM = { name: '', email: '', phone: '', category: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate your own email service / API here
    setSubmitted(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400/50 placeholder:text-white/25 transition-colors';

  return (
    <section id="contact" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Get in Touch"
          title={contactData.title}
          subtitle={contactData.description}
        />

        <div className="grid md:grid-cols-2 gap-16">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-white/5 rounded-2xl border border-white/10"
              >
                <span className="text-5xl mb-4">🎉</span>
                <h3 className="font-serif text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">I will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className={`${inputClass} ${!form.category ? 'text-white/25' : ''}`}
                >
                  <option value="" className="bg-gray-900 text-white">
                    Select Session Type
                  </option>
                  {contactData.availableFor.map((type) => (
                    <option key={type} value={type} className="bg-gray-900 text-white">
                      {type}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Tell me about your vision…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Booking note */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 text-sm px-4 py-2 rounded-full border border-yellow-500/20">
              <span>📅</span>
              <span>{contactData.bookingNote}</span>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { Icon: FiMail,    label: 'Email',    value: siteConfig.email },
                { Icon: FiPhone,   label: 'Phone',    value: siteConfig.phone },
                { Icon: FiMapPin,  label: 'Location', value: siteConfig.location },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest">{label}</p>
                    <p className="text-white/75 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Follow Along</p>
              <div className="flex gap-3">
                {siteConfig.social.instagram && (
                  <a href={siteConfig.social.instagram} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:text-yellow-400 text-white/50 transition-all">
                    <FiInstagram size={17} />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a href={siteConfig.social.facebook} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:text-yellow-400 text-white/50 transition-all">
                    <FiFacebook size={17} />
                  </a>
                )}
                {siteConfig.social.pinterest && (
                  <a href={siteConfig.social.pinterest} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 hover:text-yellow-400 text-white/50 transition-all">
                    <BsPinterest size={17} />
                  </a>
                )}
              </div>
            </div>

            {/* Available-for tags */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Available For</p>
              <div className="flex flex-wrap gap-2">
                {contactData.availableFor.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/55 text-xs rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
