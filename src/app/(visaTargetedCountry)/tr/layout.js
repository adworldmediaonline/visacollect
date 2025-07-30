import Script from 'next/script';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const metadata = {
  title: 'apply turkey visa online | visa collect',
  description:
    'effortlessly apply for your turkey visa online through visa collect. streamline your travel plans with our convenient application process.',
  metadataBase: new URL('https://www.visacollect.com'),

  alternates: {
    canonical: '/tr/',
  },
  keywords:
    'turkey visa,e visa turkey,turkey visa online,turkey visa application,turkey visa requirements,apply for turkish visa,turkey visa application form,turkey e visa application,turkey visa application form online',

  openGraph: {
    url: '/tr/',
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
                  name: 'Do I need a visa to go to Turkey?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most tourists who want to visit Turkey need to apply for aTurkey visa, depending on what country they are from. Make sure you know exactly what you need to do in your own country before you do anything else. You should look at the rules that apply in your home country.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What do I need to do in order to apply for Turkey visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'To apply for Turkey visa, you usually need a valid passport, a completed visa application form, a recent picture the size of a passport, proof of travel (like plane tickets), proof of where you will stay, and financial proof that you can pay for your stay.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does it take to get a Turkey Travel visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The time it takes to process an online application for a Turkey visa varies, but it usually takes between 3 and 15 business days. You need to apply a long time before your trip.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I stay longer in Turkey once I get there?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, you can stay longer in Turkey after you get there by getting a residence pass from the Provincial Directorate of Migration Management before your visa runs out.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I stay longer in Turkey once I get there?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, you can stay longer in Turkey after you get there by getting a residence pass from the Provincial Directorate of Migration Management before your visa runs out.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is it safe to go to Turkey?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Turkey is usually a safe place to visit, but as with any vacation spot, it's important to know what's going on in the area and follow any travel warnings. People should all follow the same rules, especially in tourist areas.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What kind of money does Turkey use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "The Turkish lira (TRY) is the country's money.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do most places in Turkey take credit cards?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "In Istanbul and other tourist areas in Turkey, most hotels, restaurants, and shops take credit cards. But it's still a good idea to bring some cash with you for small purchases, especially in remote areas.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'In Turkey, what is the number to call for help?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'In Turkey, the emergency number is 112, which can be used to get help right away from the cops, an ambulance, or the fire department.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do I need to get any shots before going to Turkey?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'There are no required vaccinations in Turkey, but it is still a good idea to get your regular shots. Getting vaccinated against Hepatitis A and Typhoid may be suggested based on where you plan to visit',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should I get a new visa before I go to another country?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A Turkey visa only lets you enter and stay in Turkey. If you want to visit other countries, you need to get a ticket.',
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
