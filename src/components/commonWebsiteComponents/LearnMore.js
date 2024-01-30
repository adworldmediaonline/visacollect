import React from 'react';
import Link from 'next/link';
import UnderlineTextCenter from '../australia/common/UnderlineTextCenter';
import Divider from '../common/Divider';
import Image from 'next/image';
import { learnMoreSectionDataAustralia } from '@/constant/data';
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
            <>
              <div
                key={index}
                className={`${section?.image ? 'flex flex-col gap-5  ' : ''}`}
              >
                <div className={`${section?.image ? 'w-full text-left' : ''}`}>
                  <SectionHeading heading={section.title} index={index} />
                  <Divider />
                  {section?.paragraphs?.map((paragraph, index) => (
                    <SectionParagraph text={paragraph.text} key={index} />
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
              </div>
            </>
          ))}

          {learnMoreSectionDataAustralia?.visaRequirements?.title && (
            <div className="mt-4 mb-2">
              <h2 className="text-2xl text-primary md:text-3xl">
                {learnMoreSectionDataAustralia?.visaRequirements?.title}
              </h2>
              <Divider />
            </div>
          )}
          {learnMoreSectionDataAustralia?.visaRequirements?.list.map(
            (item, index) => (
              <div key={index}>
                <ul className="flex flex-col items-start justify-start list-disc ">
                  <li className="text-left">{item}</li>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
