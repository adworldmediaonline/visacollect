'use client';
import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeadingSection from './HeadingSection';
import Image from 'next/image';
import onlineApplication from '/public/assets/images/main/online-application.png';
import makePaymentIcon from '/public/assets/images/main/makePayment.png';
import receiveVisaIcon from '/public/assets/images/main/receiveVisa.png';
const HowItWorks = () => {
  const customeSlider = useRef();
  const testimonial = [
    {
      id: 1,
      image: onlineApplication,
      name: 'Fill Out Online Application',
      desc: 'Fill out a simple form and avoid errors with our smart system.',
      altText: 'Online Application icon - Visa Collect',
    },
    {
      id: 2,
      image: makePaymentIcon,
      name: 'Share Your Documents Securely',
      desc: 'Skip the consulate queue and let us handle the paperwork for you.',
      altText: 'Share Your Documents icon - Visa Collect',
    },
    {
      id: 3,
      image: makePaymentIcon,
      name: 'Make Payment Easily Online',
      desc: 'Select a convenient and secure payment option and complete your order.',
      altText: 'Make Payment icon - Visa Collect',
    },
    {
      id: 4,
      image: receiveVisaIcon,
      name: 'Receive eVisa Letter On Time',
      desc: 'Track your status online and get ready for your trip.',
      altText: 'receive Visa Icon - Visa Collect',
    },
  ];

  return (
    <section className="bg-white" aria-label="How It Works">
      <div className="container py-12 space-y-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <HeadingSection
            sub="We make travel easy and hassle-free with our seamless online visa service. Whether you need an e tourist visa, a business visa, or a transit visa, we can help you get it in a few simple steps. No paperwork, no queues, no stress. Just apply, pay, and receive your visa and passport through mail."
            title="How It Works"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {testimonial.map((item, index) => (
            <div
              key={index}
              className="p-6 space-y-4 text-center bg-white border hover:shadow-lg rounded-xl"
              role="article"
              aria-label={item.name}
            >
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.altText}
                  className="w-16 h-16"
                  width={64}
                  height={64}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h2>
              <p className="text-gray-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
