'use client';
import Image from 'next/image';
import { FileText, Shield, CreditCard, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import onlineApplication from '/public/assets/images/main/online-application.png';
import makePaymentIcon from '/public/assets/images/main/makePayment.png';
import receiveVisaIcon from '/public/assets/images/main/receiveVisa.png';

interface ProcessStep {
  id: number;
  image: any;
  name: string;
  desc: string;
  altText: string;
  icon: any;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    image: onlineApplication,
    name: 'Fill Out Online Application',
    desc: 'Fill out a simple form and avoid errors with our smart system.',
    altText: 'Online Application icon - Visa Collect',
    icon: FileText,
  },
  {
    id: 2,
    image: makePaymentIcon,
    name: 'Share Your Documents Securely',
    desc: 'Skip the consulate queue and let us handle the paperwork for you.',
    altText: 'Share Your Documents icon - Visa Collect',
    icon: Shield,
  },
  {
    id: 3,
    image: makePaymentIcon,
    name: 'Make Payment Easily Online',
    desc: 'Select a convenient and secure payment option and complete your order.',
    altText: 'Make Payment icon - Visa Collect',
    icon: CreditCard,
  },
  {
    id: 4,
    image: receiveVisaIcon,
    name: 'Receive eVisa Letter On Time',
    desc: 'Track your status online and get ready for your trip.',
    altText: 'receive Visa Icon - Visa Collect',
    icon: Mail,
  },
];

export default function HowItWorksTwo() {
  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden bg-white"
      aria-label="How It Works"
    >
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 rounded-full shadow-lg mb-8 border-0">
              <ArrowRight className="w-4 h-4" />
              Simple Process
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">How It </span>
              <span className="text-primary">
                Works
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We make travel easy and hassle-free with our seamless online visa
              service. Whether you need an e tourist visa, a business visa, or a
              transit visa, we can help you get it in a few simple steps.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Lines - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200 mx-16">
            <div className="h-full bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Step Number Circle */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white hover:scale-110 transition-transform duration-200">
                    <span className="relative z-10">{step.id}</span>
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-white/20 rounded-full blur-sm opacity-50"></div>
                  </div>
                </div>

                <Card className="relative h-full border shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-gray-200 group-hover:border-primary/20 overflow-visible pt-12 mt-8">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="p-8 text-center space-y-6 relative z-10">
                    {/* Icon Container */}
                    <div className="relative pt-4">
                      <div className="w-20 h-20 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-200">
                        {/* Background animation */}
                        <div className="absolute inset-0 bg-primary/10 rounded-2xl transform group-hover:rotate-12 transition-transform duration-300" />

                        <step.icon className="w-10 h-10 text-primary relative z-10" />

                        {/* Original Image as Corner Badge */}
                        <div className="absolute -bottom-2 -right-2 hover:scale-110 transition-transform duration-150">
                          <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
                            <Image
                              src={step.image}
                              alt={step.altText}
                              className="w-6 h-6 object-contain"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 pt-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 leading-tight">
                        {step.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {step.desc}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="pt-4">
                      <div className="flex justify-center">
                        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full w-full" />
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Mobile step connector */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl"></div>

            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Join thousands of travelers who trust our simple and secure
                  visa process. Start your journey today.
                </p>
              </div>

              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                <span className="flex items-center gap-3">
                  Start Your Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
