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
  Briefcase,
  CheckCircle,
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
      className="relative py-20 md:py-24 overflow-hidden bg-white"
      aria-label="Our Services"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0">
        {/* Simplified gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

        {/* Subtle animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-5 will-change-transform"
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
            className={`absolute ${element.size} rounded-full bg-primary/10 opacity-40 will-change-transform`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3],
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 rounded-full shadow-lg mb-8 border-0">
            <Briefcase className="w-4 h-4" />
            Our Services
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Our Expert </span>
              <span className="text-primary">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From application to approval, we provide comprehensive visa
              services to make your travel dreams a reality.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-[400px] border shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-gray-200 hover:border-primary/20 overflow-hidden relative">
                {/* Simplified glow effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Simplified background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-400" />

                <CardContent className="p-8 h-full flex flex-col relative z-10">
                  {/* Optimized Icon Section */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-200 group-hover:scale-105 transition-transform duration-300">
                      {/* Subtle background animation */}
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300" />

                      <service.icon className="w-8 h-8 text-primary relative z-10" />
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute -bottom-2 -right-2">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 flex-1">
                      {/* Features List */}
                      <div className="space-y-2 flex-1">
                        {/* Features List */}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500">Starting from</p>
                          <p className="text-lg font-bold text-primary">
                            {/* Pricing */}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="text-sm font-semibold text-gray-700">
                            {/* Duration */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 transform group-hover:scale-[1.02] shadow-sm hover:shadow-md relative overflow-hidden group/btn"
                      size="sm"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-150" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"></div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl"></div>

            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Need Help Choosing?
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Our visa experts are here to guide you through the best
                  service for your needs. Start your journey today.
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl will-change-transform text-lg"
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
