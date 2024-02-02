import { FaArrowRightLong } from 'react-icons/fa6';
import { visaInfo } from '../images';
import CustomButton from '@/components/common/CustomButton';
export const learnMoreSectionDataTurkey = {
  pageTitle:
    '<strong>Turkey Visa:</strong> Entry requirements and travel information for Turkey',
  pageName: 'Turkey',
  applyNowLink: '/turkey/application',
  otherLinks: [
    {
      linkName: 'Easy as a walkabout: The Turkey visa options',
      path: '/',
    },
    {
      linkName: 'Turkey Visa application process: No worries, mate!',
      path: '/',
    },
    {
      linkName: 'Turkey entry requirements',
      path: '/',
    },
  ],
  visaRequired: {
    visaRequiredText:
      'You need a Visa to travel to Turkey if you have a passport from United States.',
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
      title: '<h2>Explore Turkey - Get Your eVisa Online Today!</h2>',
      paragraphs: [
        {
          text: 'Calling all Indian adventurers! Dreaming of exploring the ancient wonders, bustling bazaars, and breathtaking landscapes of Turkey? Now, planning your journey is easier than ever thanks to the eVisa system. Ditch the embassy visits and apply for your eVisa online in just a few clicks.',
        },
      ],
    },
    {
      title: '<h2>Why Choose the eVisa:</h2>',
      paragraphs: [
        {
          text: '<strong>Fast and Convenient:</strong> No need to trek to the embassy - the entire process is online.',
        },
        {
          text: '<strong>Hassle-Free:</strong> Skip the paperwork maze - a valid passport and basic details are all you need.',
        },
        {
          text: '<strong>Quick Approval:</strong> Get your eVisa in as little as 24 hours with our service.',
        },
      ],
      image: visaInfo,
      imageAlt: 'visainfo1',
    },
    {
      title: '<h2>What is the eVisa good for?</h2>',
      paragraphs: [
        {
          text: '<strong>Short Stays:</strong> Perfect for tourism and business trips up to 30 days.',
        },
        {
          text: '<strong>Multiple Entry Option:</strong> Depending on your nationality, enjoy multiple entries within the validity period.',
        },
        {
          text: '<strong>Eligibility for Indian Citizens:</strong>',
        },
        {
          text: `- Hold a valid Indian passport with at least 6 months' validity after your departure from Turkey.`,
        },
        {
          text: `- Travel with Pegasus Airlines or Turkish Airlines (unless you hold a valid visa/residence permit from Schengen, US, UK, or Ireland).`,
        },
        {
          text: `- Have booked hotel accommodation and sufficient finances for your stay.`,
        },
        {
          text: `<strong>Applying with eVisa:</strong>`,
        },
        {
          text: `Simple 3-step online process - fill in the form, choose your processing time, and upload your documents.`,
        },
        {
          text: `We guide you through the entire process, ensuring your application is error-free.`,
        },
        {
          text: `Receive your approved eVisa electronically - download it and be ready to breeze through immigration!`,
        },
        {
          text: `<strong>Bonus Tips:</strong>`,
        },
        {
          text: `Download a backup copy of your eVisa on your phone for added peace of mind. Consider carrying extra ID, flight tickets, and proof of accommodation, as immigration officers may request them. Check for any latest travel updates and entry requirements before your trip. Ready to enjoy your most Türkiye adventure? Apply for your eVisa online today and experience the magic of this captivating country!`,
        },
      ],
    },
  ],
  faqData: [
    {
      id: 1,
      title:
        'Encountered an error while completing my application. What should I do?',
      des: 'If you face issues during the application process, promptly reach out to our customer support team. Our visa experts are available 24/7 and are eager to assist you in resolving any problems that may arise.',
    },
    {
      id: 2,
      title: 'Is a separate e-Visa required for accompanying individuals?',
      des: `Yes, each traveler must obtain an individual e-Visa. Through eVisa, you can conveniently include all family members in a single application, and we will process each visa separately for your convenience.`,
    },
    {
      id: 3,
      title: `My e-Visa details don't fully match those on my travel document. Can I still enter Turkey with this e-Visa?`,
      des: `No, it's not possible. The Turkey e-Visa is only valid when the information precisely matches that on your travel document. If there is any discrepancy, you must apply for a new e-Visa with accurate details to ensure a smooth entry into Turkey.`,
    },
    {
      id: 4,
      title: 'What is an e-Visa?',
      des: `Skip the long queues and paperwork! An e-Visa is your electronic authorization to enter and travel within Turkey. Apply online from anywhere with an internet connection and receive your visa by email - it's that simple.`,
    },
    {
      id: 5,
      title: 'What are the benefits of an e-Visa?',
      extraContent: [
        {
          text: `<strong>Convenience:</strong> Apply anytime, anywhere, without visiting embassies or consulates.`,
        },
        {
          text: `<strong>Speed:</strong> Get your e-Visa within 24 hours in most cases.`,
        },
        {
          text: `<strong>Cost-effective:</strong> Avoid expensive processing fees and travel costs.`,
        },
        {
          text: `<strong>Multiple-entry options:</strong> Some nationalities can enjoy multiple entries with one visa.`,
        },
      ],
    },
    {
      id: 6,
      title: 'Who is eligible for an e-Visa?',
      extraContent: [
        {
          href: `/`,
          linkText: `Check the full list`,
          text: `Citizens of 100+ countries, including popular destinations like the United States, Canada, Australia, India, and China, are eligible for Turkey's e-Visa. <span class="link">Check the full list</span> on the official website to see if your country is included.`,
        },
        {
          text: `<strong>Eligible Countries for Turkey e-Visa:</strong> India, United Arab Emirates, United States, United Kingdom, Taiwan, Tanzania, Yemen, Vietnam, Sri Lanka, South Africa, Saudi Arabia, Philippines, Pakistan, Nepal, Mexico, Indonesia, China, Australia, Bangladesh`,
        },
        {
          text: `<strong>Ineligible Countries for Turkey e-Visa:</strong> Afghanistan, Algeria, Angola, Burundi, Cyprus, Greece`,
        },
      ],
    },
    {
      id: 7,
      title: 'What do I need for my e-Visa application?',
      extraContent: [
        {
          text: `- A valid passport with at least 6 months' remaining validity.`,
        },
        {
          text: `- A recent digital photograph.`,
        },
        {
          text: `- A recent digital photograph.`,
        },
        {
          text: `- A valid email address for receiving your visa.`,
        },
        {
          text: `- Payment for the visa fee.`,
        },
      ],
    },
    {
      id: 8,
      title: 'How do I apply for an e-Visa?',
      extraContent: [
        {
          href: `https://www.visacollect.com`,
          linkText: `https://www.visacollect.com`,
          text: `Visit the official e-Visa website: <span class="link">https://www.visacollect.com</span> and follow the instructions:`,
        },
        { text: `1. Choose your country and travel dates.` },
        { text: `2. Fill out the application form and upload your photo.` },
        { text: `3. Pay the visa fee securely.` },
        { text: `4. Receive your e-Visa by email within 24 hours (usually).` },
      ],
    },
    {
      id: 9,
      title: 'Can I enter Turkey on any date within the validity period?',
      des: `Yes, your visa is valid for a specific period, and you can enter within that time frame.`,
    },
    {
      id: 10,
      title: 'What if my travel dates change?',
      des: `You'll need to apply for a new e-Visa with the updated dates.`,
    },
    {
      id: 11,
      title: 'Is my information safe? ',
      des: `Absolutely! Your data is protected by high-security systems and not used for commercial purposes.`,
    },
    {
      id: 12,
      title: 'Yes, each person traveling to Turkey needs their own e-Visa.',
      des: `Absolutely! Your data is protected by high-security systems and not used for commercial purposes.`,
    },
    {
      id: 13,
      title: `Can I get a refund if I don't use my e-Visa? `,
      extraContent: [
        {
          text: `Unfortunately, no refunds are issued for unused e-Visas.`,
        },
        {
          linkText: `Apply for your e-Visa`,
          href: '/turkey/application',
          text: `Ready to explore Turkey? <span class="link">Apply for your e-Visa today</span> and experience the beauty, history, and culture of this captivating country!`,
        },
      ],
    },
    {
      id: 14,
      title: `Which countries are eligible for a multiple-entry e-Visa?`,
      extraContent: [
        {
          text: `<strong>Holders of passports issued by the following countries can enjoy the benefits of a multiple-entry e-Visa for Turkey:</strong> Antigua and Barbuda, Estonia, Oman, Armenia, Grenada, Portugal, Australia, Haiti, Saint Lucia, Bahamas, Hong Kong (BN(O)), Saint Vincent and the Grenadines, Barbados, Jamaica, Saudi Arabia, Belgium, Kuwait, South Africa, Bermuda, Latvia, Spain, Canada, Lithuania, Taiwan, China, Maldives, U.S.A, Croatia, Malta, United Arab Emirates, Dominica, Mauritius, Dominican Republic, Netherlands`,
        },
      ],
    },
    {
      id: 15,
      title: `What are the benefits of a multiple-entry e-Visa?`,
      extraContent: [
        {
          text: `<strong>Save time and money:</strong> Apply once and enjoy multiple entries to Turkey within the validity period of your e-Visa.`,
        },
        {
          text: `<strong>Explore at your own pace:</strong> Take short weekend trips, extended vacations, or anything in between, without needing to apply for a new visa each time.`,
        },
        {
          text: `<strong>Discover hidden gems:</strong> Visit different regions and cities in Turkey, from bustling Istanbul to the charming Aegean coast and the historical wonders of Cappadocia.`,
        },
      ],
    },
  ],
};
