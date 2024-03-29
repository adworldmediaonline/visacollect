import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import ContactUs from "@/components/ui/contact-us";
export const metadata = {
    title: "Got Queries | Contact Us | Visa Collect",
    description:
        "Have questions? We're here to help! Find quick and easy ways to reach our friendly customer support team. Email us at info@visacollect.com.",
    metadataBase: new URL("https://visacollect.com"),

    alternates: {
        canonical: "/contact-us",
    },
    keywords:
        "visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today",

    openGraph: {
        url: "/contact-us",
    },
};
export default function Page() {
    return (
        <div>
            <BreadcrumbWrapper className="mt-24" />
            <ContactUs />
        </div>
    );
}
