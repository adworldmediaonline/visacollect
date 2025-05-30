'use client';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  CheckCircle,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import testimonialBannerImg from '/public/assets/images/main/testimonialImg.png';
import testimonialWaveImg from '/public/assets/images/main/waves.png';

interface TestimonialItem {
  id: number;
  image: string;
  name: string;
  desc: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Samantha Lee, Australia',
    desc: 'I used e-Visa to apply for my tourist visa to India and I was very impressed by their service. They were fast, efficient, and professional. They answered all my questions and guided me through the process. I received my visa and passport by mail in less than a week. I highly recommend e-Visa to anyone who needs a visa.',
  },
  {
    id: 2,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Mohamed Ali, Egypt',
    desc: 'e-Visa made my visa application to Turkey so easy and hassle-free. I just filled out an online form, uploaded my documents, and paid the fee. They handled everything else for me, from reviewing my application to communicating with the authorities. I got my visa and passport by mail in a few days. e-Visa is the best visa service I have ever used.',
  },
  {
    id: 3,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Rajesh Kumar, India',
    desc: 'I needed a transit visa to Singapore for my flight to Japan and I was running out of time. e-Visa came to my rescue with their urgent e-Visa processing service. They expedited my application and secured my approval in no time. They also kept me updated on the status of my order. Thanks to VisaHQ, I was able to catch my flight without any problems.',
  },
  {
    id: 4,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Nurul Hidayah, Malaysia',
    desc: 'I wanted to travel to Morocco with my family for a vacation, but I was worried about the visa process. e-Visa made it simple and convenient for me. They helped me apply for my visa online, mailed me the required documents, and received my visa and passport by mail. They also offered me trusted travel reviews and guidance for my destination. VisaHQ is a great travel partner.',
  },
  {
    id: 5,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Emre Yilmaz, Turkey',
    desc: 'I had to apply for a business visa to Indonesia for a conference and I was looking for a reliable and fast visa service. e-Visa exceeded my expectations with their online visa application service. They were quick, easy, and transparent. They reviewed my application, handled the authorities, and delivered my visa and passport by mail. They also supported me and updated me throughout the process. e-Visa is a trustworthy and professional visa service.',
  },
];

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
  { label: 'Countries Served', value: '150+', icon: Star },
];

export default function TestimonialTwo() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: 'center',
    fade: true,
    slidesToShow: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    lazyLoad: true as const,
    accessibility: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    swipeToSlide: true,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          speed: 800,
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
    { x: '8%', y: '12%', delay: 0, size: 'w-16 h-16' },
    { x: '90%', y: '20%', delay: 0.8, size: 'w-12 h-12' },
    { x: '12%', y: '78%', delay: 1.2, size: 'w-20 h-20' },
    { x: '88%', y: '85%', delay: 1.8, size: 'w-8 h-8' },
    { x: '45%', y: '8%', delay: 2.2, size: 'w-6 h-6' },
    { x: '75%', y: '55%', delay: 2.6, size: 'w-14 h-14' },
  ];

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary-600"
      aria-label="Customer Testimonials"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Additional gradient overlays for more depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.2),transparent_50%)]" />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-[length:100px_100px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpolygon points='50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Enhanced floating elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} rounded-full bg-white/10 opacity-30`}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -20, 0],
              x: [0, 8, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
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

        {/* Animated Elements */}
        <div
          className="absolute top-1/4 left-1/5 w-4 h-4 bg-white/20 rounded-full animate-ping"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white/25 rounded-full animate-ping"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-3/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <Image
          src={testimonialWaveImg}
          className="w-full object-cover h-32 md:h-48"
          alt="Testimonials background wave"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-white/20 backdrop-blur-sm border-0 text-white font-medium hover:bg-white/25 transition-all duration-300 rounded-full shadow-lg mb-6">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Customers' Stories
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg max-w-2xl mx-auto"
            >
              Discover what our satisfied customers have to say about their visa
              experience
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20"
                >
                  <stat.icon className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Slider {...settings} ref={sliderRef}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="bg-white/98 backdrop-blur-sm border-0 shadow-3xl hover:shadow-4xl transition-all duration-500 rounded-3xl overflow-hidden group">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                      <CardContent className="p-0 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[420px]">
                          {/* Enhanced Image Section */}
                          <div className="lg:col-span-5 relative overflow-hidden">
                            <div className="aspect-square lg:aspect-auto lg:h-full relative">
                              <Image
                                src={testimonialBannerImg}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                alt={`Profile picture of ${testimonial.name}`}
                                fill
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/40" />

                              {/* Floating Quote */}
                              <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/30">
                                <Quote className="w-8 h-8 text-primary" />
                              </div>

                              {/* Customer Badge */}
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 shadow-xl border border-white/30">
                                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900">
                                      Verified Customer
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      Visa approved successfully
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Content Section */}
                          <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center space-y-8">
                            {/* Quote Section */}
                            <div className="space-y-6">
                              <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                                  <Quote className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
                              </div>

                              <blockquote className="text-gray-700 text-lg leading-relaxed font-medium">
                                "{testimonial.desc}"
                              </blockquote>
                            </div>

                            {/* Rating Section */}
                            <motion.div
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, starIndex) => (
                                  <motion.div
                                    key={starIndex}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.4 + starIndex * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    <Star
                                      className="w-5 h-5 text-yellow-500 fill-current"
                                      aria-hidden="true"
                                    />
                                  </motion.div>
                                ))}
                              </div>
                              <span className="text-gray-600 font-medium ml-2">
                                5.0 out of 5
                              </span>
                              <span className="sr-only">5 out of 5 stars</span>
                            </motion.div>

                            {/* Enhanced Author Section */}
                            <motion.div
                              className="space-y-2"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <h4 className="text-2xl font-bold text-gray-900">
                                {testimonial.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <div className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-primary/90 backdrop-blur-sm border-0 text-white font-medium rounded-full shadow-lg">
                                  Verified Customer
                                </div>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-600 text-sm">
                                  Visa approved
                                </span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Enhanced Navigation Buttons */}
          <div className="absolute bottom-8 right-8 flex space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handlePrevSlide}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm border-white/30 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleNextSlide}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm border-white/30 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8 space-x-3"
          >
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
