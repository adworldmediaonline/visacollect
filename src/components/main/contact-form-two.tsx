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

  return (
    <section
      className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-20"
      aria-label="Contact Form"
    >
      <div className="container mx-auto px-4">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-primary/5 rounded-3xl transform -rotate-2" />

              {/* Main Image */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src={contactUsImg}
                  className="w-full h-auto object-contain"
                  alt="Contact us illustration"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
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
                  className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {info.title}
                    </h4>
                    <p className="text-xs text-gray-600">{info.value}</p>
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
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="space-y-4 pb-8">
                <Badge
                  variant="secondary"
                  className="w-fit px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Get in Touch
                </Badge>

                <div className="space-y-2">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
                    Let's connect!
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Learn the best travel secrets from our newsletter.
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form
                  className="space-y-6"
                  aria-label="Newsletter subscription form"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
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
                        className="pl-12 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
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
                        className="pl-12 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
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
                        className="pl-12 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
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
