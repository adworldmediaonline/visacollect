import { TurkeyHomePage } from "../mainDirectoryHomePages";
import { turkeyMDHomePageFaq } from "../mainDirectoryHomePagesFaq/turkeyMDHomePageFaq";

// MD => mainDirectory
const turkeyMDBlogBase = "/tr/blog";
export const turkeyMDData = {
    breadcrumb: "TR",
    code: "tr",
    pageTitle:
        "Turkey Visa Entry requirements and travel information for Turkey",
    pageDescription: null,
    pageContent: <TurkeyHomePage />,
    applyNow: "/tr/application",
    faq: turkeyMDHomePageFaq,
    blogs: [],
};
