'use client';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileCheck,
  Clock,
  Star,
  ArrowRight,
} from 'lucide-react';
import HeadingSection from './HeadingSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceItem {
  id: number;
  image: string;
  name: string;
  desc: string;
  altText: string;
  icon: any;
}

const services: ServiceItem[] = [
  {
    id: 1,
    image: '/assets/images/main/ourServiceIcon3.png',
    name: 'Multiple Payment Options',
    desc: 'Choose the payment method that suits you best. We accept various options, such as credit cards, PayPal, and bank transfers.',
    altText: 'Our Services Icon 3 - Visa Collect',
    icon: CreditCard,
  },
  {
    id: 2,
    image: '/assets/images/main/ourServiceIcon1.png',
    name: 'Simplified Visa Application Process',
    desc: `Apply for your visa online with e-Visa. It's simple, fast, and convenient. Just fill out a form, upload your documents, and submit your order.`,
    altText: 'Our Services Icon 1 - Visa Collect',
    icon: FileCheck,
  },
  {
    id: 3,
    image: '/assets/images/main/ourServiceIcon2.png',
    name: 'Urgent eVisa Processing',
    desc: 'Need your visa in a hurry? We can help you get it as soon as possible. We offer expedited processing for urgent cases, such as last-minute trips or emergencies.',
    altText: 'Our Services Icon 2 - Visa Collect',
    icon: Clock,
  },
  {
    id: 4,
    image: '/assets/images/main/ourServiceIcon1.png',
    name: 'Trusted Travel Reviews and Guidance',
    desc: 'Get the best travel tips and advice from e-Visa. We offer honest and reliable reviews and guidance for various destinations, attractions, and activities. We help you plan your trip and make the most of your travel experience.',
    altText: 'Our Services Icon 1 - Visa Collect',
    icon: Star,
  },
];

export default function OurServicesTwo() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: 'center',
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    lazyLoad: true as const,
    accessibility: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    swipeToSlide: true,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 600,
        },
      },
    ],
  };

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  // Enhanced floating background elements
  const floatingElements = [
    { x: '12%', y: '18%', delay: 0, size: 'w-20 h-20' },
    { x: '85%', y: '25%', delay: 0.8, size: 'w-16 h-16' },
    { x: '10%', y: '70%', delay: 1.2, size: 'w-24 h-24' },
    { x: '88%', y: '75%', delay: 1.8, size: 'w-12 h-12' },
    { x: '45%', y: '5%', delay: 2.2, size: 'w-8 h-8' },
    { x: '75%', y: '55%', delay: 2.6, size: 'w-18 h-18' },
  ];

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      aria-label="Our Services"
    >
      {/* Advanced Background Elements - Matching Banner Style */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(25,152,199,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 30%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 40%, rgba(25,152,199,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(25,152,199,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(25,152,199,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Floating elements with varied sizes */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-full bg-gradient-to-r from-primary/20 to-primary-400/20 opacity-25`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -28, 0],
              x: [0, 15, 0],
              opacity: [0.25, 0.7, 0.25],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 7 + Math.random() * 2,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-300 rounded-full shadow-lg mb-6">
              <Star className="w-4 h-4" />
              Our Services
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Our eVisa </span>
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We make travel easy and hassle-free with our seamless online visa
              service. Whether you need an e tourist visa, a business visa, or a
              transit visa, we can help you get it in a few simple steps. No
              paperwork, no queues, no stress. Just apply, pay, and receive your
              visa and passport through mail.
            </p>
          </motion.div>

          {/* Service Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20"
          >
            <Star className="w-5 h-5 text-primary-300 fill-current" />
            <span className="text-gray-300 font-medium">
              {services.length} premium services available
            </span>
          </motion.div>
        </motion.div>

        {/* Services Slider */}
        <div className="relative">
          {/* Enhanced Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block -ml-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handlePrevSlide}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group border"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block -mr-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleNextSlide}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 group border"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Slider Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-4 md:mx-12"
            role="region"
            aria-label="Services Slider"
          >
            <Slider {...settings} ref={sliderRef}>
              {services.map((service, index) => (
                <div className="p-4" key={service.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group"
                  >
                    <Card className="h-[420px] border-0 shadow-2xl hover:shadow-3xl hover:shadow-primary/25 transition-all duration-500 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 overflow-hidden relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />

                      <CardContent className="p-8 h-full flex flex-col relative z-10">
                        {/* Enhanced Icon Section */}
                        <div className="relative mb-8">
                          <motion.div
                            className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/20"
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            {/* Rotating Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />

                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <service.icon className="w-10 h-10 text-primary-300 relative z-10" />
                            </motion.div>
                          </motion.div>

                          {/* Enhanced Original Icon Badge */}
                          <motion.div
                            className="absolute -bottom-3 -right-3"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border border-white/20">
                              <img
                                src={service.image}
                                alt={service.altText}
                                className="w-7 h-7 object-contain"
                              />
                            </div>
                          </motion.div>
                        </div>

                        {/* Enhanced Content */}
                        <div className="flex-1 space-y-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 leading-tight">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-sm flex-1">
                            {service.desc}
                          </p>
                        </div>

                        {/* Learn More Button */}
                        <motion.div
                          className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ y: 10 }}
                          whileHover={{ y: 0 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary-300 hover:text-primary-200 hover:bg-primary/10 p-0 h-auto font-medium group/btn"
                          >
                            <span className="flex items-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                          </Button>
                        </motion.div>

                        {/* Enhanced Bottom Gradient Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 space-x-3 md:hidden"
        >
          {services.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide % services.length
                  ? 'bg-primary-300 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-3xl opacity-50 blur-xl"></div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-gray-300">
                  Our visa experts are here to guide you through the best
                  service for your needs
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
                  Get Expert Consultation
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
