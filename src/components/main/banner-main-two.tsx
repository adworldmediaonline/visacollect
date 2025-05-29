'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import BannerInlineForm from '../ui/banner-inline-form';
import ExperienceStatsSection from '../ui/experience-stats-section';
import { homePagesBanner } from '@/constant/images';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BannerMainTwo() {
  const features = [
    { icon: Shield, text: 'Secure & Safe' },
    { icon: Clock, text: '24x7 Support' },
    { icon: Users, text: 'Expert Team' },
  ];

  return (
    <section className="relative w-full pt-20" aria-label="Main Banner">
      <div className="relative h-[900px] sm:h-[800px] md:h-[700px] overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <Image
            alt="Apply for Visa - Stress free travel"
            src={homePagesBanner}
            className="object-cover w-full h-full"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50"
            aria-hidden="true"
          />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 h-full flex flex-col justify-center px-5">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {features.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-2 text-sm font-medium"
              >
                <feature.icon className="w-4 h-4 mr-2" />
                {feature.text}
              </Badge>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center max-w-6xl mx-auto text-center space-y-6"
          >
            <h1 className="text-white text-center md:text-[55px] text-[40px] font-bold leading-[1.2] tracking-tight">
              24x7 online visa services started{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                anytime, anywhere
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center text-white/90 mx-auto md:w-[60%] py-2 text-lg leading-relaxed"
              role="complementary"
            >
              Fast and secure: Trust our secure online visa services platform to
              handle your sensitive information with care.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Start Your Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-12"
            role="search"
            aria-label="Visa search form"
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden">
              <BannerInlineForm />
            </Card>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            role="complementary"
            aria-label="Experience statistics"
          >
            <ExperienceStatsSection />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
