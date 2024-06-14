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
    metadataBase: new URL("https://www.visacollect.com"),

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
    return (
        <>
            {children}{" "}
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    name: "What is the validity of an Australian Visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Australian tourist visas typically allow for several entries with each stay lasting up to three months, and they are valid for 12 months from the date of issue.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I extend my Australian visa while I'm in Australia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You can request a visa extension; but, you have to do it before your present one expires and fulfil all the conditions.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "I'm passing through Australia; do I require a visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "If you intend to stay in Australia for longer than eight hours or leave the airport transit lounge, most visitors do require a transit visa.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Does one need to get vaccinations to enter Australia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Although vaccines are not usually needed to enter Australia, it is best to verify the most recent health warnings before leaving.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I work in Australia on a tourist visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "No, once within Australia you cannot switch from a tourist to a work visa. A work visa must be applied for from your nation.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What happens if I overstay my Australian visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Depending on the situation, overstaying a visa can lead to incarceration, deportation, and a temporary restriction on returning to Australia.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I visit Australia without travel insurance?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "While it's not required, travel insurance is strongly advised to cover unforeseen medical costs and delays in travel.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Does an Australian tourist visa allow me to study?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Holders of tourist visas are not permitted to continue formal education or training beyond three months. Apply for a student visa if you intend to continue your studies.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What should I do if, despite holding a valid Australian visa, my passport expires?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The Australian visa office must be notified of your intention to transfer your visa to the new passport once you have either renewed your current one or applied for a new one.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Are there any special visas for individuals who desire to retire in Australia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Indeed, Australia has numerous visas for foreign retirees, one of which is the Investor Retirement visa, which calls for a sizable long-term financial commitment in Australia.",
                                    },
                                },
                            ],
                        },
                    ]),
                }}
            />
        </>
    );
}
