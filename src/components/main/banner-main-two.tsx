'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  Users,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { whereIAmFromWhereIAmGoingData } from '@/lib/whereIAmFromWhereIAmGoingData';

// Import country data
const whereIAmFromCountry = [
  { name: 'australia', isoCode: 'au' },
  { name: 'singapore', isoCode: 'sg' },
  { name: 'united kingdom', isoCode: 'uk' },
  { name: 'united states', isoCode: 'us' },
  { name: 'United Arab Emirates', isoCode: 'ae' },
  { name: 'canada', isoCode: 'ca' },
];

const whereIAmGoingCountry = [
  { name: 'india', isoCode: 'in' },
  { name: 'australia', isoCode: 'au' },
  { name: 'srilanka', isoCode: 'lk' },
  { name: 'thailand', isoCode: 'th' },
  { name: 'turkey', isoCode: 'tr' },
  { name: 'malaysia', isoCode: 'my' },
  { name: 'oman', isoCode: 'om' },
  { name: 'egypt', isoCode: 'eg' },
  { name: 'cambodia', isoCode: 'kh' },
  { name: 'morocco', isoCode: 'ma' },
  { name: 'japan', isoCode: 'jp' },
  { name: 'singapore', isoCode: 'sg' },
  { name: 'indonesia', isoCode: 'id' },
];

export default function BannerMainTwo() {
  const router = useRouter();
  const [currentStat, setCurrentStat] = useState(0);
  const [formData, setFormData] = useState({
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
    { x: '10%', y: '20%', delay: 0 },
    { x: '85%', y: '15%', delay: 0.5 },
    { x: '15%', y: '70%', delay: 1 },
    { x: '80%', y: '75%', delay: 1.5 },
    { x: '50%', y: '10%', delay: 2 },
    { x: '90%', y: '45%', delay: 2.5 },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
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
      console.log('Navigating to:', whereIAmGoingData);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-32 lg:pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,152,199,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(25,152,199,0.05)_50%,transparent_75%)] animate-pulse"></div>

        {/* Floating Circles */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary-400 opacity-20"
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(25,152,199,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(25,152,199,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fast and secure: Trust our secure online visa services platform to
              handle your sensitive information with care.
            </motion.p>

            {/* Trust Badges - Redesigned */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="p-2 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-lg">
                    <badge.icon className="w-5 h-5 text-primary-300" />
                  </div>
                  <span className="text-white font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              >
                <Link href="/all-countries">
                  <span className="relative z-10 flex items-center">
                    Start Your Application
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/about-us">Learn More</Link>
              </Button>
            </motion.div>

            {/* Dynamic Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ${
                      currentStat === index
                        ? 'scale-105 bg-white/10'
                        : 'scale-100'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-xl md:text-2xl font-bold text-white">
                        {stat.number}
                      </p>
                      <p className="text-xs md:text-sm text-gray-300">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Visa Application Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-3xl blur-3xl"></div>

              {/* Main Form Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Header */}
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Star className="w-4 h-4 text-primary-300" />
                      <span className="text-primary-300 text-sm font-medium">
                        Quick Application
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      Start Your Visa Journey
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">
                      Select your destination and get started
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-white font-medium text-sm">
                        From Country
                      </label>
                      <select
                        name="whereIAmFrom"
                        value={formData.whereIAmFrom}
                        onChange={handleChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      >
                        <option value="" className="text-gray-900">
                          Select your country
                        </option>
                        {whereIAmFromCountry.map(country => (
                          <option
                            key={country.isoCode}
                            value={country.isoCode.toLowerCase()}
                            className="text-gray-900"
                          >
                            {country.name.charAt(0).toUpperCase() +
                              country.name.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white font-medium text-sm">
                        To Destination
                      </label>
                      <select
                        name="whereIAmGoing"
                        value={formData.whereIAmGoing}
                        onChange={handleChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      >
                        <option value="" className="text-gray-900">
                          Select your destination
                        </option>
                        {whereIAmGoingCountry.map(country => (
                          <option
                            key={country.isoCode}
                            value={country.isoCode.toLowerCase()}
                            className="text-gray-900"
                          >
                            {country.name.charAt(0).toUpperCase() +
                              country.name.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center">
                        Check Visa Requirements
                        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 space-y-3">
                    {[
                      'Free visa requirement check',
                      'Expert guidance throughout',
                      'Secure document processing',
                      '24/7 customer support',
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm md:text-base">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          className="mt-16 lg:mt-20 flex flex-wrap justify-center items-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center space-x-2 text-gray-300">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            <span className="font-medium text-sm md:text-base">
              99% Success Rate
            </span>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20"></div>
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            <span className="font-medium text-sm md:text-base">
              50+ Countries
            </span>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20"></div>
          <div className="flex items-center space-x-2 text-gray-300">
            <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            <span className="font-medium text-sm md:text-base">
              10,000+ Happy Customers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
