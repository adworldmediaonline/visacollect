'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

  // Enhanced floating background elements
  const floatingElements = [
    { x: '5%', y: '15%', delay: 0, size: 'w-20 h-20' },
    { x: '90%', y: '20%', delay: 0.8, size: 'w-16 h-16' },
    { x: '8%', y: '75%', delay: 1.2, size: 'w-24 h-24' },
    { x: '85%', y: '80%', delay: 1.8, size: 'w-12 h-12' },
    { x: '50%', y: '8%', delay: 2.2, size: 'w-8 h-8' },
    { x: '70%', y: '55%', delay: 2.6, size: 'w-14 h-14' },
  ];

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      aria-label="Contact Form"
    >
      {/* Advanced Background Elements - Matching Banner Style */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(25,152,199,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_50%)]" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 80%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 20%, rgba(25,152,199,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(25,152,199,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(25,152,199,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Floating elements with varied sizes */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-full bg-gradient-to-r from-primary/20 to-primary-400/20 opacity-25`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 7 + Math.random() * 2,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-3xl transform rotate-3 blur-xl opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary/10 rounded-3xl transform -rotate-2 blur-xl opacity-30" />

              {/* Main Image */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <Image
                  src={contactUsImg}
                  className="w-full h-auto object-contain"
                  alt="Contact us illustration"
                />

                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 rounded-3xl" />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
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
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <Card className="border-0 shadow-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/12 transition-all duration-300">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-xl opacity-30 blur-xl" />

              <CardHeader className="space-y-4 pb-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-300 rounded-full shadow-lg w-fit">
                  <Send className="w-4 h-4" />
                  Get in Touch
                </div>

                <div className="space-y-2">
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
                        className="pl-12 h-12 bg-white/10 backdrop-blur-sm border-white/20 focus:border-primary focus:ring-primary/20 rounded-lg text-white placeholder-gray-400"
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
                        className="pl-12 h-12 bg-white/10 backdrop-blur-sm border-white/20 focus:border-primary focus:ring-primary/20 rounded-lg text-white placeholder-gray-400"
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
                        className="pl-12 h-12 bg-white/10 backdrop-blur-sm border-white/20 focus:border-primary focus:ring-primary/20 rounded-lg text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl relative overflow-hidden group"
                    aria-label="Subscribe to newsletter"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    By subscribing, you agree to receive our newsletter and
                    promotional emails. You can unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
