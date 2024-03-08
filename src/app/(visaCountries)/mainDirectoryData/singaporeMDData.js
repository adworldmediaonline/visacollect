import { SingaporeHomePage } from '../mainDirectoryHomePages';
import { singaporeMDHomePageFaq } from '../mainDirectoryHomePagesFaq/singaporeMDHomePageFaq';

// MD => mainDirectory
const singaporeMDBlogBase = '/sg/blog';
export const singaporeMDData = {
  breadcrumb: 'SG',
  pageTitle:
    'Singapore Visa Entry requirements and travel information for Singapore',
  pageDescription: null,
  pageContent: <SingaporeHomePage />,
  applyNow: '/sg/step-one',
  faq: singaporeMDHomePageFaq,
  blogs: [],
};
