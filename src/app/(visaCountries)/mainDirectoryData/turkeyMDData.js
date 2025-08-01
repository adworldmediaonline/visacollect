import { TurkeyHomePage } from '../mainDirectoryHomePages';
import { howToGetTurkeyVisa } from '../mainDirectoryHomePagesBlog/images/blogImages';
import { HowToGetATurkeyVisaAfterARefusal } from '../mainDirectoryHomePagesBlog/turkey';
import { turkeyMDHomePageFaq } from '../mainDirectoryHomePagesFaq/turkeyMDHomePageFaq';

// MD => mainDirectory
const turkeyMDBlogBase = '/tr/blog';
export const turkeyMDData = {
  breadcrumb: 'TR',
  code: 'tr',
  pageTitle: 'Turkey Visa Entry requirements and travel information for Turkey',
  pageDescription: null,
  pageContent: <TurkeyHomePage />,
  applyNow: '/tr/application',
  faq: turkeyMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `how to get a turkey visa after a refusal`,
        description: `learn how to get a turkey visa after refusal. get information about possible reasons for rejections and guide lines to avoid rejection in the future.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${turkeyMDBlogBase}/how-to-get-a-turkey-visa-after-a-refusal`,
        },

        openGraph: {
          url: `${turkeyMDBlogBase}/how-to-get-a-turkey-visa-after-a-refusal`,
        },
      },
      slug: 'how-to-get-a-turkey-visa-after-a-refusal',
      pageTitle: 'How to Get a Turkey Visa After a Refusal',
      content: <HowToGetATurkeyVisaAfterARefusal />,
      img: howToGetTurkeyVisa,
      alt: 'Your Complete Guide to Obtaining a Visa in Morocco | Visacollect',
      imgUrl:
        '/assets/images/blog/turkeyVisa/how-to-get-a-turkey-visa-after-a-refusal.webp',
      linkText: 'Read more',
      href: `${turkeyMDBlogBase}/how-to-get-a-turkey-visa-after-a-refusal`,
    },
  ],
};
