import Script from 'next/script';
import 'react-datepicker/dist/react-datepicker.css';

export const metadata = {
  title: 'apply sri lanka visa online | visa collect',
  description:
    'effortlessly apply for your sri lanka visa online through visa collect. streamline your travel plans with our convenient application process.',
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/lk/',
  },
  keywords:
    'sri lanka visa,sri lanka tourist visa,sri lanka visa online,sri lanka e visa,apply for sri lanka visa,sri lanka eta online',

  openGraph: {
    url: '/lk/',
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
                  name: 'How do I apply for an e Tourist Sri Lanka Visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can apply for an e Tourist Sri Lanka Visa online. Fill out the application form, submit the required documents, and pay the visa fee.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What documents do I need to apply for an e Tourist Sri Lanka Visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Typically, you'll need a valid passport, a digital photo, and proof of onward travel. However, requirements may vary, so it's best for you to check the official website.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does it take to process an e Tourist Sri Lanka Visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The processing time can vary, but it typically takes a few days.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long is the e Tourist Sri Lanka Visa valid for?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The e Tourist Sri Lanka Visa is usually valid for 30 days from the date of arrival, but it can be extended.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I work in Sri Lanka with an e Tourist Visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No, the e Tourist Visa does not permit foreign nationals to work in Sri Lanka.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What should I do if my e Tourist Sri Lanka Visa application is denied?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If your application is denied, you can reapply after understanding the reasons for the denial and rectifying them.',
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
