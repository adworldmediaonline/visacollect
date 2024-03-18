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
    <div className="py-12 md:py-20 bg-sky-50">
      <div className="container mx-auto text-center md:max-w-4xl">
        <HeadingSection
          sub="It’s simple, fast, and secure. Just fill out an online form, submit your documents, and get your visa delivered to your email."
          title="How It Works?"
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {testimonial.map((item, e) => (
            <div className="flex flex-col py-4 group md:mx-5 md:py-10" key={e}>
              <div className="h-full py-10 text-center bg-white shadow-md hover:drop-shadow-xs hover:shadow-lg rounded-xl">
                <div className="flex justify-center w-full duration-1000 rounded-full duration">
                  <Image
                    src={item.image}
                    alt={item.altText}
                    width={20}
                    height={20}
                    className="w-20 h-20 mx-auto rounded-lg "
                  />
                </div>
                <h2 className="pt-3 mx-auto text-lg font-semibold text-center text-primary w-52">
                  {item.name}
                </h2>
                <p className="px-5 py-4 pb-4 text-center text-black/80 group-hover:text-black ">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
