import "react-datepicker/dist/react-datepicker.css";

export const metadata = {
    title: "Apply For Sri Lanka Visa | E-visa",
    description:
        "Simplify your travel plans with E-visa - the easiest way to apply for Sri Lanka visa. Quick, reliable, and stress-free application process awaits you",
    metadataBase: new URL("https://visacollect.com"),

    alternates: {
        canonical: "/srilanka/",
    },
    keywords:
        "sri lanka visa,sri lanka tourist visa,sri lanka visa online,sri lanka e visa,apply for sri lanka visa,sri lanka eta online",

    openGraph: {
        url: "/srilanka/",
    },
};

export default function RootLayout({ children }) {
    return <>{children}</>;
}
