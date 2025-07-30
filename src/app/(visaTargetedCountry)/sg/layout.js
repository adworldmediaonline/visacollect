import Script from 'next/script';

export const metadata = {
  title: 'apply singapore visa online | visa collect',
  description:
    'effortlessly apply for your singapore visa online through visa collect. streamline your travel plans with our convenient application process.',
  metadataBase: 'https://www.visacollect.com',
  alternates: {
    canonical: `/sg/`,
  },
  keywords:
    'Apply singapore visa online, singapore visa application, singapore visa online, apply for singapore tourist visa, apply singapore visa, apply for singapore visit visa, singapore tourist visa apply online, singapore visa online application, singapore work visa apply online',
  openGraph: {
    url: `/sg/`,
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'In order to apply for a tourist visa to Singapore with VisaCollect, what documents are required?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your documentation must include a valid passport, two current passport-sized photos, a confirmed return ticket, an invitation letter if you are staying with friends or family, or a hotel reservation, and evidence of adequate cash to cover your stay.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can you tell me how long it takes for VisaCollect to process a Singapore visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'After all the required documents are provided and the application is finalised, the processing period for a Singapore visa usually falls within a few business days. However, this time frame is subject to variation.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'If I intend to go to a job interview in Singapore, is it possible to get a business visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, although the Business Visa is more suited for non-work-related business pursuits like going to conferences and meetings. Before going in for an interview, find out if you need a certain visa or permission.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does a vacation to Singapore necessitate travel insurance?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It is strongly advised to have travel insurance in case of unforeseen medical costs or other problems that may arise while travelling, while it is not required.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is it possible to use VisaCollect for speedy visa applications?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It is recommended to contact VisaCollect personally to discuss the urgency and ensure speedier processing, but they can certainly assist with urgent applications.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I apply for a medical visa to Singapore regardless of my age?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A medical visa does not have any age requirements. Applicants of any age are required to furnish Singapore with evidence of their medical treatment requirements as well as information of any relevant medical appointments.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "Once I'm in Singapore, how can I extend my visa?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Before your existing visa's expiration, you should apply to Singapore's Immigration and Checkpoints Authority (ICA) if you require a visa extension. For help with this, VisaCollect is here to help.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where do I go from here if the visa office rejects my application?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If the embassy decides not to grant your visa, they are required by law to explain their decision. If it is feasible, VisaCollect can assist you in reapplying and explaining the reason..',
                  },
                },
                {
                  '@type': 'Question',
                  name: "Am I able to change my Tourist Visa into a Work Permit once I'm in Singapore?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'In most cases, a Tourist Visa cannot be changed into a Work Permit. Obtaining a work permit or employment pass in Singapore requires leaving the country and going through the correct procedures.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the most typical grounds for denying a Singapore visa application?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Incomplete applications, missing documentation, inadequate finances, or prior immigration infractions are common causes.',
                  },
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
