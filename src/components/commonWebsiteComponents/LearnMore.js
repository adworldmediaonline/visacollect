import React from 'react';
import Link from 'next/link';
import UnderlineTextCenter from '../australia/common/UnderlineTextCenter';
import Divider from '../common/Divider';
import Image from 'next/image';
import { learnMoreSectionData } from '@/constant/data';
import SectionHeading from '@/app/australia/_homePage/SectionHeading';
import SectionParagraph from '@/app/australia/_homePage/SectionParagraph';
import SectionList from './SectionList';

const LearnMore = ({ learnMoreSectionData }) => {
  const { sections } = learnMoreSectionData;
  return (
    <div>
      <div className="container">
        <div className="space-y-4">
          {/* <div>
            <UnderlineTextCenter title="Learn More" />
          </div> */}

          {sections?.map((section, index) => (
            <div
              key={index}
              className={`${section?.image ? 'flex flex-col gap-5  ' : ''}`}
            >
              <div>
                <SectionHeading heading={section.title} />
                <Divider />
                {section?.paragraphs?.map((paragraph, index) => (
                  <SectionParagraph
                    text={paragraph.text}
                    href={paragraph.href ?? ''}
                    isEmail={paragraph.isEmail}
                    linkText={paragraph.linkText}
                    key={index}
                  />
                ))}

                {section?.lists?.map((list, index) => (
                  <div key={index}>
                    <SectionList list={list} />
                  </div>
                ))}
              </div>
              {!!section?.image && (
                <div
                  className={`${
                    section?.image ? 'w-full relative aspect-video' : ''
                  }`}
                >
                  <Image
                    alt={section?.imageAlt}
                    src={section?.image}
                    className="object-cover w-full"
                    fill
                  />
                </div>
              )}

              {section?.applyNow ? (
                <div className="flex items-center justify-center gap-3 mx-auto my-5">
                  <div className="w-10 h-[1.3px] bg-gray-300 block my-3" />
                  {section?.applyNow}
                  <div className="w-10 h-[1.3px] bg-gray-300 block my-3" />
                </div>
              ) : null}
            </div>
          ))}

          {learnMoreSectionData?.visaRequirements?.title && (
            <div className="mt-4 mb-2">
              <h2 className="text-2xl text-primary md:text-3xl">
                {learnMoreSectionData?.visaRequirements?.title}
              </h2>
              <Divider />
            </div>
          )}
          {learnMoreSectionData?.visaRequirements?.list.map((item, index) => (
            <div key={index}>
              <ul className="flex flex-col items-start justify-start list-disc ">
                <li className="text-left">{item}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
