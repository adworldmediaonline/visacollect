import React from "react";
import Divider from "@/components/common/Divider";
import PageReview from "./_homePage/PageReview";
import PageWrapper from "@/app/(blogContent)/blog/components/PageWrapper";
import MainWrapper from "@/app/(blogContent)/blog/components/MainWrapper";
import AsideWrapper from "@/app/(blogContent)/blog/components/AsideWrapper";
import AsideBlogCard from "@/app/(blogContent)/blog/components/AsideBlogCard";
import BlogSlider from "@/components/commonWebsiteComponents/BlogSlider";
import Faq from "@/components/commonWebsiteComponents/Faq";
import Banner2 from "@/components/ui/Banner2";
import { srilankaMDData } from "@/app/(visaCountries)/mainDirectoryData/srilankaMDData";

export default async function Page() {
    return (
        <div>
            <Banner2
                validity=" Valid for 1 year"
                entries="Multiple Entries"
                price="$126.67"
                link={srilankaMDData?.applyNow}
                pageTitle={srilankaMDData?.pageTitle}
                breadcrumb={srilankaMDData?.breadcrumb}
            />
            <div className="w-full h-[0.5px] bg-gray-200"></div>
            <PageWrapper className="mt-10 mb-10">
                <MainWrapper>{srilankaMDData?.pageContent}</MainWrapper>
                <AsideWrapper>
                    <ul className="flex flex-col gap-3">
                        {srilankaMDData?.blogs?.map((blog) => (
                            <li key={blog.title}>
                                <AsideBlogCard
                                    slug={blog?.href}
                                    title={
                                        blog?.metadata?.title ??
                                        "Title not found"
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </AsideWrapper>
            </PageWrapper>
            <div className="mt-16">
                <Divider />
            </div>

            <div>
                <Faq faqData={srilankaMDData?.faq ?? []} />
            </div>
            <PageReview applyLink={srilankaMDData?.applyNow} />
            <BlogSlider blogs={JSON.stringify(srilankaMDData?.blogs) ?? []} />
        </div>
    );
}

export const metadata = {
    // robots: {
    //   index: false,
    //   googleBot: {
    //     index: false,
    //   },
    // },
    title: "Apply SriLanka Visa Online - Visa Collect",
    description:
        "Get guaranteed approval on your SriLanka visa with Visa Collect, apply for Srilanka visa online and experience a quick, secure, and hassle-free application process.",
    metadataBase: new URL("https://visacollect.com"),

    alternates: {
        canonical: "/lk",
    },
    keywords:
        "visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today",

    openGraph: {
        url: "/lk",
    },
};
