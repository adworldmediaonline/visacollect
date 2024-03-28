import AsideWrapper from "../components/AsideWrapper";
import MainWrapper from "../components/MainWrapper";
import PageWrapper from "../components/PageWrapper";
import AsideWrapperTitle from "../components/AsideWrapperTitle";
import BlogCardSmall from "../components/BlogCardSmall";
import BlogHeroImage from "../../BlogContentHero";
import { imageNotFound } from "@/app/(visaCountries)/mainDirectoryHomePagesBlog/images/blogImages";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";

export default function BlogPreview({
    asideTitle,
    img,
    content,
    relatedBlogs,
    alt,
}) {
    return (
        <>
            <BreadcrumbWrapper className="mt-24 [&_ul]:px-0 [&_ul]:list-none  [&_li]:flex [&_li]:items-center" />
            <PageWrapper className="mt-0 mb-10">
                <MainWrapper>
                    <BlogHeroImage
                        className="relative mt-14"
                        src={img ? img : imageNotFound}
                        alt={alt ?? "img not found"}
                    />
                    {content}
                </MainWrapper>
                <AsideWrapper>
                    <AsideWrapperTitle>{asideTitle}</AsideWrapperTitle>
                    <div className="flex flex-col gap-3">
                        {relatedBlogs?.slice(0, 3)?.map((blog, index) => (
                            <BlogCardSmall
                                key={
                                    blog?.metadata?.title
                                        ? blog.metadata.title
                                        : index
                                }
                                {...blog}
                            />
                        ))}
                    </div>
                </AsideWrapper>
            </PageWrapper>
        </>
    );
}
