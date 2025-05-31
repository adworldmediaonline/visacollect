'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Star,
  Award,
} from 'lucide-react';
import HeadingSection from './HeadingSection';
import { whyChooseUsBanner } from '@/constant/images';
import { Button } from '@/components/ui/button';

interface DataItem {
  id: number;
  title: string;
  pera: string;
  icon: any;
}

const dataList: DataItem[] = [
  {
    id: 1,
    title: 'Speed and Simplicity',
    pera: "Our online visa services platform makes it simple to get the approvals you need for your trip. No paperwork, no hassle, no hidden fees. Just a few clicks and you're ready to go.",
    icon: Zap,
  },
  {
    id: 2,
    title: 'Get Approved',
    pera: 'Leave the visa hassle to us. Our online Visa experts will review your application, communicate with the authorities, and secure your approval. No delays, no worries, no stress. Just pack your bags and get ready to explore.',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Secure and Safe',
    pera: 'We protect your sensitive data with the best technology and practices. We handle your travel needs and information with professionalism and honesty. Our visa experts deliver a smooth and hassle-free experience, from start to finish.',
    icon: Shield,
  },
  {
    id: 4,
    title: 'Awesome Support',
    pera: "We're always ready to help you with any query or issue. Our customer success team is friendly, knowledgeable, and supportive. We communicate clearly and promptly, ensuring you feel confident and informed throughout your online visa application process.",
    icon: Users,
  },
];

export default function WhyChooseUsTwo() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={whyChooseUsBanner}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                alt="Online visa services apply Today-Visa Collect"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-primary">Visacollect?</span>
              </h2>
              <p className="text-lg text-gray-300">
                Wander in wonder, leave the paperwork blues to us.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {dataList.map(item => (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{item.pera}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
