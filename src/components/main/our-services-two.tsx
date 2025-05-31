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
    speed: 600,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand' as const,
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
          speed: 400,
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

  // Simplified floating elements for better performance
  const floatingElements = [
    { x: '10%', y: '15%', delay: 0, size: 'w-3 h-3' },
    { x: '90%', y: '25%', delay: 0.5, size: 'w-2 h-2' },
    { x: '15%', y: '85%', delay: 1, size: 'w-4 h-4' },
    { x: '85%', y: '75%', delay: 1.5, size: 'w-2 h-2' },
  ];

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      aria-label="Our Services"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0">
        {/* Simplified gradient overlays */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-200 rounded-full shadow-lg mb-8">
              <Star className="w-4 h-4" />
              Our Services
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Our eVisa </span>
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We make travel easy and hassle-free with our seamless online visa
              service. Whether you need an e tourist visa, a business visa, or a
              transit visa, we can help you get it in a few simple steps.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Circular Navigation Buttons - Closer to Cards */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                onClick={handlePrevSlide}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-200 group border will-change-transform"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-150" />
              </Button>
            </motion.div>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                onClick={handleNextSlide}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-200 group border will-change-transform"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-150" />
              </Button>
            </motion.div>
          </div>

          {/* Slider Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-8 md:mx-16"
            role="region"
            aria-label="Services Slider"
          >
            <Slider {...settings} ref={sliderRef}>
              {services.map((service, index) => (
                <div className="p-4" key={service.id}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      duration: 0.2,
                    }}
                    className="group will-change-transform"
                  >
                    <Card className="h-[400px] border-0 shadow-2xl hover:shadow-3xl hover:shadow-primary/20 transition-all duration-300 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 overflow-hidden relative">
                      {/* Simplified glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                      {/* Simplified background pattern */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/8 to-transparent rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-400" />

                      <CardContent className="p-8 h-full flex flex-col relative z-10">
                        {/* Optimized Icon Section */}
                        <div className="relative mb-6">
                          <motion.div
                            className="w-18 h-18 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/20 will-change-transform"
                            whileHover={{ rotate: 3, scale: 1.02 }}
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              duration: 0.15,
                            }}
                          >
                            {/* Simplified rotating background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl transform group-hover:rotate-12 transition-transform duration-300" />

                            <service.icon className="w-9 h-9 text-primary-300 relative z-10" />
                          </motion.div>

                          {/* Optimized Original Icon Badge */}
                          <motion.div
                            className="absolute -bottom-2 -right-2 will-change-transform"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              duration: 0.12,
                            }}
                          >
                            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-white/30">
                              <img
                                src={service.image}
                                alt={service.altText}
                                className="w-5 h-5 object-contain"
                              />
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-200 leading-tight">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                            {service.desc}
                          </p>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        {/* Mobile Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 space-x-3 md:hidden"
        >
          {services.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 will-change-transform ${
                index === currentSlide % services.length
                  ? 'bg-primary-300 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
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
                  Need Help Choosing?
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Our visa experts are here to guide you through the best
                  service for your needs. Start your journey today.
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl will-change-transform text-lg"
              >
                <motion.span
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Expert Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
