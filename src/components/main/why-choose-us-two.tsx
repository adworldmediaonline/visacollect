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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={whyChooseUsBanner}
                className="w-full h-auto object-cover"
                alt="Online visa services apply Today-Visa Collect"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20" />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6"
              >
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">99%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6"
              >
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Header */}
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                <Clock className="w-4 h-4 mr-2" />
                Why Choose Us
              </Badge>

              <HeadingSection
                title="Why Choose Visacollect?"
                sub="Wander in wonder, leave the paperwork blues to us."
              />
            </div>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {dataList.map(item => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50/50 hover:bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.pera}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Apply for visa now"
              >
                Apply Now!
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
