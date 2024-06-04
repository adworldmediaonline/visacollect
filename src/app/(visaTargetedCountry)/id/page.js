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
import { indonesiaMDData } from "@/app/(visaCountries)/mainDirectoryData/indonesiaMDData";

export default function Page() {
    return (
        <div>
            <Banner2
                validity=" Valid for 1 year"
                entries="Multiple Entries"
                price="$126.67"
                link={indonesiaMDData?.applyNow}
                pageTitle={indonesiaMDData?.pageTitle}
                breadcrumb={indonesiaMDData?.breadcrumb}
            />
            <div className="w-full h-[0.5px] bg-gray-200"></div>
            <PageWrapper className="mt-10 mb-10">
                <MainWrapper>{indonesiaMDData?.pageContent}</MainWrapper>
                <AsideWrapper>
                    <ul className="flex flex-col gap-3">
                        {indonesiaMDData?.blogs?.map((blog) => (
                            <li key={blog?.title}>
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
            <PageReview applyLink={indonesiaMDData?.applyNow} />
            <div className="mt-16">
                <Divider />
            </div>

            <div>
                <Faq faqData={indonesiaMDData?.faq ?? []} />
            </div>
            {indonesiaMDData?.blogs.length > 0 ? (
                <BlogSlider
                    blogs={JSON.stringify(indonesiaMDData?.blogs) ?? []}
                />
            ) : null}
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
    title: "Apply Indonesia Visa Online - Visa Collect",
    description:
        "Get guaranteed approval on your Indonesia visa with Visa Collect, apply for Indonesia visa online and experience a quick, secure, and hassle-free application process.",
    metadataBase: new URL("https://www.visacollect.com"),

    alternates: {
        canonical: "/id",
    },
    keywords:
        "visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today",

    openGraph: {
        url: "/id",
    },
};
