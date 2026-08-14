/*
  ============================================================
  CENTRAL SITE DATA
  ============================================================

  Change your company name, WhatsApp number and Instagram here.
  These values are reused throughout the entire website.

  WhatsApp:
  Replace 2348000000000 with the real number.
  Use country code and no +, spaces or leading zero.

  Instagram:
  Replace the placeholder URL with the real profile.
*/

export const site = {
  name: 'Alfowa Saqi',
  tagline: 'Custom fabrics made to order.',
  whatsapp: 'https://wa.me/9120412003',
  instagram: 'https://instagram.com/magaji.ahmed'
}

/*
  ============================================================
  FABRIC DATA
  ============================================================

  Add new fabrics by adding another object to this array.

  The "slug" automatically becomes the URL:
  slug: 'royal-silk'
  -> /fabrics/royal-silk

  All fabric detail pages use the SAME reusable Vue template.
*/

export const fabrics = [
  {
    slug: 'royal-silk',
    name: 'Royal Silk',
    category: 'Silk',
    shortDescription: 'A luminous, fluid textile for refined garments and statement pieces.',
    overview:
      'Royal Silk is developed for clients who want an elegant surface, graceful movement and a polished finish. Colour, weight and final finish can be discussed according to the intended garment or collection.',
    price: 'From ₦18,000 / metre',

    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85',

    threads: [
      {
        name: 'Silk filament',
        material: '100% silk',
        description: 'Creates a smooth surface with a natural lustre.'
      },
      {
        name: 'Support thread',
        material: 'Silk / cotton blend',
        description: 'Adds body and stability to the construction.'
      }
    ],

    process: [
      {
        number: '01',
        title: 'Specification',
        description: 'We confirm the intended use, width, weight, colour and desired finish.'
      },
      {
        number: '02',
        title: 'Thread preparation',
        description: 'Selected fibres are prepared and arranged for consistent production.'
      },
      {
        number: '03',
        title: 'Weaving',
        description: 'Warp and weft are constructed to achieve the agreed density and texture.'
      },
      {
        number: '04',
        title: 'Finishing',
        description: 'The cloth is treated, pressed and inspected for the desired hand and appearance.'
      }
    ],

    gallery: [
      {
        title: 'Finished drape',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85'
      },
      {
        title: 'Surface detail',
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=85'
      },
      {
        title: 'Finished garment',
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85'
      }
    ]
  },

  {
    slug: 'heritage-brocade',
    name: 'Heritage Brocade',
    category: 'Brocade',
    shortDescription: 'A structured decorative textile with a rich surface for ceremonial and statement garments.',
    overview:
      'Heritage Brocade combines a firm structure with ornamental surface detail. Pattern, colour and thread composition can be developed around the intended garment, collection or occasion.',
    price: 'From ₦22,000 / metre',

    image:
      'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1600&q=85',

    threads: [
      {
        name: 'Ground thread',
        material: 'Cotton / polyester',
        description: 'Provides a strong and stable woven foundation.'
      },
      {
        name: 'Decorative thread',
        material: 'Viscose / metallic option',
        description: 'Creates the surface pattern and controlled sheen.'
      }
    ],

    process: [
      {
        number: '01',
        title: 'Design direction',
        description: 'We establish the visual language, pattern and intended application.'
      },
      {
        number: '02',
        title: 'Thread selection',
        description: 'Ground and decorative threads are chosen to balance appearance and durability.'
      },
      {
        number: '03',
        title: 'Pattern construction',
        description: 'The decorative structure is woven into the base according to the approved specification.'
      },
      {
        number: '04',
        title: 'Finishing & inspection',
        description: 'The finished cloth is stabilised, finished and checked before delivery.'
      }
    ],

    gallery: [
      {
        title: 'Pattern detail',
        image: 'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=1200&q=85'
      },
      {
        title: 'Rich surface',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85'
      },
      {
        title: 'Finished piece',
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85'
      }
    ]
  },

  {
    slug: 'signature-cotton',
    name: 'Signature Cotton',
    category: 'Cotton',
    shortDescription: 'A versatile, breathable cotton construction for everyday premium garments and collections.',
    overview:
      'Signature Cotton is a dependable base for clients who want a natural hand, comfort and versatility. Weight, weave density and colour can be adjusted for the intended application.',
    price: 'From ₦9,500 / metre',

    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=85',

    threads: [
      {
        name: 'Primary thread',
        material: '100% cotton',
        description: 'Provides a natural hand and breathable construction.'
      },
      {
        name: 'Optional blend',
        material: 'Cotton / linen',
        description: 'Adds texture and a little additional structure.'
      }
    ],

    process: [
      {
        number: '01',
        title: 'Requirements',
        description: 'We define the garment type, desired hand, weight and colour.'
      },
      {
        number: '02',
        title: 'Yarn preparation',
        description: 'The selected yarn is prepared for consistent production.'
      },
      {
        number: '03',
        title: 'Weaving',
        description: 'Threads are woven to the agreed density and construction.'
      },
      {
        number: '04',
        title: 'Wash & finish',
        description: 'The fabric is washed, finished and checked for consistency.'
      }
    ],

    gallery: [
      {
        title: 'Natural texture',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85'
      },
      {
        title: 'Woven detail',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1200&q=85'
      },
      {
        title: 'Finished garment',
        image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85'
      }
    ]
  }
]

export const faqs = [
  {
    question: 'Can I order a custom fabric design?',
    answer:
      'Yes. We manufacture fabrics to order and can discuss your preferred design, colours, materials, quantity and other specifications.'
  },
  {
    question: 'What is the minimum order quantity?',
    answer:
      'Minimum quantities depend on the fabric type and production requirements. Contact us on WhatsApp or Instagram to discuss your order.'
  },
  {
    question: 'How long does production take?',
    answer:
      'Production time depends on the fabric type, quantity and specifications of your order. We will provide an estimated timeline after discussing your requirements.'
  },
  {
    question: 'Can I request a specific colour?',
    answer:
      'Yes. Colour requirements can be discussed during the ordering process. Availability and matching will depend on the fabric and production specifications.'
  },
  {
    question: 'How do I place an order?',
    answer:
      'Simply browse our fabrics and contact us through WhatsApp or Instagram. We will discuss your requirements, confirm the specifications and provide pricing and production details.'
  }
]
