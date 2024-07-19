/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evisastorage.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'https://storageevisa.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/india/',
        destination: '/in',
        permanent: true,
      },
      {
        source: '/srilanka/',
        destination: '/lk',
        permanent: true,
      },
      {
        source: '/thailand/',
        destination: '/th',
        permanent: true,
      },
      {
        source: '/australia/application/',
        destination: '/au/apply-now',
        permanent: true,
      },
      {
        source: '/turkey/',
        destination: '/tr',
        permanent: true,
      },
      {
        source: '/my/application/',
        destination: '/my/step-one',
        permanent: true,
      },
      {
        source: '/sl/slvisa/tourist-eta/apply-for-third-party/',
        destination: '/lk/slvisa/tourist-eta/apply-for-third-party/',
        permanent: true,
      },
      {
        source: '/sl/apply-now/',
        destination: '/lk/apply-now/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/tourist-eta/apply-in-group/',
        destination: '/lk/slvisa/tourist-eta/apply-in-group/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/business-purpose-eta/apply-individual/',
        destination: '/lk/slvisa/business-purpose-eta/apply-individual/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/business-purpose-eta/apply-in-group/',
        destination: '/lk/slvisa/business-purpose-eta/apply-in-group/',
        permanent: true,
      },
      {
        source: '/sl/slvisa/business-purpose-eta/apply-for-third-party/',
        destination: '/lk/slvisa/business-purpose-eta/apply-for-third-party/',
        permanent: true,
      },
      {
        source: '/australia/',
        destination: '/au/',
        permanent: true,
      },
      {
        source: '/in/au-Indian-tourist-visa-Australian-citizens/',
        destination: '/au/indian-tourist-visa-for-australian-citizens/',
        permanent: true,
      },
      {
        source: '/turkey/application/',
        destination: '/tr/application/',
        permanent: true,
      },
      {
        source: '/visa/step-one/',
        destination: '/in/visa/step-one/',
        permanent: true,
      },

      // 190724 redirect
      // {
      //   source: '/',
      //   destination: 'https://www.visacollect.com/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/',
      //   destination: 'https://www.visacollect.com/in/',
      //   permanent: true,
      // },
      // {
      //   source: '/lk/',
      //   destination: 'https://www.visacollect.com/lk/',
      //   permanent: true,
      // },
      // {
      //   source: '/au/',
      //   destination: 'https://www.visacollect.com/au/',
      //   permanent: true,
      // },
      // {
      //   source: '/tr/',
      //   destination: 'https://www.visacollect.com/tr/',
      //   permanent: true,
      // },
      // {
      //   source: '/th/',
      //   destination: 'https://www.visacollect.com/th/',
      //   permanent: true,
      // },
      // {
      //   source: '/kh/',
      //   destination: 'https://www.visacollect.com/kh/',
      //   permanent: true,
      // },
      // {
      //   source: '/om/',
      //   destination: 'https://www.visacollect.com/om/',
      //   permanent: true,
      // },
      // {
      //   source: '/eg/',
      //   destination: 'https://www.visacollect.com/eg/',
      //   permanent: true,
      // },
      // {
      //   source: '/ma/',
      //   destination: 'https://www.visacollect.com/ma/',
      //   permanent: true,
      // },
      // {
      //   source: '/my/',
      //   destination: 'https://www.visacollect.com/my/',
      //   permanent: true,
      // },
      // {
      //   source: '/jp/',
      //   destination: 'https://www.visacollect.com/jp/',
      //   permanent: true,
      // },
      // {
      //   source: '/sg/',
      //   destination: 'https://www.visacollect.com/sg/',
      //   permanent: true,
      // },
      // {
      //   source: '/id/',
      //   destination: 'https://www.visacollect.com/id/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/7-common-mistakes-to-avoid-when-applying-for-a-visa/',
      //   destination:
      //     'https://www.visacollect.com/blog/7-common-mistakes-to-avoid-when-applying-for-a-visa/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/7-facts-about-thailand-you-didnt-know/',
      //   destination:
      //     'https://www.visacollect.com/blog/7-facts-about-thailand-you-didnt-know/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/best-cities-to-travel-in-2024/',
      //   destination:
      //     'https://www.visacollect.com/blog/best-cities-to-travel-in-2024/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/best-countries-to-get-a-working-holiday-visa-in-2024/',
      //   destination:
      //     'https://www.visacollect.com/blog/best-countries-to-get-a-working-holiday-visa-in-2024/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/best-countries-to-visit-for-spring-adventure/',
      //   destination:
      //     'https://www.visacollect.com/blog/best-countries-to-visit-for-spring-adventure/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/difference-between-consulate-and-embassy',
      //   destination:
      //     'https://www.visacollect.com/blog/difference-between-consulate-and-embassy/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/difference-between-passport-and-visa/',
      //   destination:
      //     'https://www.visacollect.com/blog/difference-between-passport-and-visa/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/discover-the-14-most-beautiful-beaches-in-the-world/',
      //   destination:
      //     'https://www.visacollect.com/blog/discover-the-14-most-beautiful-beaches-in-the-world/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/do-you-need-passport-to-book-international-flight/',
      //   destination:
      //     'https://www.visacollect.com/blog/do-you-need-passport-to-book-international-flight/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/easiest-countries-to-get-a-work-visa/',
      //   destination:
      //     'https://www.visacollect.com/blog/easiest-countries-to-get-a-work-visa/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/easiest-countries-to-immigrate-in-2024/',
      //   destination:
      //     'https://www.visacollect.com/blog/easiest-countries-to-immigrate-in-2024/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/easiest-countries-to-move-from-canada/',
      //   destination:
      //     'https://www.visacollect.com/blog/easiest-countries-to-move-from-canada/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/easy-work-visa-countries-for-indian/',
      //   destination:
      //     'https://www.visacollect.com/blog/easy-work-visa-countries-for-indian/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/expat-guide-cheapest-places-to-live-in-the-world/',
      //   destination:
      //     'https://www.visacollect.com/blog/expat-guide-cheapest-places-to-live-in-the-world/',
      //   permanent: true,
      // },
      // {
      //   source:
      //     '/blog/explore-the-beaches-that-glow-at-night-across-the-world/',
      //   destination:
      //     'https://www.visacollect.com/blog/explore-the-beaches-that-glow-at-night-across-the-world/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/first-time-flyer-guide-essential-tips/',
      //   destination:
      //     'https://www.visacollect.com/blog/first-time-flyer-guide-essential-tips/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/golden-week-2024-dates-and-travel-tips/',
      //   destination:
      //     'https://www.visacollect.com/blog/golden-week-2024-dates-and-travel-tips/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/how-far-in-advance-should-you-book-a-flight/',
      //   destination:
      //     'https://www.visacollect.com/blog/how-far-in-advance-should-you-book-a-flight/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/how-to-apply-for-egypt-visa/',
      //   destination:
      //     'https://www.visacollect.com/blog/how-to-apply-for-egypt-visa/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/india-evisa-apply-online/',
      //   destination:
      //     'https://www.visacollect.com/blog/india-evisa-apply-online/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/morocco-e-visa-Price-Requirements-and-application/',
      //   destination:
      //     'https://www.visacollect.com/blog/morocco-e-visa-Price-Requirements-and-application/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/passport-6-month-rule-in-2024/',
      //   destination:
      //     'https://www.visacollect.com/blog/passport-6-month-rule-in-2024/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/social-media-travel-agents-for-visa/',
      //   destination:
      //     'https://www.visacollect.com/blog/social-media-travel-agents-for-visa/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/strategies-for-travel-agents/',
      //   destination:
      //     'https://www.visacollect.com/blog/strategies-for-travel-agents/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/the-easiest-countries-to-get-a-visa-in-2024/',
      //   destination:
      //     'https://www.visacollect.com/blog/the-easiest-countries-to-get-a-visa-in-2024/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/the-ultimate-guide-to-solo-travel-for-women/',
      //   destination:
      //     'https://www.visacollect.com/blog/the-ultimate-guide-to-solo-travel-for-women/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/tips-for-stress-free-travel/',
      //   destination:
      //     'https://www.visacollect.com/blog/tips-for-stress-free-travel/',
      //   permanent: true,
      // },
      // {
      //   source:
      //     '/blog/tips-on-how-to-get-ready-for-your-canada-visitor-visa-interview/',
      //   destination:
      //     'https://www.visacollect.com/blog/tips-on-how-to-get-ready-for-your-canada-visitor-visa-interview/',
      //   permanent: true,
      // },

      // {
      //   source: '/blog/top-10-cheap-countries-to-live-in/',
      //   destination:
      //     'https://www.visacollect.com/blog/top-10-cheap-countries-to-live-in/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/top-10-most-beautiful-countries-in-the-world',
      //   destination:
      //     'https://www.visacollect.com/blog/top-10-most-beautiful-countries-in-the-world/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/types-of-visas',
      //   destination: 'https://www.visacollect.com/blog/types-of-visas/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/visa-on-arrival-complete-guide',
      //   destination:
      //     'https://www.visacollect.com/blog/visa-on-arrival-complete-guide/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/visa-status-check',
      //   destination: 'https://www.visacollect.com/blog/visa-status-check/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/what-is-the-best-time-to-book-a-flight',
      //   destination:
      //     'https://www.visacollect.com/blog/what-is-the-best-time-to-book-a-flight/',
      //   permanent: true,
      // },
      // {
      //   source: '/au/blog/australia-visa-requirements-for-singapore-citizens/',
      //   destination:
      //     'https://www.visacollect.com/au/blog/australia-visa-requirements-for-singapore-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/au/blog/australian-eta-for-uk-citizens',
      //   destination:
      //     'https://www.visacollect.com/au/blog/australian-eta-for-uk-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/au/blog/australia-visa-for-us-citizens',
      //   destination:
      //     'https://www.visacollect.com/au/blog/australia-visa-for-us-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/blog/top-things-to-do-in-india-for-fun',
      //   destination:
      //     'https://www.visacollect.com/in/blog/best-things-to-do-in-india-for-australia-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/blog/indian-visa-for-emiratis-citizens',
      //   destination:
      //     'https://www.visacollect.com/in/blog/indian-visa-for-emiratis-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/blog/apply-india-eVisa-from-uk',
      //   destination:
      //     'https://www.visacollect.com/in/blog/apply-india-eVisa-from-uk/',
      //   permanent: true,
      // },
      // {
      //   source:
      //     '/ma/blog/morocco-visa-eligibility-application-and-requirements',
      //   destination:
      //     'https://www.visacollect.com/ma/blog/morocco-visa-eligibility-application-and-requirements/',
      //   permanent: true,
      // },
      // {
      //   source: '/ma/blog/your-complete-guide-to-obtaining-a-visa-in-morocco',
      //   destination:
      //     'https://www.visacollect.com/ma/blog/your-complete-guide-to-obtaining-a-visa-in-morocco/',
      //   permanent: true,
      // },
      // {
      //   source: '/tr/blog/how-to-get-a-turkey-visa-after-a-refusal',
      //   destination:
      //     'https://www.visacollect.com/tr/blog/how-to-get-a-turkey-visa-after-a-refusal/',
      //   permanent: true,
      // },
      // {
      //   source: '/lk/blog/sri-lankan-visa-requirements-for-canadian-citizens',
      //   destination:
      //     'https://www.visacollect.com/lk/blog/sri-lankan-visa-requirements-for-canadian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/my/blog/a-complete-guide-to-batu-caves-malaysia',
      //   destination:
      //     'https://www.visacollect.com/my/blog/a-complete-guide-to-batu-caves-malaysia/',
      //   permanent: true,
      // },
      // {
      //   source: '/my/blog/best-time-to-visit-malaysia',
      //   destination:
      //     'https://www.visacollect.com/my/blog/best-time-to-visit-malaysia/',
      //   permanent: true,
      // },
      // {
      //   source: '/about-us',
      //   destination: 'https://www.visacollect.com/about-us/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog',
      //   destination: 'https://www.visacollect.com/blog/',
      //   permanent: true,
      // },
      // {
      //   source: '/contact-us',
      //   destination: 'https://www.visacollect.com/contact-us/',
      //   permanent: true,
      // },
      // {
      //   source: '/termsAndConditions',
      //   destination: 'https://www.visacollect.com/termsAndConditions/',
      //   permanent: true,
      // },
      // {
      //   source: '/privacyPolicy',
      //   destination: 'https://www.visacollect.com/privacyPolicy/',
      //   permanent: true,
      // },
      // {
      //   source: '/cancellation',
      //   destination: 'https://www.visacollect.com/cancellation/',
      //   permanent: true,
      // },
      // {
      //   source: '/au/thailand-visa-for-australian-citizens',
      //   destination:
      //     'https://www.visacollect.com/au/thailand-visa-for-australian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/list-of-countries-that-offer-low-cost-visa',
      //   destination:
      //     'https://www.visacollect.com/blog/list-of-countries-that-offer-low-cost-visa/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/blog/apply-india-tourist-visa-for-canadian-citizens',
      //   destination:
      //     'https://www.visacollect.com/in/blog/apply-india-tourist-visa-for-canadian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/th/blog/travel-to-thailand-from-uk',
      //   destination:
      //     'https://www.visacollect.com/th/blog/travel-to-thailand-from-uk/',
      //   permanent: true,
      // },
      // {
      //   source: '/ca/sri-lanka-visa-for-canadian-citizens',
      //   destination:
      //     'https://www.visacollect.com/ca/sri-lanka-visa-for-canadian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/jp/step-one',
      //   destination: 'https://www.visacollect.com/jp/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/om/step-one',
      //   destination: 'https://www.visacollect.com/om/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/visa/step-one',
      //   destination: 'https://www.visacollect.com/in/visa/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/tr/application',
      //   destination: 'https://www.visacollect.com/tr/application/',
      //   permanent: true,
      // },
      // {
      //   source: '/my/application',
      //   destination: 'https://www.visacollect.com/my/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/sri-lanka-visa-for-indian-citizens',
      //   destination:
      //     'https://www.visacollect.com/in/sri-lanka-visa-for-indian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/sg/step-one',
      //   destination: 'https://www.visacollect.com/sg/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/th/blog/travel-to-thailand-from-uk',
      //   destination:
      //     'https://www.visacollect.com/th/blog/travel-to-thailand-from-uk/',
      //   permanent: true,
      // },
      // {
      //   source: '/my/step-one',
      //   destination: 'https://www.visacollect.com/my/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/easiest-countries-to-move-from-canada',
      //   destination:
      //     'https://www.visacollect.com/blog/easiest-countries-to-move-from-canada/',
      //   permanent: true,
      // },
      // {
      //   source: '/sg/step-one',
      //   destination: 'https://www.visacollect.com/sg/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/sg/australia-visa-for-singapore-citizens',
      //   destination:
      //     'https://www.visacollect.com/sg/australia-visa-for-singapore-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/sg/evisa-india-for-singapore-citizens/',
      //   destination:
      //     'https://www.visacollect.com/sg/evisa-india-for-singapore-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/ma/step-one/',
      //   destination: 'https://www.visacollect.com/ma/step-one/',
      //   permanent: true,
      // },
      // {
      //   source: '/au/turkey-visa-for-australian-citizens',
      //   destination:
      //     'https://www.visacollect.com/au/turkey-visa-for-australian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/tr/blog/how-to-get-a-turkey-visa-after-a-refusal',
      //   destination:
      //     'https://www.visacollect.com/tr/blog/how-to-get-a-turkey-visa-after-a-refusal/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/blog/indian-tourist-visa-for-uk-citizens',
      //   destination:
      //     'https://www.visacollect.com/in/blog/indian-tourist-visa-for-uk-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/uk/apply-for-india-visa-from-uk',
      //   destination:
      //     'https://www.visacollect.com/uk/apply-for-india-visa-from-uk/',
      //   permanent: true,
      // },
      // {
      //   source: '/uk/turkey-evisa-for-uk-citizens',
      //   destination:
      //     'https://www.visacollect.com/uk/turkey-evisa-for-uk-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/us/australia-visa-for-us-citizens',
      //   destination:
      //     'https://www.visacollect.com/us/australia-visa-for-us-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/blog/steps-to-apply-your-india-e-visa-from-usa',
      //   destination:
      //     'https://www.visacollect.com/in/blog/steps-to-apply-your-india-e-visa-from-usa/',
      //   permanent: true,
      // },
      // {
      //   source: '/us/turkey-visa-for-us-citizens',
      //   destination:
      //     'https://www.visacollect.com/us/turkey-visa-for-us-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/au-Indian-tourist-visa-Australian-citizens/',
      //   destination:
      //     'https://www.visacollect.com/au/indian-tourist-visa-for-australian-citizens/',
      //   permanent: true,
      // },
      // {
      //   source: '/in/australia-visa-apply-from-india',
      //   destination:
      //     'https://www.visacollect.com/in/australia-visa-apply-from-india/',
      //   permanent: true,
      // },
      // {
      //   source: '/sg/step-one',
      //   destination: 'https://www.visacollect.com/sg/step-one/',
      //   permanent: true,
      // },
    ];
  },
};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
