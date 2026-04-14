"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <span className="text-lg font-bold text-primary">GC Business Solutions, LLC</span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Expert NetSuite consulting services to optimize your business operations and drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-foreground">Quick links</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <span className="text-sm font-semibold text-foreground">Contact information</span>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:csteam@gcsolutionsnv.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  csteam@gcsolutionsnv.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} GC Business Solutions, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
