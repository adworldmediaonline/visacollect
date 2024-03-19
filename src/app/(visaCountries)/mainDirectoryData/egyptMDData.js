import { EgyptHomePage } from '../mainDirectoryHomePages';
import { egyptMDHomePageFaq } from '../mainDirectoryHomePagesFaq/egyptMDHomePageFaq';

// MD => mainDirectory
const egyptMDBlogBase = '/om/blog';
export const egyptMDData = {
  breadcrumb: 'EG',
  code: 'eg',
  pageTitle: 'Egypt Visa Entry requirements and travel information for Egypt',
  pageDescription: null,
  pageContent: <EgyptHomePage />,
  applyNow: '/eg/step-one',
  faq: egyptMDHomePageFaq,
  blogs: [],
};
