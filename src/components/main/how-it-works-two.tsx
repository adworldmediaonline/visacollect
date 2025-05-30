'use client';
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
import { MotionDiv, MotionSpan } from '../framerMotion/motion';

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

  // Enhanced floating background elements
  const floatingElements = [
    { x: '10%', y: '15%', delay: 0, size: 'w-16 h-16' },
    { x: '88%', y: '25%', delay: 0.8, size: 'w-12 h-12' },
    { x: '15%', y: '75%', delay: 1.2, size: 'w-20 h-20' },
    { x: '85%', y: '80%', delay: 1.8, size: 'w-8 h-8' },
    { x: '50%', y: '10%', delay: 2.2, size: 'w-6 h-6' },
    { x: '70%', y: '60%', delay: 2.6, size: 'w-14 h-14' },
  ];

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      aria-label="How It Works"
    >
      {/* Advanced Background Elements - Matching Banner Style */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(25,152,199,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(25,152,199,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(25,152,199,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Floating elements with varied sizes */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-full bg-gradient-to-r from-primary/20 to-primary-400/20 opacity-20`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-300 rounded-full shadow-lg mb-6">
              <ArrowRight className="w-4 h-4" />
              Simple Process
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">How It </span>
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We make travel easy and hassle-free with our seamless online visa
              service. Whether you need an e tourist visa, a business visa, or a
              transit visa, we can help you get it in a few simple steps. No
              paperwork, no queues, no stress. Just apply, pay, and receive your
              visa and passport through mail.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Lines - Desktop */}
          <div className="hidden lg:block absolute top-40 left-0 right-0 h-0.5 bg-white/20">
            <MotionDiv
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-primary to-primary-600 origin-left"
            />
          </div>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-8"
          >
            {processSteps.map((step, index) => (
              <MotionDiv
                key={step.id}
                variants={itemVariants}
                className="relative group"
              >
                <Card className="relative h-full border-0 shadow-2xl hover:shadow-3xl hover:shadow-primary/25 transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 group-hover:bg-white/15 overflow-visible mt-12">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  {/* Step Number - Enhanced */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <MotionDiv
                      className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl border border-white/20"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: 'spring', stiffness: 400 },
                      }}
                    >
                      {step.id}
                    </MotionDiv>
                  </div>

                  <CardContent className="p-8 text-center space-y-6 relative z-10 pt-8">
                    {/* Icon Container with enhanced animation */}
                    <div className="relative">
                      <MotionDiv
                        className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/20"
                        whileHover={{
                          scale: 1.05,
                          transition: { type: 'spring', stiffness: 300 },
                        }}
                      >
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />

                        <MotionDiv
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <step.icon className="w-12 h-12 text-primary-300 relative z-10" />
                        </MotionDiv>

                        {/* Original Image as Floating Badge */}
                        <MotionDiv
                          className="absolute -bottom-3 -right-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border border-white/20">
                            <Image
                              src={step.image}
                              alt={step.altText}
                              className="w-8 h-8 object-contain"
                              width={32}
                              height={32}
                            />
                          </div>
                        </MotionDiv>
                      </MotionDiv>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="pt-2">
                      <div className="flex justify-center">
                        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                          <MotionDiv
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
                      <ArrowRight className="w-6 h-6 text-primary-300 bg-white/10 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/20" />
                    </div>
                  )}
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        {/* Enhanced Bottom CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-3xl opacity-50 blur-xl"></div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to get started?
                </h3>
                <p className="text-gray-300">
                  Join thousands of travelers who trust our simple and secure
                  visa process
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MotionSpan
                  className="flex items-center gap-2"
                  whileHover={{ x: 2 }}
                >
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MotionSpan>
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
