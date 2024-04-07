import { MorroccoHomePage } from '../mainDirectoryHomePages';
import { indiaEVisaApplyOnline } from '../mainDirectoryHomePagesBlog/images/blogImages';
import { MoroccoVisaEligibilityApplicationAndRequirements } from '../mainDirectoryHomePagesBlog/morocco';
import { morroccoMDHomePageFaq } from '../mainDirectoryHomePagesFaq/morroccoMDHomePageFaq';

// MD => mainDirectory
const morroccoMDBlogBase = '/ma/blog';
export const morroccoMDData = {
  breadcrumb: 'MA',
  code: 'ma',
  pageTitle:
    'Morocco Visa Entry requirements and travel information for Morocco',
  pageDescription: null,
  pageContent: <MorroccoHomePage />,
  applyNow: '/ma/step-one',
  faq: morroccoMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `Morocco visa Eligibility, Application, and Requirements`,
        description: `Ready for Morocco? Check Morocco visa eligibility, application, and requirements & apply with confidence! Our guide simplifies the process.`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${morroccoMDBlogBase}/morocco-visa-eligibility-application-and-requirements`,
        },

        openGraph: {
          url: `${morroccoMDBlogBase}/morocco-visa-eligibility-application-and-requirements`,
        },
      },
      slug: 'morocco-visa-eligibility-application-and-requirements',
      pageTitle:
        'Morocco E-Visa Guide: Eligibility, Application Procedures and Requirements',
      content: <MoroccoVisaEligibilityApplicationAndRequirements />,
      img: indiaEVisaApplyOnline,
      alt: 'Your Complete Guide to Obtaining a Visa in Morocco | Visacollect',
      imgUrl: '/assets/images/generalBlog/india-evisa-apply-online.webp',
      linkText: 'Read more',
      href: `${morroccoMDBlogBase}/morocco-visa-eligibility-application-and-requirements`,
    },
    {
      metadata: {
        title: `Your Complete Guide to Obtaining a Visa in Morocco`,
        description: `Dreaming of Morocco? Learn exactly how to get a visa for your trip to Morocco with our Complete Guide to Obtaining a Visa in Morocco.`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${morroccoMDBlogBase}/your-complete-guide-to-obtaining-a-visa-in-morocco`,
        },

        openGraph: {
          url: `${morroccoMDBlogBase}/your-complete-guide-to-obtaining-a-visa-in-morocco`,
        },
      },
      slug: 'your-complete-guide-to-obtaining-a-visa-in-morocco',
      pageTitle:
        'Your Complete Guide to Applying for a Morocco E-Visa: Easy Steps to Take for a Rememberable Trip',
      content: <MoroccoVisaEligibilityApplicationAndRequirements />,
      img: indiaEVisaApplyOnline,
      alt: 'Your Complete Guide to Obtaining a Visa in Morocco | Visacollect',
      imgUrl: '/assets/images/generalBlog/india-evisa-apply-online.webp',
      linkText: 'Read more',
      href: `${morroccoMDBlogBase}/your-complete-guide-to-obtaining-a-visa-in-morocco`,
    },
  ],
};
