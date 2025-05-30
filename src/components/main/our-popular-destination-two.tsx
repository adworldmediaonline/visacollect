'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Plane, Globe, Star } from 'lucide-react';
import HeadingSection from './HeadingSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Destination {
  id: number;
  imgSrc: string;
  title: string;
  link: string;
  comingSoon: boolean;
  altText: string;
}

const data: Destination[] = [
  {
    id: 1,
    imgSrc: '/assets/images/main/india-desti.png',
    title: 'India',
    link: '/in',
    comingSoon: false,
    altText: 'Apply for India Visa Online Now - Quick and Easy Process',
  },
  {
    id: 2,
    imgSrc: '/assets/images/main/srilanka.jpg',
    title: 'Srilanka',
    link: '/lk',
    comingSoon: false,
    altText: 'Apply for Sri lanka visa - Beaches of Sri lanka',
  },
  {
    id: 3,
    imgSrc: '/assets/images/main/australia.jpg',
    title: 'Australia',
    link: '/au',
    comingSoon: false,
    altText: 'Apply for Australia visa online - smooth process',
  },
  {
    id: 4,
    imgSrc: '/assets/images/main/turkey.jpg',
    title: 'Turkey',
    link: '/tr',
    comingSoon: false,
    altText: 'Turkey visa online - Apply Easily with Secure Online System',
  },
  {
    id: 5,
    imgSrc: '/assets/images/main/thailand.jpg',
    title: 'Thailand',
    link: '/th',
    comingSoon: false,
    altText: `Apply thailand visa online - Thailand's E-Visa`,
  },
  {
    id: 6,
    imgSrc: '/assets/images/main/cambodia.jpg',
    title: 'Cambodia',
    link: '/kh',
    comingSoon: false,
    altText: `Cambodia visa online - hustlefree visa process`,
  },
  {
    id: 7,
    imgSrc: '/assets/images/main/oman.jpg',
    title: 'Oman',
    link: '/om',
    comingSoon: false,
    altText: `oman visa online -  Visa Collect`,
  },
  {
    id: 8,
    imgSrc: '/assets/images/main/egypt.jpg',
    title: 'Egypt',
    link: '/eg',
    comingSoon: false,
    altText: `Online Visa for Egypt: Hassle-free travel made possible with just a few clicks`,
  },
  {
    id: 9,
    imgSrc: '/assets/images/main/morocco.jpg',
    title: 'Morrocco',
    link: '/ma',
    comingSoon: false,
    altText: `Apply morocco e visa - Visa Collect`,
  },
  {
    id: 10,
    imgSrc: '/assets/images/main/malaysia.jpg',
    title: 'Malaysia',
    link: '/my',
    comingSoon: false,
    altText: `Apply malaysia visa online - Online Application`,
  },
  {
    id: 11,
    imgSrc: '/assets/images/main/japan.jpg',
    title: 'Japan',
    link: '/jp',
    comingSoon: false,
    altText: `Apply japan visa online - Visa Collect`,
  },
  {
    id: 12,
    imgSrc: '/assets/images/main/singapore.jpg',
    title: 'Singapore',
    link: '/sg',
    comingSoon: false,
    altText: `Apply singapore visa online - Fees, Documents, Validity`,
  },
  {
    id: 13,
    imgSrc: '/assets/images/main/indonesia.jpg',
    title: 'Indonesia',
    link: '/id',
    comingSoon: false,
    altText: `How to Apply for Indonesia Visa Online - Visa Collect`,
  },
];

export default function OurPopularDestinationTwo() {
  const [popularDestinations] = useState<Destination[]>(data);
  const [loadMore, setLoadMore] = useState<number>(1);
  const [defaultPopularDestinations] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentPopularDestinations = popularDestinations.slice(
    0,
    defaultPopularDestinations * loadMore
  );

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Simulate loading time for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setLoadMore(prevLoadMore => {
      const newLoadMore = prevLoadMore + 1;
      console.log('Loading more destinations:', {
        currentCount: currentPopularDestinations.length,
        newCount: Math.min(
          defaultPopularDestinations * newLoadMore,
          popularDestinations.length
        ),
        totalAvailable: popularDestinations.length,
      });
      return newLoadMore;
    });
    setIsLoading(false);
  };

  // Calculate remaining destinations
  const hasMoreDestinations =
    currentPopularDestinations.length < popularDestinations.length;
  const remainingCount =
    popularDestinations.length - currentPopularDestinations.length;

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  // Floating background elements
  const floatingElements = [
    { x: '10%', y: '15%', delay: 0, size: 'w-16 h-16' },
    { x: '85%', y: '25%', delay: 0.5, size: 'w-20 h-20' },
    { x: '15%', y: '75%', delay: 1, size: 'w-12 h-12' },
    { x: '90%', y: '80%', delay: 1.5, size: 'w-24 h-24' },
    { x: '50%', y: '10%', delay: 2, size: 'w-8 h-8' },
    { x: '75%', y: '60%', delay: 2.5, size: 'w-14 h-14' },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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
            className={`absolute ${element.size} rounded-full bg-gradient-to-r from-primary/20 to-primary-400/20 opacity-40`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Enhanced with Banner Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-300 rounded-full shadow-lg">
              <Plane className="w-4 h-4" />
              <span>Popular Destinations</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-white">We Process</span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Visas for
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Choose from our wide range of visa processing services for popular
              destinations worldwide
            </p>
          </motion.div>
        </motion.div>

        {/* Destinations Grid - Enhanced Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          key={`destinations-${loadMore}`}
        >
          {currentPopularDestinations?.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl group-hover:shadow-primary/25 transition-all duration-500 h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={destination.imgSrc}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
                      alt={destination.altText}
                      loading="lazy"
                    />

                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Country Badge - Enhanced */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-md text-gray-900 border-0 px-3 py-1.5 font-semibold text-sm shadow-lg">
                        <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                        {destination.title}
                      </Badge>
                    </div>

                    {/* Coming Soon Overlay - Enhanced */}
                    {destination.comingSoon && (
                      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                        <Badge className="bg-white/95 backdrop-blur-md text-gray-800 border-0 px-4 py-2 text-sm font-bold shadow-xl">
                          Coming Soon
                        </Badge>
                      </div>
                    )}

                    {/* Hover Effect Plane - Enhanced */}
                    <motion.div
                      className="absolute top-4 right-4 text-white/0 group-hover:text-white"
                      initial={{ x: 20, opacity: 0, rotate: 0 }}
                      whileHover={{ x: 0, opacity: 1, rotate: 12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full border border-white/20">
                        <Plane className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-5 relative">
                  <div className="text-center">
                    <Link
                      href={destination.comingSoon ? '#' : destination.link}
                      className={`group/link inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 relative overflow-hidden ${
                        destination.comingSoon
                          ? 'text-gray-400 cursor-not-allowed bg-gray-100/10 px-5 py-2.5 rounded-lg text-sm'
                          : 'text-white bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105'
                      }`}
                      aria-label={`Read more about ${destination.title} visa`}
                    >
                      <span className="relative z-10">Apply for Visa</span>
                      {!destination.comingSoon && (
                        <>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                        </>
                      )}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button - Enhanced Design */}
        {hasMoreDestinations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:transform-none min-w-[240px]"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Loading...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="load-more"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Load More Destinations ({remainingCount})</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>
        )}

        {/* All loaded message - Enhanced */}
        {!hasMoreDestinations && loadMore > 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
              <div className="p-1.5 bg-green-500/20 rounded-full">
                <Globe className="w-4 h-4 text-green-400" />
              </div>
              <span>All {popularDestinations.length} destinations loaded!</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
