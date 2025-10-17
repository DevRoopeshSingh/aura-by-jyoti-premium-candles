import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-candles.jpg";

const blogPosts = [
  {
    id: "1",
    title: "The Complete Guide to Candle Care",
    excerpt: "Learn how to make your candles last longer and burn beautifully with these essential care tips.",
    date: "March 15, 2024",
    image: heroImage,
  },
  {
    id: "2",
    title: "Aromatherapy Benefits of Lavender Candles",
    excerpt: "Discover how lavender-scented candles can improve your sleep, reduce stress, and enhance wellbeing.",
    date: "March 10, 2024",
    image: heroImage,
  },
  {
    id: "3",
    title: "Diwali Traditions and Candle Rituals",
    excerpt: "Explore the significance of diyas and candles in Indian festivals and how to create beautiful arrangements.",
    date: "March 5, 2024",
    image: heroImage,
  },
  {
    id: "4",
    title: "Why Choose Eco-Friendly Soy Candles",
    excerpt: "Understanding the environmental and health benefits of natural soy wax over paraffin candles.",
    date: "February 28, 2024",
    image: heroImage,
  },
  {
    id: "5",
    title: "Creating the Perfect Ambiance at Home",
    excerpt: "Tips and tricks for using candles to transform your living space into a serene sanctuary.",
    date: "February 20, 2024",
    image: heroImage,
  },
  {
    id: "6",
    title: "Gift Ideas: Personalized Candle Sets",
    excerpt: "Make your gifts memorable with custom candle arrangements perfect for any occasion.",
    date: "February 15, 2024",
    image: heroImage,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Candle Care & Wellness
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, stories, and inspiration from the world of handcrafted candles
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-border hover:shadow-elegant transition-elegant cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-elegant"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h2 className="font-playfair text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Post
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter for candle care tips, exclusive offers, and new collection updates
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="lg" className="shadow-elegant">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
