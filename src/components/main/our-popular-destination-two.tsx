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
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Simple gradient overlays only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary/90 backdrop-blur-sm border-0 text-white font-medium hover:bg-primary transition-all duration-200 rounded-full shadow-lg">
              <Plane className="w-4 h-4" />
              <span>Popular Destinations</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="text-white">We Process</span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                Visas for
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Choose from our wide range of visa processing services for popular
              destinations worldwide
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {popularDestinations?.map((destination, index) => (
            <div key={destination.id} className="group">
              <Card className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl group-hover:shadow-primary/25 transition-all duration-300 h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary-600/15 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={destination.imgSrc}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                      alt={destination.altText}
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Country Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-md text-gray-900 border-0 px-3 py-1.5 font-semibold text-sm shadow-lg">
                        <MapPin className="w-4 h-4 mr-1.5 text-primary" />
                        {destination.title}
                      </Badge>
                    </div>

                    {/* Coming Soon Overlay */}
                    {destination.comingSoon && (
                      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                        <Badge className="bg-white/95 backdrop-blur-md text-gray-800 border-0 px-4 py-2 text-sm font-bold shadow-xl">
                          Coming Soon
                        </Badge>
                      </div>
                    )}

                    {/* Hover Effect Plane */}
                    <div className="absolute top-4 right-4 text-white/0 group-hover:text-white transition-all duration-200">
                      <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full border border-white/20">
                        <Plane className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 relative">
                  <div className="text-center">
                    <Link
                      href={destination.comingSoon ? '#' : destination.link}
                      className={`group/link inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 relative overflow-hidden ${
                        destination.comingSoon
                          ? 'text-gray-400 cursor-not-allowed bg-gray-100/10 px-5 py-2.5 rounded-lg text-sm'
                          : 'text-white bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-102'
                      }`}
                      aria-label={`Read more about ${destination.title} visa`}
                    >
                      <span className="relative z-10">Apply for Visa</span>
                      {!destination.comingSoon && (
                        <>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-150 relative z-10" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"></div>
                        </>
                      )}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* All destinations message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            <div className="p-1.5 bg-green-500/20 rounded-full">
              <Globe className="w-4 h-4 text-green-400" />
            </div>
            <span>
              All {popularDestinations.length} destinations available!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
