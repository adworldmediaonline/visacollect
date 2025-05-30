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
    speed: 800,
    autoplaySpeed: 4000,
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

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  // Enhanced floating background elements - matching other sections
  const floatingElements = [
    { x: '8%', y: '15%', delay: 0, size: 'w-16 h-16' },
    { x: '90%', y: '20%', delay: 0.8, size: 'w-12 h-12' },
    { x: '12%', y: '78%', delay: 1.2, size: 'w-20 h-20' },
    { x: '88%', y: '85%', delay: 1.8, size: 'w-8 h-8' },
    { x: '45%', y: '8%', delay: 2.2, size: 'w-6 h-6' },
    { x: '75%', y: '55%', delay: 2.6, size: 'w-14 h-14' },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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
              'radial-gradient(circle at 25% 50%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 20%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(25,152,199,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 50%, rgba(25,152,199,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
              y: [0, -25, 0],
              x: [0, 12, 0],
              opacity: [0.2, 0.7, 0.2],
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
        {/* Header - Matching Other Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-300 rounded-full shadow-lg mb-6">
            <Award className="w-4 h-4" />
            Customer Reviews
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Trusted by thousands of travelers worldwide for hassle-free visa
            processing
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 whitespace-nowrap">
              <Users className="w-4 h-4 text-primary-300 flex-shrink-0" />
              <span className="text-white font-medium text-sm">
                50K+ Customers
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 whitespace-nowrap">
              <CheckCircle className="w-4 h-4 text-primary-300 flex-shrink-0" />
              <span className="text-white font-medium text-sm">
                99.9% Success
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 whitespace-nowrap">
              <Star className="w-4 h-4 text-primary-300 fill-current flex-shrink-0" />
              <span className="text-white font-medium text-sm">
                4.9/5 Rating
              </span>
            </div>
          </div>
        </motion.div>

        {/* Glassmorphism Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4">
                <motion.div
                  className={`transition-all duration-500 ${
                    index === currentSlide % testimonials.length
                      ? 'scale-105 z-10'
                      : 'scale-95 opacity-70'
                  }`}
                >
                  <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-3xl hover:shadow-primary/25 transition-all duration-300 rounded-2xl overflow-hidden group hover:bg-white/15">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

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

          {/* Navigation Buttons - Matching Other Sections */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              onClick={handlePrevSlide}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/15 border-white/20 text-white hover:text-white shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNextSlide}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/15 border-white/20 text-white hover:text-white shadow-lg backdrop-blur-sm"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide % testimonials.length
                    ? 'bg-primary-300 scale-125'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA - Matching Other Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-600/20 rounded-2xl opacity-50 blur-xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Join Thousands of Satisfied Customers?
              </h3>
              <p className="text-gray-300 mb-6">
                Start your visa application today and experience our
                award-winning service
              </p>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
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
