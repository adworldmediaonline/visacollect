import IndianVisaForAustralia from './indianVisa/australia.mdx';
import TurkeyVisaForAustralia from './turkeyVisa/australia.mdx';
import IndianVisaForUK from './indianVisa/uk.mdx';
import TurkeyVisaForUK from './turkeyVisa/uk.mdx';
import IndianVisaForCanada from './indianVisa/canada.mdx';
import TurkeyVisaForCanada from './turkeyVisa/canada.mdx';
import IndianVisaForUAE from './indianVisa/uae.mdx';
import IndianVisaForUS from './indianVisa/us.mdx';
import TurkeyVisaForUS from './turkeyVisa/us.mdx';
import IndianVisaForSingapore from './indianVisa/singapore.mdx';
import IndianVisaForThailand from './indianVisa/thailand.mdx';
import { australiaFaq } from './targetedCountrySubPagesFaq/australia/indianVisa/australiaFaq';
import { ukFaq } from './targetedCountrySubPagesFaq/ukFaq/indianVisa/ukFaq';
import { usFaq } from './targetedCountrySubPagesFaq/usFaq/indianVisa/usFaq';
import { canadaFaq } from './targetedCountrySubPagesFaq/canadaFaq/indianVisa/canadaFaq';
import { turkeyAustraliaFaq } from './targetedCountrySubPagesFaq/australia/turkeyVisa/australiaFaq';
import { turkeyUkFaq } from './targetedCountrySubPagesFaq/ukFaq/turkeyVisa/ukFaq';
import { turkeyVisaCanadaFaq } from './targetedCountrySubPagesFaq/canadaFaq/turkeyVisa/canadaFaq';
import { turkeyVisaUsFaq } from './targetedCountrySubPagesFaq/usFaq/turkeyVisa/turkeyVisaUsFaq';

export const visaPromotedInAustralia = [
  {
    id: 1,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'Australia',
      code: 'AU',
      slug: 'indian-tourist-visa-for-australian-citizens',
      countryPage: <IndianVisaForAustralia />,
      pageTitle: 'Indian Tourist Visa for Australian Citizens',
      // pageTitleDescription: '',
      faq: australiaFaq,
    },
  },
  {
    id: 2,
    visa: 'Turkey Visa',
    targetedCountry: {
      name: 'Australia',
      code: 'AU',
      slug: 'turkey-visa-for-australian-citizens',
      countryPage: <TurkeyVisaForAustralia />,
      pageTitle:
        'Australia to Turkey: Apply for Your Turkish visa for Australian citizens',
      pageTitleDescription:
        'Hop on your favourite flight to Turkey with VisaCollect’s Speedy eVisa services now.',
      faq: turkeyAustraliaFaq,
      faqTitle: `Some FAQs for Australian Travellers Travelling to Turkey`,
    },
  },
];

export const visaPromotedInUk = [
  {
    id: 1,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'United Kingdom',
      code: 'UK',
      slug: 'apply-for-india-visa-from-uk',
      countryPage: <IndianVisaForUK />,
      faq: ukFaq,
      pageTitle: `India Tourist Visa for the UK Citizens Traveling to India`,
    },
  },
  {
    id: 2,
    visa: 'Turkey Visa',
    targetedCountry: {
      name: 'United Kingdom',
      code: 'UK',
      slug: 'turkey-evisa-for-uk-citizens',
      countryPage: <TurkeyVisaForUK />,
      faq: turkeyUkFaq,
      faqTitle: 'FAQs for Turkish e-Visas for UK Citizens',
      pageTitle: `UK to Turkey: Apply for Turkey e Visa Now at Speed with VisaCollect`,
      pageTitleDescription: `Apply your most awaited Turkey Visa-Easy & Fast-with visacollect now!`,
    },
  },
];
export const visaPromotedInCanada = [
  {
    id: 1,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'Canada',
      code: 'CA',
      slug: 'india-evisa-for-canadian-citizens',
      countryPage: <IndianVisaForCanada />,
      faq: canadaFaq,
      pageTitle:
        'Canada to India: Apply for Your India tourist visa for canadian citizens',
      pageTitleDescription:
        'Explore the land of wonders and uncover the unseen with VisaCollect.',
    },
  },
  {
    id: 2,
    visa: 'Turkey Visa',
    targetedCountry: {
      name: 'Canada',
      code: 'CA',
      slug: 'turkish-visa-for-canadian-citizens',
      countryPage: <TurkeyVisaForCanada />,
      faq: turkeyVisaCanadaFaq,
      faqTitle: `Some FAQs to Further Ease Your Turkish eVisa Application Process`,
      pageTitle:
        'Canada to Turkey: Apply for Turkey eVISA for Canadian Citizens',
      pageTitleDescription:
        'Explore Turkey from north to south and east to west with visaCollect’s fast and secure Visa Services!',
    },
  },
];
export const visaPromotedInUs = [
  {
    id: 1,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'United States',
      code: 'US',
      slug: 'indian-visa-for-us-citizens',
      countryPage: <IndianVisaForUS />,
      faq: usFaq,
      pageTitle: `Indian Tourist Visa for American Citizens`,
      pageTitleDescription: `Explore India with our seamless online visa services!`,
    },
  },
  {
    id: 2,
    visa: 'Turkey Visa',
    targetedCountry: {
      name: 'United States',
      code: 'US',
      slug: 'turkey-visa-for-us-citizens',
      countryPage: <TurkeyVisaForUS />,
      faq: turkeyVisaUsFaq,
      pageTitle: `USA to Turkey: Apply for Turkey eVOA for US Citizens at High Velocity`,
      pageTitleDescription: `Introducing the Turkish eVisa with VisaCollect’s fast & hassle-free visa services.`,
    },
  },
];
export const visaPromotedInThailand = [
  {
    id: 5,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'Thailand',
      code: 'TH',
      slug: 'apply-indian-visa-from-thailand',
      countryPage: <IndianVisaForThailand />,
      faq: [],
    },
  },
];
export const visaPromotedInUAE = [
  {
    id: 6,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'United Arab Emirates',
      code: 'AE',
      slug: 'apply-for-india-visa-from-uae',
      countryPage: <IndianVisaForUAE />,
      faq: [],
      pageTitle: `UAE to India: Apply for Your Indian eVisa to UAE Today at Speed with VisaCollect`,
      pageTitleDescription: `Plan your visit to India with VisaCollect’s Fast and Reliable eVisa Services In UAE`,
    },
  },
];

export const visaPromotedInSingapore = [
  {
    id: 7,
    visa: 'Indian Visa',
    targetedCountry: {
      name: 'Singapore',
      code: 'SG',
      slug: 'evisa-india-for-singapore-citizens',
      countryPage: <IndianVisaForSingapore />,
      faq: [],
    },
  },
];
