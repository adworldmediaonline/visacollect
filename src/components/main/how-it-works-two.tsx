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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  // Simple floating elements for subtle animation
  const floatingElements = [
    { x: '10%', y: '15%', delay: 0, size: 'w-3 h-3' },
    { x: '90%', y: '25%', delay: 0.5, size: 'w-2 h-2' },
    { x: '15%', y: '85%', delay: 1, size: 'w-4 h-4' },
    { x: '85%', y: '75%', delay: 1.5, size: 'w-2 h-2' },
  ];

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      aria-label="How It Works"
    >
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-10 will-change-transform"
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(25,152,199,0.06) 0%, transparent 30%)',
              'radial-gradient(circle at 70% 30%, rgba(25,152,199,0.06) 0%, transparent 30%)',
              'radial-gradient(circle at 30% 50%, rgba(25,152,199,0.06) 0%, transparent 30%)',
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Minimal floating elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-full bg-primary/20 opacity-40 will-change-transform`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random(),
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-200 rounded-full shadow-lg mb-8">
              <ArrowRight className="w-4 h-4" />
              Simple Process
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">How It </span>
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We make travel easy and hassle-free with our seamless online visa
              service. Whether you need an e tourist visa, a business visa, or a
              transit visa, we can help you get it in a few simple steps.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Process Steps */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Lines - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-white/10 mx-16">
            <MotionDiv
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-primary to-primary-600 origin-left will-change-transform"
            />
          </div>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {processSteps.map((step, index) => (
              <MotionDiv
                key={step.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Step Number Circle - Fixed positioning and visibility */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30">
                  <MotionDiv
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-white/20 backdrop-blur-sm will-change-transform"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        duration: 0.2,
                      },
                    }}
                  >
                    <span className="relative z-10">{step.id}</span>
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-white/20 rounded-full blur-sm opacity-50"></div>
                  </MotionDiv>
                </div>

                <Card className="relative h-full border-0 shadow-2xl hover:shadow-3xl hover:shadow-primary/20 transition-all duration-300 bg-white/5 backdrop-blur-lg border border-white/10 group-hover:bg-white/10 overflow-visible pt-12 mt-8">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                  <CardContent className="p-8 text-center space-y-6 relative z-10">
                    {/* Icon Container */}
                    <div className="relative pt-4">
                      <MotionDiv
                        className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/20 will-change-transform"
                        whileHover={{
                          scale: 1.05,
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            duration: 0.2,
                          },
                        }}
                      >
                        {/* Background animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform group-hover:rotate-12 transition-transform duration-300" />

                        <step.icon className="w-10 h-10 text-primary-300 relative z-10" />

                        {/* Original Image as Corner Badge */}
                        <MotionDiv
                          className="absolute -bottom-2 -right-2 will-change-transform"
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              type: 'spring',
                              stiffness: 400,
                              duration: 0.15,
                            },
                          }}
                        >
                          <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-white/30">
                            <Image
                              src={step.image}
                              alt={step.altText}
                              className="w-6 h-6 object-contain"
                              width={24}
                              height={24}
                            />
                          </div>
                        </MotionDiv>
                      </MotionDiv>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 pt-2">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-200 leading-tight">
                        {step.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {step.desc}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="pt-4">
                      <div className="flex justify-center">
                        <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                          <MotionDiv
                            className="h-full bg-gradient-to-r from-primary to-primary-600 rounded-full will-change-transform"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Mobile step connector */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <ArrowRight className="w-4 h-4 text-primary-300" />
                      </div>
                    </div>
                  )}
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        {/* Bottom CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-600/10 rounded-3xl opacity-50 blur-lg"></div>

            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to get started?
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Join thousands of travelers who trust our simple and secure
                  visa process. Start your journey today.
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl will-change-transform text-lg"
              >
                <MotionSpan
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </MotionSpan>
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
