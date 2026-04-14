"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service_interest: '',
    message: '',
    honeypot: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.service_interest) newErrors.service_interest = 'Please select a service of interest';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setLoading(true);

    try {
      const submitData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service_interest: formData.service_interest,
        message: formData.message,
      };

      await pb.collection('contacts').create(submitData, { $autoCancel: false });

      toast.success('Thank you for your inquiry. We will contact you shortly.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service_interest: '',
        message: '',
        honeypot: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => handleChange('honeypot', e.target.value)}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-2 bg-white text-gray-900"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-2 bg-white text-gray-900"
            placeholder="your.email@company.com"
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="mt-2 bg-white text-gray-900"
            placeholder="Your company name"
          />
          {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
        </div>

        <div>
          <Label htmlFor="service_interest">Service Interest *</Label>
          <Select
            value={formData.service_interest}
            onValueChange={(value) => handleChange('service_interest', value)}
          >
            <SelectTrigger id="service_interest" className="mt-2 bg-white text-gray-900">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Implementation">Implementation</SelectItem>
              <SelectItem value="Optimization">Optimization</SelectItem>
              <SelectItem value="Support">Support</SelectItem>
              <SelectItem value="Training">Training</SelectItem>
              <SelectItem value="Custom Development">Custom Development</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.service_interest && <p className="text-sm text-destructive mt-1">{errors.service_interest}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="mt-2 min-h-[150px] bg-white text-gray-900"
          placeholder="How can we help with your NetSuite environment?"
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full transition-all duration-200 active:scale-[0.98]"
      >
        {loading ? 'Submitting...' : 'Submit inquiry'}
      </Button>
    </form>
  );
};

export default ContactForm;
