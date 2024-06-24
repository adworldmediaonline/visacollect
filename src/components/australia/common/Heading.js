import { cn } from '@/lib/cn';
import React from 'react';

const Heading = ({ formHead, formPara, subHead, divClassName }) => {
  return (
    <div className={cn('pt-16', divClassName)}>
      <div className="py-4 mx-auto space-y-3 text-3xl font-semibold md:text-center text-start">
        <h3 className="md:text-4xl text-[25px] font-bold capitalize">
          {formHead}
        </h3>
      </div>
    </div>
  );
};

export default Heading;
