export const metadata = {
    title: "Apply Japan Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Japan visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: "https://www.visacollect.com",
    alternates: {
        canonical: `/jp/`,
    },
    keywords:
        "Apply japan visa online, japan visit visa online apply, visa application for japan, japan work visa online apply, apply for japan tourist visa online, apply japan tourist visa online ",
    openGraph: {
        url: `/jp/`,
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
                                    name: "How long does it take VisaCollect to process a Japan tourist visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A tourist visa to Japan normally takes 4-5 days to process. Applying far in advance of your travel dates is advised, though, to prevent any last-minute problems.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What paperwork must I include with my online application for a business visa to Japan?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A current passport, filled out application form, recent passport-size photo, proof of return (such a return ticket), financial sufficiency proof (bank statements), invitation letter from Japanese business contact or conference details are all required to apply for a business visa in Japan.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I get a Japan visa if my passport is about to expire?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "YYour passport needs to have two blank pages for stamps and to be valid for at least six months after your anticipated stay in Japan. Applying for the visa should be done before renewing your passport if it is about to expire.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is applying for a visa to Japan need travel insurance?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Though it is not required for the visa application, having comprehensive travel insurance is strongly advised to cover any medical emergencies and travel-related problems while you are in Japan.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "I applied for a visa to Japan; what should I do?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "If VisaCollect denies your visa application, you can get information on why and how to address the problems. Reapplying could need you to supply more paperwork or fix any mistakes in your first application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is there a way to speed up my VisaCollect application for a Japan visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "In case of urgent visa applications, VisaCollect does provide expedited processing. Talk to one of our Visa Experts about the possibilities and any extra costs that might be involved with accelerated services.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Which kind of photo is needed for the application for a visa to Japan?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "ou require a current, passport-size colour photo with a simple background—typically white. The image has to satisfy the Japanese Embassy's exact specifications for size and quality.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How can I demonstrate that I have enough money to get into Japan?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Financial sufficiency can be demonstrated using income tax returns, bank statements covering the previous six months, or documentation of other financial assets such fixed deposits and real estate investments.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Are there any additional requirements for applying for a Japan medical visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Indeed, you must submit documentation from the Japanese hospital attesting to your treatment details, your capacity to pay for the treatment, and occasionally a recommendation from a medical facility in your home country in order to obtain a medical visa for Japan.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I include family members on my Japan visa application?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You may, in fact, apply for a visa with family members. Every member must turn in their own collection of paperwork, and if you are married or have children, you must show documentation of your relationship.",
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
