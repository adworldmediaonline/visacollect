'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Star,
  Award,
} from 'lucide-react';
import HeadingSection from './HeadingSection';
import { whyChooseUsBanner } from '@/constant/images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DataItem {
  id: number;
  title: string;
  pera: string;
  icon: any;
}

const dataList: DataItem[] = [
  {
    id: 1,
    title: 'Speed and Simplicity',
    pera: "Our online visa services platform makes it simple to get the approvals you need for your trip. No paperwork, no hassle, no hidden fees. Just a few clicks and you're ready to go.",
    icon: Zap,
  },
  {
    id: 2,
    title: 'Get Approved',
    pera: 'Leave the visa hassle to us. Our online Visa experts will review your application, communicate with the authorities, and secure your approval. No delays, no worries, no stress. Just pack your bags and get ready to explore.',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Secure and Safe',
    pera: 'We protect your sensitive data with the best technology and practices. We handle your travel needs and information with professionalism and honesty. Our visa experts deliver a smooth and hassle-free experience, from start to finish.',
    icon: Shield,
  },
  {
    id: 4,
    title: 'Awesome Support',
    pera: "We're always ready to help you with any query or issue. Our customer success team is friendly, knowledgeable, and supportive. We communicate clearly and promptly, ensuring you feel confident and informed throughout your online visa application process.",
    icon: Users,
  },
];

export default function WhyChooseUsTwo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const floatingStats = [
    { value: '99%', label: 'Success Rate', icon: Award, delay: 0.5 },
    { value: '24/7', label: 'Support', icon: Clock, delay: 0.7 },
    { value: '10K+', label: 'Happy Clients', icon: Users, delay: 0.9 },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-20 h-20 bg-primary/3 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/3 rounded-full blur-xl" />

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full bg-[linear-gradient(45deg,rgba(25,152,199,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Additional Subtle Decoration */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/30 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src={whyChooseUsBanner}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Online visa services apply Today-Visa Collect"
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />

              {/* Floating Stats Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 gap-4">
                  {floatingStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: stat.delay,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      className={`absolute ${
                        index === 0
                          ? 'top-6 right-6'
                          : index === 1
                          ? 'bottom-6 left-6'
                          : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                      }`}
                    >
                      <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <CardContent className="p-4 text-center min-w-[100px]">
                          <div className="flex items-center justify-center mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-600 rounded-lg flex items-center justify-center">
                              <stat.icon className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
            </div>

            {/* Additional Floating Element */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 z-10"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 border-l-4 border-primary">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    Trusted by thousands
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-0 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Why Choose Us
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <HeadingSection
                  title="Why Choose Visacollect?"
                  sub="Wander in wonder, leave the paperwork blues to us."
                />
              </motion.div>
            </div>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {dataList.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white/70 backdrop-blur-sm hover:bg-white group-hover:scale-[1.02] overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                      <div className="flex items-start space-x-5 relative z-10">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-lg"
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { type: 'spring', stiffness: 400 },
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <item.icon className="w-7 h-7 text-white" />
                          </motion.div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {item.pera}
                          </p>
                        </div>
                      </div>

                      {/* Hover Arrow */}
                      <motion.div
                        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Ready to start your journey?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Join thousands of satisfied travelers worldwide
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                    aria-label="Apply for visa now"
                  >
                    <motion.span
                      className="flex items-center gap-2"
                      whileHover={{ x: 2 }}
                    >
                      Apply Now!
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
