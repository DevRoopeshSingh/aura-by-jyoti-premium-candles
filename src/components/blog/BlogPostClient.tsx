"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ArrowLeft,
  Share2,
  Clock,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogPosts, type BlogPost } from "@/data/blog";
import { toast } from "sonner";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostClient = ({ post, relatedPosts }: BlogPostClientProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enhancedRelatedPosts = useMemo(() => {
    if (relatedPosts.length) {
      return relatedPosts;
    }

    return blogPosts.filter((blogPost) => blogPost.id !== post.id).slice(0, 3);
  }, [post.id, relatedPosts]);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(shareData.url);
      toast.success("Link copied. Share the glow!");
    } catch {
      toast.error("Unable to share right now. Please try again.");
    }
  }, [post.excerpt, post.title]);

  return (
    <>
      <div className="fixed left-0 top-20 z-40 h-1 w-full bg-muted/40">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <section className="bg-gradient-warm py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground transition-smooth hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-10 overflow-hidden rounded-lg shadow-elegant">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-muted/30 p-6">
            <p className="text-muted-foreground md:text-lg">{post.excerpt}</p>
            <Button onClick={handleShare} className="gap-2 shadow-soft hover:shadow-glow">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          <article className="space-y-10 text-muted-foreground">
            {post.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                {section.heading && (
                  <h2 className="font-playfair text-2xl font-semibold text-foreground md:text-3xl">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
                {section.tips && (
                  <ul className="space-y-2 rounded-lg bg-muted/30 p-4">
                    {section.tips.map((tip, tipIndex) => (
                      <li
                        key={tipIndex}
                        className="flex items-start gap-3 text-sm md:text-base"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.quote && (
                  <blockquote className="relative overflow-hidden rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                    <Quote className="absolute -left-4 -top-4 h-10 w-10 text-primary/40" />
                    <p className="font-playfair text-lg italic text-foreground/90">
                      {section.quote.text}
                    </p>
                    {section.quote.attribution && (
                      <footer className="mt-4 text-sm font-medium text-muted-foreground">
                        — {section.quote.attribution}
                      </footer>
                    )}
                  </blockquote>
                )}
              </div>
            ))}
          </article>

          <Separator className="my-12" />

          <section className="rounded-lg bg-primary/5 p-8 shadow-soft">
            <h3 className="font-playfair text-2xl font-semibold text-foreground">
              <span className="mr-2 inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              Key Takeaways
            </h3>
            <ul className="mt-6 space-y-3">
              {post.takeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {enhancedRelatedPosts.length > 0 && (
            <>
              <Separator className="my-12" />
              <section className="space-y-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground">
                    You may also enjoy
                  </h3>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 font-medium text-primary transition-smooth hover:gap-3"
                  >
                    Browse all articles
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {enhancedRelatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.id}`}
                      className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-elegant hover:shadow-elegant"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-3 p-6">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {related.date}
                        </div>
                        <h4 className="font-playfair text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {related.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPostClient;

