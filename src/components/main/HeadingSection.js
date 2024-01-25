'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HeadingSection = ({ sub, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const quote = {
    initial: {
      opacity: isInView ? 0 : 0,
      scale: isInView ? 0 : 2,
    },
    animate: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0,
      transition: {
        duration: isInView ? 0.5 : 0,
        delay: isInView ? 0.5 : 0,
      },
    },
  };
  return (
    <div className="md:space-y-2">
      <h3 className="text-2xl font-bold text-gray-700 md:text-5xl">{title}</h3>
      <h5 className="leading-loose text-gray-700 ">{sub}</h5>
    </div>
  );
};

export default HeadingSection;
