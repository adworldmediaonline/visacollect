import { MalaysiaHomePage } from '../mainDirectoryHomePages';
import { malaysiaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/malaysiaMDHomePageFaq';

// MD => mainDirectory
const malaysiaMDBlogBase = '/my/blog';
export const malaysiaMDData = {
  breadcrumb: 'MY',
  code: 'my',
  pageTitle:
    'Malaysia Visa Entry requirements and travel information for Malaysia',
  pageDescription: null,
  pageContent: <MalaysiaHomePage />,
  applyNow: '/my/application',
  faq: malaysiaMDHomePageFaq,
  blogs: [],
};
