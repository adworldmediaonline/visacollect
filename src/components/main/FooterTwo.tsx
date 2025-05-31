import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Heart, ExternalLink } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';
import Logo from '../Logo';

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  href: string;
  name: string;
  color: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: <FaFacebookF className="w-4 h-4" />,
    href: 'https://www.facebook.com/profile.php?id=61556054082156&mibextid=ZbWKwL',
    name: 'Facebook',
    color: 'hover:bg-blue-600',
  },
  {
    id: 2,
    icon: <FaInstagram className="w-4 h-4" />,
    href: 'https://www.instagram.com/visacollect?igsh=MXFjbzFpZDJlNHZmaw==',
    name: 'Instagram',
    color: 'hover:bg-pink-600',
  },
  {
    id: 3,
    icon: <FaLinkedin className="w-4 h-4" />,
    href: 'https://www.linkedin.com/in/visa-collect-9283752b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    name: 'LinkedIn',
    color: 'hover:bg-blue-700',
  },
  {
    id: 4,
    icon: <FaXTwitter className="w-4 h-4" />,
    href: 'https://twitter.com/visacollect',
    name: 'Twitter',
    color: 'hover:bg-gray-800',
  },
];

const footerSections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'VisaCollect',
    links: [{ label: 'Apply for Visa', href: '/' }],
  },
  {
    title: 'Support',
    links: [
      { label: 'Terms & Conditions', href: '/termsAndConditions' },
      { label: 'Privacy Policy', href: '/privacyPolicy' },
      { label: 'Cancellation', href: '/cancellation' },
    ],
  },
];

export default function FooterTwo() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full bg-[length:50px_50px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Cpath d='M0 0h50v1H0V0zm0 49h50v1H0v-1z'/%3E%3Cpath d='M0 0v50h1V0H0zm49 0v50h1V0h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-12 md:pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {/* Company Info Section - Takes full width on mobile, half on tablet, quarter on desktop */}
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <Link href="/" className="inline-block group">
                <div className="w-32 sm:w-40 [&_img]:brightness-0 [&_img]:invert hover:scale-105 transition-transform">
                  <Logo />
                </div>
              </Link>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-sm">
                  Plan your stress-free travel with our 24/7 online visa
                  services. Enjoy quick and reliable visa processing at any
                  time.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="mailto:info@visacollect.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors group w-fit hover:translate-x-1"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      info@visacollect.com
                    </span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
                    Follow Us
                  </h4>
                  <div className="flex gap-3 flex-wrap">
                    {socialLinks.map(social => (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-1"
                        aria-label={`Visit our ${social.name}`}
                      >
                        <div className="group-hover:scale-110 transition-transform">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links Sections - Each takes equal space on desktop */}
            {footerSections.map(section => (
              <div key={section.title} className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-white relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-primary-600" />
                </h3>

                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base w-fit"
                        {...(link.external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                        {link.external && (
                          <ExternalLink className="w-3 h-3 opacity-60 flex-shrink-0" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl border border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Get expert consultation and apply for your visa today. Our team
                is here to make your travel dreams come true.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm sm:text-base text-center sm:text-left">
                <span>Copyright © {currentYear}</span>
                <span className="hidden sm:inline">|</span>
                <Link
                  href="/"
                  className="font-semibold text-white hover:text-primary transition-colors"
                >
                  visacollect.com
                </Link>
                <span className="hidden sm:inline">|</span>
                <span>All Rights Reserved</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base hover:scale-105 transition-transform">
                <span>Made with</span>
                <div className="animate-pulse">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </div>
                <span>for travelers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
