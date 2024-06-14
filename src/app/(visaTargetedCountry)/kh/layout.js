export const metadata = {
    title: "Apply Cambodia Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Cambodia visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: "https://www.visacollect.com",
    alternates: {
        canonical: `/kh/`,
    },
    keywords:
        "Cambodia visa, Cambodia e-Visa, cambodia tourist visa, cambodia travel visa, cambodia visa online, cambodia e-visa online, evisa kingdom of cambodia, cambodia e visa application, apply cambodia visa online",
    openGraph: {
        url: `/kh/`,
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
                                    name: "What payment options are acceptable for Cambodia's e-visa application fee?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "VisaCollect makes it easy for you to pay the application fee by accepting several payment options, such as bank transfers, PayPal, and credit/debit cards.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I apply for a Cambodia e-visa if I have a criminal history?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Those who have a criminal history ought to reveal this information when applying. Additional documentation may be needed, and approval is contingent to the judgement of the Cambodian authorities.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is having travel insurance a must for an e-visa to Cambodia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Travel insurance is strongly advised in order to cover any medical emergencies and trip disruptions, even though it is not required in order to obtain a Cambodia e-visa.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "In what ways may I monitor the progress of my Cambodian eVisa application?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "By utilising the application reference number you were given at the time of submission, you can use the VisaCollect platform to track the progress of your application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "If there is a mistake on my Cambodia e-visa, what should I do?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Get in touch with VisaCollect right away if you discover a mistake on your passport. You can make changes prior to your trip, but it's important to double-check everything as soon as you receive it.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can minors apply online for an e-visa to Cambodia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, minors are able to apply online for an e-visa to Cambodia. Additional documentation, such as birth certificates and consent letters, must be provided by parents or legal guardians.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Which immunisations are advised prior to visiting Cambodia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Although not necessary, vaccinations against typhoid, hepatitis A, hepatitis B, and basic vaccines like tetanus and MMR should be renewed prior to travelling to Cambodia.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can a tourist visa allow me to work in Cambodia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "No, you cannot work in Cambodia on a tourist visa. You must apply for the appropriate work visa or permission if you intend to work.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "If my application for a Cambodia e-visa is denied, what should I do?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You will receive notification if your application is denied for any reason. You can fix the problems and submit another application, or you can ask VisaCollect's support staff for more advice.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Are there any warnings or limits on travel to Cambodia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Before you go, find out if the governments of Cambodia or your own nation have issued any advisories or restrictions on travel. This covers data on natural disasters, political crises, and health and safety.",
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
