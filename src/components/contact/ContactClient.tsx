"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-3xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
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
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
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
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
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
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
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

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div>
              <h2 className="font-playfair text-3xl font-bold">Contact Information</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Reach out to us through any of these channels. We typically respond within 24
                hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold">Location</h3>
                  <p className="mt-2 text-muted-foreground">
                    Mumbai/Thane, Maharashtra
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="mt-2 inline-flex text-muted-foreground transition-smooth hover:text-primary"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:hello@aurabyjyoti.com"
                    className="mt-2 inline-flex text-muted-foreground transition-smooth hover:text-primary"
                  >
                    hello@aurabyjyoti.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-soft">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-muted-foreground transition-smooth hover:text-primary"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted/30 p-6">
              <h3 className="font-playfair text-lg font-semibold">Business Hours</h3>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: 11:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactClient;

