'use client';
import React from 'react';
import UnderlineTextCenter from '../australia/common/UnderlineTextCenter';
import TitleText from '../australia/common/TitleText';
import SectionParagraph from '../common/countryHomePage/SectionParagraph';
import { Disclosure } from '@headlessui/react';

const Faq = ({ faqData }) => {
  return (
    <div>
      <div className="py-16">
        <div className="container">
          <div className="space-y-4">
            <div className="w-fit md:mx-auto">
              <UnderlineTextCenter title="FAQs" />
            </div>
            <div className="max-w-4xl mx-auto md:text-center">
              <TitleText title="Frequently Asked Questions" />
            </div>
          </div>

          <div className="">
            <div className="container pt-20 pl-0 md:pl-10">
              <div>
                {' '}
                <div className="-mt-8 space-y-8">
                  <div className="flex flex-col space-y-3">
                    {faqData?.map((item, index) => {
                      return (
                        <div className="rounded-sm cursor-pointer " key={index}>
                          <Disclosure>
                            <Disclosure.Button className="py-1">
                              <p className="underline text-tertiary">
                                {item.title}
                              </p>
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                              <p className="pb-2">{item.des}</p>
                              {item?.applyNow ? (
                                <div className="flex items-center justify-center gap-3 mx-auto my-5">
                                  <div className="w-10 h-[1.3px] bg-gray-300 block my-3" />
                                  {item?.applyNow}
                                  <div className="w-10 h-[1.3px] bg-gray-300 block my-3" />
                                </div>
                              ) : null}
                              {item?.extraContent
                                ? item?.extraContent?.map((content, index) => (
                                    <SectionParagraph
                                      text={content.text}
                                      href={content.href}
                                      linkText={content.linkText}
                                      key={index}
                                    />
                                  ))
                                : null}
                            </Disclosure.Panel>
                          </Disclosure>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
