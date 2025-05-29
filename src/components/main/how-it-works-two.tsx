'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FileText,
  Shield,
  CreditCard,
  Mail,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import HeadingSection from './HeadingSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import onlineApplication from '/public/assets/images/main/online-application.png';
import makePaymentIcon from '/public/assets/images/main/makePayment.png';
import receiveVisaIcon from '/public/assets/images/main/receiveVisa.png';

interface ProcessStep {
  id: number;
  image: any;
  name: string;
  desc: string;
  altText: string;
  icon: any;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    image: onlineApplication,
    name: 'Fill Out Online Application',
    desc: 'Fill out a simple form and avoid errors with our smart system.',
    altText: 'Online Application icon - Visa Collect',
    icon: FileText,
  },
  {
    id: 2,
    image: makePaymentIcon,
    name: 'Share Your Documents Securely',
    desc: 'Skip the consulate queue and let us handle the paperwork for you.',
    altText: 'Share Your Documents icon - Visa Collect',
    icon: Shield,
  },
  {
    id: 3,
    image: makePaymentIcon,
    name: 'Make Payment Easily Online',
    desc: 'Select a convenient and secure payment option and complete your order.',
    altText: 'Make Payment icon - Visa Collect',
    icon: CreditCard,
  },
  {
    id: 4,
    image: receiveVisaIcon,
    name: 'Receive eVisa Letter On Time',
    desc: 'Track your status online and get ready for your trip.',
    altText: 'receive Visa Icon - Visa Collect',
    icon: Mail,
  },
];

export default function HowItWorksTwo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      className="bg-gradient-to-br from-primary/3 via-slate-50 to-gray-50 py-16 md:py-20 relative overflow-hidden"
      aria-label="How It Works"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Dotted Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(25,152,199,0.3)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-primary/4 rounded-full blur-2xl" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/3 rounded-full blur-xl" />

        {/* Decorative Shapes */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-primary/25 rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-3 text-sm font-medium bg-white/80 backdrop-blur-sm text-primary border-0 rounded-full shadow-lg"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HeadingSection
              title="How It Works"
              sub="We make travel easy and hassle-free with our seamless online visa service. Whether you need an e tourist visa, a business visa, or a transit visa, we can help you get it in a few simple steps. No paperwork, no queues, no stress. Just apply, pay, and receive your visa and passport through mail."
            />
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Lines - Desktop */}
          <div className="hidden lg:block absolute top-40 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-primary to-primary-600 origin-left"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative group"
              >
                <Card className="relative h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white overflow-visible mt-12">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

                  {/* Step Number - Fixed positioning */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: 'spring', stiffness: 400 },
                      }}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  <CardContent className="p-8 text-center space-y-6 relative z-10 pt-8">
                    {/* Icon Container with enhanced animation */}
                    <div className="relative">
                      <motion.div
                        className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center relative overflow-hidden"
                        whileHover={{
                          scale: 1.05,
                          transition: { type: 'spring', stiffness: 300 },
                        }}
                      >
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />

                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <step.icon className="w-12 h-12 text-primary relative z-10" />
                        </motion.div>

                        {/* Original Image as Floating Badge */}
                        <motion.div
                          className="absolute -bottom-3 -right-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100">
                            <Image
                              src={step.image}
                              alt={step.altText}
                              className="w-8 h-8 object-contain"
                              width={32}
                              height={32}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="pt-2">
                      <div className="flex justify-center">
                        <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Step connector for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-primary bg-white rounded-full p-1 shadow-lg" />
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/10 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to get started?
                </h3>
                <p className="text-gray-600">
                  Join thousands of travelers who trust our simple and secure
                  visa process
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <motion.span
                  className="flex items-center gap-2"
                  whileHover={{ x: 2 }}
                >
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
