'use client';
import React from 'react';
import UnderlineTextCenter from '../australia/common/UnderlineTextCenter';
import TitleText from '../australia/common/TitleText';
import SectionParagraph from '../common/countryHomePage/SectionParagraph';
import { Disclosure } from '@headlessui/react';

import { FiChevronRight } from 'react-icons/fi';

const FaqWithMDX = ({ faqData, titleText }) => {
  return (
    <div>
      <div className="py-16">
        <div className="container">
          <div className="space-y-4">
            <div className="w-fit md:mx-auto">
              <UnderlineTextCenter title="FAQs" />
            </div>
            <div className="max-w-4xl mx-auto md:text-center">
              <TitleText title={titleText} />
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
                        <div className="rounded-sm" key={index}>
                          <Disclosure>
                            {({ open }) => (
                              /* Use the `open` state to conditionally change the direction of an icon. */
                              <>
                                <Disclosure.Button className="flex items-center gap-2 py-1">
                                  <p className="underline text-tertiary">
                                    {index + 1}. {item.title}
                                  </p>
                                  <FiChevronRight
                                    className={
                                      open ? 'rotate-90 transform' : ''
                                    }
                                  />{' '}
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-gray-500 [&_ol]:list-decimal [&_ol]:pl-7 [&_ul]:list-disc [&_ul]:pl-7">
                                  {item?.content ? (
                                    <p className="pb-2">{item?.content}</p>
                                  ) : null}
                                  {item?.mdxContent ? item.mdxContent : null}
                                </Disclosure.Panel>
                              </>
                            )}
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

export default FaqWithMDX;
