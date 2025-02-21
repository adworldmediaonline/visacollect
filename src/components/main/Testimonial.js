'use client';
import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import testimonialBannerImg from '/public/assets/images/main/testimonialImg.png';
import testimonialWaveImg from '/public/assets/images/main/waves.png';
function Testimonial() {
  const customeSlider = useRef();
  const testimonial = [
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
    <section className="relative py-12 testimonialBg">
      <Image
        src={testimonialWaveImg}
        className="absolute bottom-0 w-full"
        alt="Testimonials background wave"
      />
      <div className="-space-y-4 md:absolute top-16 left-32">
        <h2 className="pb-8 text-2xl font-extrabold text-center md:text-5xl text-gray-900 md:pb-0">
          Customers' Stories
        </h2>
        <h2 className="font-extrabold text-5xl md:block hidden transform scale-y-[-1] bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 text-transparent bg-clip-text">
          Customers' Stories
        </h2>
      </div>
      <div className="container relative">
        <Slider {...settings} ref={customeSlider} className="mx-auto">
          {testimonial?.map((e, i) => (
            <article key={i} className="testimonial-item">
              <div className="items-center grid-cols-12 gap-20 md:grid">
                <div className="order-2 col-span-4 pb-12">
                  <Image
                    src={testimonialBannerImg}
                    className="md:w-80 w-52"
                    alt={`Profile picture of ${e.name}`}
                  />
                </div>
                <div className="col-span-8 space-y-4 text-gray-100 md:pt-20">
                  <h3 className="text-xl font-semibold">{e.name}</h3>
                  <p className="italic font-light">{e.desc}</p>
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, index) => (
                      <IoIosStar
                        key={index}
                        className="text-yellow-500"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="sr-only">5 out of 5 stars</span>
                  </div>
                  <h4 className="font-semibold text-gray-200">-Destination</h4>
                </div>
              </div>
            </article>
          ))}
        </Slider>
        {/* Navigation buttons */}
        <div className="absolute bottom-0 flex justify-center space-x-6 right-32">
          <button
            onClick={() => customeSlider.current.slickPrev()}
            aria-label="Previous testimonial"
            className="focus:outline-none focus:ring-2 focus:ring-primary p-2 bg-white border rounded-full text-primary"
          >
            <IoIosArrowBack size={40} aria-hidden="true" />
          </button>
          <button
            onClick={() => customeSlider.current.slickNext()}
            aria-label="Next testimonial"
            className="focus:outline-none focus:ring-2 focus:ring-primary p-2 bg-white border rounded-full text-primary"
          >
            <IoIosArrowForward size={40} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
