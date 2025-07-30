import Script from 'next/script';

export const metadata = {
  title: 'apply oman visa online | visa collect',
  description:
    'effortlessly apply for your oman visa online through visa collect. streamline your travel plans with our convenient application process.',
  metadataBase: 'https://www.visacollect.com',
  alternates: {
    canonical: `/om/`,
  },
  keywords:
    'oman visa online, oman visa online, apply oman visa online, apply oman visa, oman visit visa online',
  openGraph: {
    url: `/om/`,
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
                  name: 'How long does it take to process an Oman visa via VisaCollect?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Depending on the kind of visa and the completeness of the application, the processing period for an Oman visa usually takes a few days to a week. The goal of VisaCollect is to guarantee quick processing so that travellers can obtain their visas as soon as feasible. Depending on the kind of visa and the completeness of the application, the processing period for an Oman visa usually takes a few days to a week. The goal of VisaCollect is to guarantee quick processing so that travellers can obtain their visas as soon as feasible.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: 'After entering Oman, is it possible for me to renew my visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, under certain circumstances you are able to seek for an extension of your Oman visa. To find out the requirements and process for extending a visa, it is best to get in touch with the Royal Oman Police or go to their official website.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are there any particular vaccines that need to be obtained before visiting Oman?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It is not required for tourists to Oman to have any specific immunisations. It is advised, therefore, to stay current on standard vaccinations. For guidance specific to your health situation and travel itinerary, see your healthcare professional.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which methods of payment are available on VisaCollect for the visa fee?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'VisaCollect takes a number of payment methods, such as debit and credit cards, as well as occasionally direct bank transfers. All users can transact securely thanks to the platform.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'If my application for a visa to Oman is rejected, what should I do?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'whether your visa application is rejected, VisaCollect will provide you the reasons why. You may also get in touch with their customer service to find out whether you can resubmit or if there are any particular concerns that need to be addressed in your application.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does acquiring a visa for Oman involve having travel insurance?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It is highly advised to get travel insurance to cover medical emergencies and unforeseen travel concerns during your stay in Oman, even though it is not required for all visa categories.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is it possible to apply for an Oman multiple entry visa via VisaCollect?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Indeed, VisaCollect allows eligible candidates to apply for multiple entry visas; this is advantageous for regular visitors to Oman or business travellers.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What regulations apply to kids travelling with an Oman visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Unless they are included on their parent's passport, children require their own visa. In these situations, make sure to include information on every child on the visa application in order to prevent any issues at the border.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How can I find out the status of my application for a visa to Oman?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Through a tracking tool on their platform, VisaCollect allows you to enter your application ID or other pertinent information to check the status of your visa application.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What kind of assistance is provided by VisaCollect if I run into problems with my application?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Throughout the visa application process, VisaCollect's committed customer support team is here to help you with any queries or problems. They can be reached via phone, email, or through their website's live chat feature.",
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
