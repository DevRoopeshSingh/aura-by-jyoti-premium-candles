import { useEffect, useMemo, useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, type BlogPost, type BlogPostSection } from "@/data/blog";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = useMemo<BlogPost | undefined>(
    () => blogPosts.find((blogPost) => blogPost.id === id),
    [id]
  );
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

  const relatedPosts = useMemo(
    () =>
      post
        ? blogPosts.filter((blogPost) => blogPost.id !== post.id).slice(0, 3)
        : [],
    [post]
  );

  const handleShare = useCallback(async () => {
    if (!post) {
      return;
    }
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
  }, [post]);

  const renderSection = (section: BlogPostSection, index: number) => (
    <div key={index} className="space-y-4">
      {section.heading && (
        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))}
      {section.tips && (
        <ul className="space-y-2 rounded-lg bg-muted/30 p-4">
          {section.tips.map((tip, tipIndex) => (
            <li key={tipIndex} className="flex items-start gap-3 text-sm md:text-base">
              <CheckCircle2 className="mt-1 h-4 w-4 text-secondary flex-shrink-0" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      )}
      {section.quote && (
        <blockquote className="relative overflow-hidden rounded-lg border-l-4 border-primary bg-primary/5 p-6">
          <Quote className="absolute -top-4 -left-4 h-10 w-10 text-primary/40" />
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
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="fixed left-0 top-20 z-40 h-1 w-full bg-muted/40">
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-linear"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground">
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
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-elegant mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-muted/30 p-6">
              <p className="text-muted-foreground md:text-lg">
                {post.excerpt}
              </p>
              <Button onClick={handleShare} className="gap-2 shadow-soft hover:shadow-glow">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <article
              id="blog-article"
              className="space-y-10 text-muted-foreground"
            >
              {post.sections.map(renderSection)}
            </article>

            <Separator className="my-12" />

            <section className="rounded-lg bg-primary/5 p-8 shadow-soft">
              <h3 className="font-playfair text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {post.takeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>

            {relatedPosts.length > 0 && (
              <>
                <Separator className="my-12" />
                <section className="space-y-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h3 className="font-playfair text-2xl font-semibold text-foreground">
                      You may also enjoy
                    </h3>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth"
                    >
                      Browse all articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.id}`}
                        className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-elegant hover:shadow-elegant"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-3 p-6">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide">
                            <Calendar className="h-3.5 w-3.5" />
                            {related.date}
                          </div>
                          <h4 className="font-playfair text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
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
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
