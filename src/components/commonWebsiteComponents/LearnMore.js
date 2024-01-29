import React from 'react';
import Link from 'next/link';
import UnderlineTextCenter from '../australia/common/UnderlineTextCenter';

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
              <div className={`${section?.image ? 'flex space-x-5 ' : ''}`}>
                <div className={`${section?.image ? 'w-full text-left' : ''}`}>
                  <div className="flex justify-start pt-10" key={index}>
                    {index === 0 ? (
                      <h1 className="text-2xl text-black md:text-3xl">
                        {section?.title}
                      </h1>
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
                  {section?.paragraphs?.map((paragraph, index) => (
                    <>
                      <p className="pt-4 text-left" key={index}>
                        {paragraph?.text}
                      </p>
                    </>
                  ))}

                  {section?.lists?.map((list, index) => (
                    <div key={index}>
                      <div className="py-4 text-left">{list?.title}</div>
                      <ul className="flex flex-col items-start justify-start list-disc ">
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
                  <div className={`${section?.image ? 'w-full' : ''}`}>
                    <img
                      src="/assets/images/australia/visainfo.png"
                      className="w-full object-cover h-[250px] object object-center rounded-lg"
                    />
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
