'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Users,
  Award,
  Star,
  MapPin,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { whereIAmFromWhereIAmGoingData } from '@/lib/whereIAmFromWhereIAmGoingData';

interface FormData {
  whereIAmFrom: string;
  whereIAmGoing: string;
}

// Country names mapping
const countryNames = {
  au: 'Australia',
  uk: 'United Kingdom',
  ca: 'Canada',
  us: 'United States',
  ae: 'United Arab Emirates',
  sg: 'Singapore',
};

// Destination names mapping for consistency
const destinationNames = {
  in: 'India',
  au: 'Australia',
  lk: 'Sri Lanka',
  th: 'Thailand',
  tr: 'Turkey',
  my: 'Malaysia',
  om: 'Oman',
  eg: 'Egypt',
  kh: 'Cambodia',
  ma: 'Morocco',
  jp: 'Japan',
  sg: 'Singapore',
  id: 'Indonesia',
  uk: 'United Kingdom',
};

export default function BannerMainThree() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    whereIAmFrom: '',
    whereIAmGoing: '',
  });

  const stats = [
    {
      icon: Users,
      number: '10K+',
      label: 'Happy Customers',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Covered',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      number: '99%',
      label: 'Success Rate',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure Processing' },
    { icon: Zap, text: 'Fast Approval' },
    { icon: CheckCircle, text: 'Expert Support' },
  ];

  const steps = [
    'Choose destination',
    'Fill application',
    'Upload documents',
    'Get your visa',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.whereIAmFrom && formData.whereIAmGoing) {
      const whereIAmFrom = formData?.whereIAmFrom.toLowerCase() ?? '';
      const whereIAmGoing = formData?.whereIAmGoing.toLowerCase() ?? '';
      const whereIAmFromData = whereIAmFromWhereIAmGoingData[whereIAmFrom];
      const whereIAmGoingData =
        whereIAmFromData?.whereIAmGoing?.to?.[whereIAmGoing];
      router.push(whereIAmGoingData?.slug ?? '/all-countries');
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[80vh] lg:min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-28 pb-4 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-48">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Static gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(25,152,199,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.08),transparent_50%)]" />

        {/* Simple grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full bg-[linear-gradient(rgba(25,152,199,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(25,152,199,0.2)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-2 xl:gap-4 items-stretch min-h-[60vh] lg:min-h-[65vh]">
          {/* Left Side - Content */}
          <div className="relative order-2 lg:order-1 flex items-center lg:rounded-l-3xl lg:rounded-r-none rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30 z-10" />
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-600/8" />

              {/* Static floating elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content Over Background */}
            <div className="relative z-20 p-4 sm:p-6 lg:p-6 xl:p-8 w-full space-y-3 sm:space-y-4">
              {/* Badge */}
              <div>
                <Badge className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-200">
                  <Star className="w-4 h-4" />
                  Trusted by thousands worldwide
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  <span className="text-white">24x7 online</span>
                  <br />
                  <span className="text-white">visa services</span>
                  <br />
                  <span className="text-white">started </span>
                  <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                    anytime,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                    anywhere
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
                  Fast and secure: Trust our secure online visa services
                  platform to handle your sensitive information with care.
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  How it works:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/8 border border-white/15 backdrop-blur-sm"
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold bg-white/20 text-gray-300">
                        {index + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-300">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="text-center space-y-1 p-2 rounded-lg backdrop-blur-sm bg-white/6 border border-white/10"
                      >
                        <div className="mx-auto w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/12 flex items-center justify-center">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-bold text-white">
                            {stat.number}
                          </p>
                          <p className="text-xs text-gray-300">{stat.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Features */}
              <div>
                <div className="grid grid-cols-1 gap-1">
                  {trustBadges.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/6 backdrop-blur-sm"
                      >
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-xl hover:shadow-primary/25 transition-all duration-200"
                >
                  <Link href="/all-countries">
                    <span className="relative z-10 flex items-center justify-center">
                      Start Your Application
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-150" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold backdrop-blur-sm transition-all duration-200"
                >
                  <Link
                    href="/about-us"
                    className="text-white hover:text-white"
                  >
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Application Form */}
          <div className="relative order-1 lg:order-2 flex items-center lg:rounded-r-3xl lg:rounded-l-none rounded-3xl overflow-hidden">
            <Card className="relative overflow-hidden bg-white/8 backdrop-blur-xl shadow-2xl w-full h-full flex flex-col border-0">
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/8 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              <div className="relative z-10 p-4 sm:p-6 lg:p-6 xl:p-8 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-center">
                {/* Form Header */}
                <div className="text-center space-y-3">
                  <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-white">
                    Start Your Visa Journey
                  </h2>
                  <p className="text-sm text-gray-300">
                    Select your destination and get started
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        <MapPin className="inline w-4 h-4 mr-2" />
                        From Country
                      </label>
                      <select
                        name="whereIAmFrom"
                        value={formData.whereIAmFrom}
                        onChange={handleChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                        style={{ color: 'white' }}
                        required
                      >
                        <option
                          value=""
                          style={{
                            color: '#000000 !important',
                            backgroundColor: '#ffffff !important',
                          }}
                        >
                          Select your country
                        </option>
                        {Object.keys(whereIAmFromWhereIAmGoingData).map(
                          country => (
                            <option
                              key={country}
                              value={country}
                              style={{
                                color: '#000000 !important',
                                backgroundColor: '#ffffff !important',
                              }}
                            >
                              {countryNames[country] ||
                                whereIAmFromWhereIAmGoingData[country].name}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        <Globe className="inline w-4 h-4 mr-2" />
                        To Destination
                      </label>
                      <select
                        name="whereIAmGoing"
                        value={formData.whereIAmGoing}
                        onChange={handleChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 disabled:opacity-50 text-sm"
                        style={{ color: 'white' }}
                        disabled={!formData.whereIAmFrom}
                        required
                      >
                        <option
                          value=""
                          style={{
                            color: '#1f2937',
                          }}
                        >
                          {formData.whereIAmFrom
                            ? 'Select destination'
                            : 'First select your country'}
                        </option>
                        {formData.whereIAmFrom &&
                          whereIAmFromWhereIAmGoingData[formData.whereIAmFrom]
                            ?.whereIAmGoing?.to &&
                          Object.keys(
                            whereIAmFromWhereIAmGoingData[formData.whereIAmFrom]
                              .whereIAmGoing.to
                          ).map(destination => (
                            <option
                              key={destination}
                              value={destination}
                              style={{
                                color: '#1f2937',
                                backgroundColor: '#ffffff',
                              }}
                            >
                              {destinationNames[destination] ||
                                whereIAmFromWhereIAmGoingData[
                                  formData.whereIAmFrom
                                ].whereIAmGoing.to[destination].name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary/90 hover:to-primary-700 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group text-sm sm:text-base"
                  >
                    <span className="flex items-center justify-center">
                      Start Your Application
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-150" />
                    </span>
                  </Button>
                </form>

                {/* Quick Features */}
                <div className="pt-3 space-y-3 border-t border-white/15">
                  <h4 className="text-sm font-semibold text-white">
                    Why choose us?
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Free visa requirement check',
                      'Expert guidance throughout',
                      'Secure document processing',
                      'Money-back guarantee',
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white/6 backdrop-blur-sm"
                      >
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center pt-3 border-t border-white/15">
                  <p className="text-xs text-gray-400 mb-2">
                    Need help choosing? Talk to our experts
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/8 backdrop-blur-sm border-white/25 text-white hover:bg-white/15 hover:border-white/40 text-xs px-4 py-2 hover:scale-105 transition-all duration-200"
                  >
                    <Link href="/contact-us">Get Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Static Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-primary/8 rounded-full blur-xl opacity-60" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-600/8 rounded-full blur-xl opacity-60" />
      <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-blue-600/8 rounded-full blur-xl opacity-60" />
    </section>
  );
}
