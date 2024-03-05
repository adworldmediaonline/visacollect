'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import LinkButton from '../ui/link-button';
import Logo from '../Logo';
const Header = ({ bgcolor }) => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  // change nav color when scrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`headerMainVisa bg-white shadow-md ${
        scrolled ? 'bg-white' : ''
      }`}
    >
      <nav className="container navbarMainVisa ">
        <div className="flex items-center w-full md:justify-between md:space-x-12">
          <Link href="/" className="space-x-4">
            {scrolled ? (
              <>
                <Logo />
              </>
            ) : (
              <>
                <Logo />
              </>
            )}
          </Link>

          <ul
            className={
              click
                ? 'nav-menuMainVisa active md:space-y-0 space-y-0 py-5 '
                : 'nav-menuMainVisa'
            }
          >
            <Link href="/">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                Home
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Home</p>
              </Link>
            </li>
            {/* for mobile end */}
            <Link href="/about-us">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                About Us
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/about-us"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>About Us</p>
              </Link>
            </li>

            <Link href="/blog">
              <li className="relative hidden text-sm font-semibold cursor-pointer group dropdown drop-shadow-2xl md:flex nav-itemMainVisa nav-desk hover:text-primary">
                Blogs
              </li>
            </Link>
            {/* for mobile start */}
            <li className="block md:hidden">
              <Link
                href="/blog"
                className="flex items-center px-2 py-4 mx-4 space-x-2 font-semibold border-b border-b-secondary"
              >
                <span className="w-2 h-2 bg-black"></span>
                <p>Blogs</p>
              </Link>
            </li>

            <LinkButton className="nav-desk" href="/contact-us">
              Contact Us
            </LinkButton>

            {/* for mobile start */}
            <li className="block md:hidden">
              <LinkButton href="/contact-us">Contact Us</LinkButton>
            </li>
            {/* for mobile end */}
          </ul>
        </div>

        <div className="hamburgerMainVisa" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#000' }} />
          ) : (
            <FaBars size={30} style={{ color: '#000' }} />
          )}
        </div>
      </nav>
      {bgcolor ? (
        <hr
          className={
            scrolled ? 'bg-black text-black' : 'bg-black  w-[93%] mx-auto'
          }
        />
      ) : null}
    </div>
  );
};

export default Header;
