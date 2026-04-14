"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Settings, Activity, Headphones, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

const ServicesPageClient = () => {
  const coreServices = [
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Direct troubleshooting and rapid issue resolution for your NetSuite environment. Our certified experts diagnose errors, fix broken workflows, and ensure your system operates smoothly without prolonged downtime.',
    },
    {
      icon: Settings,
      title: 'Implementation Support',
      description: 'Expert guidance through NetSuite setup, configuration, and deployment. We assist your team in navigating the complexities of going live, ensuring data integrity and proper system architecture from day one.',
    },
    {
      icon: Activity,
      title: 'Optimization & Maintenance',
      description: 'Ongoing system performance tuning and proactive updates. We review your current setup, identify bottlenecks, and implement best practices to keep your NetSuite instance efficient and secure.',
    },
    {
      icon: GraduationCap,
      title: 'Training & Knowledge Transfer',
      description: 'Empower your staff with comprehensive team training and detailed documentation. We help your users understand new features and adopt best practices to maximize your software investment.',
    }
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
              Core Support Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated, certified assistance designed to resolve issues quickly, optimize performance, and empower your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process */}
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
              Our Support Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to getting your issues resolved efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border z-0"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Submit Request</h3>
              <p className="text-muted-foreground">Reach out via our contact form with details about your NetSuite challenge.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Triage</h3>
              <p className="text-muted-foreground">Our certified team quickly assesses the issue and assigns the right specialist.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Resolution</h3>
              <p className="text-muted-foreground">We implement the fix, verify system stability, and provide documentation.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for reliable NetSuite support?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get in touch with our certified experts today.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98]">
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

export default ServicesPageClient;
