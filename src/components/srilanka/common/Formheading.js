import React from 'react';

const Formheading = ({ formHead, formPara }) => {
  return (
    <div className="pt-16 pb-5">
      <div className="py-4 mx-auto space-y-3 text-3xl font-semibold md:text-left text-start">
        <h3 className="md:text-[30px] text-[25px] font-semibold">{formHead}</h3>
        <hr className="h-[3px] bg-[#0068E5] w-48" />

        <p className="text-[17px] font-light">{formPara}</p>
      </div>
    </div>
  );
};

export default Formheading;
