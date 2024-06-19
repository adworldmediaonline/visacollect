import Script from "next/script";

export const metadata = {
    title: "India Visa Apply Online Now | Visa collect",
    description:
        "Get your India visa online now with Visa Collect and experience quick, secure, and hassle-free application process.",
    metadataBase: "https://www.visacollect.com",
    alternates: {
        canonical: `/in/`,
    },
    keywords:
        "india visa apply online now, india visa application, e tourist visa india, india travel visa, india visa for us citizens, apply for indian visa, indian visa online application, indian visa application form",
    openGraph: {
        url: `/in/`,
    },
};
export default function RootLayout({ children }) {
    return (
        <>
            {children}
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
                                    name: "Can I extend my India Travel Visa while in India?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Visa extensions aren't usually possible, but they can be in certain situations, like medical issues. It is best to make sure you have the right type and length of visa before you go on vacation.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Do I need a transit visa to have a stay in an Indian airport?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You need a transit visa if you need to change flights or stay in India for more than 24 hours. If you only need to go through customs once every 24 hours and stay at the same airport, you don't need a visa.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What do I do if my India visa application is turned down?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "If you are denied a visa, you must either reapply or call the embassy or consulate to find out more about the refusal. Some applications might be able to be appealed or sent again with more information.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Are there special visas for people who want to go to conferences or research seminars?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, people who are going to conferences, seminars, or workshops that the Indian government has approved can get a Conference Visa. For these, you need to get permission from the right Indian officials and an invitation from the organiser.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How long does it take to process an Indian visa online application?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Process time varies, but it usually takes between 7 and 15 working days from the date of the application. This depends on the type of visa and the person's situation.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How can I find out what's going on with my Indian visa online application online?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Applicants can check on the progress of their visa applications through the VisaCollect website. They just need to enter their application ID and any other information that was given to them when they sent in their application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What do writers and other media workers need in order to get a visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Journalists and other people who work in the media cannot use a Tourist Visa to do work related to news in India. They need a journalist visa even if they are just visiting for fun. This visa needs extra checks and approvals as well.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I change my vacation visa to a different type of visa while I'm in India?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Usually, you can't change from one type of visa to another visa while you are in India. You need to make sure you get the right type of visa for your visit before you even get to the country.",
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
