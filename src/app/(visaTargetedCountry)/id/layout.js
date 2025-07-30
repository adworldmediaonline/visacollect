import Script from 'next/script';

export const metadata = {
  title: 'apply indonesia visa online | visa collect',
  description:
    'effortlessly apply for your indonesia visa online through visa collect. streamline your travel plans with our convenient application process.',
  metadataBase: 'https://www.visacollect.com',
  alternates: {
    canonical: `/id/`,
  },
  keywords:
    'e visa indonesia, apply indonesia visa online, indonesia visa online, indonesia visa application online, indonesia tourist visa apply online',
  openGraph: {
    url: `/id/`,
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}{' '}
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
                  name: 'When processing an application for an Indonesian visa takes how long?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The kind of visa and nationality of the applicant can affect how long it takes to process an application for an Indonesian visa. That usually takes five to ten business days. It is advised to apply much in advance of the dates you intend to travel.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I stay in Indonesia longer on a tourist visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Extensions of Indonesian tourist visas are usually not possible. On arrival visas, for example, can be renewed once for an extra thirty days. For further information, see the conditions of your visa or get in touch with the Indonesian immigration authorities.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which photos must be included with an application for an Indonesian visa?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The picture has to be a current colour one taken on a white backdrop. It needs to measure 3.5 by 4.5 centimetres. The candidate should be smiling neutrally and the picture should be clear, free of reflections or shadows.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "I'm passing through Indonesia; do I still need a visa?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Generally speaking, you don't require a visa if you are passing through Indonesia and don't intend to depart the airport transit area. You could need a transit visa, though, if you want to leave the airport or have a layover longer than 24 hours.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How should I get around in Indonesia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Indonesia boasts a sophisticated network of domestic airlines, ferries, buses, and railroads. Shortest and most practical for long-distance travel are domestic flights. Travelling between islands often involves boats and ferries. Public buses, ride-sharing services, and taxis are all readily accessible inside cities.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does one have to meet any health standards before visiting Indonesia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'It is advised to be current on normal vaccinations including measles, mumps, rubella, and diphtheria even though they are not required for admission into Indonesia. The places you intend to visit may also require vaccinations against typhoid, malaria, and hepatitis A. See your doctor for specific guidance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should my visa application to Indonesia be turned down, what should I do?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Should your visa application be turned down, you should normally get a letter outlining the grounds for the rejection. Should you be able to resolve the problems listed in the denial notification, you may reapply. Consulting with visa specialists is a good idea to make sure your next application is precise and thorough.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When visiting Indonesia, what customs should one be mindful of?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Indonesians respect and are courteous people. A smile and a little bow are usual greetings. If you enter a mosque or temple, take off your shoes and dress modest. Generally speaking, it is not a good idea to show affection in public, hence it is crucial to honour regional traditions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What entrance requirements apply to kids visiting Indonesia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Youngsters entering Indonesia need to have their own passport and visa. Bring a notarized letter of permission from the parent or legal guardian who is not travelling if you are travelling with just one. Make sure that any children' travel documents are current and complete.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can a tourist visa holder work in Indonesia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Not with a tourist visa can you work in Indonesia. Depending on the type of job you plan to have, you will need to apply for either a work visa or a business visa. Obtaining the right visa is crucial to stay out of legal hot waters.',
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
