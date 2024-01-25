'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeadingSection from './HeadingSection';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const HowItWorks = () => {
  const customeSlider = useRef();
  const testimonial = [
    {
      id: 1,
      image: '/assets/images/main/online-application.png',
      name: 'Fill Out Online Application',
      desc: 'Fill out a simple form and avoid errors with our smart system.',
    },
    {
      id: 2,
      image: '/assets/images/main/makePayment.png',
      name: 'Share Your Documents Securely',
      desc: 'Skip the consulate queue and let us handle the paperwork for you.',
    },
    {
      id: 3,
      image: '/assets/images/main/receiveVisa.png',
      name: 'Make Payment Easily Online',
      desc: 'Select a convenient and secure payment option and complete your order.',
    },
    {
      id: 4,
      image: '/assets/images/main/receiveVisa.png',
      name: 'Receive eVisa Letter On Time',
      desc: 'Track your status online and get ready for your trip.',
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
        <div className="grid-cols-3 md:grid">
          {testimonial.map((item, e) => (
            <div className="py-4 group md:mx-5 md:py-10" key={e}>
              <div className="py-10 text-center bg-white shadow-md hover:drop-shadow-xs hover:shadow-lg rounded-xl">
                <div className="flex justify-center w-full duration-1000 rounded-full duration">
                  <img
                    src={item.image}
                    alt=""
                    className="w-20 h-20 mx-auto rounded-lg "
                  />
                </div>
                <h2 className="pt-3 mx-auto text-lg font-semibold text-center text-primaryMain w-52">
                  {item.name}
                </h2>
                <p className="px-5 py-4 pb-4 text-center text-black/80 group-hover:text-black ">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="flex px-8 py-2 mx-auto btnBlue">
            Ready? Let’s Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
