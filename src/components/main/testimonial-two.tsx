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
  Award,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import testimonialBannerImg from '/public/assets/images/main/testimonialImg.png';

interface TestimonialItem {
  id: number;
  image: string;
  name: string;
  location: string;
  desc: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Samantha Lee',
    location: 'Australia',
    desc: 'I used e-Visa to apply for my tourist visa to India and I was very impressed by their service. They were fast, efficient, and professional. I received my visa in less than a week!',
    rating: 5,
  },
  {
    id: 2,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Mohamed Ali',
    location: 'Egypt',
    desc: 'e-Visa made my visa application to Turkey so easy and hassle-free. They handled everything for me and I got my visa in a few days. Best visa service I have ever used!',
    rating: 5,
  },
  {
    id: 3,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Rajesh Kumar',
    location: 'India',
    desc: 'I needed a transit visa to Singapore urgently. e-Visa came to my rescue with their urgent processing service. They secured my approval in no time!',
    rating: 5,
  },
  {
    id: 4,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Nurul Hidayah',
    location: 'Malaysia',
    desc: 'e-Visa made my family vacation to Morocco possible. They made the visa process simple and convenient. Great travel partner for hassle-free visa processing!',
    rating: 5,
  },
  {
    id: 5,
    image: '/assets/images/main/testimonialImg.png',
    name: 'Emre Yilmaz',
    location: 'Turkey',
    desc: 'Needed a business visa to Indonesia for a conference. e-Visa exceeded my expectations with their quick, easy, and transparent service. Highly recommended!',
    rating: 5,
  },
];

export default function TestimonialTwo() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  // Simplified floating elements for better performance
  const floatingElements = [
    { x: '10%', y: '15%', delay: 0, size: 'w-3 h-3' },
    { x: '90%', y: '25%', delay: 0.5, size: 'w-2 h-2' },
    { x: '15%', y: '85%', delay: 1, size: 'w-4 h-4' },
    { x: '85%', y: '75%', delay: 1.5, size: 'w-2 h-2' },
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-200 rounded-full shadow-lg mb-8">
              <Award className="w-4 h-4" />
              Customer Reviews
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
              <span className="text-white">What Our </span>
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Trusted by thousands of travelers worldwide for hassle-free visa
              processing. See what our customers have to say about their
              experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4">
                <motion.div
                  className={`transition-all duration-300 will-change-transform ${
                    index === currentSlide % testimonials.length
                      ? 'scale-105 z-10'
                      : 'scale-95 opacity-70'
                  }`}
                >
                  <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-primary/20 transition-all duration-300 rounded-2xl overflow-hidden group hover:bg-white/10">
                    {/* Simplified glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                    <CardContent className="p-8 relative z-10">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center border border-white/20">
                          <Quote className="w-6 h-6 text-primary-300" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-gray-300 text-base leading-relaxed text-center mb-8 font-medium">
                        "{testimonial.desc}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/30">
                            <Image
                              src={testimonialBannerImg}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              width={64}
                              height={64}
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        </div>

                        <div className="text-center">
                          <h4 className="font-bold text-white text-lg">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center justify-center gap-1 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                              {testimonial.location}
                            </span>
                          </div>
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded-full mt-2 border border-white/20">
                            <CheckCircle className="w-3 h-3" />
                            Verified Customer
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 will-change-transform ${
                  index === currentSlide % testimonials.length
                    ? 'bg-primary-300 scale-125'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
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
                  Ready to Join Thousands of Satisfied Customers?
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Start your visa application today and experience our
                  award-winning service. Join our happy customers worldwide.
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden will-change-transform text-lg"
              >
                <span className="relative z-10">Apply for Visa Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
