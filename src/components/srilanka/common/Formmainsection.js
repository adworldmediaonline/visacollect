'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Formmainsection = ({ title, para, button, stripeText }) => {
  return (
    <div>
      <div
        className="w-full"
        style={{
          backgroundImage:
            "url('/assets/images/srilanka/home/bannerthree.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container justify-center flex flex-col h-[500px] md:h-[500px]">
          <div className="items-center">
            <h2 className="text-white md:text-[55px] text-[40px] font-bold leading-[1.2] md:w-[70%]">
              {' '}
              {title ? title : ''}
            </h2>
            <p className="text-white md:w-[70%] py-2">{para ? para : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formmainsection;
