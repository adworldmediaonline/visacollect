import { OmanHomePage } from '../mainDirectoryHomePages';
import { omanMDHomePageFaq } from '../mainDirectoryHomePagesFaq/omanMDHomePageFaq';

// MD => mainDirectory
const omanMDBlogBase = '/om/blog';
export const omanMDData = {
  breadcrumb: 'OM',
  pageTitle: 'Oman Visa Entry requirements and travel information for Oman',
  pageDescription: null,
  pageContent: <OmanHomePage />,
  applyNow: '/om/step-one',
  faq: omanMDHomePageFaq,
  blogs: [],
};
