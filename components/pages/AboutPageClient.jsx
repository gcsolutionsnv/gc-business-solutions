"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CertificationBadge from '@/components/CertificationBadge';

const AboutPageClient = () => {
  const certifications = [
    'NetSuite Certified Consultant',
    'NetSuite SuiteCloud Developer',
    'Oracle Partner Network Member',
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Certified Expertise',
      description: 'Our team holds advanced NetSuite certifications, ensuring that every support ticket is handled by a knowledgeable professional who understands the system architecture.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'We prioritize clear communication and rapid response times. When you work with us, you get direct access to experts committed to resolving your issues efficiently.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'With years of focused experience, we have successfully guided numerous businesses through complex troubleshooting, optimization, and system maintenance.',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Your Certified NetSuite Support Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated to keeping your NetSuite environment running smoothly with expert troubleshooting and reliable maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Focus on Support
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by NetSuite veterans, GC Business Solutions was established with a clear mission: to provide businesses with the reliable, high-quality support they need to succeed. We recognized that many organizations struggle not with the software itself, but with finding responsive, knowledgeable help when issues arise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, our entire focus is on delivering top-tier, certified NetSuite support. Whether it&apos;s resolving a critical technical error, guiding a team through a new module, or performing routine system optimization, we act as a dependable extension of your internal team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
                alt="Professional support team"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver straightforward, effective solutions backed by deep technical knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-spacing bg-background">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Certifications
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {certifications.map((cert, index) => (
                <CertificationBadge key={index} title={cert} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get the support your business deserves
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Contact our certified team today to discuss your NetSuite needs.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98]">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPageClient;
