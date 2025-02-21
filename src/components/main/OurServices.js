'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeadingSection from './HeadingSection';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const OurServices = () => {
  const customeSlider = useRef();
  const testimonial = [
    {
      id: 1,
      image: '/assets/images/main/ourServiceIcon3.png',
      name: 'Multiple Payment Options',
      desc: 'Choose the payment method that suits you best. We accept various options, such as credit cards, PayPal, and bank transfers.',
      altText: 'Our Services Icon 3 - Visa Collect',
    },
    {
      id: 2,
      image: '/assets/images/main/ourServiceIcon1.png',
      name: 'Simplified Visa Application Process',
      desc: `Apply for your visa online with e-Visa. It's simple, fast, and convenient. Just fill out a form, upload your documents, and submit your order.`,
      altText: 'Our Services Icon 1 - Visa Collect',
    },
    {
      id: 3,
      image: '/assets/images/main/ourServiceIcon2.png',
      name: 'Urgent eVisa Processing',
      desc: 'Need your visa in a hurry? We can help you get it as soon as possible. We offer expedited processing for urgent cases, such as last-minute trips or emergencies.',
      altText: 'Our Services Icon 2 - Visa Collect',
    },
    {
      id: 4,
      image: '/assets/images/main/ourServiceIcon1.png',
      name: 'Trusted Travel Reviews and Guidance',
      desc: 'Get the best travel tips and advice from e-Visa. We offer honest and reliable reviews and guidance for various destinations, attractions, and activities. We help you plan your trip and make the most of your travel experience.',
      altText: 'Our Services Icon 1 - Visa Collect',
    },
  ];

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

    lazyLoad: true,
    accessibility: true,
    cssEase: 'ease-out',
    swipeToSlide: true,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
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
  return (
    <section className="bg-white" aria-label="Our Services">
      <div className="container py-12 space-y-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <HeadingSection
            sub="We make travel easy and hassle-free with our seamless online visa service. Whether you need an e tourist visa, a business visa, or a transit visa, we can help you get it in a few simple steps. No paperwork, no queues, no stress. Just apply, pay, and receive your visa and passport through mail."
            title="Our eVisa Services"
          />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute z-10 hidden text-center -left-8 md:block">
            <button
              onClick={() => customeSlider.current.slickPrev()}
              aria-label="Previous slide"
              className="focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <IoIosArrowBack
                size={40}
                className="p-2 text-white border rounded-full border-primary bg-secondary"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="w-[100%]" role="region" aria-label="Services Slider">
            <Slider {...settings} ref={customeSlider} className="mx-auto">
              {testimonial.map((item, index) => (
                <div
                  className="p-4 group"
                  key={index}
                  role="group"
                  aria-label={item.name}
                >
                  <div className="p-6 space-y-4 bg-white border hover:drop-shadow-xs hover:shadow-lg rounded-xl md:h-96">
                    <div className="w-full duration-1000 rounded-full">
                      <img
                        src={item.image}
                        alt={item.altText}
                        className="rounded-lg w-14 h-14"
                      />
                    </div>
                    <h2
                      className="text-2xl font-semibold w-52 text-gray-900"
                      tabIndex="0"
                    >
                      {item.name}
                    </h2>
                    <p
                      className="text-gray-800 group-hover:text-gray-900"
                      tabIndex="0"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="absolute z-10 hidden text-center -right-8 md:block">
            <button
              onClick={() => customeSlider.current.slickNext()}
              aria-label="Next slide"
              className="focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <IoIosArrowForward
                size={40}
                className="p-2 text-white border rounded-full bg-secondary border-primary"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
