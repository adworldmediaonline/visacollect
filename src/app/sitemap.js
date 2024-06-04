import { getAllPostsMeta } from "@/lib/mdx";
import {
    visaPromotedInAustralia,
    visaPromotedInCanada,
    visaPromotedInIndia,
    visaPromotedInSingapore,
    visaPromotedInThailand,
    visaPromotedInUAE,
    visaPromotedInUk,
    visaPromotedInUs,
} from "./(visaTargetedCountryContent)/content/visaTargetedCountry";
import { australiaMDData } from "./(visaCountries)/mainDirectoryData/australiaMDData";
import { indiaMDData } from "./(visaCountries)/mainDirectoryData/indiaMDData";
import { thailandMDData } from "./(visaCountries)/mainDirectoryData/thailandMDData";

const baseUrl = "https://www.visacollect.com";
export default async function sitemap() {
    // generalCommon blogs
    const generalCommonBlog = await getAllPostsMeta();
    const generalCommonBlogPosts = generalCommonBlog.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date().toISOString(),
    }));

    // routes
    const routes = [
        "",
        "/about-us",
        "/contact-us",
        "/blog",
        "/in",
        "/au",
        "/eg",
        "/id",
        "/jp",
        "/kh",
        "/lk",
        "/ma",
        "/my",
        "/om",
        "/sg",
        "/th",
        "/tr",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));

    // promoted visa subdirectories
    const promotedVisa = [
        ...visaPromotedInAustralia,
        ...visaPromotedInUk,
        ...visaPromotedInCanada,
        ...visaPromotedInUs,
        ...visaPromotedInThailand,
        ...visaPromotedInIndia,
        ...visaPromotedInUAE,
        ...visaPromotedInSingapore,
    ].map((visa) => ({
        url: `${baseUrl}/${visa.targetedCountry.code.toLowerCase()}/${
            visa.targetedCountry.slug
        }`,
        lastModified: new Date().toISOString(),
    }));

    const mainDirectoryData = [
        australiaMDData,
        indiaMDData,
        thailandMDData,
    ].flatMap((mdData) => {
        return mdData.blogs.map((blog) => ({
            url: `${baseUrl}/${mdData.code.toLowerCase()}/blog/${blog.slug}`,
            lastModified: new Date().toISOString(),
        }));
    });

    return [
        ...generalCommonBlogPosts,
        ...routes,
        ...promotedVisa,
        ...mainDirectoryData,
    ];
}
