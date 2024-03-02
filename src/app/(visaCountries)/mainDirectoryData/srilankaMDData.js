import { SrilankaHomePage } from '../mainDirectoryHomePages';
import { srilankaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/srilankaMDHomePageFaq';

// MD => mainDirectory
const srilankaMDBlogBase = '/sl/blog';
export const srilankaMDData = {
  breadcrumb: 'SL',
  pageTitle:
    'Srilanka Visa Entry requirements and travel information for Srilanka',
  pageDescription: null,
  pageContent: <SrilankaHomePage />,
  applyNow: '/sl/slvisa/tourist-eta/apply-individual',
  faq: srilankaMDHomePageFaq,
  blogs: [],
};
