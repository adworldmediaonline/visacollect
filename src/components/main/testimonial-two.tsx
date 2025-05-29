'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
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

export default function TestimonialTwo() {
  const sliderRef = useRef<Slider>(null);

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
          speed: 1000,
        },
      },
    ],
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100 to-primary" />

      {/* Wave Background */}
      <Image
        src={testimonialWaveImg}
        className="absolute bottom-0 w-full object-cover"
        alt="Testimonials background wave"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/20"
          >
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Customers' Stories
            </motion.h2>

            {/* Reflection Effect */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden md:block text-4xl font-extrabold transform scale-y-[-1] bg-gradient-to-b from-white/40 via-white/20 to-transparent bg-clip-text text-transparent"
            >
              Customers' Stories
            </motion.h2>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Slider {...settings} ref={sliderRef}>
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="px-4">
                  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[400px]">
                        {/* Image Section */}
                        <div className="lg:col-span-4 relative overflow-hidden">
                          <div className="aspect-square lg:aspect-auto lg:h-full relative">
                            <Image
                              src={testimonialBannerImg}
                              className="object-cover w-full h-full"
                              alt={`Profile picture of ${testimonial.name}`}
                              fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                          {/* Quote Icon */}
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                            <Quote className="w-6 h-6 text-white" />
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                            "{testimonial.desc}"
                          </blockquote>

                          {/* Rating */}
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                className="w-5 h-5 text-yellow-500 fill-current"
                                aria-hidden="true"
                              />
                            ))}
                            <span className="sr-only">5 out of 5 stars</span>
                          </div>

                          {/* Author */}
                          <div className="space-y-1">
                            <h4 className="text-xl font-semibold text-gray-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-primary font-medium">
                              Verified Customer
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 right-8 flex space-x-4">
            <Button
              onClick={() => sliderRef.current?.slickPrev()}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </Button>

            <Button
              onClick={() => sliderRef.current?.slickNext()}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
