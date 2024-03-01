import { IndiaHomePage } from '../mainDirectoryHomePages';
import { topThingsToDoInIndiaForFunAustraliaCitizensImg } from '../mainDirectoryHomePagesBlog/images/blogImages';
import {
  ApplyIndiaEVisaFromUK,
  ApplyIndiaTouristVisaForCanadianCitizens,
  BestThingsToDoInIndiaForAustraliaCitizens,
  HowToGetYourIndiaVisaForUSCitizens,
  IndianTouristVisaForUKCitizens,
  IndianVisaForEmiratisCitizens,
  StepsToApplyYourIndiaEVisaFromUSA,
  TopThingsToDoInIndiaForFunAustraliaCitizens,
} from '../mainDirectoryHomePagesBlog/india';
import { indiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq';

// MD => mainDirectory
const indiaMDBlogBase = '/in/blog';
export const indiaMDData = {
  breadcrumb: 'india-visa-apply-online-now',
  pageTitle: 'India Visa: - Apply Online Now!',
  pageDescription: null,
  pageContent: <IndiaHomePage />,
  applyNow: '/in/visa/step-one',
  faq: indiaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `Top Things to do in India For Fun`,
        description: `Unlock the essence of India with our curated list of the top things to do in India! Dive into a world of cultural wonders and thrilling adventures.`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${indiaMDBlogBase}/top-things-to-do-in-india-for-fun`,
        },

        openGraph: {
          url: `${indiaMDBlogBase}/top-things-to-do-in-india-for-fun`,
        },
      },
      slug: 'top-things-to-do-in-india-for-fun',
      content: <TopThingsToDoInIndiaForFunAustraliaCitizens />,
      img: topThingsToDoInIndiaForFunAustraliaCitizensImg,
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/top-things-to-do-in-india-for-fun`,
    },
    {
      metadata: null,
      slug: 'best-things-to-do-in-india-for-australia-citizens',
      content: <BestThingsToDoInIndiaForAustraliaCitizens />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/best-things-to-do-in-india-for-australia-citizens`,
    },
    {
      metadata: null,
      slug: 'apply-india-tourist-visa-for-canadian-citizens',
      content: <ApplyIndiaTouristVisaForCanadianCitizens />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/apply-india-tourist-visa-for-canadian-citizens`,
    },
    {
      metadata: null,
      slug: 'indian-visa-for-emiratis-citizens',
      content: <IndianVisaForEmiratisCitizens />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/indian-visa-for-emiratis-citizens`,
    },
    {
      metadata: null,
      slug: 'apply-india-eVisa-from-uk',
      content: <ApplyIndiaEVisaFromUK />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/apply-india-eVisa-from-uk`,
    },
    {
      metadata: null,
      slug: 'indian-tourist-visa-for-uk-citizens',
      content: <IndianTouristVisaForUKCitizens />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/indian-tourist-visa-for-uk-citizens`,
    },
    {
      metadata: null,
      slug: 'how-to-get-your-india-visa-for-us-citizens',
      content: <HowToGetYourIndiaVisaForUSCitizens />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/how-to-get-your-india-visa-for-us-citizens`,
    },
    {
      metadata: null,
      slug: 'steps-to-apply-your-india-e-visa-from-usa',
      content: <StepsToApplyYourIndiaEVisaFromUSA />,
      img: '',
      linkText: 'Read more',
      href: `${indiaMDBlogBase}/steps-to-apply-your-india-e-visa-from-usa`,
    },
  ],
};
