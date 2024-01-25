import React from 'react';
import HeadingSection from './HeadingSection';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhyChooseUs() {
  const dataList = [
    {
      id: 1,
      title: 'Speed and Simplicity',
      pera: 'Our online visa services platform makes it simple to get the approvals you need for your trip. No paperwork, no hassle, no hidden fees. Just a few clicks and you’re ready to go.',
    },
    {
      id: 2,
      title: 'Get Approved',
      pera: 'Leave the visa hassle to us. Our online Visa experts will review your application, communicate with the authorities, and secure your approval. No delays, no worries, no stress. Just pack your bags and get ready to explore.',
    },
    {
      id: 3,
      title: 'Secure and Safe',
      pera: 'We protect your sensitive data with the best technology and practices. We handle your travel needs and information with professionalism and honesty. Our visa experts deliver a smooth and hassle-free experience, from start to finish.',
    },
    {
      id: 4,
      title: 'Awesome Support',
      pera: 'We’re always ready to help you with any query or issue. Our customer success team is friendly, knowledgeable, and supportive. We communicate clearly and promptly, ensuring you feel confident and informed throughout your online visa application process.',
    },
  ];
  return (
    <div className="grid-cols-12 bg-white md:grid">
      <div className="col-span-5">
        <img
          src="/assets/images/main/whyChooseUs.png"
          className="brightness-50 "
        />
      </div>
      <div className="flex flex-col justify-center px-8 py-8 space-y-8 md:col-span-6 md:py-0">
        <div className="text-left">
          <HeadingSection
            title="Why Choose e-Visa?"
            sub="Wander in wonder, leave the paperwork blues to us."
          />
        </div>
        <div className="space-y-4">
          {dataList.map((e, i) => (
            <div key={i} className="flex space-x-2">
              <span className="mt-1">
                <FaCheckCircle size="20" className="text-primaryMain" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-primaryMain">
                  {e.title}
                </h2>
                <small>{e.pera}</small>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="px-8 py-2 btnBlack">Apply Now!</button>
        </div>
      </div>
    </div>
  );
}
