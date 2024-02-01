import { FaArrowRightLong } from 'react-icons/fa6';
import { visaInfo } from '../images';
import CustomButton from '@/components/common/CustomButton';
export const learnMoreSectionDataSriLanka = {
  pageTitle:
    '<strong>Srilanka Visa:</strong> Entry requirements and travel information for Srilanka',
  pageName: 'Srilanka',
  otherLinks: [
    {
      linkName: 'Easy as a walkabout: The Australia visa options',
      path: '/',
    },
    {
      linkName: 'Australia Visa application process: No worries, mate!',
      path: '/',
    },
    {
      linkName: 'Australia entry requirements',
      path: '/',
    },
  ],
  visaRequired: {
    visaRequiredText:
      'You need a Visa to travel to Srilanka if you have a passport from United States.',
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
        '<h2>Ready to begin your Sri Lanka adventure with our e Tourist Sri Lanka Visa?</h2>',
      paragraphs: [
        {
          text: "If you're gearing up for a visit to make your time in Sri Lanka truly worth it, travelers must apply for Sri Lanka visa and obtain this Sri Lanka e Tourist Visa to explore this stunning destination. Our eVisa expert team at e-Visa.com simplifies the application process, ensuring a smooth and efficient experience, allowing you to secure your travel document in the shortest possible time.",
        },
        {
          text: 'The Electronic Travel Authorization (ETA) system enables a fully electronic Visa application process, eliminating the need for a visit to the Sri Lankan embassy. The ETA serves as an official authorization for short-term visits, providing key information about passport requirements, application details, costs, and when to apply.Ditch all the confusing paperwork and endless queues. We’ve made the Australia Visa application online process a breeze!',
        },
        {
          text: `At <span class="link">e-Visa.com</span>, we offer comprehensive assistance for a hassle-free application process. Our experts are available to answer any questions about the ETA or provide insights into Sri Lanka's climate, destinations, prices, and processes. Discover the beauty of Sri Lanka with the convenience of e-Visa's efficient services.`,
        },
      ],
      applyNow: (
        <CustomButton
          link="/srilanka/slvisa/tourist-eta/apply-individual"
          btnText="Apply for Sri Lanka Visa Now!"
        >
          <FaArrowRightLong />
        </CustomButton>
      ),
    },
    {
      title: '<h2>What is a Sri Lanka Visa?</h2>',
      paragraphs: [
        {
          text: "The Electronic Travel Authorization (ETA) is an official document facilitating tourism entry into Sri Lanka. The application process is entirely electronic, and upon approval, you'll receive your ETA via email in PDF format.",
        },
      ],
      image: visaInfo,
      imageAlt: 'visainfo1',
    },
    {
      title: '<h3>Eligible Nationalities</h3>',
      paragraphs: [
        {
          text: 'Citizens of various countries are eligible for the Sri Lanka Tourist Visa. Refer to our list of eligible countries or contact our experts for personalized assistance.',
        },
        {
          text: 'For example: Albania | Andorra | Anguilla | Antigua and Barbuda | Armenia | Australia | Austria | Bahamas | Bangladesh | Barbados | Belgium | Benin | Bermuda | Bosnia and Herzegovina | Brazil | Brunei Darussalam | Burkina Faso | Cambodia | Canada | Cayman Islands | Chad | Chile | Colombia | Cook Islands | Costa Rica | Cuba | Czech Republic | Denmark | Dominica | Ecuador | El Salvador | Eritrea | Ethiopia | Faroe Islands | Finland | Gambia | Georgia | Greece | Grenada | Guadeloupe | Guatemala | Haiti | Honduras | Hungary | India | Indonesia | Iraq | Israel | Italy | Japan | Kazakhstan | Kiribati | Kuwait | Lao | Latvia | Lesotho | Liechtenstein | Lithuania | Macao | Madagascar | Malawi | Malta | Martinique | Mauritania | Mayotte | Micronesia | Moldova | Mongolia | Morocco | Mozambique | Namibia | Nepal | Netherlands | New Zealand | Niger | Niue | Norway | Palau | Panama | Paraguay | Philippines | Poland | Puerto Rico | Reunion | Romania | Rwanda | Saint Lucia | Saint Vincent and the Grenadines | San Marino | Saudi Arabia | Senegal | Slovakia | Solomon Islands | Somalia | South Sudan | Suriname | Swaziland | Switzerland | Tajikistan | Tanzania | Timor-Leste | Tokelau | Tonga | Tunisia | Turkmenistan | Turks and Caicos Islands | Ukraine | United Kingdom | United States | Uzbekistan | Venezuela | Vietnam | Zambia | Algeria | Angola | Argentina | Aruba | Azerbaijan | Bahrain | Belarus | Belize | Bolivia | Botswana | Bulgaria | Burundi | Cape Verde | Central African Republic | China | Comoros | Croatia | Cyprus | Djibouti | Dominican Republic | Equatorial Guinea | Estonia | Fiji | France | Germany | Greenland | Guam | Guyana | Hong Kong | Iceland | Iran | Ireland | Jamaica | Jordan | Korea | Kyrgyzstan | Lebanon | Libya | Luxembourg | Macedonia | Malaysia | Marshall Islands | Mauritius | Mexico | Monaco | Montenegro | Myanmar | Nauru | New Caledonia | Nicaragua | Norfolk Island | Oman | Papua New Guinea | Peru | Portugal | Qatar | Russia | Saint Kitts and Nevis | Samoa | São Tomé and Príncipe | Serbia | Slovenia | South Africa | Spain | Sweden | Taiwan | Thailand | Togo | Trinidad and Tobago | Turkey | Tuvalu | United Arab Emirates | Uruguay | Vanuatu | Yemen | Zimbabwe',
        },
      ],
    },
    {
      title: '<h4>Validity and Entries</h4>',
      paragraphs: [
        {
          text: 'The Sri Lanka ETA is valid for 30 days from the date of arrival, allowing for two entries within 180 days. Each entry permits a maximum stay of 30 days.',
        },
      ],
    },
    {
      title: '<h5>Online Application Process</h5>',
      paragraphs: [
        {
          text: 'Applying for the Sri Lanka Visa/STA is simple with e-Visa.com. Complete our user-friendly questionnaire, choose a processing time, upload required documents, confirm payment, and await the confirmation email',
        },
      ],
    },
    {
      title: '<h6>Processing Times and Fees</h6>',
      lists: [
        {
          title:
            '<strong>e-Visa.com offers three processing time options:</strong>',
          listItems: [
            `<strong>Standard (3 days):</strong> $74.99" We'll send you a confirmation email with next steps for completing the application.`,
            `<strong>Rush (24 hours):</strong> $144.99`,
            `<strong>Super Rush (12 hours):</strong> $213.99`,
          ],
        },
      ],
      applyNow: (
        <CustomButton
          link="/srilanka/slvisa/tourist-eta/apply-individual"
          btnText="Apply for Sri Lanka Visa Now!"
        >
          <FaArrowRightLong />
        </CustomButton>
      ),
    },
    {
      title: '<h5>Child Application</h5>',
      paragraphs: [
        {
          text: 'Children traveling with their parents must have their own ETA. Parents can complete the application on their behalf, and if traveling without parents, a notarized authorization letter is required.',
        },
      ],
    },
    {
      title: '<h5>Application for Already Valid Visas</h5>',
      paragraphs: [
        {
          text: 'If you possess a valid Tourist Visa, you cannot begin your Sri Lanka ETA online application for a new ETA until the current permit expires.',
        },
        {
          text: '<strong>Note:</strong> The ETA does not grant permission for work in Sri Lanka.',
        },
      ],
    },
    {
      title: '<h3>Application Timing</h3>',
      paragraphs: [
        {
          text: 'Apply for Sri Lanka Visa  well in advance, considering our different processing times to ensure a worry-free experience.',
        },
      ],
    },
    {
      title: '<h3>Post Pandemic Entry Requirements</h3>',
      paragraphs: [
        {
          text: 'Currently, Sri Lanka does not require a COVID-19 vaccine, negative PCR test, or quarantine for entry. Stay updated on regulations closer to your travel date.',
        },
        {
          isEmail: true,
          href: 'mailto:help@e-visa.com',
          linkText: 'help@e-visa.com',
          text: 'For more information, our 24/7 customer service team is ready to assist. Contact us via email at <span class="email-link">help@e-visa.com</span>',
        },
        {
          text: 'Travel responsibly and explore the diverse landscapes of this fascinating country with the convenience of our Sri Lanka e Tourist ETA. Start your Sri Lanka ETA online application with e-Visa today!',
        },
      ],
    },
    {
      title: '<h2>Experiencing an Issue with Your Application?</h2>',
      paragraphs: [
        {
          text: `If your Sri Lanka e Visa application faced an error, relax! Glitches can occur due to internet hiccups, payment glitches, or other issues. Reach out to our customer support team through [online chat] or email (help@ivisa.com). They're available 24/7 to assist you. They'll examine your application and guide you on the next steps.`,
        },
      ],
    },
    {
      title:
        '<h2>What if Your Sri Lanka Tourist ETA is Rejected or Cancelled?</h2>',
      paragraphs: [
        {
          href: '/srilanka',
          linkText: 'e-Visa.com',
          text: `Rejections or cancellations for online Visa application forms are uncommon within the <span class="link">e-Visa.com</span> platform. Our meticulous team carefully reviews each application for errors or missing documents. In rare cases where the Sri Lanka government cancels or rejects your application, <span class="link">e-Visa.com</span> may refund the processing fee, excluding government fees.`,
        },
      ],
    },
    {
      title: '<h2>Is Your Personal Information Secure?</h2>',
      paragraphs: [
        {
          href: '/srilanka',
          linkText: 'Sri Lanka government website',
          text: `Rest assured, your data is handled securely in both the e-Visa.com online environment and the <span class="link">Sri Lanka government website</span>. We use your details solely for submitting your Sri Lanka e Visa application online and acquiring the Sri Lanka Tourist Visa/ETA. Your banking details are never stored, ensuring your data is kept confidential and secure. Enjoy your adventure in Sri Lanka!`,
        },
      ],
    },
  ],
  faqData: [
    {
      id: 1,
      title: 'How do I apply for an e Tourist Sri Lanka Visa?',
      des: 'You can apply for an e Tourist Sri Lanka Visa online. Fill out the application form, submit the required documents, and pay the visa fee.',
    },
    {
      id: 2,
      title:
        'What documents do I need to apply for an e Tourist Sri Lanka Visa?',
      des: `Typically, you'll need a valid passport, a digital photo, and proof of onward travel. However, requirements may vary, so it's best to check the official website.`,
    },
    {
      id: 3,
      title: 'How long does it take to process an e Tourist Sri Lanka Visa?',
      des: ' The processing time can vary, but it typically takes a few days.',
    },
    {
      id: 4,
      title: 'How long is the e Tourist Sri Lanka Visa valid for?',
      des: 'The e Tourist Sri Lanka Visa is usually valid for 30 days from the date of arrival, but it can be extended.',
    },
    {
      id: 5,
      title: 'Can I work in Sri Lanka with an e Tourist Visa?',
      des: 'No, the e Tourist Visa does not permit foreign nationals to work in Sri Lanka.',
    },
    {
      id: 6,
      title:
        'What should I do if my e Tourist Sri Lanka Visa application is denied?',
      des: 'If your application is denied, you can reapply after understanding the reasons for the denial and rectifying them.',
    },
  ],
};
