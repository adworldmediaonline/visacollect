'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Plane, Globe } from 'lucide-react';
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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-primary/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-40 h-40 bg-primary/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/4 to-primary/2 rounded-full blur-3xl" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(25,152,199,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(25,152,199,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
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
            className="mb-6 px-6 py-3 text-sm font-medium bg-primary/10 text-primary border-0 rounded-full shadow-lg backdrop-blur-sm"
          >
            <Plane className="w-4 h-4 mr-2" />
            Popular Destinations
          </Badge>
          <HeadingSection
            title="We Process Visas for"
            sub="Choose from our wide range of visa processing services for popular destinations worldwide"
          />
        </motion.div>

        {/* Debug Info (remove in production) */}
        <div className="text-center mb-4 text-sm text-gray-500">
          Showing {currentPopularDestinations.length} of{' '}
          {popularDestinations.length} destinations
        </div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
          key={`destinations-${loadMore}`} // Force re-render when loadMore changes
        >
          {currentPopularDestinations?.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white relative">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                    {/* Country Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/95 backdrop-blur-md text-gray-900 border-0 px-3 py-1.5 font-bold text-sm shadow-lg">
                        <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                        {destination.title}
                      </Badge>
                    </div>

                    {/* Coming Soon Overlay */}
                    {destination.comingSoon && (
                      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center">
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-800 border-gray-200 px-4 py-2 text-sm font-semibold"
                        >
                          Coming Soon
                        </Badge>
                      </div>
                    )}

                    {/* Hover Effect Plane */}
                    <motion.div
                      className="absolute top-4 right-4 text-white/0 group-hover:text-white/80"
                      initial={{ x: 20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plane className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="text-center">
                    <Link
                      href={destination.comingSoon ? '#' : destination.link}
                      className={`group/link inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                        destination.comingSoon
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:text-white bg-gradient-to-r from-transparent to-transparent hover:from-primary hover:to-primary-600 px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105'
                      }`}
                      aria-label={`Read more about ${destination.title} visa`}
                    >
                      <span>Apply for Visa</span>
                      {!destination.comingSoon && (
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      )}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMoreDestinations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-gray-600 text-sm">
              {remainingCount} more destination{remainingCount !== 1 ? 's' : ''}{' '}
              available
            </p>
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:transform-none min-w-[200px]"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        )}

        {/* All loaded message */}
        {!hasMoreDestinations && loadMore > 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-6 py-3 rounded-full font-medium shadow-lg">
              <Globe className="w-5 h-5" />
              <span>All {popularDestinations.length} destinations loaded!</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
