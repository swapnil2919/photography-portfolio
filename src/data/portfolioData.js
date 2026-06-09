// ================================================================
//  PORTFOLIO DATA FILE — Edit this file to customise your website
// ================================================================
//
//  ADDING A NEW PHOTOGRAPHY CATEGORY
//  ----------------------------------
//  1. Copy any existing object inside the `categories` array below.
//  2. Give it a unique `id`, update the text fields, swap the image
//     URLs, and add as many photos to `images` as you like.
//  3. Save the file — the new category card appears automatically.
//
// ================================================================

// ── Site-wide info ───────────────────────────────────────────────
export const siteConfig = {
  name: 'Darshil Solanki',
  tagline: "Capturing Life's Most Beautiful Moments",
  bio: 'With over 4 years of experience behind the lens I specialise in capturing authentic emotions and creating timeless memories. Every photo tells a unique story.',
  location: 'Surat, Gujarat, India',
  email: 'darshstd@gmail.com',
  phone: '+91 9510481823',

  // Set a value to null to hide that social link
  social: {
    instagram: 'https://www.instagram.com/memories__reels_?igsh=MTl6MXltYjE3Nzdvcg%3D%3D&utm_source=qr',
    facebook: '#',
    pinterest: '#',
    twitter: null,
  },

  // Displayed as animated counters in the About section
  stats: [
    { value: '4+',   label: 'Years Experience' },
    { value: '150+', label: 'Happy Clients' },
    { value: '50K+', label: 'Photos Taken' },
    // { value: '12',   label: 'Awards Won' },
  ],
};

// ── Hero section ─────────────────────────────────────────────────
export const heroData = {
  title: 'Freezing Moments,',
  titleAccent: 'Forever in Time',
  description:
    'Professional photography services for weddings, newborns, portraits, and more. Let me capture your most precious moments.',
  backgroundImage:
    '',
  cta:          { text: 'View My Work',    href: '#categories' },
  ctaSecondary: { text: 'Book a Session',  href: '#contact' },
};

// ── About section ────────────────────────────────────────────────
export const aboutData = {
  title: 'About Me',
  subtitle: 'The Story Behind the Lens',
  description:
    "Hi, I'm Darshil! Photography for me is more than just a profession it's a passion. I believe every moment has a story worth preserving, and it's my honour to be the one to tell it.",
  description2:
    "From intimate wedding ceremonies to the first laughs of a newborn, I approach every shoot with creativity, care, and an eye for authentic moments that will make you smile for years to come.",
  image:
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
};

// ── Photography categories ────────────────────────────────────────
// Each entry below becomes its own card + gallery on the website.
export const categories = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    subtitle: 'Timeless Love Stories',
    description:
      'Your wedding day is one of the most important days of your life. I capture every beautiful detail — from nervous excitement while getting ready to the joy of your first dance.',
    icon: '💍',
    coverImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', caption: 'Bride getting ready' },
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', caption: 'The ceremony' },
      { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', caption: 'Together forever' },
      { url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80', caption: 'Bridal bouquet' },
      { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80', caption: 'Outdoor ceremony' },
      { url: 'https://images.unsplash.com/photo-1591604329036-1bca8a9e0bf5?w=800&q=80', caption: 'First dance' },
    ],
  },
  {
    id: 'baby',
    title: 'Baby Photography',
    subtitle: 'Little Ones, Big Moments',
    description:
      'Newborns change so quickly. Let me capture those tiny fingers, peaceful sleeps, and first smiles in stunning detail that you will treasure for a lifetime.',
    icon: '🍼',
    coverImage:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80', caption: 'Peaceful dreams' },
      { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', caption: 'Tiny fingers' },
      { url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80', caption: 'Baby smile' },
      { url: 'https://images.unsplash.com/photo-1581736328-a0d4abb6e612?w=800&q=80', caption: 'Baby portrait' },
      { url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80', caption: 'Newborn' },
      { url: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=800&q=80', caption: 'Sweet moments' },
    ],
  },
  {
    id: 'portrait',
    title: 'Portrait Photography',
    subtitle: 'Your Story, Beautifully Told',
    description:
      'Whether it is a professional headshot, a personal branding session, or just a beautiful portrait for yourself, I create images that truly represent who you are.',
    icon: '🎭',
    coverImage:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80', caption: 'Classic portrait' },
      { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', caption: 'Natural light' },
      { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', caption: 'Golden hour' },
      { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', caption: 'Studio session' },
      { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80', caption: 'Outdoor portrait' },
      { url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', caption: 'Editorial style' },
    ],
  },
  {
    id: 'family',
    title: 'Family Photography',
    subtitle: 'Memories That Last Generations',
    description:
      'Family portraits capture the love, laughter, and unique dynamics that make your family special. These are the photos that will hang on your walls and be passed down for generations.',
    icon: '👨‍👩‍👧‍👦',
    coverImage:
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80', caption: 'Family portrait' },
      { url: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&q=80', caption: 'Family laughing' },
      { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80', caption: 'Sunday morning' },
      { url: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80', caption: 'Outdoor family' },
      { url: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&q=80', caption: 'Together' },
      { url: 'https://images.unsplash.com/photo-1561894866-48fe268d9afc?w=800&q=80', caption: 'Family fun' },
    ],
  },

  // ── ADD MORE CATEGORIES HERE ──────────────────────────────────
  // Example: uncomment and edit the block below to add a new one
  //
  // {
  //   id: 'events',
  //   title: 'Event Photography',
  //   subtitle: 'Every Event, Perfectly Captured',
  //   description: 'Corporate events, birthday parties, graduations — every gathering has stories worth keeping.',
  //   icon: '🎉',
  //   coverImage: 'https://images.unsplash.com/photo-XXXXXXXXXX?w=1200&q=80',
  //   images: [
  //     { url: 'https://images.unsplash.com/photo-XXXXXXXXXX?w=800&q=80', caption: 'Caption here' },
  //   ],
  // },
];

// ── Services / pricing packages ──────────────────────────────────
// To add a new photography type, add a new object to the `types` array.
// Each type has its own Basic / Standard / Premium packages.
export const servicesData = {
  title: 'Photography Packages',
  subtitle: 'Choose your photography type and pick the plan that fits you best.',

  // ── ADD / REMOVE PHOTOGRAPHY TYPES HERE ──────────────────────────
  types: [
    {
      id: 'wedding',
      label: 'Wedding Photography',
      icon: '💍',
      packages: [
        {
          name: 'Basic',
          price: '₹45,000',
          // duration: '4 Hours',
          description: 'Perfect for small, intimate wedding ceremonies.',
          popular: false,
          features: [
            // '4-hour coverage',
            // '1 photographer',
            // '1 location',
            // '150+ edited photos',
            // 'Online gallery delivery',
            // 'Print release included',
            'Photography',
            'Videography',
            '3 hours edited video',
            'All photos',
            'Pendrive with videos and photos',
          ],
        },
        {
          name: 'Standard',
          price: '₹72,000',
          // duration: '8 Hours',
          description: 'Our most popular choice for full-day wedding coverage.',
          popular: true,
          features: [
            // '8-hour coverage',
            // '1 photographer + 1 assistant',
            // '2 locations',
            // '300+ edited photos',
            // 'Online gallery delivery',
            // 'Print release included',
            // '1 canvas print (10×12)',
            // 'Same-week preview (20 photos)',
            'Full basic package features',
            '40 page album',
            '2 reels (60 sec each)',
            'Invitation digital video (30 sec)',
            'Mini album for parents (10 pages)',
            'Couple calendar',
            'Candid photography',
          ],
        },
        {
          name: 'Premium',
          price: '₹1,40,000',
          // duration: 'Full Day',
          description: 'End-to-end luxury coverage from getting ready to reception.',
          popular: false,
          features: [
            // // 'Full-day coverage (10 hrs)',
            // '2 photographers',
            // 'Unlimited locations',
            // '500+ edited photos',
            // 'Online gallery delivery',
            // 'Print release included',
            // 'Premium photo album (20 pages)',
            // '2 canvas prints',
            // 'Drone shots (if permitted)',
            // 'Rush delivery available',
            'Full standard package features',
            'Cinematic wedding film (10-15 min)',
            'Drone coverage',
            '5 Plazma',
            '45 page album',
            'Teaser reel (30 sec)',
            '1 frame print photo (16×20)',
          ],
        },
      ],
    },
    {
      id: 'pre-wedding',
      label: 'Pre-Wedding',
      icon: '💑',
      packages: [
        {
          name: 'Basic',
          price: '₹9,000',
          // duration: '2 Hours',
          description: 'A short, sweet session to capture your love story.',
          popular: false,
          features: [
            // '2-hour session',
            // '1 photographer',
            // '1 outdoor location',
            // '80+ edited photos',
            // 'Online gallery delivery',
            // 'Print release included',
            'Candid photography',
            '10 days countdown photo',
            '20 edited photos',
            'All raw photos',
            'Pendrive with photos',
          ],
        },
        {
          name: 'Standard',
          price: '₹25,000',
          // duration: '4 Hours',
          description: 'Multiple looks and locations for a fuller story.',
          popular: true,
          features: [
            // '4-hour session',
            // '1 photographer',
            // '2 locations',
            // '150+ edited photos',
            // 'Online gallery delivery',
            // 'Print release included',
            // '1 framed print (8×10)',
            // 'Outfit change assistance',
            'Full basic package features',,
            'Videography near hometown',
            'Cinematic video (30 sec)',
            'Candid photography',
            '2-3 minutes video',
            'Pre-wedding photography'
          ],
        },
        {
          name: 'Premium',
          price: '₹40,000',
          // duration: 'Full Day',
          description: 'A cinematic, full-day pre-wedding experience.',
          popular: false,
          features: [
            // 'Full-day session (8 hrs)',
            // '1 photographer + 1 assistant',
            // 'Unlimited locations',
            // '300+ edited photos',
            // 'Online gallery delivery',
            // 'Print release included',
            // 'Premium photo album (15 pages)',
            // 'Drone shots (if permitted)',
            // 'Cinematic reel (60 sec)',
            'Full standard package features',
            'Invitation digital card video (30 sec)',
            'Drone coverage',
          ],
        },
      ],
    },

    // ── ADD MORE TYPES HERE ───────────────────────────────────────
    // {
    //   id: 'portrait',
    //   label: 'Portrait',
    //   icon: '🎭',
    //   packages: [ ...Basic / Standard / Premium objects... ],
    // },
  ],
};

// ── Testimonials ─────────────────────────────────────────────────
export const testimonialsData = {
  title: 'What Clients Say',
  subtitle: 'Real Stories from Real People',
  testimonials: [
    {
      name: 'Sarah & Michael',
      category: 'Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80',
      text: 'Elena captured our wedding day in the most beautiful way. Every photo tells a story and we could not be happier. We cry every time we look through our album!',
    },
    {
      name: 'Jennifer Thompson',
      category: 'Newborn',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      text: 'I was nervous about a newborn shoot but Elena made it so comfortable. The photos of our baby are absolutely stunning. Worth every penny!',
    },
    {
      name: 'David Chen',
      category: 'Portrait',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'Professional, creative, and talented. Elena\'s portrait work helped me revamp my personal brand completely. The photos are incredible!',
    },
    {
      name: 'The Rodriguez Family',
      category: 'Family',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
      text: 'We have had our family photos done by Elena three years in a row now. She has a wonderful way of capturing our kids\' personalities naturally.',
    },
    {
      name: 'Emma & James',
      category: 'Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      text: 'From our first meeting to receiving our wedding album, the experience was exceptional. Elena is a true artist and a joy to work with.',
    },
  ],
};

// ── Contact section ───────────────────────────────────────────────
export const contactData = {
  title: "Let's Work Together",
  subtitle: 'Start Your Journey',
  description:
    'Ready to create beautiful memories? Fill out the form and I will get back to you within 24 hours.',
  bookingNote: 'Currently booking for 2025 & 2026',
  // These appear as options in the booking form dropdown
  availableFor: ['Weddings', 'Newborns', 'Portraits', 'Families', 'Events'],
};
