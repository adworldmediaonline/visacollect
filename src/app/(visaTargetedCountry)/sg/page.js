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
import { singaporeMDData } from "@/app/(visaCountries)/mainDirectoryData/singaporeMDData";
import { visaPromotedInSingapore } from "@/app/(visaTargetedCountryContent)/content/visaTargetedCountry";

export default function Page() {
    return (
        <div>
            <Banner2
                validity=" Valid for 1 year"
                entries="Multiple Entries"
                price="$126.67"
                link={singaporeMDData?.applyNow}
                pageTitle={singaporeMDData?.pageTitle}
                breadcrumb={singaporeMDData?.breadcrumb}
            />
            <div className="w-full h-[0.5px] bg-gray-200"></div>
            <PageWrapper className="mt-10 mb-10">
                <MainWrapper>{singaporeMDData?.pageContent}</MainWrapper>
                {visaPromotedInSingapore?.length > 0 ? (
                    <AsideWrapper>
                        <ul className="flex flex-col gap-3">
                            {visaPromotedInSingapore?.map((promotedVisa) => (
                                <li key={promotedVisa?.visa}>
                                    <AsideBlogCard
                                        slug={`/${promotedVisa?.targetedCountry?.code.toLowerCase()}/${
                                            promotedVisa?.targetedCountry?.slug
                                        }`}
                                        title={
                                            promotedVisa?.targetedCountry
                                                ?.metadata?.title ??
                                            "Title not found"
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </AsideWrapper>
                ) : null}
            </PageWrapper>
            <div className="mt-16">
                <Divider />
            </div>

            <div>
                <Faq faqData={singaporeMDData?.faq ?? []} />
            </div>
            <PageReview applyLink={singaporeMDData?.applyNow} />
            {singaporeMDData?.blogs.length > 0 ? (
                <BlogSlider
                    blogs={JSON.stringify(singaporeMDData?.blogs) ?? []}
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
    title: "Apply Singapore Visa Online - Visa Collect",
    description:
        "Get guaranteed approval on your Singapore visa with Visa Collect, apply for Singapore visa online and experience a quick, secure, and hassle-free application process.",
    metadataBase: new URL("https://visacollect.com"),

    alternates: {
        canonical: "/sg",
    },
    keywords:
        "visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today",

    openGraph: {
        url: "/sg",
    },
};
