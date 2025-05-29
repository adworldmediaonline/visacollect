'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Shield, CreditCard, Mail, ArrowRight } from 'lucide-react';
import HeadingSection from './HeadingSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20"
      aria-label="How It Works"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            Simple Process
          </Badge>

          <HeadingSection
            sub="We make travel easy and hassle-free with our seamless online visa service. Whether you need an e tourist visa, a business visa, or a transit visa, we can help you get it in a few simple steps. No paperwork, no queues, no stress. Just apply, pay, and receive your visa and passport through mail."
            title="How It Works"
          />
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-blue-600 transform -translate-y-1/2 z-10" />
              )}

              <Card className="relative h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group-hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>

                    {/* Original Image as Badge */}
                    <div className="absolute -bottom-2 -right-2">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-gray-100">
                        <Image
                          src={step.image}
                          alt={step.altText}
                          className="w-8 h-8 object-contain"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {step.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <span>Ready to get started?</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
