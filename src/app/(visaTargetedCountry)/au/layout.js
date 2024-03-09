import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { FormProvider } from "@/context/formContext";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import Navbar from "@/components/australia/common/Navbar";
import Footer from "@/components/australia/common/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Apply Australia Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Australia visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: new URL("https://visacollect.com"),

    alternates: {
        canonical: "/au/",
    },
    keywords:
        "australia visa,apply for australian visa,australia tourist visa,visitor visa australia,australia tourist visa application,australian visa application,australia visa requirements,australia visa application online,australian visa application form,apply for australia visa online,apply e visa for australia",

    openGraph: {
        url: "/au/",
    },
};
export default function RootLayout({ children }) {
    return <>{children}</>;
}
