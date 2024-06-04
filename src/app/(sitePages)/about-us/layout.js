export const metadata = {
    // robots: {
    //   index: false,
    //   googleBot: {
    //     index: false,
    //   },
    // },
    title: "About us | visa collect",
    description:
        "Welcome to Visa Collect, your trusted partner for visa solutions worldwide. Learn more about our team, values, and dedication to excellence, checkout for more information about the visa services.",
    metadataBase: new URL("https://www.visacollect.com"),

    alternates: {
        canonical: "/about-us",
    },
    keywords:
        "visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today",

    openGraph: {
        url: "/about-us",
    },
};

export default function RootLayout({ children }) {
    return <>{children}</>;
}
