import { JapanHomePage } from '../mainDirectoryHomePages';
import { japanMDHomePageFaq } from '../mainDirectoryHomePagesFaq/japanMDHomePageFaq';

// MD => mainDirectory
const japanMDBlogBase = '/jp/blog';
export const japanMDData = {
  breadcrumb: 'JP',
  pageTitle: 'Japan Visa Entry requirements and travel information for Japan',
  pageDescription: null,
  pageContent: <JapanHomePage />,
  applyNow: '/jp/step-one',
  faq: japanMDHomePageFaq,
  blogs: [],
};
