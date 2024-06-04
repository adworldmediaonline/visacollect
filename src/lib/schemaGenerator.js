export const schemaGenerator = ({
    base_url,
    type,
    page,
    headline,
    description,
    image,
    slug,
}) => ({
    "@context": "https://schema.org",
    "@type": type,
    mainEntity: [
        {
            "@type": "WebPage",
            "@id": `${base_url}${page}${slug}`,
        },
    ],
    headline: headline,
    description: description,
    image: `${base_url}${image}`,
    author: {
        "@type": "Organization",
        name: "",
    },

    publisher: {
        "@type": "Organization",
        name: "Visa Collect",
        logo: {
            "@type": "ImageObject",
            url: "https://www.visacollect.com/",
        },
    },

    datePublished: "2024-03-15",
    dateModified: "2024-03-15",
});
