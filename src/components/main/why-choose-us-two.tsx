'use client';
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
import { MotionDiv, MotionSpan } from '../framerMotion/motion';

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
        staggerChildren: 0.12,
        delayChildren: 0.3,
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
        duration: 0.6,
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

  // Enhanced floating background elements
  const floatingElements = [
    { x: '8%', y: '15%', delay: 0, size: 'w-20 h-20' },
    { x: '90%', y: '25%', delay: 0.8, size: 'w-16 h-16' },
    { x: '12%', y: '75%', delay: 1.2, size: 'w-24 h-24' },
    { x: '85%', y: '80%', delay: 1.8, size: 'w-12 h-12' },
    { x: '45%', y: '8%', delay: 2.2, size: 'w-8 h-8' },
    { x: '75%', y: '60%', delay: 2.6, size: 'w-18 h-18' },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Advanced Background Elements - Matching Banner Style */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(25,152,199,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(147,51,234,0.1),transparent_50%)]" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              'radial-gradient(circle at 80% 20%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(25,152,199,0.1) 0%, transparent 50%)',
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
            className={`absolute ${element.size} rounded-full bg-gradient-to-r from-primary/20 to-primary-400/20 opacity-30`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 3,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section - Enhanced */}
          <MotionDiv
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
                <Image
                  src={whyChooseUsBanner}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Online visa services apply Today-Visa Collect"
                />

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />

                {/* Floating Stats Grid - Enhanced */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-1 gap-4">
                    {floatingStats.map((stat, index) => (
                      <MotionDiv
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
                        <Card className="bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                          <CardContent className="p-4 text-center min-w-[100px]">
                            <div className="flex items-center justify-center mb-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
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
                      </MotionDiv>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Elements - Enhanced */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg" />
              </div>
            </div>

            {/* Additional Floating Element - Enhanced */}
            <MotionDiv
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 z-10"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-white/20">
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
            </MotionDiv>
          </MotionDiv>

          {/* Content Section - Enhanced */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Header - Enhanced */}
            <div className="space-y-6">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-left mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-300 rounded-full shadow-lg">
                    <Award className="w-4 h-4" />
                    <span>Why Choose Us</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  <span className="text-white">Why Choose</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                    Visacollect?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Wander in wonder, leave the paperwork blues to us.
                </p>
              </MotionDiv>
            </div>

            {/* Features List - Enhanced */}
            <MotionDiv
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {dataList.map((item, index) => (
                <MotionDiv
                  key={item.id}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 group-hover:bg-white/15">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                    <CardContent className="p-6 relative z-10">
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                      <div className="flex items-start space-x-5 relative z-10">
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-xl"
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
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {item.pera}
                          </p>
                        </div>
                      </div>

                      {/* Hover Arrow - Enhanced */}
                      <motion.div
                        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full border border-white/20">
                          <ArrowRight className="w-4 h-4 text-primary-300" />
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* Enhanced CTA Section */}
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-2xl opacity-50 blur-xl"></div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Ready to start your journey?
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Join thousands of satisfied travelers worldwide
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary/25 whitespace-nowrap"
                    aria-label="Apply for visa now"
                  >
                    <MotionSpan
                      className="flex items-center gap-2 relative z-10"
                      whileHover={{ x: 2 }}
                    >
                      Apply Now!
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </MotionSpan>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
