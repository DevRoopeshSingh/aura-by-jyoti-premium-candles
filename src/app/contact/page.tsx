import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Aura by Jyoti",
  description:
    "Have a question or custom candle request? Reach out via WhatsApp, email, or phone and Jyoti will be in touch within 24 hours.",
};

const ContactPage = () => (
  <div className="flex flex-col">
    <section className="bg-gradient-warm py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl font-bold md:text-6xl">Get in Touch</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a question or special request? We&apos;d love to hear from you!
        </p>
      </div>
    </section>
    <ContactClient />
  </div>
);

export default ContactPage;

