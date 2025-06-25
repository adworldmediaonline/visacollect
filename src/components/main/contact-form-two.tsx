'use client';
import React from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, User, Send, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import usePost from '@/hooks/usePost';
import contactUsImg from '/public/assets/images/main/formGirl.png';

export default function ContactFormTwo() {
  const postMutation = usePost(
    'https://www.visacollect.com/api/contact',
    'form submitted successfully',
    '/thankyou',
    false,
    'contactForm',
    'form submitted successfully'
  );

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    }),
    onSubmit: async values => {
      console.log(values);
      // @ts-ignore - Type mismatch with mutation function, but this pattern works in the original contact-us.js
      postMutation.mutate({
        ...values,
      });
      formik.setSubmitting(false);
      formik.resetForm();
    },
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our office location',
      value: 'Plot No. 136, 3rd Floor, Rider House, Sector 44, 122003',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      description: '24/7 Support Available',
      value: 'Always here for you',
    },
  ];

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden bg-white"
      aria-label="Contact Form"
    >
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        {/* Simplified gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,152,199,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Illustration Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-primary-600/15 rounded-3xl transform rotate-2 blur-lg opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/8 to-primary/8 rounded-3xl transform -rotate-1 blur-lg opacity-30" />

              {/* Main Image Container */}
              <div className="relative bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-lg">
                <Image
                  src={contactUsImg}
                  className="w-full h-auto object-contain"
                  alt="Contact us illustration"
                />

                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-primary/5 rounded-3xl" />

                {/* Fixed Floating Elements - Within bounds */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border shadow-lg bg-white border-gray-200 hover:border-primary/20 transition-all duration-200"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 border border-gray-200">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {info.title}
                    </h4>
                    <p className="text-xs text-gray-600">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="order-1 lg:order-2">
            <Card className="border shadow-lg bg-white border-gray-200 hover:border-primary/20 transition-all duration-300 relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl" />

              <CardHeader className="space-y-4 pb-8 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 rounded-full shadow-lg w-fit border-0">
                    <Send className="w-4 h-4" />
                    Get in Touch
                  </div>
                </div>

                <div className="space-y-3">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                    Let's connect!
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Have a question or need assistance? We're here to help!
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <form
                  className="space-y-6"
                  onSubmit={formik.handleSubmit}
                  aria-label="Contact form"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="pl-12 h-12 bg-white border-gray-300 focus:border-primary focus:ring-primary/20 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 text-sm">{formik.errors.name}</div>
                    ) : null}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="pl-12 h-12 bg-white border-gray-300 focus:border-primary focus:ring-primary/20 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    ) : null}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Enter your message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className="w-full pl-12 pt-3 pb-3 pr-3 bg-white border border-gray-300 focus:border-primary focus:ring-primary/20 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 resize-none"
                      />
                    </div>
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-red-500 text-sm">{formik.errors.message}</div>
                    ) : null}
                  </div>

                  {/* Error Message */}
                  {postMutation.isError ? (
                    <div className="text-red-500 text-sm">
                      An error occurred: {postMutation.error['response']?.data?.error}
                    </div>
                  ) : null}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!formik.isValid || formik.isSubmitting || postMutation.isPending}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      {postMutation.isPending ? 'Sending...' : 'Send Message'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    We'll get back to you within 24 hours. Your information is secure and will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
