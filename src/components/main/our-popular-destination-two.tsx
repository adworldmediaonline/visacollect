'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Plane, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Destination {
  id: number;
  imgSrc: string;
  title: string;
  link: string;
  comingSoon: boolean;
  altText: string;
}

const data: Destination[] = [
  {
    id: 1,
    imgSrc: '/assets/images/main/india-desti.png',
    title: 'India',
    link: '/in',
    comingSoon: false,
    altText: 'Apply for India Visa Online Now - Quick and Easy Process',
  },
  {
    id: 2,
    imgSrc: '/assets/images/main/srilanka.jpg',
    title: 'Srilanka',
    link: '/lk',
    comingSoon: false,
    altText: 'Apply for Sri lanka visa - Beaches of Sri lanka',
  },
  {
    id: 3,
    imgSrc: '/assets/images/main/australia.jpg',
    title: 'Australia',
    link: '/au',
    comingSoon: false,
    altText: 'Apply for Australia visa online - smooth process',
  },
  {
    id: 4,
    imgSrc: '/assets/images/main/turkey.jpg',
    title: 'Turkey',
    link: '/tr',
    comingSoon: false,
    altText: 'Turkey visa online - Apply Easily with Secure Online System',
  },
  {
    id: 5,
    imgSrc: '/assets/images/main/thailand.jpg',
    title: 'Thailand',
    link: '/th',
    comingSoon: false,
    altText: `Apply thailand visa online - Thailand's E-Visa`,
  },
  {
    id: 6,
    imgSrc: '/assets/images/main/cambodia.jpg',
    title: 'Cambodia',
    link: '/kh',
    comingSoon: false,
    altText: `Cambodia visa online - hustlefree visa process`,
  },
  {
    id: 7,
    imgSrc: '/assets/images/main/oman.jpg',
    title: 'Oman',
    link: '/om',
    comingSoon: false,
    altText: `oman visa online -  Visa Collect`,
  },
  {
    id: 8,
    imgSrc: '/assets/images/main/egypt.jpg',
    title: 'Egypt',
    link: '/eg',
    comingSoon: false,
    altText: `Online Visa for Egypt: Hassle-free travel made possible with just a few clicks`,
  },
  {
    id: 9,
    imgSrc: '/assets/images/main/morocco.jpg',
    title: 'Morrocco',
    link: '/ma',
    comingSoon: false,
    altText: `Apply morocco e visa - Visa Collect`,
  },
  {
    id: 10,
    imgSrc: '/assets/images/main/malaysia.jpg',
    title: 'Malaysia',
    link: '/my',
    comingSoon: false,
    altText: `Apply malaysia visa online - Online Application`,
  },
  {
    id: 11,
    imgSrc: '/assets/images/main/japan.jpg',
    title: 'Japan',
    link: '/jp',
    comingSoon: false,
    altText: `Apply japan visa online - Visa Collect`,
  },
  {
    id: 12,
    imgSrc: '/assets/images/main/singapore.jpg',
    title: 'Singapore',
    link: '/sg',
    comingSoon: false,
    altText: `Apply singapore visa online - Fees, Documents, Validity`,
  },
  {
    id: 13,
    imgSrc: '/assets/images/main/indonesia.jpg',
    title: 'Indonesia',
    link: '/id',
    comingSoon: false,
    altText: `How to Apply for Indonesia Visa Online - Visa Collect`,
  },
];

export default function OurPopularDestinationTwo() {
  const [popularDestinations] = useState<Destination[]>(data);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Simple gradient overlays only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 rounded-full shadow-lg border-0">
              <Plane className="w-4 h-4" />
              <span>Popular Destinations</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-gray-900">We Process</span>
              <br />
              <span className="text-primary">
                Visas for
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Choose from our wide range of visa processing services for popular
              destinations worldwide
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularDestinations?.map((destination, index) => (
            <div key={destination.id} className="group">
              <Card className="relative overflow-hidden bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full rounded-xl">
                {/* Full Image Container */}
                <div className="relative h-full group/card">
                  <Image
                    src={destination.imgSrc}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 rounded-xl"
                    alt={destination.altText}
                    loading="lazy"
                  />

                  {/* Minimal gradient overlay only at edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

                  {/* Country Badge - Small, Bottom Left */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <Badge className="bg-white/90 backdrop-blur-md text-gray-900 border-0 px-2 py-1 font-medium text-xs shadow-lg">
                      <MapPin className="w-3 h-3 mr-1 text-primary" />
                      {destination.title}
                    </Badge>
                  </div>

                  {/* Apply Button - Appears on Hover, Center Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out">
                    <div className="bg-gradient-to-t from-black/60 to-transparent p-4">
                      <Link
                        href={destination.comingSoon ? '#' : destination.link}
                        className={`group/link inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 relative overflow-hidden w-full ${
                          destination.comingSoon
                            ? 'text-gray-700 cursor-not-allowed bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg text-sm shadow-lg'
                            : 'text-white bg-primary hover:bg-primary/90 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                        }`}
                        aria-label={`Apply for ${destination.title} visa`}
                      >
                        <span className="relative z-10 text-sm font-bold">Apply for Visa</span>
                        {!destination.comingSoon && (
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-150 relative z-10" />
                        )}
                      </Link>
                    </div>
                  </div>

                  {/* Quick Action Button - Top Right Corner */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <Link
                      href={destination.comingSoon ? '#' : destination.link}
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                        destination.comingSoon
                          ? 'bg-gray-100/90 text-gray-400 cursor-not-allowed'
                          : 'bg-primary/90 hover:bg-primary text-white shadow-lg hover:shadow-xl transform hover:scale-110'
                      } backdrop-blur-sm`}
                      aria-label={`Quick apply for ${destination.title} visa`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Coming Soon Overlay */}
                  {destination.comingSoon && (
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-40">
                      <Badge className="bg-white text-gray-800 border-0 px-4 py-2 text-sm font-bold shadow-xl">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

