import { IndiaHomePage } from '../mainDirectoryHomePages';
import {
  applyIndiaEvisaFromUKImg,
  applyIndiaTouristVisaForCanadianCitizensImg,
  bestThingsToDoInIndiaForAustraliaCitizensImg,
  essentialTipsForIndianBusinessVisa,
  howToGetYourIndiaTouristVisaForUsCitizensImg,
  indianTouristVisaForUkCitizensImg,
  indianVisaForEmiratisCitizensImg,
  listOf30BestNationalParksInIndiaForWildlifeEnthusiastsImg,
  topThingsToDoInIndiaForFunAustraliaCitizensImg,
} from '../mainDirectoryHomePagesBlog/images/blogImages';
import {
  ApplyIndiaEVisaFromUK,
  ApplyIndiaTouristVisaForCanadianCitizens,
  BestThingsToDoInIndiaForAustraliaCitizens,
  EssentialTipsForIndianBusinessVisa,
  HowToGetYourIndiaTouristVisaForUSCitizens,
  IndianTouristVisaForUKCitizens,
  IndianVisaForEmiratisCitizens,
  ListOf30BestNationalParksInIndiaForWildlifeEnthusiasts,
  StepsToApplyYourIndiaEVisaFromUSA,
  TopThingsToDoInIndiaForFunAustraliaCitizens,
} from '../mainDirectoryHomePagesBlog/india';
import { indiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/indiaMDHomePageFaq';

// MD => mainDirectory
const indiaMDBlogBase = '/in/blog';
export const indiaMDData = {
  breadcrumb: 'IN',
  code: 'in',
  pageTitle: 'India Visa: - Apply Online Now!',
  pageDescription: null,
  pageContent: <IndiaHomePage />,
  applyNow: '/in/visa/step-one',
  faq: indiaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `Top Fun Things to do in India | VisaCollect`,
        description: `Looking for the fun things to do in India? Unlock the essence of India with our curated list of the top things to do in India! Dive into a world of cultural wonders and thrilling adventures.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/top-things-to-do-in-india-for-fun`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/top-things-to-do-in-india-for-fun`,
        },
      },
      slug: 'top-things-to-do-in-india-for-fun',
      pageTitle: 'Australia to India: Top 30 Things To Do In India for Fun!',
      content: <TopThingsToDoInIndiaForFunAustraliaCitizens />,
      img: topThingsToDoInIndiaForFunAustraliaCitizensImg,
      alt: 'Top Things to do in India For Fun | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/top-things-to-do-in-india-for-fun.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/top-things-to-do-in-india-for-fun`,
    },
    {
      metadata: {
        title: `Best Things To Do In India For Australia Citizens`,
        description: `Explore the top activities and attractions awaiting Australian travelers in India!  Find your perfect itinerary for an unforgettable Indian adventure.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/best-things-to-do-in-india-for-australia-citizens`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/best-things-to-do-in-india-for-australia-citizens`,
        },
      },
      pageTitle:
        '10 Best Things to Do In India for People Travelling from Sydney, Australia',
      slug: 'best-things-to-do-in-india-for-australia-citizens',
      content: <BestThingsToDoInIndiaForAustraliaCitizens />,
      img: bestThingsToDoInIndiaForAustraliaCitizensImg,
      alt: 'Best Things To Do In India For Australia Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/best-things-to-do-in-india-for-australia-citizens.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/best-things-to-do-in-india-for-australia-citizens`,
    },
    {
      metadata: {
        title: `Apply India Tourist Visa For Canadian Citizens`,
        description: `Explore the straightforward process of obtaining a tourist visa to India for Canadian citizens. Find out the list of necessary documents.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/apply-india-tourist-visa-for-canadian-citizens`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/apply-india-tourist-visa-for-canadian-citizens`,
        },
      },
      pageTitle:
        'Canada to India Complete Visa Guide: Apply India Tourist Visa for Canadian Citizens',
      slug: 'apply-india-tourist-visa-for-canadian-citizens',
      content: <ApplyIndiaTouristVisaForCanadianCitizens />,
      img: applyIndiaTouristVisaForCanadianCitizensImg,
      alt: 'Apply India Tourist Visa For Canadian Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/apply-india-tourist-visa-for-canadian-citizens.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/apply-india-tourist-visa-for-canadian-citizens`,
    },
    {
      metadata: {
        title: `Indian Visa For Emiratis Citizens`,
        description: `Explore the top options available for Emirati citizens seeking an Indian visa. From e-visa applications to embassy submissions.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/indian-visa-for-emiratis-citizens`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/indian-visa-for-emiratis-citizens`,
        },
      },
      pageTitle:
        'UAE to India: Apply for Your India tourist visa for Emirati Citizens',
      slug: 'indian-visa-for-emiratis-citizens',
      content: <IndianVisaForEmiratisCitizens />,
      img: indianVisaForEmiratisCitizensImg,
      alt: 'Indian Visa For Emiratis Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/indian-visa-for-emiratis-citizens.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/indian-visa-for-emiratis-citizens`,
    },
    {
      metadata: {
        title: `Apply India eVisa From UK`,
        description: `Seeking to apply for an India eVisa from the UK? Explore the step-by-step guide, eligibility criteria, and valuable insights to ensure a smooth process. `,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/apply-india-eVisa-from-uk`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/apply-india-eVisa-from-uk`,
        },
      },
      pageTitle:
        'Apply India Tourist Visa for UK Citizens: A Complete Guide to Apply India e Visa from UK',
      slug: 'apply-india-eVisa-from-uk',
      content: <ApplyIndiaEVisaFromUK />,
      img: applyIndiaEvisaFromUKImg,
      alt: 'Apply India eVisa From UK | Visa Collect',
      imgUrl: '/assets/images/blog/indiaVisa/apply-india-eVisa-from-uk.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/apply-india-eVisa-from-uk`,
    },
    {
      metadata: {
        title: `Indian tourist visa for uk Citizens`,
        description: `Experience the wonders of India as a UK citizen with a hassle-free indian tourist visa process. From application guidelines to meeting all eligibility criteria`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/indian-tourist-visa-for-uk-citizens`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/indian-tourist-visa-for-uk-citizens`,
        },
      },
      pageTitle:
        'How to Get Indian Tourist Visa for UK Citizens with Easy Steps',
      slug: 'indian-tourist-visa-for-uk-citizens',
      content: <IndianTouristVisaForUKCitizens />,
      img: indianTouristVisaForUkCitizensImg,
      alt: 'Indian tourist visa for uk Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/indian-tourist-visa-for-uk-citizens.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/indian-tourist-visa-for-uk-citizens`,
    },
    {
      metadata: {
        title: `How to get your India Tourist Visa for US Citizens`,
        description: `Looking to get your India Tourist visa as a US citizen? This guide has all the information you need to successfully apply for your Indian visa.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/how-to-get-your-india-tourist-visa-for-us-citizens`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/how-to-get-your-india-tourist-visa-for-us-citizens`,
        },
      },
      pageTitle: `Here's How to Get a Tourist Visa to Visit India for US Citizens - 2024`,
      slug: 'how-to-get-your-india-tourist-visa-for-us-citizens',
      content: <HowToGetYourIndiaTouristVisaForUSCitizens />,
      img: howToGetYourIndiaTouristVisaForUsCitizensImg,
      alt: 'How to get your India Tourist Visa for US Citizens | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/how-to-get-your-india-tourist-visa-for-us-citizens.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/how-to-get-your-india-tourist-visa-for-us-citizens`,
    },
    {
      metadata: {
        title: `Steps to apply your india e-visa from usa`,
        description: `Learn how to effortlessly obtain your India e-Visa from the USA with our easy-to-follow application guide. Start your journey Smoothly.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/steps-to-apply-your-india-e-visa-from-usa`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/steps-to-apply-your-india-e-visa-from-usa`,
        },
      },
      pageTitle:
        'Apply for your India e-Visa from USA in 3 easy steps with VisaCollect',
      slug: 'steps-to-apply-your-india-e-visa-from-usa',
      content: <StepsToApplyYourIndiaEVisaFromUSA />,
      img: listOf30BestNationalParksInIndiaForWildlifeEnthusiastsImg,
      alt: 'Steps to apply your india e-visa from usa | Visa Collect',
      imgUrl:
        '/assets/images/blog/indiaVisa/steps-to-apply-your-india-e-visa-from-usa.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/steps-to-apply-your-india-e-visa-from-usa`,
    },
    {
      metadata: {
        title: `Essential Tips for Indian Business Visa for Business Visitors`,
        description: `An Indian business visa is important for people who want to visit India. If you are touring or coming to work from another country you need a visa. You can take different visas as per your requirements.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/essential-tips-for-indian-business-visa`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/essential-tips-for-indian-business-visa`,
        },
      },
      pageTitle: 'Essential Tips for Indian Business Visa',
      slug: 'essential-tips-for-indian-business-visa',
      content: <EssentialTipsForIndianBusinessVisa />,
      img: essentialTipsForIndianBusinessVisa,
      alt: 'Essential Tips for Indian Business Visa',
      imgUrl:
        '/assets/images/blog/indiaVisa/essential-tips-for-indian-business-visa.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/essential-tips-for-indian-business-visa`,
    },
    {
      metadata: {
        title: `List of 30 Best National Parks in India for Wildlife Enthusiasts`,
        description: `India is a land of diverse landscapes and rich biodiversity. One of the best ways to experience this natural beauty is by visiting its numerous national parks. Here is the list of 30 Best National Parks in India to make your travel smooth and hassle-free.`,
        metadataBase: new URL('https://www.visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/list-of-30-best-national-parks-in-india-for-wildlife-enthusiasts`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/list-of-30-best-national-parks-in-india-for-wildlife-enthusiasts`,
        },
      },
      pageTitle: 'Discover the Natural Wonders: 30 National Parks in India',
      slug: 'list-of-30-best-national-parks-in-india-for-wildlife-enthusiasts',
      content: <ListOf30BestNationalParksInIndiaForWildlifeEnthusiasts />,
      img: listOf30BestNationalParksInIndiaForWildlifeEnthusiastsImg,
      alt: 'Essential Tips for Indian Business Visa',
      imgUrl:
        '/assets/images/blog/indiaVisa/list-of-30-best-national-parks-in-india-for-wildlife-enthusiasts.webp',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/list-of-30-best-national-parks-in-india-for-wildlife-enthusiasts`,
    },
  ],
};
