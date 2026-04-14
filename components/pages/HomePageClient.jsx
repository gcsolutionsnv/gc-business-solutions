"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, Zap, Headphones, Award } from 'lucide-react';
import CertificationBadge from '@/components/CertificationBadge';

const HomePageClient = () => {
  const valueProps = [
    {
      icon: Shield,
      title: 'Expert Certified Team',
      description: 'Our support staff holds advanced NetSuite certifications, ensuring you receive knowledgeable and accurate assistance.',
    },
    {
      icon: Zap,
      title: 'Fast Response Times',
      description: 'We prioritize your critical issues with rapid triage and resolution to keep your business running smoothly.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'A track record of successfully resolving complex NetSuite challenges for businesses across various industries.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Direct access to professionals who understand your system and are committed to your long-term success.',
    },
  ];

  const certifications = [
    'NetSuite Certified Consultant',
    'NetSuite SuiteCloud Developer',
    'Oracle Partner Network Member',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
            alt="Professional team collaborating"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Expert Certified NetSuite Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Reliable, fast, and professional assistance to keep your NetSuite environment optimized and your business moving forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20">
                  Get Support
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98]">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why choose our support team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide the expertise and responsiveness you need to maximize your NetSuite investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <prop.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="section-spacing bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Certified expertise you can rely on
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When system issues arise, you need a partner who understands NetSuite inside and out. Our certified professionals are dedicated to resolving your challenges quickly and efficiently, minimizing downtime and frustration.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">Direct Issue Resolution</p>
                    <p className="text-muted-foreground">We tackle technical problems head-on, providing clear answers and effective fixes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">System Optimization</p>
                    <p className="text-muted-foreground">Ongoing maintenance to ensure your environment runs at peak performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">User Guidance</p>
                    <p className="text-muted-foreground">Helping your team navigate features and adopt best practices.</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98] rounded-full">
                  Learn more about us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-6">Our Certifications</h3>
                <div className="flex flex-col gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-muted/50 p-3 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-3xl p-6 shadow-md border border-border/50 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">98%</p>
                  <p className="text-sm font-medium text-muted-foreground">Resolution Rate</p>
                </div>
                <div className="bg-card rounded-3xl p-6 shadow-md border border-border/50 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm font-medium text-muted-foreground">Support Available</p>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Need NetSuite assistance?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Reach out to our certified support team today and get your system back on track.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98] text-primary font-semibold">
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePageClient;
