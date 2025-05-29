'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
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

  const settings = {
    className: 'center',
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 2000,
    lazyLoad: true as const,
    accessibility: true,
    cssEase: 'ease-out',
    swipeToSlide: true,
    pauseOnHover: true,
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
          speed: 1000,
        },
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20"
      aria-label="Our Services"
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
            <Star className="w-4 h-4 mr-2" />
            Our Services
          </Badge>

          <HeadingSection
            sub="We make travel easy and hassle-free with our seamless online visa service. Whether you need an e tourist visa, a business visa, or a transit visa, we can help you get it in a few simple steps. No paperwork, no queues, no stress. Just apply, pay, and receive your visa and passport through mail."
            title="Our eVisa Services"
          />
        </motion.div>

        {/* Services Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <Button
              onClick={() => sliderRef.current?.slickPrev()}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <Button
              onClick={() => sliderRef.current?.slickNext()}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </Button>
          </div>

          {/* Slider Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-8 md:mx-16"
            role="region"
            aria-label="Services Slider"
          >
            <Slider {...settings} ref={sliderRef}>
              {services.map((service, index) => (
                <div className="p-4" key={service.id}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group"
                  >
                    <Card className="h-[400px] border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Icon Section */}
                        <div className="relative mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-8 h-8 text-primary" />
                          </div>

                          {/* Original Icon as Badge */}
                          <div className="absolute -bottom-2 -right-2">
                            <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100">
                              <img
                                src={service.image}
                                alt={service.altText}
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm flex-1">
                            {service.desc}
                          </p>
                        </div>

                        {/* Hover Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                        {/* Bottom Gradient Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 space-x-2 md:hidden"
        >
          {services.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-gray-300 rounded-full" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
