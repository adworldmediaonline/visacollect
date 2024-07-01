import { MalaysiaHomePage } from '../mainDirectoryHomePages';
import  BatuCavesImg  from '../../../../public/assets/images/malaysia/a-complete-guide-to-batu-caves-malaysia.webp';
import { malaysiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/malaysiaMDHomePageFaq';
import { BatuCavesGuide } from '../mainDirectoryHomePagesBlog/malaysia';

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
            metadataBase: new URL("https://www.visacollect.com"),

            alternates: {
                canonical: `${malaysiaMDBlogBase}/a-complete-guide-to-batu-caves-malaysia`,
            },

            openGraph: {
                url: `${malaysiaMDBlogBase}/a-complete-guide-to-batu-caves-malaysia`,
            },
        },
        pageTitle: "Batu Caves Guide: Discovering Malaysia's Cultural Gem",
        alt: "A Journey to the Batu Caves Malaysia",
        imgUrl: "/assets/images/malaysia/a-complete-guide-to-batu-caves-malaysia.webp",
        slug: "a-complete-guide-to-batu-caves-malaysia",
        content: <BatuCavesGuide />,
        img: BatuCavesImg,
        linkText: "Read more",
        href: `${malaysiaMDBlogBase}/a-complete-guide-to-batu-caves-malaysia`,
    },
],
};
