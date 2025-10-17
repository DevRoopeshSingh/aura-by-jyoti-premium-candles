import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or special request? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="font-playfair text-3xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div>
                  <h2 className="font-playfair text-3xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Reach out to us through any of these channels. We typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2">
                        Location
                      </h3>
                      <p className="text-muted-foreground">
                        Mumbai/Thane, Maharashtra<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@aurabyjyoti.com"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        hello@aurabyjyoti.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-soft">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-playfair text-lg font-semibold mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p>Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
