'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../Logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

interface HeaderTwoProps {
  bgcolor?: boolean;
}

interface NavItem {
  href: string;
  label: string;
}

export default function HeaderTwo({ bgcolor }: HeaderTwoProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);

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

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blogs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-8">
              {navItems.map(item => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="h-10 w-10 text-gray-700 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-gray-100">
                  <Logo />
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close menu"
                      className="h-8 w-8 text-gray-600 hover:bg-gray-100"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex flex-col space-y-1 py-6 flex-1">
                  {navItems.map(item => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <span
                          className="w-2 h-2 bg-primary rounded-full mr-3"
                          aria-hidden="true"
                        ></span>
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6 pb-4">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Link href="/contact-us">Contact Us</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>

        {bgcolor && (
          <div
            className={`h-px transition-all duration-300 ${
              scrolled ? 'bg-gray-200' : 'bg-gray-300 mx-4'
            }`}
          />
        )}
      </div>
    </header>
  );
}
