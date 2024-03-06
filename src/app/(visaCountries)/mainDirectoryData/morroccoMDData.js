import { MorroccoHomePage } from '../mainDirectoryHomePages';
import { morroccoMDHomePageFaq } from '../mainDirectoryHomePagesFaq/morroccoMDHomePageFaq';

// MD => mainDirectory
const morroccoMDBlogBase = '/ma/blog';
export const morroccoMDData = {
  breadcrumb: 'MA',
  pageTitle:
    'Morocco Visa Entry requirements and travel information for Morocco',
  pageDescription: null,
  pageContent: <MorroccoHomePage />,
  applyNow: '/ma/step-one',
  faq: morroccoMDHomePageFaq,
  blogs: [],
};
