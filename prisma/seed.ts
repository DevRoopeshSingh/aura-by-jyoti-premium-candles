import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  { id: "all", name: "All Products" },
  { id: "diwali", name: "Diwali Collection" },
  { id: "wellness", name: "Wellness Candles" },
  { id: "heritage", name: "Mumbai Heritage" },
  { id: "gifts", name: "Custom Gifts" },
];

const products = [
  {
    id: "diwali-lotus-1",
    name: "Lotus Diya Candle",
    price: 350,
    categoryId: "diwali",
    image: "diwali-candle",
    description:
      "Celebrate the festival of lights with our handcrafted lotus-shaped candle. Infused with traditional Indian fragrances.",
    features: ["100% Natural Soy Wax", "Eco-Friendly", "Long-lasting", "Hand-poured"],
    scent: "Jasmine & Sandalwood",
    burnTime: "25-30 hours",
    size: "200g",
  },
  {
    id: "diwali-rangoli-2",
    name: "Rangoli Collection Set",
    price: 400,
    categoryId: "diwali",
    image: "diwali-candle",
    description:
      "A beautiful set of colorful candles inspired by traditional rangoli patterns. Perfect for festive decorations.",
    features: ["Set of 5 candles", "Natural wax", "Vibrant colors", "Gift-ready packaging"],
    scent: "Mogra & Saffron",
    burnTime: "20 hours each",
    size: "5x100g",
  },
  {
    id: "wellness-lavender-1",
    name: "Serenity Lavender",
    price: 300,
    categoryId: "wellness",
    image: "wellness-candle",
    description:
      "Relax and unwind with our calming lavender aromatherapy candle. Perfect for meditation and stress relief.",
    features: ["Aromatherapy grade", "Soy wax blend", "Cotton wick", "Reusable container"],
    scent: "Lavender & Chamomile",
    burnTime: "30-35 hours",
    size: "220g",
  },
  {
    id: "wellness-eucalyptus-2",
    name: "Breathe Easy Eucalyptus",
    price: 320,
    categoryId: "wellness",
    image: "wellness-candle",
    description:
      "Refresh your space with invigorating eucalyptus. Ideal for creating a spa-like atmosphere at home.",
    features: ["Pure essential oils", "Natural ingredients", "Handcrafted", "Eco-friendly"],
    scent: "Eucalyptus & Peppermint",
    burnTime: "28-32 hours",
    size: "220g",
  },
  {
    id: "heritage-gateway-1",
    name: "Gateway of Mumbai",
    price: 380,
    categoryId: "heritage",
    image: "heritage-candle",
    description:
      "A tribute to Mumbai's iconic Gateway of India. Rich, warm fragrance reminiscent of the colonial era.",
    features: ["Heritage collection", "Premium wax", "Vintage design", "Limited edition"],
    scent: "Tobacco & Amber",
    burnTime: "32-35 hours",
    size: "250g",
  },
  {
    id: "heritage-marine-2",
    name: "Marine Drive Sunset",
    price: 360,
    categoryId: "heritage",
    image: "heritage-candle",
    description:
      "Capture the essence of Mumbai's famous Marine Drive at sunset with this oceanic fragrance.",
    features: ["Inspired by Mumbai", "Sea salt notes", "Artisan crafted", "Unique blend"],
    scent: "Sea Salt & Bergamot",
    burnTime: "30 hours",
    size: "230g",
  },
  {
    id: "gifts-custom-1",
    name: "Personalized Gift Box",
    price: 400,
    categoryId: "gifts",
    image: "gift-candle",
    description:
      "Create lasting memories with our customizable gift box. Perfect for weddings, birthdays, and special occasions.",
    features: ["Custom message card", "Elegant packaging", "Choice of scents", "Gift-ready"],
    scent: "Your Choice",
    burnTime: "25-30 hours",
    size: "200g",
  },
  {
    id: "gifts-duo-2",
    name: "Wellness Duo Gift Set",
    price: 550,
    categoryId: "gifts",
    image: "gift-candle",
    description:
      "Two premium wellness candles beautifully packaged. The perfect gift for someone special.",
    features: ["2 premium candles", "Luxury packaging", "Gift message included", "Ready to gift"],
    scent: "Lavender & Eucalyptus",
    burnTime: "60 hours total",
    size: "2x220g",
  },
  {
    id: "diwali-deepak-3",
    name: "Golden Deepak",
    price: 280,
    categoryId: "diwali",
    image: "diwali-candle",
    description:
      "Traditional Indian deepak candle with a modern twist. Brings auspicious vibes to your home.",
    features: ["Traditional design", "Eco-friendly wax", "Golden finish", "Festive fragrance"],
    scent: "Kesar & Rose",
    burnTime: "22-25 hours",
    size: "180g",
  },
  {
    id: "wellness-yoga-3",
    name: "Yoga Flow",
    price: 290,
    categoryId: "wellness",
    image: "wellness-candle",
    description:
      "Enhance your yoga practice with this specially blended aromatherapy candle.",
    features: ["Meditation blend", "Natural wax", "Calming scent", "Eco-conscious"],
    scent: "Sandalwood & Patchouli",
    burnTime: "28 hours",
    size: "210g",
  },
  {
    id: "heritage-colaba-3",
    name: "Colaba Causeway",
    price: 340,
    categoryId: "heritage",
    image: "heritage-candle",
    description:
      "Experience the vibrant energy of Colaba Causeway with this eclectic fragrance blend.",
    features: ["Mumbai heritage", "Unique scent profile", "Artisan quality", "Limited batch"],
    scent: "Spice Market & Woods",
    burnTime: "30 hours",
    size: "220g",
  },
  {
    id: "gifts-thank-you-3",
    name: "Thank You Token",
    price: 250,
    categoryId: "gifts",
    image: "gift-candle",
    description:
      "A thoughtful way to say thank you. Small but meaningful gesture in a beautiful package.",
    features: ["Compact size", "Gift wrap included", "Sweet fragrance", "Affordable gifting"],
    scent: "Vanilla & Honey",
    burnTime: "18-20 hours",
    size: "150g",
  },
];

const blogPosts = [
  {
    id: "candle-care-guide",
    title: "The Complete Guide to Candle Care",
    slug: "the-complete-guide-to-candle-care",
    excerpt:
      "Learn how to make your candles last longer and burn beautifully with these essential care tips.",
    publishedAt: new Date("March 15, 2024"),
    image: "hero-candles",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Set the Foundation with the First Burn",
        paragraphs: [
          "The first burn determines how your candle performs for the rest of its life. Allow the wax pool to reach the edges of the container before extinguishing the flame—this typically takes two to three hours. A complete melt pool prevents tunneling and keeps the wick centered.",
          "If you need to extinguish the candle early, plan a longer burn next time to even out the surface. Patience during the first burn translates into dozens of hours of clean, even light later.",
        ],
      },
      {
        heading: "Trim, Tend, and Treat the Wick",
        paragraphs: [
          "Before each lighting, trim the wick to roughly 6 mm. This keeps the flame controlled, minimizes soot, and prevents mushrooming. Use a dedicated wick trimmer or scissors angled slightly downward to catch the trimmed piece.",
        ],
        tips: [
          "Remove any wick debris or matches from the wax pool.",
          "If the flame flickers wildly, extinguish it, trim the wick again, and relight.",
          "Store a wick dipper nearby—you can use it to nudge glowing embers back into the wax.",
        ],
      },
      {
        heading: "Create a Candle-Friendly Environment",
        paragraphs: [
          "Drafts, air-conditioning vents, and ceiling fans disturb the flame and cause uneven burns. Place candles away from moving air and on heat-resistant surfaces. If you’re styling multiple candles, leave a 15 cm gap between them so the heat of one doesn’t warp the other.",
          "When you are done enjoying the scent, extinguish the flame by dipping the wick back into the melted wax and lifting it straight. This method prevents smoke while coating the wick for the next burn.",
        ],
        quote: {
          text: "A candle cared for thoughtfully becomes a ritual, not just décor.",
          attribution: "Jyoti, Founder of Aura by Jyoti",
        },
      },
    ],
    takeaways: [
      "Always fully melt the top layer of wax on the first burn to avoid tunneling.",
      "Trim the wick to 6 mm before every lighting session for a steady flame.",
      "Protect your candle from drafts and extinguish it gently to preserve the scent.",
    ],
  },
  {
    id: "lavender-aromatherapy-benefits",
    title: "Aromatherapy Benefits of Lavender Candles",
    slug: "aromatherapy-benefits-of-lavender-candles",
    excerpt:
      "Discover how lavender-scented candles can improve your sleep, reduce stress, and enhance wellbeing.",
    publishedAt: new Date("March 10, 2024"),
    image: "hero-candles",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Why Lavender Calms the Mind",
        paragraphs: [
          "Lavender essential oil is rich in linalool and linalyl acetate—compounds that interact with the limbic system, the brain’s emotion center. When diffused through a candle, these molecules signal the nervous system to relax, lower heart rate, and ease tension.",
          "Lighting a lavender candle while journaling or stretching creates a sensory anchor. Over time your body associates the aroma with slowing down, making it easier to transition from busy days to quiet evenings.",
        ],
      },
      {
        heading: "Bedtime Rituals that Encourage Rest",
        paragraphs: [
          "Set aside ten minutes before bed to power down screens, dim the lights, and light your lavender candle. Combine the scent with intentional breathing—inhale for four counts, hold for four, and exhale slowly.",
          "To keep the ritual safe, extinguish the candle before lying down. The lingering fragrance will continue to soothe your senses as you drift to sleep.",
        ],
        tips: [
          "Pair lavender with soft instrumental music or guided meditation.",
          "Apply a lavender pillow mist to amplify the calming effect.",
          "Use cotton or linen bedsheets to allow the aroma to circulate naturally.",
        ],
      },
      {
        heading: "Balancing Lavender with Complementary Scents",
        paragraphs: [
          "Lavender blends beautifully with grounding woods, refreshing citrus, and herbal notes. During working hours, pair lavender with eucalyptus for alert relaxation. For deep rest, blend with chamomile or vanilla to soften the profile.",
        ],
      },
    ],
    takeaways: [
      "Lavender’s active compounds interact with the brain to promote calm.",
      "A consistent scent-led ritual signals your body that it’s time to unwind.",
      "Layer lavender with supporting aromas to match your desired mood.",
    ],
  },
  {
    id: "diwali-traditions",
    title: "Diwali Traditions and Candle Rituals",
    slug: "diwali-traditions-and-candle-rituals",
    excerpt:
      "Explore the significance of diyas and candles in Indian festivals and how to create beautiful arrangements.",
    publishedAt: new Date("March 5, 2024"),
    image: "hero-candles",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Light as a Symbol of Renewed Hope",
        paragraphs: [
          "From ancient times, diyas have represented the victory of knowledge over ignorance. Lighting candles during Diwali invites prosperity, gratitude, and divine blessings into every room.",
          "Begin your ritual by cleansing the space—open windows, play soft mantras, and light incense. Once the energy feels refreshed, place candles at entryways to invite positive intentions for the year ahead.",
        ],
      },
      {
        heading: "Styling with Heritage and Heart",
        paragraphs: [
          "Mix brass diyas with contemporary soy candles to create layered glow. Use marigold garlands, banana leaves, or rangoli to frame your arrangements. When styling dining tables, alternate candles with small bowls of flowers or kumkum to keep the display low yet vibrant.",
        ],
        tips: [
          "Opt for unscented candles near food to keep aromas balanced.",
          "Group candles of varying heights for visual rhythm.",
          "Tie small bells or tassels around candle jars for a festive touch.",
        ],
      },
      {
        heading: "Sharing Light with Loved Ones",
        paragraphs: [
          "Prepare gratitude candles as gifts—write blessings on tiny scrolls and tuck them under the lids. Encourage friends and family to light them during the festivities and share their intentions aloud.",
        ],
        quote: {
          text: "Diwali reminds us that when we pass along our light, everyone shines brighter.",
          attribution: "Jyoti, Founder of Aura by Jyoti",
        },
      },
    ],
    takeaways: [
      "Candle rituals anchor Diwali celebrations in gratitude and hope.",
      "Blend traditional elements with modern vessels for meaningful styling.",
      "Gift intention candles to extend the festival’s warmth to loved ones.",
    ],
  },
  {
    id: "eco-friendly-soy-candles",
    title: "Why Choose Eco-Friendly Soy Candles",
    slug: "why-choose-eco-friendly-soy-candles",
    excerpt:
      "Understanding the environmental and health benefits of natural soy wax over paraffin candles.",
    publishedAt: new Date("February 28, 2024"),
    image: "hero-candles",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Cleaner Air, Cleaner Burn",
        paragraphs: [
          "Unlike paraffin, which is derived from petroleum, soy wax is plant-based and biodegradable. It emits minimal soot, keeping walls, linens, and air quality far cleaner.",
        ],
      },
      {
        heading: "Longer Burn Time with Better Fragrance Throw",
        paragraphs: [
          "Soy wax has a lower melting point, allowing candles to burn slowly and evenly. The wax pool retains fragrance oils effectively, releasing aroma in a steady, gentle stream instead of sharp bursts.",
          "For artisan chandlers, soy wax is also more forgiving—it holds natural colorants well and pairs beautifully with essential oils or phthalate-free blends.",
        ],
        tips: [
          "Look for candles with cotton or wooden wicks to maintain a fully natural burn.",
          "Reuse your glass vessels as planters or storage once the candle is finished.",
        ],
      },
      {
        heading: "Supporting Sustainable Supply Chains",
        paragraphs: [
          "Choosing soy helps support farmers and reduces dependence on fossil fuels. Many small batch makers, including Aura by Jyoti, partner with local suppliers to ensure traceability and reduce transport emissions.",
        ],
      },
    ],
    takeaways: [
      "Soy candles offer a cleaner, healthier burn than petroleum-based alternatives.",
      "They deliver consistent fragrance while lasting noticeably longer.",
      "Supporting soy wax artisans encourages sustainable farming and production.",
    ],
  },
  {
    id: "perfect-home-ambiance",
    title: "Creating the Perfect Ambiance at Home",
    slug: "creating-the-perfect-ambiance-at-home",
    excerpt:
      "Layer lighting, scent, and styling with handcrafted candles to transform any room into a sanctuary.",
    publishedAt: new Date("February 20, 2024"),
    image: "hero-candles",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Set the Mood with Layered Lighting",
        paragraphs: [
          "Combine candles of varying heights with dimmable lamps to create depth and warmth. Place taller pillar candles at the back of your vignette and smaller votives upfront for a cascading glow.",
        ],
      },
      {
        heading: "Style with Intention",
        paragraphs: [
          "Choose vessels that complement your room’s palette—earthy ceramics for boho spaces, brushed metal for minimal homes. Incorporate natural elements like dried flowers, crystals, or river stones to personalize the arrangement.",
        ],
        tips: [
          "Use trays to ground your candle displays.",
          "Add mirrors or reflective surfaces to amplify the glow.",
          "Rotate your candle scents seasonally to keep the experience fresh.",
        ],
      },
      {
        heading: "Engage All Senses",
        paragraphs: [
          "Pair candlelight with soft playlists and textiles that invite touch. Consider scent pairing—citrus for entertaining, florals for self-care, spices for dinner parties.",
        ],
      },
    ],
    takeaways: [
      "Layered lighting creates a welcoming atmosphere instantly.",
      "Thoughtful styling turns candles into meaningful décor.",
      "Scent pairing helps define the mood of each room effortlessly.",
    ],
  },
];

const seed = async () => {
  await prisma.blogPost.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: categories.filter((category) => category.id !== "all"),
  });

  for (const product of products) {
    await prisma.product.create({
      data: {
        ...product,
        features: JSON.stringify(product.features),
      },
    });
  }

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: {
        ...post,
        sections: JSON.stringify(post.sections),
        takeaways: JSON.stringify(post.takeaways),
      },
    });
  }
};

seed()
  .then(async () => {
    await prisma.$disconnect();
    console.log("🌟 Database seeded successfully");
  })
  .catch(async (error) => {
    console.error("Seeding error:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
