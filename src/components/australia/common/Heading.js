import React from 'react';

const Heading = ({ formHead, formPara, subHead }) => {
  return (
    <div className="pt-16">
      <div className="py-4 mx-auto space-y-3 text-3xl font-semibold md:text-center text-start">
        <h3 className="md:text-4xl text-[25px] font-bold capitalize">
          {formHead}
        </h3>
      </div>
    </div>
  );
};

export default Heading;
