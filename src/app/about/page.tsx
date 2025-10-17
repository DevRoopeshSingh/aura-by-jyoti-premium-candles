import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Leaf, Sparkles } from "lucide-react";
import jyotiPortrait from "@/assets/jyoti-portrait.jpg";

export const metadata: Metadata = {
  title: "Meet Jyoti",
  description:
    "Discover the story of Jyoti, the artisan behind Aura by Jyoti, and her journey crafting eco-friendly candles inspired by Indian heritage.",
};

const AboutPage = () => (
  <div className="flex flex-col">
    <section className="bg-gradient-warm py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl font-bold md:text-6xl">Meet Jyoti</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          The heart and soul behind Aura by Jyoti
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-in">
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-elegant">
              <Image
                src={jyotiPortrait}
                alt="Jyoti, founder of Aura by Jyoti"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-playfair text-3xl font-bold md:text-4xl">
              A Journey of Light &amp; Love
            </h2>
            <p className="text-lg text-muted-foreground">
              Born and raised in Mumbai, I&apos;ve always been fascinated by the power of
              light and fragrance to transform spaces and moods. What started as a hobby
              during Diwali preparations has blossomed into Aura by Jyoti – a brand that
              represents my passion for creating beautiful, eco-friendly candles.
            </p>
            <p className="text-lg text-muted-foreground">
              Each candle I create is more than just a product; it&apos;s a piece of my
              heart. I hand-pour every candle in my Mumbai workshop, using only natural,
              sustainable materials. My inspiration comes from India&apos;s rich heritage,
              the vibrant culture of Mumbai, and the ancient wisdom of aromatherapy.
            </p>
            <p className="text-lg text-muted-foreground">
              I believe in the power of small businesses to make a big difference. That&apos;s
              why I&apos;m committed to eco-friendly practices, supporting local suppliers,
              and creating products that bring joy without harming our planet.
            </p>
            <div className="pt-4">
              <p className="font-playfair text-xl italic text-primary">
                &ldquo;Light your space, lift your spirit&rdquo; isn&apos;t just a tagline – it&apos;s
                my promise to you.
              </p>
              <p className="mt-2 text-muted-foreground">— Jyoti</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted/20 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold text-center md:text-4xl">
          Our Values
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="animate-fade-in rounded-lg bg-card p-8 text-center shadow-soft">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
              <Leaf className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold">Sustainability</h3>
            <p className="mt-4 text-muted-foreground">
              We use 100% natural soy wax, eco-friendly packaging, and sustainable
              practices in every aspect of our business. Mother Earth deserves our respect.
            </p>
          </div>

          <div
            className="animate-fade-in rounded-lg bg-card p-8 text-center shadow-soft"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold">Craftsmanship</h3>
            <p className="mt-4 text-muted-foreground">
              Each candle is lovingly hand-poured with attention to detail. We believe in
              quality over quantity, creating products that truly make a difference.
            </p>
          </div>

          <div
            className="animate-fade-in rounded-lg bg-card p-8 text-center shadow-soft"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold">Wellness</h3>
            <p className="mt-4 text-muted-foreground">
              Our candles are designed to enhance your wellbeing through aromatherapy. We
              use premium fragrances that calm, energize, and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl font-bold text-center md:text-4xl">
          Our Process
        </h2>
        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {[
            {
              step: "1",
              title: "Sourcing Natural Materials",
              description:
                "We carefully select 100% natural soy wax, premium essential oils, and sustainable materials from trusted local suppliers.",
            },
            {
              step: "2",
              title: "Hand-Pouring with Love",
              description:
                "Each candle is hand-poured in small batches in my Mumbai workshop, ensuring quality and attention to detail in every piece.",
            },
            {
              step: "3",
              title: "Quality Testing",
              description:
                "Every candle is tested for burn time, fragrance throw, and quality before it reaches you. Only the best makes it to your home.",
            },
            {
              step: "4",
              title: "Eco-Friendly Packaging",
              description:
                "We package each candle in recyclable, sustainable materials with beautiful presentation that's gift-ready.",
            },
          ].map((stage, index) => (
            <div
              key={stage.step}
              className="flex gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-lg text-primary-foreground">
                {stage.step}
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold">{stage.title}</h3>
                <p className="mt-2 text-muted-foreground">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;

