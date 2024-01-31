import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';

const Footer = () => {
  return (
    <div
      className="w-full "
      style={{
        backgroundImage: "url('/assets/images/srilanka/common/footer.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="gap-8 py-8 md:grid md:grid-cols-7">
          <div className="col-span-3">
            <img
              src="/assets/images/srilanka/common/whitelogo.png"
              className="w-36"
            />
            <p className="py-4 text-white">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry.
            </p>

            <div className="flex gap-4">
              <FaFacebookF
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
              <AiOutlineInstagram
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
              <FaLinkedinIn
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
              <FiTwitter
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
              <FaPinterestP
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
            </div>

            <div className="flex items-center gap-2 pt-8">
              <FiMail
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
              <p className="font-light text-white">example@gmail.com</p>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <MdCall
                size={35}
                className="p-2 text-black bg-white rounded-full"
              />
              <p className="font-light text-white">
                +91-9876543219 +91-9876543219
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-4 md:grid-cols-3 pt-7 md:pt-0">
            <div className="">
              <h3 className="head-footer text-white font-bold text-[18px]">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4 mt-6 text-base text-white footer-menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Charges</li>
                <li>Status</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3 className="head-footer text-white font-bold text-[18px]">
                Apply For VISA
              </h3>
              <ul className="flex flex-col gap-4 mt-6 text-base text-white footer-menu">
                <li>Application</li>
                <li>Reviews</li>
                <li>Payment</li>
                <li>Complete</li>
              </ul>
            </div>

            <div>
              <h3 className="head-footer text-white font-bold text-[18px]">
                Support
              </h3>
              <ul className="flex flex-col gap-4 mt-6 text-base text-white footer-menu">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 container border-[#0068E5]">
        <h2 className="p-2 text-center text-white">
          Copyright © {new Date().getFullYear()} e-Visa All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
