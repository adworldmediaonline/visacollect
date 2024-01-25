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
    },
    {
      id: 2,
      image: '/assets/images/main/ourServiceIcon1.png',
      name: 'Simplified Visa Application Process',
      desc: 'Apply for your visa online with e-Visa. It’s simple, fast, and convenient. Just fill out a form, upload your documents, and submit your order.',
    },
    {
      id: 3,
      image: '/assets/images/main/ourServiceIcon2.png',
      name: 'Urgent eVisa Processing',
      desc: 'Need your visa in a hurry? We can help you get it as soon as possible. We offer expedited processing for urgent cases, such as last-minute trips or emergencies.',
    },

    {
      id: 4,
      image: '/assets/images/main/ourServiceIcon1.png',
      name: 'Trusted Travel Reviews and Guidance',
      desc: 'Get the best travel tips and advice from e-Visa. We offer honest and reliable reviews and guidance for various destinations, attractions, and activities. We help you plan your trip and make the most of your travel experience.',
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
    pouseonhover: true,
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
    <div className="bg-white">
      <div className="container py-12 space-y-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <HeadingSection
            sub="We make travel easy and hassle-free with our seamless online visa service. Whether you need an e tourist visa, a business visa, or a transit visa, we can help you get it in a few simple steps. No paperwork, no queues, no stress. Just apply, pay, and receive your visa and passport through mail."
            title="Our eVisa Services"
          />
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute z-10 hidden text-center -left-8 md:block">
            <button onClick={() => customeSlider.current.slickPrev()}>
              <IoIosArrowBack
                size={40}
                className="p-2 text-white border rounded-full border-primaryMain bg-primaryMain "
              />
            </button>
          </div>
          <div className="w-[100%]">
            <Slider {...settings} ref={customeSlider} className="mx-auto ">
              {testimonial.map((item, e) => (
                <div className="p-4 group" key={e}>
                  <div className="p-6 space-y-4 bg-white border hover:drop-shadow-xs hover:shadow-lg rounded-xl md:h-96">
                    <div className="w-full duration-1000 rounded-full duration">
                      <img
                        src={item.image}
                        alt=""
                        className="rounded-lg w-14 h-14"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold w-52">{item.name}</h2>
                    <p className="text-black/80 group-hover:text-black ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="flex justify-center">
              <button className="px-12 py-2 btnBlue">
                Check Requirements Now
              </button>
            </div>
          </div>
          <div className="absolute z-10 hidden text-center -right-8 md:block">
            <button onClick={() => customeSlider.current.slickNext()}>
              <IoIosArrowForward
                size={40}
                className="p-2 text-white border rounded-full bg-primaryMain border-primaryMain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
