import { AustraliaHomePage } from '../mainDirectoryHomePages';
import { AustraliaVisaRequirementsForSingaporeCitizens } from '../mainDirectoryHomePagesBlog/australia';
import { australiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/australiaMDHomePageFaq';

// MD => mainDirectory
const australiaMDBlogBase = '/au/blog';
export const australiaMDData = {
  breadcrumb:
    'australia-visa-entry-requirements-and-travel-information-for-australia',
  pageTitle:
    'Australia Visa Entry requirements and travel information for Australia',
  pageDescription: null,
  pageContent: <AustraliaHomePage />,
  applyNow: '/au/application',
  faq: australiaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `Top Things to do in India For Fun`,
        description: `Unlock the essence of India with our curated list of the top things to do in India! Dive into a world of cultural wonders and thrilling adventures.`,
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
      img: '',
      linkText: 'Read more',
      href: `${australiaMDBlogBase}/australia-visa-requirements-for-singapore-citizens`,
    },
  ],
};
