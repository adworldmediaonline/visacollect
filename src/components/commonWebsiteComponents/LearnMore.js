import React from 'react';
import Link from 'next/link';
import UnderlineTextCenter from '../australia/common/UnderlineTextCenter';
import Divider from '../common/Divider';
import Image from 'next/image';
import { learnMoreSectionDataAustralia } from '@/constant/data';

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
                  <div className="flex justify-start pt-10 [&_h1]:text-primary [&_h2]:text-primary [&_h3]:text-primary [&_h4]:text-primary [&_h5]:text-primary [&_h6]:text-primary">
                    {index === 0 ? (
                      <h1 className="text-2xl md:text-3xl">{section?.title}</h1>
                    ) : null}
                    {index === 1 || index === 2 ? (
                      <h2 className="text-2xl text-black md:text-3xl">
                        {section?.title}
                      </h2>
                    ) : null}
                    {index === 3 ? (
                      <h3 className="text-2xl text-black md:text-3xl">
                        {section?.title}
                      </h3>
                    ) : null}
                    {index === 4 ? (
                      <h4 className="text-2xl text-black md:text-3xl">
                        {section?.title}
                      </h4>
                    ) : null}

                    {index > 4 ? (
                      <h5 className="text-2xl text-black md:text-3xl">
                        {section?.title}
                      </h5>
                    ) : null}
                  </div>
                  <Divider />
                  {section?.paragraphs?.map((paragraph, index) => (
                    <>
                      <p className="pt-4 text-left" key={index}>
                        {paragraph?.text}
                      </p>
                    </>
                  ))}

                  {section?.lists?.map((list, index) => (
                    <div key={index}>
                      <div className="mt-4 mb-2">
                        <strong className="py-4 text-left">
                          {list?.title}
                        </strong>
                      </div>
                      <ul className="flex flex-col items-start justify-start gap-3 list-disc ">
                        {list?.listItems?.map((item, index) => (
                          <>
                            <li className="py-1 text-left" key={index}>
                              {item}
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {!!section?.image && (
                  <div className={`${section?.image ? 'w-full relative' : ''}`}>
                    <Image
                      alt={section?.imageAlt}
                      src={section?.image}
                      className="object-cover w-full"
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
