import "react-datepicker/dist/react-datepicker.css";

export const metadata = {
    title: "Apply Sri Lanka Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Sri Lanka visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: new URL("https://www.visacollect.com"),

    alternates: {
        canonical: "/lk/",
    },
    keywords:
        "sri lanka visa,sri lanka tourist visa,sri lanka visa online,sri lanka e visa,apply for sri lanka visa,sri lanka eta online",

    openGraph: {
        url: "/lk/",
    },
};

export default function RootLayout({ children }) {
    return <>{children}</>;
}
