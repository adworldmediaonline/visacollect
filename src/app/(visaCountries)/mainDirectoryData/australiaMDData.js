import { AustraliaHomePage } from '../mainDirectoryHomePages';
import {
  AustraliaVisaForUSCitizens,
  AustraliaVisaRequirementsForSingaporeCitizens,
  AustralianEtaForUKCitizens,
} from '../mainDirectoryHomePagesBlog/australia';
import {
  australiaVisaForUsCitizensImg,
  australiaVisaRequirementsForSingaporeCitizensImg,
  australianEtaForUkCitizensImg,
} from '../mainDirectoryHomePagesBlog/images/blogImages';
import { australiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/australiaMDHomePageFaq';

// MD => mainDirectory
const australiaMDBlogBase = '/au/blog';
export const australiaMDData = {
  breadcrumb: 'AU',
  code: 'au',
  pageTitle:
    'Australia Visa Entry requirements and travel information for Australia',
  pageDescription: null,
  pageContent: <AustraliaHomePage />,
  applyNow: '/au/apply-now',
  faq: australiaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `australia visa requirements for singapore citizens`,
        description: `dive into the specifics of australian visa requirements for singaporeans, including eligibility criteria and documentation. prepare for your journey with ease.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
        },

        openGraph: {
          url: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
        },
      },
      pageTitle:
        'Singapore to Australia: Apply for Australia eVisa for the Citizens of Singapore',
      alt: 'Australia Visa Requirements For Singapore Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/australiaVisa/australia-visa-requirements-for-singapore-citizens.webp',
      slug: 'australia-visa-requirements-for-singapore-citizens',
      content: <AustraliaVisaRequirementsForSingaporeCitizens />,
      img: australiaVisaRequirementsForSingaporeCitizensImg,
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
    },
    {
      metadata: {
        title: `australian eta for uk citizens`,
        description: `learn about the australian eta (electronic travel authority) process for uk citizens. find out how to apply, requirements, and essential information.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${australiaMDBlogBase}/australian-eta-for-uk-citizens`,
        },

        openGraph: {
          url: `${australiaMDBlogBase}/australian-eta-for-uk-citizens`,
        },
      },
      pageTitle:
        'UK to Australia: Australian eVisa for the Citizens of the United Kingdom (UK)',
      alt: 'Australian ETA For UK Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/australiaVisa/australian-eta-for-uk-citizens.webp',
      slug: 'australian-eta-for-uk-citizens',
      content: <AustralianEtaForUKCitizens />,
      img: australianEtaForUkCitizensImg,
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australian-eta-for-uk-citizens`,
    },
    {
      metadata: {
        title: `australia visa for us citizens`,
        description: `navigate the process of obtaining an australia visa for us citizens seamlessly, with expert tips and insights to streamline your travel plans`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${australiaMDBlogBase}/australia-visa-for-us-citizens`,
        },

        openGraph: {
          url: `${australiaMDBlogBase}/australia-visa-for-us-citizens`,
        },
      },
      pageTitle: 'Australia visa for US citizens',
      alt: 'Australia visa for US citizens | Visa collect',
      imgUrl:
        '/assets/images/blog/australiaVisa/australia-visa-for-us-citizens.webp',
      slug: 'australia-visa-for-us-citizens',
      content: <AustraliaVisaForUSCitizens />,
      img: australiaVisaForUsCitizensImg,
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australia-visa-for-us-citizens`,
    },
  ],
};
