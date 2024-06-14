import Script from "next/script";

export const metadata = {
    title: "Apply Malaysia Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Malaysia visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: "https://www.visacollect.com",
    alternates: {
        canonical: `/my/`,
    },
    keywords:
        "Apply malaysia visa online,malaysia e visa online, apply to malaysia visa online, malaysia tourist visa online, malaysia tourist visa online, malaysia visit visa apply online, online e visa malaysia, malaysia work visa online apply, malaysia e visa apply online, apply for malaysia visa, application for malaysia visa ",
    openGraph: {
        url: `/my/`,
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
                                    name: "At what time of year is Malaysia the best to visit?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Most of the time, March through early October is the best time to visit Malaysia because the weather is dry, especially on the west coast, where Kuala Lumpur and Penang are situated.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Which Malaysian sites really should not be missed?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The Petronas Twin Towers in Kuala Lumpur, the ancient city of George Town in Penang, the lush Cameron Highlands, and the beautiful islands of Langkawi and Perhentian are some of the most popular places to visit.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "I'm going to Malaysia; what should I pack?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A good sunscreen, comfortable walking shoes, a jacket or umbrella for unexpected showers and lightweight clothing appropriate for hot and humid weather are musts. Remember to bring adapters for the Type G, 240V plugs in Malaysia.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is there anything cultural that I should know about Malaysia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "With major Malay, Chinese, and Indian populations, Malaysia is a multicultural nation. It's crucial to honour regional traditions and religious rites. For example, it is normal to take off your shoes before entering homes and places of worship.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Where can I change money and what currency is used in Malaysia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Used currency is the Malaysian Ringgit (MYR). All over the nation, banks, airports, and licenced money changers accept exchanges of currency. A lot of ATMs are available to get local cash.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How easy is it to travel about Malaysia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Malaysia boasts a highly developed transport system. Buses, trains and taxis are among the many and reasonably priced forms of public transportation in cities. There are local flights, buses, and trains for travel between cities.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How should I expect to eat in Malaysia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "As befits its multinational population, Malaysian food is highly varied. Staples include Roti Canai, Satay, and Nasi Lemak. Every ethnic group has its own flavours, and you have to try street food. Every ethnic group has its own specialties, and you really must sample the street food.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What conditions must I meet to get a Malaysian visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "For the most part, visitors to Malaysia require a visa, which varies according on nationality. Usually, you need a legal passport, proof that you have enough money, confirmed return tickets, and hotel reservations.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Are visitors secure in Malaysia?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Most people think Malaysia is safe for tourists. But, as with any travel place, it's best to follow normal safety rules, stay away from less touristy areas at night, and keep an eye on your belongings.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I use Malaysian mobile phones?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Good cellphone coverage in Malaysia means that many tourists decide to get a local SIM card for calls and data. Buy a SIM only after making sure your phone is unlocked.",
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
