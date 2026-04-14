"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  RefreshCw,
  LayoutDashboard,
  TrendingUp,
  Search,
  Layers,
  ArrowRight,
  Database,
  ShoppingCart,
  Box
} from 'lucide-react';

const AnalyticsPageClient = () => {
  const features = [
    {
      icon: RefreshCw,
      title: 'Real-Time Data Sync',
      description: 'Seamlessly synchronize data across NetSuite, Shopify, and 3PL systems to ensure your metrics are always up-to-date and accurate.',
    },
    {
      icon: LayoutDashboard,
      title: 'Custom Dashboards',
      description: 'Tailor-made reporting interfaces designed specifically for your unique business KPIs, operational goals, and team requirements.',
    },
    {
      icon: TrendingUp,
      title: 'Wholesale Overview',
      description: 'Track net revenue, analyze geographic sales distribution, and monitor year-over-year trends to drive strategic wholesale growth.',
    },
    {
      icon: Search,
      title: 'Product Inquiry Tracking',
      description: 'Deep dive into specific product performance, order histories, and inventory metrics to optimize your catalog and supply chain.',
    },
    {
      icon: BarChart3,
      title: 'Flexible Visualization',
      description: 'Transform complex datasets into intuitive charts, graphs, and tables that make identifying patterns and outliers effortless.',
    },
    {
      icon: Layers,
      title: 'Multi-Source Integration',
      description: 'Break down data silos by unifying disparate platforms into a single, cohesive analytics environment for holistic business intelligence.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <BarChart3 className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground tracking-wide">Advanced Data Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight text-balance">
              Custom Analytics Solutions for NetSuite
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-balance">
              Connect NetSuite with Shopify, 3PL providers, and other critical integrations to unlock real-time, actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20">
                  Get Started with Custom Analytics
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Seamlessly connecting your ecosystem
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-foreground" />
              <span className="text-xl font-bold text-foreground">NetSuite</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-8 h-8 text-foreground" />
              <span className="text-xl font-bold text-foreground">Shopify</span>
            </div>
            <div className="flex items-center space-x-3">
              <Box className="w-8 h-8 text-foreground" />
              <span className="text-xl font-bold text-foreground">3PL Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-spacing bg-background">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transform your data into decisions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our custom analytics application bridges the gap between your core business systems. By integrating NetSuite with your e-commerce platforms and fulfillment centers, we provide a unified view of your operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience real-time data visualization, multi-source integration, and custom dashboards built specifically for your workflows. Stop wrestling with spreadsheets and start making informed, strategic decisions instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Previews */}
      <section className="section-spacing bg-muted/50 overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding space-y-24">

          {/* Preview 1: Wholesale Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
                <Image
                  src="https://horizons-cdn.hostinger.com/3c8ac54e-7791-426a-aba5-2610dbbf9801/1a16b9227f7057b71cd2109c739ddee4.png"
                  alt="Wholesale Monthly Overview Dashboard showing net revenue, geographic summary, and yearly sales trends"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Wholesale Monthly Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gain a comprehensive view of your wholesale performance. Track net revenue, analyze revenue trends over time, and visualize geographic sales distribution to identify your strongest markets.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Year-over-year sales comparisons</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Interactive geographic heatmaps</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Real-time revenue tracking</li>
              </ul>
            </motion.div>
          </div>

          {/* Preview 2: Product Inquiry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Product Inquiry Tracking</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Drill down into individual product performance. Monitor order data, track inventory movement, and analyze product-specific trends to optimize your catalog and supply chain efficiency.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Detailed order history per SKU</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Cross-platform inventory visibility</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 mr-2 text-primary" /> Fulfillment status tracking</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none"></div>
                <Image
                  src="https://horizons-cdn.hostinger.com/3c8ac54e-7791-426a-aba5-2610dbbf9801/5c8cfa7e562fe2e101bfb37f608d23d4.png"
                  alt="Product Inquiry Dashboard showing order data and product listings"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
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
              Powerful Analytics Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to turn raw data into a competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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
              Ready to unlock your data&apos;s potential?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Schedule a demo to see how our custom analytics solutions can transform your NetSuite environment.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-full transition-all duration-200 active:scale-[0.98]">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AnalyticsPageClient;
