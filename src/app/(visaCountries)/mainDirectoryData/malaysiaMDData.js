import { MalaysiaHomePage } from '../mainDirectoryHomePages';
import BatuCavesImg from '../../../../public/assets/images/malaysia/a-complete-guide-to-batu-caves-malaysia.webp';
import BestTimeToVisitMalaysiaImg from '../../../../public/assets/images/malaysia/best-time-to-visit-malaysia.webp';
import { malaysiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/malaysiaMDHomePageFaq';
import {
  BatuCavesGuide,
  BestTimeToVisitMalaysia,
} from '../mainDirectoryHomePagesBlog/malaysia';

// MD => mainDirectory
const malaysiaMDBlogBase = '/my/blog';
export const malaysiaMDData = {
  breadcrumb: 'MY',
  code: 'my',
  pageTitle:
    'Malaysia Visa Entry requirements and travel information for Malaysia',
  pageDescription: null,
  pageContent: <MalaysiaHomePage />,
  applyNow: '/my/application',
  faq: malaysiaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `A Complete Guide to Batu Caves Malaysia`,
        description: `Planning your next visit! Batu Caves Malaysia This might be the perfect destination for you this season. These stunning caves in Malaysia will mesmerise you and bring you immense pleasure.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${malaysiaMDBlogBase}/a-complete-guide-to-batu-caves-malaysia`,
        },

        openGraph: {
          url: `${malaysiaMDBlogBase}/a-complete-guide-to-batu-caves-malaysia`,
        },
      },
      pageTitle: "Batu Caves Guide: Discovering Malaysia's Cultural Gem",
      alt: 'A Journey to the Batu Caves Malaysia',
      imgUrl:
        '/assets/images/malaysia/a-complete-guide-to-batu-caves-malaysia.webp',
      slug: 'a-complete-guide-to-batu-caves-malaysia',
      content: <BatuCavesGuide />,
      img: BatuCavesImg,
      linkText: 'Read more',
      href: `${malaysiaMDBlogBase}/a-complete-guide-to-batu-caves-malaysia`,
    },
    {
      metadata: {
        title: ` Best Time to Visit in Malaysia | Travel Tips to Visit in Malaysia`,
        description: `Are you planning a memorable holiday in Malaysia? Get all the information about the best time to visit Malaysia, Famous places to visit in Malaysia, and travel tips for visiting Malaysia - Visa Collect`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${malaysiaMDBlogBase}/best-time-to-visit-malaysia`,
        },

        openGraph: {
          url: `${malaysiaMDBlogBase}/best-time-to-visit-malaysia`,
        },
      },
      pageTitle: "Best time to visit Malaysia: Updates on Malaysia's climate",
      alt: 'Best time to visit Malaysia | Visa Collect',
      imgUrl: '/assets/images/malaysia/best-time-to-visit-malaysia.webp',
      slug: 'best-time-to-visit-malaysia',
      content: <BestTimeToVisitMalaysia />,
      img: BestTimeToVisitMalaysiaImg,
      linkText: 'Read more',
      href: `${malaysiaMDBlogBase}/best-time-to-visit-malaysia`,
    },
  ],
};
