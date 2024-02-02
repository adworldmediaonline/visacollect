import { FaArrowRightLong } from 'react-icons/fa6';
import CustomButton from '@/components/common/CustomButton';
export const learnMoreSectionDataSingapore = {
  pageTitle:
    '<strong>Singapore Visa:</strong> Entry requirements and travel information for Singapore',
  pageName: 'Singapore',
  applyNowLink: '/singapore/application',
  otherLinks: [
    {
      linkName: 'Easy as a walkabout: The Singapore visa options',
      path: '/',
    },
    {
      linkName: 'Singapore Visa application process: No worries, mate!',
      path: '/',
    },
    {
      linkName: 'Singapore entry requirements',
      path: '/',
    },
  ],
  visaRequired: {
    visaRequiredText:
      'You need a Visa to travel to Singapore if you have a passport from United States.',
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
        '<h2>Enjoy a Fusion of International Cultures and Technology Innovation</h2>',
      paragraphs: [
        {
          text: `Welcome to Singapore, a city-state known for its multicultural diversity, stunning skyline, and innovative spirit. Apply for your eVISA today and embark on a journey that promises a blend of tradition and modernity.`,
        },
      ],
      applyNow: (
        <CustomButton
          link="/singapore/step-one"
          btnText="Apply Singapore Visa Online Now"
        >
          <FaArrowRightLong />
        </CustomButton>
      ),
    },
    {
      title: '<h3>Why Visit Singapore?</h3>',
      paragraphs: [
        {
          text: `Singapore offers a unique blend of cultures, with influences from Chinese, Malay, Indian, and Western traditions. From the vibrant neighborhoods of Chinatown and Little India to the futuristic Gardens by the Bay, Singapore is a city of contrasts.`,
        },
        {
          text: `The city is also a food lover’s paradise, offering a wide range of cuisines that reflect its cultural diversity. Don’t miss the hawker centers, where you can sample delicious dishes like Hainanese chicken rice, chili crab, and laksa.`,
        },
        {
          text: `Singapore is also known for its commitment to innovation and sustainability. The city’s skyline is dotted with green buildings, and it’s home to numerous tech startups and global companies.`,
        },
      ],
    },

    {
      title: '<h3>What Is Singapore eVisa?</h3>',
      paragraphs: [
        {
          text: 'The Singapore eVisa is a digital document that allows travelers from eligible nations to enter the country. It’s an electronic version of the traditional visa, making it more convenient as there is no need to visit an embassy or mail in your passport.',
        },
        {
          text: `You should submit your personal information, trip details, and health declaration electronically within three days prior to the date of your arrival in Singapore. This can be done using the SG Arrival Card e-Service. `,
        },
        {
          text: `<strong>Note:</strong> The SG Arrival Card is not a visa and the use of the SG Arrival Card e-Service is free of charge.`,
        },
        {
          text: `Upon successful processing of your Singapore Visa Online Application, you will be issued a visa in the form of a PDF document. `,
        },
        {
          text: `<strong>Remember:</strong> Possession of a valid visa does not guarantee entry into Singapore. The grant of an immigration pass will be determined by the ICA officers at the point of entry.`,
        },
        {
          href: `/`,
          linkText: `Immigration & Checkpoints Authority (ICA) `,
          text: `For more detailed information, please visit the official website of the <span>Immigration & Checkpoints Authority (ICA) of Singapore</span>`,
        },
        {
          text: `We hope you enjoy your amazing trip to Singapore!`,
        },
      ],
    },

    {
      title: '<h3>How to Apply Singapore VISA Online?</h3>',
      paragraphs: [
        {
          text: `Applying for a Singapore eVISA is a straightforward process. You’ll need to fill out the Singapore Visa Online Application form, submit the required documents, and pay the visa fee. Once your online visa application is approved, you’ll receive your eVISA via email.`,
        },
        {
          text: `<strong>Here’s a step-by-step guide on how to apply for a Singapore eVISA:</strong>`,
        },
        {
          text: `<strong>Step-1:</strong> Identify the correct visa category: Depending on the purpose of your visit (tourism, business, visiting relatives, etc.), you’ll need to apply for the appropriate visa.`,
        },
        {
          text: `<strong>Step-2:</strong> Submit your application: You can submit your Singapore Visa Online Application through the online facility, “SAVE” (Submission of Application for Visa Electronically). This can be done through your local contact or trusted partners in Singapore.`,
        },
        {
          text: `<strong>Step-3:</strong> Fill out the application form: After successful submission of the Singapore Visa Online Application through SAVE, the local contact will print a copy of the application form and send it to you for signature. The application form, duly signed by you and your local contact, will be submitted to ICA together with a copy of your passport biodata page.`,
        },
        {
          text: `<strong>Step-4:</strong> Wait for approval: After the Singapore Visa Online Application is approved, the local contact or trusted partner will proceed to collect the physical visa sticker at the ICA Building1. The visa sticker will then be sent to you before you embark on your trip to Singapore.`,
        },
        {
          text: `<strong>Step-5:</strong> Print your eVisa: With the introduction of e-Visa, foreign nationals from certain countries will no longer be issued with physical visas. Instead, the sticker visa will be replaced by an electronic visa. The local contact or trusted partner can print the electronic visa through SAVE at their convenience as long as they have access to a PC, printer, and internet connection.`,
        },
        {
          text: `<strong>Step-6:</strong> Check the status of your application: The SAVE system comes with a “Status Enquiry” function to enable the local contact or the applicant to check on the status of the Singapore Visa Online Application. It also allows the printing of the e-Visa through this user-friendly function in a few simple steps.`,
        },
        {
          href: `/`,
          linkText: 'Apply for your Singapore eVISA today with e-Visa.com',
          text: `<span class="link"></span> and experience the fusion of cultures, taste the diverse cuisines, and witness the innovative spirit that makes Singapore truly unique.`,
        },
        {
          href: `/singapore/step-one`,
          linkText: `Apply for Your Singapore Visa Now!`,
          text: `<span class="link">Apply for Your Singapore Visa Now!</span>`,
        },
      ],
    },
    {
      title: '<h3>What is the cost of a Singapore visa?</h3>',
      paragraphs: [
        {
          text: `The cost of a Singapore visa can vary depending on the type of visa and the service used for the application. All Singapore visas have a non-refundable visa processing fee of 30 Singapore Dollars. However, the total cost can range from approximately USD 37 to over USD 100, depending on the use of visa service providers, need for expedited processing, translation services, notarization, and potential visa extensions.`,
        },
      ],
    },
    {
      title: '<h4>How long does it take to get a Singapore visa?</h4>',
      paragraphs: [
        {
          text: `The processing time for a Singapore visa can range from 1 week to 4 weeks depending on visa type, nationality, travel purpose, and application accuracy3. However, the average processing time for a Singaporean visa is 5 working days, excluding weekends, public holidays, and the day of submission. `,
        },
        {
          text: `<strong>For online applications, the processing time can be as quick as 72 hours.</strong>`,
        },
      ],
    },
    {
      title: '<h5>Can I extend my stay in Singapore with a tourist visa?</h5>',
      paragraphs: [
        {
          text: `<strong>Yes, you can apply to extend your stay in Singapore. </strong>`,
        },
        {
          text: `Visitors who need to extend their Short-Term Visit Pass (STVP) may submit Singapore Visa Online Application for extension of stay using the e-Service, up to 14 days before the STVP expires. The number of days you can extend your stay is limited to 30 from the date when your visit pass expires. `,
        },
        {
          text: `<strong>Tip:</strong> You can request an extension of up to 60 additional days.`,
        },
      ],
    },
  ],
  faqData: [
    {
      id: 1,
      title: 'How do I apply for a Singapore eVISA?',
      des: `You can apply Singapore Visa Online online through the “SAVE” (Submission of Application for Visa Electronically) system on the official website of the Immigration & Checkpoints Authority (ICA) of Singapore.`,
    },
    {
      id: 2,
      title: `What documents do I need to apply for a Singapore eVISA? `,
      des: `Typically, you’ll need a valid passport, a digital photo, and proof of onward travel. However, requirements may vary, so it’s best to check the official website.`,
    },
    {
      id: 3,
      title: `How long does it take to process a Singapore eVISA? `,
      des: `The processing time can vary, but it typically takes a few days.`,
    },
    {
      id: 4,
      title: `How long is the Singapore eVISA valid for?`,
      des: `The validity of the eVISA can vary based on the type of visa and other factors. You should check the details on your eVISA once it’s issued.`,
    },
    {
      id: 5,
      title: `Can I work in Singapore with an eVISA?`,
      des: `No, the eVISA does not permit foreign nationals to work in Singapore. If you intend to work, you’ll need to apply for a different type of visa.`,
    },
    {
      id: 6,
      title: `What should I do if my Singapore eVISA application is denied?`,
      des: `If your Singapore Visa Online Application is denied, you can reapply after understanding the reasons for the denial and rectifying them.`,
    },
    // skip 7 from doc
  ],
  relatedArticles: [
    {
      title: 'UK to Singapore',
      text: 'Discover the simplicity of securing your UK to Singapore eVisa with ease for a seamless travel experience.',
      linkHref: '/uk',
      linkText: 'Apply now',
      img: 'https://dummyimage.com/720x400',
    },
    {
      title: 'USA to Singapore',
      text: 'Unlock the door to your Singaporen dream from the USA with a stress-free eVisa process.',
      linkHref: '/usa',
      linkText: 'Apply now',
      img: 'https://dummyimage.com/720x400',
    },
    {
      title: 'Singapore to Singapore',
      text: 'Begin your journey from Singapore to Singapore effortlessly with our eVisa process.',
      linkHref: '/singapore',
      linkText: 'Apply now',
      img: 'https://dummyimage.com/720x400',
    },
    {
      title: 'Article',
      text: 'Singapore: Where Adventure, Wildlife, and Stunning Landscapes Await.',
      linkHref: '/singapore-adventure',
      linkText: 'Read More',
      img: 'https://dummyimage.com/720x400',
    },
    {
      title: 'Article',
      text: 'Discovering Singapore: From Coral Reefs to Red Deserts, a Journey Awaits.',
      linkHref: '/discovering-singapore',
      linkText: 'Read More',
      img: 'https://dummyimage.com/720x400',
    },
  ],
};
