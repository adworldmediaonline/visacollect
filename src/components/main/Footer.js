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
      href: 'https://www.facebook.com/profile.php?id=61556564781995&mibextid=ZbWKwL',
    },
    {
      id: 2,
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/visacollect_?igsh=MW11MDB4ODh2cnJ1Zw==',
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/visa-collect-9283752b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      id: 4,
      icon: <FaXTwitter />,
      href: 'https://twitter.com/visacollect/status/1766133015472918531?t=GhAmEX38Z3kNq00LbhKW6g&s=08',
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
                          >
                            {e.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul>
                    <Link href="mailto:info@visacollect.com">
                      <li className="flex items-center mt-2 space-x-2 text-base hover:text-primary">
                        <IoIosMail className="w-6 h-6 p-1 text-black bg-white rounded-full" />{' '}
                        <span>info@visacollect.com</span>
                      </li>
                    </Link>
                    {/* <Link href="#">
                      <li className="flex items-center mt-2 space-x-2 text-base hover:text-primary">
                        <FaPhoneAlt className="w-6 h-6 p-1 text-black bg-white rounded-full" />{" "}
                        <span className="text-white">+91-9876543219</span>
                      </li>
                    </Link> */}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center col-span-2">
                <div className="space-y-6 md:flex md:space-x-28 md:space-y-0">
                  <div>
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold underline capitalize underline-offset-8 decoration-primary">
                        Quick Links
                      </h2>
                      <ul>
                        <Link href="/">
                          <li className="mt-2 text-base hover:text-primary">
                            <span>Home</span>
                          </li>
                        </Link>
                        <Link href="/">
                          <li className="mt-2 text-base hover:text-primary">
                            <span>About Us</span>
                          </li>
                        </Link>

                        <Link href="/contact-us">
                          <li className="mt-2 text-base hover:text-primary">
                            <span>Contact Us</span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center col-span-3">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold underline capitalize underline-offset-8 decoration-primary">
                    VisaCollect
                  </h2>
                  <ul>
                    <Link href="/">
                      <li className="mt-2 text-base hover:text-primary">
                        <span> Apply</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end col-span-2 ">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold underline capitalize underline-offset-8 decoration-primary">
                    Support
                  </h2>
                  <ul>
                    <Link href="/termsAndConditions">
                      <li className="mt-2 text-base hover:text-primary">
                        <span> Terms & Conditions</span>
                      </li>
                    </Link>
                    <Link href="/privacyPolicy">
                      <li className="mt-2 text-base hover:text-primary">
                        <span>Privacy Policy</span>
                      </li>
                    </Link>
                    <Link href="/cancellation">
                      <li className="mt-2 text-base hover:text-primary">
                        <span>Cancellation</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="h-[1px] bg-secondary border-primary" />
            <div className="px-5 py-5 text-base text-center md:px-0">
              <p>
                {' '}
                Copyright © {new Date().getFullYear()} |
                <Link href="/">
                  <span className="px-2 font-semibold text-primary">
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
