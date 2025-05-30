'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  Award,
  Star,
  MapPin,
  Zap,
  TrendingUp,
  Play,
  Pause,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { whereIAmFromWhereIAmGoingData } from '@/lib/whereIAmFromWhereIAmGoingData';

interface FormData {
  whereIAmFrom: string;
  whereIAmGoing: string;
}

// Country names mapping
const countryNames = {
  au: 'Australia',
  uk: 'United Kingdom',
  ca: 'Canada',
  us: 'United States',
  ae: 'United Arab Emirates',
  sg: 'Singapore',
};

// Destination names mapping for consistency
const destinationNames = {
  in: 'India',
  au: 'Australia',
  lk: 'Sri Lanka',
  th: 'Thailand',
  tr: 'Turkey',
  my: 'Malaysia',
  om: 'Oman',
  eg: 'Egypt',
  kh: 'Cambodia',
  ma: 'Morocco',
  jp: 'Japan',
  sg: 'Singapore',
  id: 'Indonesia',
  uk: 'United Kingdom',
};

export default function BannerMainFour() {
  const router = useRouter();
  const [currentStat, setCurrentStat] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    whereIAmFrom: '',
    whereIAmGoing: '',
  });

  const stats = [
    {
      icon: Users,
      number: '10K+',
      label: 'Happy Customers',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Covered',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      number: '99%',
      label: 'Success Rate',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure Processing' },
    { icon: Zap, text: 'Fast Approval' },
    { icon: CheckCircle, text: 'Expert Support' },
  ];

  const floatingElements = [
    { x: '5%', y: '10%', delay: 0, size: 'w-6 h-6' },
    { x: '90%', y: '15%', delay: 0.5, size: 'w-4 h-4' },
    { x: '8%', y: '80%', delay: 1, size: 'w-5 h-5' },
    { x: '85%', y: '75%', delay: 1.5, size: 'w-3 h-3' },
    { x: '15%', y: '45%', delay: 2, size: 'w-4 h-4' },
    { x: '92%', y: '50%', delay: 2.5, size: 'w-5 h-5' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.whereIAmFrom && formData.whereIAmGoing) {
      const whereIAmFrom = formData?.whereIAmFrom.toLowerCase() ?? '';
      const whereIAmGoing = formData?.whereIAmGoing.toLowerCase() ?? '';
      const whereIAmFromData = whereIAmFromWhereIAmGoingData[whereIAmFrom];
      const whereIAmGoingData =
        whereIAmFromData?.whereIAmGoing?.to?.[whereIAmGoing];
      router.push(whereIAmGoingData?.slug ?? '/all-countries');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-32 lg:pt-40">
      {/* Advanced Background Elements */}
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
            className={`absolute ${element.size} rounded-full bg-gradient-to-r from-primary to-primary-400 opacity-20`}
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

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border-primary/30 text-white px-6 py-3 text-base hover:bg-primary/30 transition-all duration-300">
              <Star className="w-4 h-4" />
              Trusted by thousands worldwide
              <Star className="w-4 h-4" />
            </Badge>
          </motion.div>

          {/* Main Headline - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-white">24x7 online</span>
              <br />
              <span className="text-white">visa services</span>
              <br />
              <span className="text-white">started </span>
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                anytime,
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                anywhere
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fast and secure: Trust our secure online visa services platform to
            handle your sensitive information with care.
          </motion.p>

          {/* Interactive Visa Form - Centered and Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-3xl blur-3xl"></div>

            {/* Main Form Card */}
            <Card className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Header */}
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-3">
                    <Star className="w-5 h-5 text-primary-300" />
                    <span className="text-primary-300 font-medium">
                      Quick Application
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Start Your Visa Journey
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Select your destination and get started
                  </p>
                </div>

                {/* Form Fields - Side by side */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-white font-medium text-base">
                      <MapPin className="inline w-5 h-5 mr-2" />
                      From Country
                    </label>
                    <select
                      name="whereIAmFrom"
                      value={formData.whereIAmFrom}
                      onChange={handleChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      required
                    >
                      <option value="" className="text-gray-900">
                        Select your country
                      </option>
                      {Object.keys(whereIAmFromWhereIAmGoingData).map(
                        country => (
                          <option
                            key={country}
                            value={country}
                            className="text-gray-900"
                          >
                            {countryNames[country] ||
                              whereIAmFromWhereIAmGoingData[country].name}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-white font-medium text-base">
                      <Globe className="inline w-5 h-5 mr-2" />
                      To Destination
                    </label>
                    <select
                      name="whereIAmGoing"
                      value={formData.whereIAmGoing}
                      onChange={handleChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all disabled:opacity-50"
                      disabled={!formData.whereIAmFrom}
                      required
                    >
                      <option value="" className="text-gray-900">
                        {formData.whereIAmFrom
                          ? 'Select destination'
                          : 'First select your country'}
                      </option>
                      {formData.whereIAmFrom &&
                        Object.keys(
                          whereIAmFromWhereIAmGoingData[formData.whereIAmFrom]
                            ?.whereIAmGoing?.to || {}
                        ).map(destination => (
                          <option
                            key={destination}
                            value={destination}
                            className="text-gray-900"
                          >
                            {destinationNames[destination] ||
                              whereIAmFromWhereIAmGoingData[
                                formData.whereIAmFrom
                              ].whereIAmGoing.to[destination].name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-bold py-6 px-8 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Application
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Trust Badges - Enhanced Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center space-x-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-xl">
                  <badge.icon className="w-6 h-6 text-primary-300" />
                </div>
                <span className="text-white font-semibold text-lg">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              <Link href="/all-countries">
                <span className="relative z-10 flex items-center">
                  Apply for Visa
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>

            <Button
              asChild
              className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:text-white px-10 py-5 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/about-us" className="text-white hover:text-white">
                Learn More
              </Link>
            </Button>
          </motion.div>

          {/* Dynamic Stats - Enhanced */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${
                    currentStat === index
                      ? 'scale-105 bg-white/10 border-primary/30'
                      : 'scale-100'
                  } transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${stat.color}`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      {stat.number}
                    </p>
                    <p className="text-sm md:text-base text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-medium">99% Success Rate</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="font-medium">50+ Countries</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="font-medium">10,000+ Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
