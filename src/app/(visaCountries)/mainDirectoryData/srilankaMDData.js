import { SrilankaHomePage } from '../mainDirectoryHomePages';
import { sriLankanVisaRequirementsForCanadianCitizens } from '../mainDirectoryHomePagesBlog/images/blogImages';
import { SriLankanVisaRequirementsForCanadianCitizens } from '../mainDirectoryHomePagesBlog/srilanka';
import { srilankaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/srilankaMDHomePageFaq';

// MD => mainDirectory
const srilankaMDBlogBase = '/lk/blog';
export const srilankaMDData = {
  breadcrumb: 'LK',
  code: 'lk',
  pageTitle:
    'Srilanka Visa Entry requirements and travel information for Srilanka',
  pageDescription: null,
  pageContent: <SrilankaHomePage />,
  applyNow: '/lk/apply-now',
  faq: srilankaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `sri lanka visa requirements for canadian citizens`,
        description: `unlocking sri lanka for canadians: this blog explains everything canadians need to know about obtaining an eta for a smooth trip to sri lanka. `,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${srilankaMDBlogBase}/sri-lankan-visa-requirements-for-canadian-citizens`,
        },

        openGraph: {
          url: `${srilankaMDBlogBase}/sri-lankan-visa-requirements-for-canadian-citizens`,
        },
      },
      slug: 'sri-lankan-visa-requirements-for-canadian-citizens',
      pageTitle: '',
      content: <SriLankanVisaRequirementsForCanadianCitizens />,
      img: sriLankanVisaRequirementsForCanadianCitizens,
      alt: 'Sri Lankan visa requirements for Canadian citizens | Visacollect',
      imgUrl:
        '/assets/images/srilanka/blog/sri-lankan-visa-requirements-for-canadian-citizens.webp',
      linkText: 'Read more',
      href: `${srilankaMDBlogBase}/sri-lankan-visa-requirements-for-canadian-citizens`,
    },
  ],
};
