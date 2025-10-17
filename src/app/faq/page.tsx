import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your candles made from?",
    answer:
      "All our candles are made from 100% natural soy wax, which is eco-friendly, renewable, and burns cleaner than traditional paraffin wax. We use cotton wicks and premium fragrance oils that are phthalate-free and safe for your home.",
  },
  {
    question: "How long do your candles burn?",
    answer:
      "Our candles have varying burn times depending on size: small candles (150g) burn for 18-22 hours, medium candles (200-220g) burn for 25-32 hours, and large candles (250g) burn for 32-35 hours. Always trim the wick to 1/4 inch before each use for optimal burn time.",
  },
  {
    question: "Do you offer delivery in Mumbai and Thane?",
    answer:
      "Yes! We offer FREE delivery throughout Mumbai and Thane. Orders typically arrive within 2-3 business days. For other locations in India, we charge a nominal shipping fee based on your pin code.",
  },
  {
    question: "Can I customize candles for special occasions?",
    answer:
      "Absolutely! We offer personalized candles for weddings, birthdays, corporate gifts, and other special events. You can customize the scent, color, packaging, and even add custom messages. Contact us for bulk orders and special requests.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We want you to love your candles! If you're not satisfied with your purchase, we accept returns within 7 days of delivery for unused products in original packaging. For damaged items, please contact us within 48 hours with photos and we'll send a replacement immediately.",
  },
  {
    question: "How should I care for my candle?",
    answer:
      "For the best experience: (1) Trim the wick to 1/4 inch before lighting, (2) Allow the wax to melt to the edges on first burn (usually 2-3 hours), (3) Don't burn for more than 4 hours at a time, (4) Keep away from drafts and flammable objects, (5) Store in a cool, dry place away from direct sunlight.",
  },
  {
    question: "Are your candles safe around pets and children?",
    answer:
      "Our candles are made with natural, non-toxic ingredients. However, as with any open flame, please keep candles out of reach of children and pets. Never leave a burning candle unattended. Our fragrance oils are pet-safe, but some pets may be sensitive to strong scents.",
  },
  {
    question: "Do you offer wholesale or bulk pricing?",
    answer:
      "Yes! We offer special pricing for bulk orders (20+ candles) and wholesale opportunities for retailers. We also provide custom branding options for corporate gifts. Please contact us via phone or WhatsApp for wholesale inquiries.",
  },
  {
    question: "What makes Aura by Jyoti different from other candle brands?",
    answer:
      "Each candle is personally handcrafted by Jyoti in Mumbai with love and attention to detail. We focus on authentic Indian fragrances, eco-friendly practices, and supporting local artisans. Unlike mass-produced candles, every Aura by Jyoti candle is unique and made in small batches to ensure premium quality.",
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about Aura by Jyoti candles, from ingredients and burn times to delivery, custom orders, and care tips.",
};

const FaqPage = () => (
  <div className="flex flex-col">
    <section className="bg-gradient-warm py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl font-bold md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Everything you need to know about our handcrafted candles
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="rounded-lg border bg-card px-6 shadow-soft"
            >
              <AccordionTrigger className="font-playfair text-lg font-semibold text-left transition-smooth hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-lg bg-muted/30 p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold">Still have questions?</h3>
          <p className="mt-3 text-muted-foreground">
            We&apos;re here to help! Reach out to us and we&apos;ll get back to you as soon as
            possible.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi%20Jyoti,%20I%20have%20a%20question%20about%20your%20candles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-medium text-white transition-smooth hover:bg-[#20BA5A]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-smooth hover:bg-muted"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default FaqPage;

