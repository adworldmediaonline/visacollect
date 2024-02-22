import IndianVisaForAustralia from './indianVisa/australia.mdx';
import IndianVisaForUK from './indianVisa/uk.mdx';
import IndianVisaForCanada from './indianVisa/canada.mdx';
import IndianVisaForUAE from './indianVisa/uae.mdx';
import IndianVisaForUS from './indianVisa/us.mdx';
import IndianVisaForSingapore from './indianVisa/singapore.mdx';
import IndianVisaForThailand from './indianVisa/thailand.mdx';
import { australiaFaq } from './targetedCountrySubPagesFaq/australia/indianVisa/australiaFaq';
import { ukFaq } from './targetedCountrySubPagesFaq/ukFaq/indianVisa/ukFaq';
import { usFaq } from './targetedCountrySubPagesFaq/usFaq/indianVisa/usFaq';
import { canadaFaq } from './targetedCountrySubPagesFaq/canadaFaq/indianVisa/canadaFaq';

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
];

export const visaPromotedInUk = [
  {
    id: 2,
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
];
export const visaPromotedInCanada = [
  {
    id: 3,
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
];
export const visaPromotedInUs = [
  {
    id: 4,
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
