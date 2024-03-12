import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const SuccessPage = ({ message, messageDescription }) => {
  return (
    <div className="container pt-32 pb-24">
      <div className="grid items-center justify-between grid-cols-2 gap-10">
        <div className="md:order-2">
          <Image
            src="/assets/images/main/success-payment.png"
            width="450"
            height="200"
            alt="thankyou image"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-5xl lg:text-6xl ">
            {message}
          </h2>
          <p className="text-xl">{messageDescription}</p>
          <Link href="/contact-us">
            <div className="py-8">
              <button
                className={`cursor-pointer w-fit items-center gap-3 rounded-lg font-semibold text-white bg-primary px-8 py-3`}
                type="submit"
              >
                Back Home
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
