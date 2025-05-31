'use client';
import React from 'react';
import Image from 'next/image';
import { Mail, Phone, User, Send, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import contactUsImg from '/public/assets/images/main/formGirl.png';

export default function ContactFormTwo() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our office location',
      value: 'Contact for address',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      description: '24/7 Support Available',
      value: 'Always here for you',
    },
  ];

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      aria-label="Contact Form"
    >
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        {/* Simplified gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Illustration Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary-600/15 rounded-3xl transform rotate-2 blur-lg opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-primary/8 rounded-3xl transform -rotate-1 blur-lg opacity-30" />

              {/* Main Image Container */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                <Image
                  src={contactUsImg}
                  className="w-full h-auto object-contain"
                  alt="Contact us illustration"
                />

                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 rounded-3xl" />

                {/* Fixed Floating Elements - Within bounds */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center shadow-xl border border-white/20">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl border border-white/20">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-lg flex items-center justify-center mx-auto mb-2 border border-white/20">
                      <info.icon className="w-5 h-5 text-primary-300" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">
                      {info.title}
                    </h4>
                    <p className="text-xs text-gray-300">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2">
            <Card className="border-0 shadow-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/8 transition-all duration-300 relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-600/10 rounded-xl opacity-30 blur-lg" />

              <CardHeader className="space-y-4 pb-8 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-200 rounded-full shadow-lg w-fit">
                    <Send className="w-4 h-4" />
                    Get in Touch
                  </div>
                </div>

                <div className="space-y-3">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-white">
                    Let's connect!
                  </CardTitle>
                  <p className="text-gray-300 leading-relaxed">
                    Learn the best travel secrets from our newsletter.
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <form
                  className="space-y-6"
                  aria-label="Newsletter subscription form"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-300"
                    >
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        aria-required="true"
                        className="pl-12 h-12 bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary focus:ring-primary/20 rounded-lg text-white placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        aria-required="true"
                        className="pl-12 h-12 bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary focus:ring-primary/20 rounded-lg text-white placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-300"
                    >
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        aria-required="true"
                        pattern="[0-9]{10}"
                        className="pl-12 h-12 bg-white/5 backdrop-blur-sm border-white/20 focus:border-primary focus:ring-primary/20 rounded-lg text-white placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl relative overflow-hidden group"
                    aria-label="Subscribe to newsletter"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    By subscribing, you agree to receive our newsletter and
                    promotional emails. You can unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
