import type { StaticImageData } from "next/image";
import heroImage from "@/assets/hero-candles.jpg";

export interface BlogPostQuote {
  text: string;
  attribution?: string;
}

export interface BlogPostSection {
  heading?: string;
  paragraphs: string[];
  tips?: string[];
  quote?: BlogPostQuote;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: StaticImageData;
  readingTime: string;
  sections: BlogPostSection[];
  takeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to Candle Care",
    excerpt:
      "Learn how to make your candles last longer and burn beautifully with these essential care tips.",
    date: "March 15, 2024",
    image: heroImage,
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
    id: "2",
    title: "Aromatherapy Benefits of Lavender Candles",
    excerpt:
      "Discover how lavender-scented candles can improve your sleep, reduce stress, and enhance wellbeing.",
    date: "March 10, 2024",
    image: heroImage,
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
    id: "3",
    title: "Diwali Traditions and Candle Rituals",
    excerpt:
      "Explore the significance of diyas and candles in Indian festivals and how to create beautiful arrangements.",
    date: "March 5, 2024",
    image: heroImage,
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
    id: "4",
    title: "Why Choose Eco-Friendly Soy Candles",
    excerpt:
      "Understanding the environmental and health benefits of natural soy wax over paraffin candles.",
    date: "February 28, 2024",
    image: heroImage,
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
    id: "5",
    title: "Creating the Perfect Ambiance at Home",
    excerpt:
      "Tips and tricks for using candles to transform your living space into a serene sanctuary.",
    date: "February 20, 2024",
    image: heroImage,
    readingTime: "6 min read",
    sections: [
      {
        heading: "Define the Mood by Room",
        paragraphs: [
          "Living rooms welcome warm, comforting scents—think amber, sandalwood, or spiced chai. Bathrooms shine with spa-like botanicals such as eucalyptus or lemongrass, while bedrooms thrive on soft florals.",
        ],
      },
      {
        heading: "Layer Light for Depth",
        paragraphs: [
          "Combine candles of different heights and vessels to create dimension. Use lanterns, votives, and taper candles on the same console for a curated look. Reflective trays or brass plates amplify the glow and keep surfaces protected.",
          "Pay attention to sight lines: stagger candles in odd numbers and vary spacing. The dance of light instantly adds intimacy and sophistication.",
        ],
        tips: [
          "Mix in mirrors to bounce candlelight across the room.",
          "Add fresh greenery or pampas grass for texture without overpowering the fragrance.",
          "Keep unscented tealights on hand for dining tables to complement, not compete with, food aromas.",
        ],
      },
      {
        heading: "Build a Sensory Ritual",
        paragraphs: [
          "Pair candles with playlists, tactile throws, and herbal tea to turn everyday evenings into restorative rituals. Set a timer on your phone to remind you to extinguish the flame after four hours, ensuring safety while you unwind.",
        ],
      },
    ],
    takeaways: [
      "Choose fragrance families that suit the personality of each room.",
      "Layer heights, textures, and reflective surfaces for effortless ambiance.",
      "Combine scent, sound, and touch to create rituals you’ll look forward to daily.",
    ],
  },
  {
    id: "6",
    title: "Gift Ideas: Personalized Candle Sets",
    excerpt:
      "Make your gifts memorable with custom candle arrangements perfect for any occasion.",
    date: "February 15, 2024",
    image: heroImage,
    readingTime: "5 min read",
    sections: [
      {
        heading: "Start with a Signature Scent Story",
        paragraphs: [
          "Think about the recipient’s personality. Do they love breezy coastal escapes or cozy mountain retreats? Curate scents that evoke their favorite memories—lavender for the calm seeker, cardamom for the culinary explorer, or rose for the romantic.",
        ],
      },
      {
        heading: "Add Personalized Touches",
        paragraphs: [
          "Engraved lids, custom labels, or monogrammed matches elevate the unveiling. Include a handwritten note describing why you chose each scent and how to enjoy it best.",
        ],
        tips: [
          "Bundle accessories like wick trimmers or snuffers for a complete experience.",
          "Include a small journal so the recipient can jot down moments of gratitude each time they light the candle.",
        ],
      },
      {
        heading: "Package with Purpose",
        paragraphs: [
          "Reuse fabric wraps, cane baskets, or wooden boxes for eco-conscious gifting. Tuck in sprigs of dried flowers or spice bundles to add layers of scent even before the candles are lit.",
        ],
        quote: {
          text: "A personalized candle gift is a love letter written in fragrance.",
          attribution: "Jyoti, Founder of Aura by Jyoti",
        },
      },
    ],
    takeaways: [
      "Choose scents that mirror the recipient’s story or aspirations.",
      "Personalized touches transform candles into keepsakes.",
      "Eco-friendly packaging completes the gifting ritual with intention.",
    ],
  },
];
