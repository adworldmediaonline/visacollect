import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import Logo from '../Logo';
const Footer = () => {
  const data = [
    {
      id: 1,
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/profile.php?id=61556054082156&mibextid=ZbWKwL',
      name: 'Facebook',
    },
    {
      id: 2,
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/visacollect?igsh=MXFjbzFpZDJlNHZmaw==',
      name: 'Instagram',
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/visa-collect-9283752b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      name: 'LinkedIn',
    },
    {
      id: 4,
      icon: <FaXTwitter />,
      href: 'https://twitter.com/visacollect',
      name: 'Twitter',
    },
  ];
  return (
    <footer className="mt-auto shadow-lg">
      <div className="pb-6 bg-right-bottom bg-no-repeat bg-cover">
        <div className="container">
          <div className="pt-16">
            <div className="grid justify-start gap-6 pt-8 pb-12 md:grid-cols-12 md:px-0 md:pt-0">
              <div className="col-span-5 space-y-4">
                <Link href="/">
                  <div>
                    <Logo />
                  </div>
                </Link>
                {/* <p className="text-base leading-relaxed tracking-tighter text-justify md:tracking-tight ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry.
                </p> */}
                <div className="space-y-6">
                  <div>
                    <ul className="flex pt-3 space-x-4">
                      {data.map((e, i) => (
                        <li key={i} className="flex space-x-5">
                          <Link
                            href={e.href}
                            target="_blank"
                            className="w-8 p-2 duration-200 bg-white rounded-full hover:scale-110"
                            aria-label={`Visit our ${e.name}`}
                            rel="noopener noreferrer"
                          >
                            <span aria-hidden="true">{e.icon}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="mailto:info@visacollect.com"
                        aria-label="Email us at info@visacollect.com"
                        className="flex items-center space-x-2 text-base hover:text-gray-900 text-gray-800"
                      >
                        <IoIosMail
                          className="w-6 h-6 p-1 text-black bg-white rounded-full"
                          aria-hidden="true"
                        />
                        <span>info@visacollect.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center col-span-2">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold underline capitalize underline-offset-8 decoration-gray-900">
                    Quick Links
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Go to Home page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Go to About Us page"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Go to Contact Us page"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center col-span-3">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold underline capitalize underline-offset-8 decoration-gray-900">
                    VisaCollect
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Apply for visa"
                      >
                        Apply for Visa
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end col-span-2">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold underline capitalize underline-offset-8 decoration-gray-900">
                    Support
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/termsAndConditions"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Read our Terms and Conditions"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacyPolicy"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Read our Privacy Policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cancellation"
                        className="text-base hover:text-gray-900 text-gray-800"
                        aria-label="Read our Cancellation Policy"
                      >
                        Cancellation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="h-[1px] bg-gray-300" />
            <div className="px-5 py-5 text-base text-center text-gray-800 md:px-0">
              <p>
                Copyright © {new Date().getFullYear()} |
                <Link href="/" aria-label="Go to Visacollect homepage">
                  <span className="px-2 font-semibold text-gray-900">
                    visacollect.com
                  </span>
                </Link>
                | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
