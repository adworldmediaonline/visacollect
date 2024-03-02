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
  pageTitle:
    'Australia Visa Entry requirements and travel information for Australia',
  pageDescription: null,
  pageContent: <AustraliaHomePage />,
  applyNow: '/au/application',
  faq: australiaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `Australia Visa Requirements For Singapore Citizens`,
        description: `Dive into the specifics of Australian  visa requirements for Singaporeans, including eligibility criteria and documentation. Prepare for your journey with ease.`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
        },

        openGraph: {
          url: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
        },
      },
      slug: 'australia-visa-requirements-for-singapore-citizens',
      content: <AustraliaVisaRequirementsForSingaporeCitizens />,
      img: australiaVisaRequirementsForSingaporeCitizensImg,
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
    },
    {
      metadata: {
        title: `Australian ETA For UK Citizens`,
        description: `Learn about the Australian ETA (Electronic Travel Authority) process for UK citizens. Find out how to apply, requirements, and essential information.`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${australiaMDBlogBase}/australian-eta-for-uk-citizens`,
        },

        openGraph: {
          url: `${australiaMDBlogBase}/australian-eta-for-uk-citizens`,
        },
      },
      slug: 'australian-eta-for-uk-citizens',
      content: <AustralianEtaForUKCitizens />,
      img: australianEtaForUkCitizensImg,
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australian-eta-for-uk-citizens`,
    },
    {
      metadata: {
        title: `Australia Visa For US Citizens`,
        description: `Navigate the process of obtaining an Australia visa for US citizens seamlessly, with expert tips and insights to streamline your travel plans`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${australiaMDBlogBase}/australia-visa-for-us-citizens`,
        },

        openGraph: {
          url: `${australiaMDBlogBase}/australia-visa-for-us-citizens`,
        },
      },
      slug: 'australia-visa-for-us-citizens',
      content: <AustraliaVisaForUSCitizens />,
      img: australiaVisaForUsCitizensImg,
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australia-visa-for-us-citizens`,
    },
  ],
};
