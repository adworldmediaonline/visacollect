import { FaArrowRightLong } from 'react-icons/fa6';
import { visaInfo } from '../images';
import CustomButton from '@/components/common/CustomButton';
export const learnMoreSectionDataThailand = {
  pageTitle:
    '<strong>Thailand Visa:</strong> Entry requirements and travel information for Srilanka',
  mainHomePageTitle:
    'Thailand Visa Entry requirements and travel information for Srilanka',
  pageName: 'Thailand',
  applyNowLink: '/in/th/apply-form',
  otherLinks: [
    {
      linkName: 'Easy as a walkabout: The Thailand visa options',
      path: '/',
    },
    {
      linkName: 'Thailand Visa application process: No worries, mate!',
      path: '/',
    },
    {
      linkName: 'Thailand entry requirements',
      path: '/',
    },
  ],
  visaRequired: {
    visaRequiredText:
      'You need a Visa to travel to Thailand if you have a passport from United States.',
    visaRequiredCards: [
      {
        validity: 'Valid for 1 Year',
        title: 'ETA',
        entryType: 'Multiple Entry',
        governmentFee: {
          label: 'Government Fee',
          amount: 'USD $13.18',
          perApplicant: '/Applicant',
        },
      },
    ],
  },
  // visaRequirements: {
  //   title: 'Australia Visa Requirements to Apply for your e Visa',
  //   list: [
  //     "Applicant's Photo",
  //     'National ID',
  //     'Passport page ',
  //     'All passport pages ',
  //     'Scans of the passport pages that have immigration stamps',
  //     'Legal Guardian Passport Scan (if applicable)',
  //     ' Bank statements from the last 3 months',
  //     '  Bank statement (if applicable)',
  //     'Airline confirmation',
  //     'Proof of accommodation ',
  //     ' Employment Proof (if applicable)',
  //     'Book of Family (if applicable)',
  //     'Invitation Letter (if applicable)',
  //     'Cover Letter',
  //     ' Supporting Document (if applicable)',
  //     'Travel itinerary (if applicable)',
  //     'Birth certificate (if applicable)',
  //     ' Proof of Marriage or Spousal Relationship (if applicable)',
  //     ' Certificate of Incorporation (if applicable)',
  //   ],
  // },
  sections: [
    {
      title:
        '<h2>Begin your Thai adventure, Apply for Thailand Tourist Visa from e-Visa!</h2>',
      paragraphs: [
        {
          text: "Thailand, a top global destination, invites you to explore bustling cities and serene coastlines. A culinary haven, it reflects generosity, pleasantness, and Thai culture's refreshing and easygoing essence.",
        },
        {
          text: 'Thailand reopened for tourism in July 2021, and we’ve made it easy to apply thailand visa online application process. No embassy visits needed. Discover more about the Thailand Tourist Visa, an electronic visa allowing entry for eligible countries.',
        },
      ],
    },
    {
      title: '<h3>Which nationalities qualify for Thailand eVisa?</h3>',
      paragraphs: [
        {
          text: 'Residents of 29 countries, including India, China, Romania, and Malta.',
        },
        {
          href: '/',
          linkText: 'here',
          text: `<strong>Note:</strong> You do not need a Visa if you're traveling from India. However, a valid passport is required. Read more from the Embassy <span class="link">here</span>.`,
        },
      ],
      image: visaInfo,
      imageAlt: 'visainfo1',
    },
    {
      title: '<h3>How long is the visa valid?</h3>',
      paragraphs: [
        {
          text: '60 days post-arrival, single-entry.',
        },
      ],
    },
    {
      title: '<h3>What are the requirements?</h3>',
      paragraphs: [
        {
          text: `Standard documents like a passport page, airline confirmation, and proof of accommodation. e-Visa's 100% online process makes it easy.`,
        },
        {
          text: `Upon approval, enter Thailand through select airports. Present your tourist visa and passport at immigration.`,
        },
      ],
    },
    {
      title: '<h4>How to apply Thailand visa online?</h4>',
      paragraphs: [
        {
          text: 'Three simple steps: Fill the form, verify details, and upload supporting documents. Fees range from USD $112.99 to $249.99, including the Thai government fee of USD $40.00.',
        },
      ],
      applyNow: (
        <CustomButton
          link="/thailand/apply-form"
          btnText="Apply Thailand Visa online now!"
        >
          <FaArrowRightLong />
        </CustomButton>
      ),
    },

    {
      title: '<h5>COVID-19 measures? </h5>',
      paragraphs: [
        {
          text: 'No testing or quarantine needed. Vaccination certificates not required.',
        },
      ],
    },
    {
      title: '<h4>Why e-Visa.com?</h4>',
      paragraphs: [
        {
          text: 'Trusted and accredited by IATA. Read customer reviews for assurance.',
        },
      ],
    },
    {
      title: '<strong>Need assistance?</strong>',
      paragraphs: [
        {
          text: 'Contact our customer support experts, available year-round, 24X7.',
        },
        {
          text: '<strong>Important instructions:</strong> The Thailand Tourist Visa is single-entry, valid for sightseeing or tourism. Proof of accommodation must align with travel dates. Entry points include Suvarnabhumi, Don Mueang, Chiang Mai, and Phuket airports.',
        },
        {
          text: 'e-Visa.com, a reputable service ensuring your Thai journey starts hassle-free. For more details, explore our FAQs.',
        },
      ],
    },
  ],
  faqData: [
    {
      id: 1,
      title:
        'Encounter an error while applying for your Thailand Tourist Visa?',
      des: 'No worries! Our dedicated customer support team is ready to assist you promptly with the Thailand e Visa on arrival (eVOA). If any issues arise during the application process, we are here to guide you through and resolve them swiftly.',
    },
    {
      id: 2,
      title:
        'What to do if your Thailand Tourist Visa application faces cancellation or rejection? ',
      des: `You can reapply immediately or choose to appeal the rejection. In case of rejection, await a letter from the Embassy of Thailand explaining the grounds for refusal for your Thailand visa application form. This insight will help you confidently reapply, addressing any previous issues.`,
    },
    {
      id: 3,
      title: 'Extended stay in Thailand on your mind?',
      des: `If your granted 60-day tourist visa isn't enough, visit any Immigration Office in Thailand to request an extension for an additional 30 days. Ensure you make this request before the original permit expires to avoid a fine of 500 Baht for each extra day stayed. Careful attention to dates is crucial to prevent any complications during your stay.`,
      applyNow: (
        <CustomButton
          link="/thailand/apply-form"
          btnText="Apply Thailand Visa online now!"
        >
          <FaArrowRightLong />
        </CustomButton>
      ),
    },
    {
      id: 4,
      title: 'What is the Thai Health Declaration (T.8 form)?',
      des: 'The Thai Health Declaration (T.8 form) is a document that is required to be filled in by all travelers entering Thailand. It is part of the initiative by the Thai government or Thai authorities to monitor travelers entering Thailand and to contain the spread of the COVID-191',
    },
    {
      id: 5,
      title:
        'Which countries must get the Thailand Health Declaration (T.8 form)?',
      des: 'All travelers entering Thailand, regardless of their nationality or visa status, must get the Thailand Health Declaration (T.8 form)',
    },
    {
      id: 6,
      title:
        'What is the cost to obtain the Thailand Health Declaration (T.8 form)?',
      des: 'There is no cost to obtain the Thailand Health Declaration (T.8 form). It is free of charge and can be accessed online or obtained from the airlines.',
    },
    {
      id: 7,
      title:
        'How many times can I use my Thailand Health Declaration (T.8 form)?',
      des: 'The Thailand Health Declaration (T.8 form) is valid for one entry only. If you leave Thailand and wish to re-enter, you will need to fill in a new form.',
    },
    {
      id: 8,
      title:
        'What do I need to apply for the Thailand Health Declaration (T.8 form)?',
      des: 'To apply for the Thailand Health Declaration (T.8 form), you will need to provide your personal details, such as name, contact number, email address, flight number, and other necessary information. You will also need to check if you have any symptoms of COVID-19, such as fever, cough, shortness of breath, etc.',
    },
  ],
  relatedArticles: [
    {
      title: 'UK to Thailand',
      text: 'Discover the simplicity of securing your UK to Thailand eVisa with ease for a seamless travel experience.',
      linkHref: '/uk',
      linkText: 'Apply now',
      img: '',
    },
    {
      title: 'USA to Thailand',
      text: 'Unlock the door to your Thailandn dream from the USA with a stress-free eVisa process.',
      linkHref: '/usa',
      linkText: 'Apply now',
      img: '',
    },
    {
      title: 'Malaysia to Thailand',
      text: 'Begin your journey from Malaysia to Thailand effortlessly with our eVisa process.',
      linkHref: '/malaysia',
      linkText: 'Apply now',
      img: '',
    },
    {
      title: 'Article',
      text: 'Thailand: Where Adventure, Wildlife, and Stunning Landscapes Await.',
      linkHref: '/thailand-adventure',
      linkText: 'Read More',
      img: '',
    },
    {
      title: 'Article',
      text: 'Discovering Thailand: From Coral Reefs to Red Deserts, a Journey Awaits.',
      linkHref: '/discovering-thailand',
      linkText: 'Read More',
      img: '',
    },
  ],
};
