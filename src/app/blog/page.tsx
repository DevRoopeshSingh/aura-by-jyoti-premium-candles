import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { blogDbRecordToBlogPostRecord, mapBlogPostRecord } from "@/lib/content-mappers";

export const metadata: Metadata = {
  title: "Candle Care & Wellness Blog",
  description:
    "Explore candle care tips, aromatherapy benefits, festive traditions, and gifting inspiration from Aura by Jyoti.",
};

const formatPublishedDate = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

const BlogPage = async () => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  const blogPosts = posts.map(blogDbRecordToBlogPostRecord).map(mapBlogPostRecord);

  return (
    <div className="flex flex-col">
    <section className="bg-gradient-warm py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl font-bold md:text-6xl">
          Candle Care &amp; Wellness
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Tips, stories, and inspiration from the world of handcrafted candles
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group animate-fade-in cursor-pointer overflow-hidden border-border transition-elegant hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index === 0}
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatPublishedDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="font-playfair text-xl font-bold transition-smooth group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-3 text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-medium text-primary transition-smooth hover:gap-3"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl font-bold md:text-4xl">
          Never Miss a Post
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          Subscribe to our newsletter for candle care tips, exclusive offers, and new collection updates
        </p>
        <form className="mx-auto mt-8 flex max-w-md gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Email address"
          />
          <Button type="submit" size="lg" className="shadow-elegant">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  </div>
  );
};

export default BlogPage;
