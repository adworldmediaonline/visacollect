'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

interface HeaderTwoProps {
  bgcolor?: boolean;
}

export default function HeaderTwo({ bgcolor = false }: HeaderTwoProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/all-countries', label: 'Countries' },
  ];

  const quickActions = [
    { icon: Phone, label: '24/7 Support', value: '+1-800-VISA-NOW' },
    { icon: Mail, label: 'Email Us', value: 'info@visacollect.com' },
    { icon: Globe, label: '50+ Countries', value: 'Visa Services' },
  ];

  return (
    <>
      {/* Top Info Bar - Only on Homepage */}
      {isHomePage && (
        <motion.div
          className="hidden lg:block bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white py-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <action.icon className="w-4 h-4" />
                  <span className="font-medium">{action.label}:</span>
                  <span>{action.value}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online Now - Instant Processing</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-primary/10'
            : bgcolor
            ? 'bg-white/90 backdrop-blur-sm'
            : 'bg-white/5 backdrop-blur-sm'
        }`}
        style={{
          marginTop: isScrolled ? '0' : isHomePage ? '40px' : '0',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-lg blur-sm opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-primary to-primary-600 p-2 rounded-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1
                    className={`text-2xl font-bold bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent ${
                      !isScrolled && !bgcolor && isHomePage
                        ? 'drop-shadow-lg'
                        : ''
                    }`}
                  >
                    VisaCollect
                  </h1>
                  <p
                    className={`text-xs font-medium ${
                      isScrolled || bgcolor || !isHomePage
                        ? 'text-gray-600'
                        : 'text-gray-300'
                    }`}
                  >
                    Your Visa Experts
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`relative group px-4 py-2 font-medium transition-all duration-300 ${
                      isScrolled || bgcolor || !isHomePage
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white hover:text-primary-300'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/contact-us">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isMobileMenuOpen ? 'close' : 'menu'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isMobileMenuOpen ? (
                          <X
                            className={`w-6 h-6 ${
                              isScrolled || bgcolor || !isHomePage
                                ? 'text-gray-700'
                                : 'text-white'
                            }`}
                          />
                        ) : (
                          <Menu
                            className={`w-6 h-6 ${
                              isScrolled || bgcolor || !isHomePage
                                ? 'text-gray-700'
                                : 'text-white'
                            }`}
                          />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-80 bg-white/95 backdrop-blur-lg border-l border-primary/20"
                >
                  <SheetHeader className="space-y-4 pb-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-primary to-primary-600 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                        </svg>
                      </div>
                      <SheetTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent">
                        VisaCollect
                      </SheetTitle>
                    </div>
                  </SheetHeader>

                  <nav className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="block py-3 px-4 rounded-xl font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="pt-6 border-t border-primary/20"
                    >
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 rounded-full font-semibold shadow-lg"
                      >
                        <Link
                          href="/contact-us"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </Button>
                    </motion.div>

                    {/* Mobile Quick Actions */}
                    <div className="space-y-4 pt-6 border-t border-primary/20">
                      {quickActions.map((action, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <action.icon className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-gray-900">
                              {action.label}
                            </p>
                            <p className="text-sm text-gray-600">
                              {action.value}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
