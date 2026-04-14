"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPageClient = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'csteam@gcsolutionsnv.com',
      link: 'mailto:csteam@gcsolutionsnv.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'United States',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      link: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let&apos;s start a conversation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to optimize your NetSuite investment? Fill out the form below and our team will get back to you within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 corporate-shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-8 corporate-shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Why contact us?</h3>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-start space-x-2">
                    <span className="mt-1">&bull;</span>
                    <span>Free initial consultation to discuss your needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1">&bull;</span>
                    <span>Expert guidance from certified NetSuite consultants</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1">&bull;</span>
                    <span>Customized solutions tailored to your business</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="mt-1">&bull;</span>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-muted">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">How quickly can you respond to my inquiry?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please email us directly.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">What information should I include in my message?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Please provide details about your current NetSuite setup (if applicable), your business challenges, and what you hope to achieve. The more context you provide, the better we can tailor our response.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Do you offer free consultations?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we offer a complimentary initial consultation to understand your needs and discuss how we can help. This allows us to provide you with a customized proposal.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">What happens after I submit the form?</h3>
              <p className="text-muted-foreground leading-relaxed">
                After submission, you&apos;ll receive a confirmation email. A member of our team will review your inquiry and reach out to schedule a consultation at a time that works for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPageClient;
