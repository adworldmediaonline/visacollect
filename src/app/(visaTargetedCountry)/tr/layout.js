import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
    title: "Apply Turkey Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Turkey visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: new URL("https://www.visacollect.com"),

    alternates: {
        canonical: "/tr/",
    },
    keywords:
        "turkey visa,e visa turkey,turkey visa online,turkey visa application,turkey visa requirements,apply for turkish visa,turkey visa application form,turkey e visa application,turkey visa application form online",

    openGraph: {
        url: "/tr/",
    },
};

export default function RootLayout({ children }) {
    return <>{children}</>;
}
