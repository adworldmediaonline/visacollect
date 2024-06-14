export const metadata = {
    title: "Apply Thailand Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Thailand visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: new URL("https://www.visacollect.com"),

    alternates: {
        canonical: "/th/",
    },
    keywords:
        "apply thailand visa online, thailand e visa on arrival, e visa for thailand, apply e visa for thailand, thailand visa online, thailand tourist visa, thailand visa on arrival, thailand visa",

    openGraph: {
        url: "/th/",
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
                                    name: "How long before my trip should I apply for a Thailand visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "To allow for processing time and any unexpected delays, you should apply for your Thailand visa at least 4 to 6 weeks before you plan to journey.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I get a visa for Thailand even though I have a crime record?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "People who have certain types of crime records may have trouble getting a Thailand visa. If you need special advice based on your own situation, you should talk to the Royal Thai Embassy or Consulate.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I only stay in Thailand for a certain amount of time with a tourist visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Tourist cards usually let you stay for up to 60 days at a time. It's possible to get more time, but only if the Thai immigration officials agree.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is it possible to get a Thailand visa while I'm already there?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "No, most visa applications need to be sent from outside of Thailand. But you can apply for some types of visas, like visa extensions, while you are in the country.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Do kids need their own different visas to enter Thailand?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, even if they are in a parent's passport, children (even babies and young children) need their own visa to enter Thailand.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "If I make a mistake on my Thailand visa application form online, what should I do?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Before sending in your application, it's very important to check all of the information again. If there are mistakes or errors, they could cause delays or even be turned down. Get help from VisaCollect's support team to figure out how to fix any mistakes.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "If I have a Thailand visa, can I go to other countries?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You may or may not be able to visit other countries while you are in Thailand depending on the terms of your visa. For more information, talk to the Royal Thai Embassy or Consulate.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Are there any specific health needs to get a visa for Thailand?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A Thailand visa doesn't have any health standards, but if you have certain health problems or have recently been to certain areas, they may be taken into account during the application process.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "If I work for myself, can I still apply for Thailand visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "People who work for themselves can apply for Thailand visa. But they might need to show more proof to back their application, like papers proving they are a business or financial statements.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I apply for Thailand visa that lets me enter the country more than once?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You can get multiple-entry visas for some types of visas, like work visas. These visas let you enter Thailand more than once within a certain time frame, which is helpful for people who move a lot.",
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
