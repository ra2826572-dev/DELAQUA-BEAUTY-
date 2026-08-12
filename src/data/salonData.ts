import { ServiceItem, DealItem, FacialPackage, GalleryItem, ReviewItem } from '../types';

export const BRAND_INFO = {
  name: 'DELAQUA Beauty Salon',
  brand: 'Delaqua by Asma',
  tagline: 'Signature By Asma',
  category: 'Women’s Salon & Spa',
  address: '50-A Nizami Street, Block A, People’s Colony No. 1, Faisalabad, 38000, Pakistan',
  phone: '0321 7664078',
  phoneRaw: '03217664078',
  whatsapp: '923217664078',
  hours: '11:00 AM – 8:00 PM, Monday–Sunday',
  rating: '4.6',
  totalReviews: 133,
  googleReviewUrl: 'https://www.google.com/search?q=Delaqua+Beauty+Salon+Faisalabad',
  directionsUrl: 'https://maps.google.com/?q=Delaqua+Beauty+Salon+50-A+Nizami+Street+People%27s+Colony+No.+1+Faisalabad',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2818987114165!2d73.0984857!3d31.4063266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392243d7fa3d4a6f%3A0xb35a7a13d332d733!2sPeople%27s%20Colony%20No.%201%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s'
};

export const SERVICES_LIST: ServiceItem[] = [
  // HAIR
  {
    id: 'h1',
    name: 'Hair Cut & Styling',
    category: 'hair',
    description: 'Custom cut by senior stylists tailored to your face structure and hair texture.',
    startingPrice: 'Rs. 2,000',
    popular: true,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h2',
    name: 'Blow Dry & Waves',
    category: 'hair',
    description: 'Voluminous blowouts, beachy waves, or sleek straight hair finish.',
    startingPrice: 'Rs. 1,200',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h3',
    name: 'Single Process Hair Dye',
    category: 'hair',
    description: 'Rich, even color with gloss finish and grey coverage using international hair dye.',
    startingPrice: 'Rs. 6,500',
    popular: true,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h4',
    name: 'Keratin Smoothing Treatment',
    category: 'hair',
    description: 'Deep protein reconstruction for silky frizz-free hair lasting up to 6 months.',
    startingPrice: 'Rs. 10,000',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'h5',
    name: 'Hair Spa & Protein Treatments',
    category: 'hair',
    description: 'Deep conditioning spa treatment for damaged, dry or color-treated hair.',
    startingPrice: 'Rs. 3,500',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800'
  },

  // SKIN & FACIAL
  {
    id: 's1',
    name: 'Hydra Facial',
    category: 'skin',
    description: 'Multi-step clinical facial with exfoliation, LED therapy, galvanic infusion & deep hydration.',
    startingPrice: 'Rs. 8,000',
    popular: true,
    image: '/images/delaqua_facial_spa_1786530831961.jpg'
  },
  {
    id: 's2',
    name: '24K Gold Facial',
    category: 'skin',
    description: 'Luxury gold serum treatment for radiant skin glow, anti-aging and skin brightening.',
    startingPrice: 'Rs. 5,000',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    name: 'Thalgo Marine Facial',
    category: 'skin',
    description: 'Premium French marine algae treatment for deep skin renewal, protection & hydration.',
    startingPrice: 'Rs. 12,000',
    image: '/images/delaqua_thalgo_clean_facade_1786537017109.jpg'
  },
  {
    id: 's4',
    name: 'Fruit Glow Facial',
    category: 'skin',
    description: 'Organic fruit extracts cleansing, polish, scrub and massage for instant radiance.',
    startingPrice: 'Rs. 2,500',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's5',
    name: 'Whitening Polish & Massage',
    category: 'skin',
    description: 'Brightening skin polish with relaxing face, head and shoulder pressure point massage.',
    startingPrice: 'Rs. 3,000',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },

  // NAILS
  {
    id: 'n1',
    name: 'Diamond Glow Mani/Pedi',
    category: 'nails',
    description: 'Exfoliating diamond glow scrub, cuticle treatment, polish & relaxing hand/foot massage.',
    startingPrice: 'Rs. 2,500',
    popular: true,
    image: '/images/delaqua_red_mani_pedi_1786532412850.jpg'
  },
  {
    id: 'n2',
    name: 'French Manicure & Pedicure',
    category: 'nails',
    description: 'Classic clean French tips with nourishing soak and cuticle care.',
    startingPrice: 'Rs. 2,200',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'n3',
    name: 'Nail Care & Extensions',
    category: 'nails',
    description: 'Nail shaping, acrylic/gel extensions, custom nail art, and gel polish.',
    startingPrice: 'Rs. 3,000',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800'
  },

  // WAXING
  {
    id: 'w1',
    name: 'Half Arms & Half Legs Wax',
    category: 'waxing',
    description: 'Hygienic gentle wax treatment leaving skin smooth and hair-free.',
    startingPrice: 'Rs. 1,400',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'w2',
    name: 'Under Arms & Under Legs Wax',
    category: 'waxing',
    description: 'Smooth precision hair removal with soothing post-wax soothing gel.',
    startingPrice: 'Rs. 1,800',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'w3',
    name: 'Full Body Wax Combination',
    category: 'waxing',
    description: 'Comprehensive full arms, full legs, underarms and body wax package.',
    startingPrice: 'Rs. 2,500',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  },

  // MAKEUP
  {
    id: 'm1',
    name: 'Signature Bridal Makeup',
    category: 'makeup',
    description: 'Exquisite signature bridal transformation by Asma including hair style, jewelry setting, dupattta setting & lashes.',
    startingPrice: 'Rs. 35,000',
    popular: true,
    image: '/images/delaqua_bridal_makeup_1786539106061.jpg'
  },
  {
    id: 'm2',
    name: 'Party & Engagement Makeup',
    category: 'makeup',
    description: 'Flawless hd party glam, soft contour, eye makeup, and hairstyle of choice.',
    startingPrice: 'Rs. 12,000',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm3',
    name: 'Event & Barat / Walima Look',
    category: 'makeup',
    description: 'Custom HD bridal or bridesmaid makeup customized to match outfit tones.',
    startingPrice: 'Rs. 15,000',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800'
  }
];

export const HAIR_DYE_OPTIONS = [
  { length: 'Shoulder Length', thinPrice: 'Rs. 6,500/-', thickPrice: 'Rs. 7,000/-' },
  { length: 'Medium Length', thinPrice: 'Rs. 8,500/-', thickPrice: 'Rs. 9,500/-' },
  { length: 'Waist Length', thinPrice: 'Rs. 14,000/-', thickPrice: 'Rs. 16,000/-' }
];

export const KERATIN_OPTIONS = [
  { length: 'Shoulder Length', thinPrice: 'Rs. 10,000/-', thickPrice: 'Rs. 12,500/-' },
  { length: 'Medium Length', thinPrice: 'Rs. 15,000/-', thickPrice: 'Rs. 16,500/-' },
  { length: 'Waist Length', thinPrice: 'Rs. 19,000/-', thickPrice: 'Rs. 21,000/-' }
];

export const SKIN_CARE_DEALS: DealItem[] = [
  {
    id: 'sd1',
    title: 'Skin Care Deal 1',
    category: 'skin',
    price: 'Rs. 2,500/-',
    badge: 'Popular Saver',
    features: [
      'Fruit Facial',
      'Whitening Polisher',
      'Fruit Cleansing',
      'Fruit Scrub',
      'Fruit Gel',
      'Face & Neck Massage',
      'Fruit Mask',
      'Manicure + Pedicure'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sd2',
    title: 'Skin Care Deal 2',
    category: 'skin',
    price: 'Rs. 3,000/-',
    badge: 'Glow Deluxe',
    popular: true,
    features: [
      'French Whitening Facial',
      'Whitening Polisher',
      'Whitening Cleansing',
      'Whitening Scrub',
      'Head & Shoulder Massage',
      'Mineral Mask',
      'Whitening Manicure',
      'Whitening Pedicure'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  }
];

export const FACIAL_PACKAGES: FacialPackage[] = [
  {
    id: 'fp1',
    title: '24K Gold Facial Deal',
    price: 'Rs. 5,000/-',
    badge: 'Royal Radiance',
    description: 'Gold-infused brightening treatment designed to give instant luminous, youthful glow.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    features: [
      '24K Gold Whitening Polisher',
      '24K Gold Scrubbing Toning',
      '24K Gold Face Serum',
      '14K Gold Eye Facial',
      '14K Gold Shine Mask',
      'Face, Head & Shoulder Massage',
      'Diamond Glow Mani/Pedi'
    ]
  },
  {
    id: 'fp2',
    title: 'Hydra Facial Package',
    price: 'Rs. 8,000/-',
    badge: 'Most Popular',
    popular: true,
    description: 'Advanced multi-technology clinical deep pore cleansing, hydration infusion and LED therapy.',
    image: '/images/delaqua_facial_spa_1786530831961.jpg',
    features: [
      'Deep Cleansing & Polisher',
      'Exfoliation + Tool Extraction',
      'Blackhead/Whitehead Removal',
      'LED Light Therapy',
      'Hydration Serum Infusion',
      'Galvanic Treatment',
      'Whitening Mani & Pedi',
      'Head, Face & Shoulder Massage'
    ]
  },
  {
    id: 'fp3',
    title: 'Thalgo Marine Facial',
    price: 'Rs. 12,000/-',
    badge: 'Ultimate Luxury',
    description: 'Premium French sea algae technology for deep cellular skin renewal and environmental barrier protection.',
    image: '/images/delaqua_thalgo_clean_facade_1786537017109.jpg',
    features: [
      'Face Polisher & Double Scrub',
      'Precision Scrapper Tool Cleaning',
      'Thalgo Hydrating Algae Mask',
      'Skin Protection Cream Shield',
      'Diamond Glow Mani/Pedi',
      'Head, Face & Shoulder Massage'
    ]
  }
];

export const WAX_DEALS: DealItem[] = [
  {
    id: 'wd1',
    title: 'Wax Deal 1',
    category: 'waxing',
    price: 'Rs. 1,400/-',
    badge: 'Essential Smooth',
    features: [
      'Half Arms Wax',
      'Half Legs Wax',
      'Soothing Aloe Vera Post Gel'
    ],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wd2',
    title: 'Wax Deal 2',
    category: 'waxing',
    price: 'Rs. 1,800/-',
    badge: 'Precision Care',
    features: [
      'Under Arms Wax',
      'Under Legs Wax',
      'Skin Brightening Scrub Finish'
    ],
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wd3',
    title: 'Wax Deal 3',
    category: 'waxing',
    price: 'Rs. 2,500/-',
    badge: 'Best Value Package',
    popular: true,
    features: [
      'Full Arms Wax',
      'Full Legs Wax',
      'Under Arms Wax',
      'Hydrating Skin Polish Finish'
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Delaqua Boutique Exterior',
    category: 'exterior',
    image: '/images/delaqua_boutique_facade_1786532043184.jpg',
    description: 'Sleek black boutique facade & grand entryway at 50-A Nizami Street, People’s Colony No. 1, Faisalabad.'
  },
  {
    id: 'g2',
    title: 'Delaqua By Asma Night Storefront',
    category: 'exterior',
    image: '/images/delaqua_asma_storefront_1786532062793.jpg',
    description: 'Delaqua by Asma Salon & Spa for Women illuminated storefront facade view.'
  },
  {
    id: 'g3',
    title: 'Nail Bar & Pedicure Station',
    category: 'nailbar',
    image: '/images/delaqua_nail_bar_1786530847103.jpg',
    description: 'Chic nail station with custom marble countertops and brass spa tubs.'
  },
  {
    id: 'g4',
    title: 'Hydra & Gold Facial Suite',
    category: 'spa',
    image: '/images/delaqua_facial_spa_1786530831961.jpg',
    description: 'Private relaxation facial room with clinical equipment and relaxing light therapy.'
  },
  {
    id: 'g5',
    title: 'Hair Styling & Color Stations',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    description: 'Spacious hair styling mirrors with professional ring lights.'
  },
  {
    id: 'g6',
    title: 'Bridal Makeover Studio',
    category: 'makeup',
    image: '/images/delaqua_bridal_makeup_1786539106061.jpg',
    description: 'Exclusive private studio dedicated to Signature By Asma bridal looks.'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Ayesha Khan',
    rating: 5,
    date: '2 weeks ago',
    text: '100% recommended…..very good services and humble staff! Got the Hydra Facial and Keratin treatment. My hair feels like silk and skin is literally glowing!',
    verified: true,
    serviceMentioned: 'Hydra Facial & Keratin'
  },
  {
    id: 'r2',
    author: 'Fatima Zafar',
    rating: 5,
    date: '1 month ago',
    text: 'Best Salon in town... Totally satisfied 👍👍 Asma ma’am personally guided the skin consultation. The ambiance is super hygienic and comfortable.',
    verified: true,
    serviceMentioned: '24K Gold Facial'
  },
  {
    id: 'r3',
    author: 'Saman Tariq',
    rating: 5,
    date: '1 month ago',
    text: 'I had a great experience at Delaqua... Everything was done very professionally. The Diamond Glow Mani Pedi is to die for!',
    verified: true,
    serviceMentioned: 'Mani/Pedi & Nail Care'
  },
  {
    id: 'r4',
    author: 'Mahnoor Bilal',
    rating: 5,
    date: '2 months ago',
    text: 'Got my bridal makeup done by Signature By Asma! Received so many compliments. It lasted all night without creasing or caking.',
    verified: true,
    serviceMentioned: 'Signature Bridal Makeup'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Expert Beauty Professionals',
    desc: 'Senior specialists trained in modern international hair, skin and bridal techniques.'
  },
  {
    title: 'Premium Products',
    desc: 'Only authentic dermatologically tested and high-end salon brands used.'
  },
  {
    title: 'Hygienic Environment',
    desc: 'Sterilized tools, fresh linen and pristine sanitized stations for complete safety.'
  },
  {
    title: 'Luxury Salon Experience',
    desc: 'Relaxing music, complimentary tea/coffee and comfortable plush interiors.'
  },
  {
    title: 'Personalized Services',
    desc: 'Tailored treatments matched specifically to your skin type and hair texture.'
  },
  {
    title: 'Easy Appointment Booking',
    desc: 'Seamless direct online & WhatsApp booking with guaranteed time slots.'
  }
];
