'use client';

import { useState, useEffect, useCallback } from 'react';
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
import Logo from '@/components/Logo';

interface HeaderTwoProps {
  bgcolor?: boolean;
}

export default function HeaderTwo({ bgcolor = false }: HeaderTwoProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/all-countries', label: 'Countries' },
  ];

  const quickActions = [
    { icon: Mail, label: 'Email Us', value: 'info@visacollect.com' },
    { icon: Globe, label: '50+ Countries', value: 'Visa Services' },
  ];

  // Pre-compute header classes for better performance
  const headerClasses = `fixed left-0 right-0 z-50 transition-all duration-300 ease-out will-change-auto ${
    !isScrolled && isHomePage
      ? 'top-10 lg:top-10' // Top info bar height on desktop
      : 'top-0'
  } ${
    isScrolled || !isHomePage
      ? 'bg-white shadow-lg border-b border-gray-200'
      : bgcolor
      ? 'bg-white/90 backdrop-blur-sm'
      : 'bg-white/5 backdrop-blur-sm'
  }`;

  const navLinkClasses = `relative group px-4 py-2 font-medium transition-colors duration-200 text-gray-700 hover:text-primary`;

  return (
    <>
      {/* Top Info Bar - Only on Homepage and Desktop */}
      {isHomePage && (
        <div className="fixed top-0 left-0 right-0 z-40 hidden lg:block bg-primary text-white py-2 h-10">
          <div className="container mx-auto flex justify-between items-center text-sm px-4 h-full">
            <div className="flex items-center space-x-4 xl:space-x-6">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-1 xl:space-x-2 hover:text-white/80 transition-colors duration-200 ${
                    index === 2 ? 'hidden xl:flex' : ''
                  }`}
                >
                  <action.icon className="w-3 h-3 xl:w-4 xl:h-4" />
                  <span className="font-medium text-xs xl:text-sm">
                    {action.label}:
                  </span>
                  <span className="text-xs xl:text-sm">{action.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs xl:text-sm font-medium">
                  Online Now - Instant Processing
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className={headerClasses}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center">
                <div
                  className={`rounded-lg transition-all duration-200 ${
                    !isScrolled && !bgcolor && isHomePage
                      ? 'bg-white/90 backdrop-blur-sm p-2 shadow-lg'
                      : 'p-1'
                  }`}
                >
                  <Logo />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => (
                <div key={item.href}>
                  <Link href={item.href} className={navLinkClasses}>
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"></span>
                  </Link>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <Link href="/contact-us">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isMobileMenuOpen ? 'close' : 'menu'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <motion.div
                          key={isMobileMenuOpen ? 'close' : 'menu'}
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                          ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                          )}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-80 bg-white border-l border-gray-200 overflow-y-auto"
                >
                  <SheetHeader className="space-y-4 pb-6">
                    <div className="flex items-center space-x-3">
                      <SheetTitle className="text-xl font-bold">
                        <Logo />
                      </SheetTitle>
                    </div>
                  </SheetHeader>

                  <div className="h-full overflow-y-auto pb-20">
                    <nav className="space-y-6">
                      {navItems.map((item, index) => (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            className="block py-3 px-4 rounded-xl font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}

                      <div className="pt-6 border-t border-gray-200">
                        <Button
                          asChild
                          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full font-semibold shadow-lg transition-all duration-200"
                        >
                          <Link
                            href="/contact-us"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Contact Us
                          </Link>
                        </Button>
                      </div>

                      {/* Mobile Quick Actions */}
                      <div className="space-y-4 pt-6 border-t border-gray-200">
                        {quickActions.map((action, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                          >
                            <action.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-gray-900 text-sm">
                                {action.label}
                              </p>
                              <p className="text-xs text-gray-600 break-all">
                                {action.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
