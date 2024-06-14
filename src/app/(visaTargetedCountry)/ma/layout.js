import Script from "next/script";

export const metadata = {
    title: "Apply Morrocco Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Morrocco visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: "https://www.visacollect.com",
    alternates: {
        canonical: `/ma/`,
    },
    keywords:
        "morocco e visa, morocco e visa online, e visa to morocco, Apply morocco visa online, online morocco visa application",
    openGraph: {
        url: `/ma/`,
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
                                    name: "How Long Does It Take to Process a Morocco eVISA?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Processing typically takes about 3 to 10 business days, depending on the type of visa.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What Documents Do I Need to Apply for a Morocco eVISA?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You'll need your passport, visa application form, a photo, and other documents based on the visa type.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How Do I Apply for a Morocco eVISA Online?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You can apply for a Morocco eVISA online by visiting the official website and following the provided instructions.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "I Made a Mistake on My Application. What Should I Do?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Contact the Moroccan embassy or consulate promptly to rectify any errors.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "My eVISA Application Was Denied. Can I Reapply?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, you can reapply after understanding the reasons for denial and addressing them.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Do I Need to Show Proof of Accommodation and Flight Bookings When Applying for a Morocco eVISA?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, providing these details may be a requirement for your application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How can I extend my stay in Morocco with an e-Visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "E-Visas are usually issued for a specific duration and may not be extendable. However, some e-Visas, such as tourism, business, government visit, goods purchasing, or transit e-Visas, can be extended up to six months with multiple-entry in Morocco. To extend your e-Visa, you need to apply online through the official website of the Directorate General of Immigration of Morocco before your e-Visa expires.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What Should I Do If I Lose or Damage My Morocco eVISA Approval Letter?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "If you lose or damage your Morocco eVISA approval letter, print a new copy from",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What is the validity period of a Morocco e-Visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The validity period of a Morocco e-Visa typically varies based on the visa type and the purpose of travel. For most tourist and business e-Visas, the validity period ranges from 30 days to 90 days. This means that the e-Visa remains valid for the specified number of days from the date of issuance.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What is the difference between a single-entry and a multiple-entry e-Visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A single-entry e-Visa allows you to enter the country only once during the validity period of the visa. If you leave the country, you will need to apply for a new visa to enter again. Whereas, a multiple-entry e-Visa allows you to enter and exit the country multiple times during the validity period of the visa, as long as you do not exceed the allowed duration of stay for each visit. The validity period and the duration of stay vary depending on the type of visa and the country of issue. You can check the specific requirements for each country on their official websites or use a reliable visa online services like visacollect.com.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What is the Interview Waiver (Drop Box) Appointment?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The Interview Waiver, also known as the Drop Box, is a procedure that allows visa applicants who meet certain criteria to submit their application materials without needing to attend a visa interview at the embassy or consulate.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What is a 221g Sheet?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A 221g sheet is a document issued by the U.S. Consulate or Embassy when they need additional documentation or information to finalise the processing of a visa application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How Can I Get Technical Help for Issues with the Appointment Website?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "If you encounter technical issues while scheduling your appointment, you can contact the technical support team at the embassy or consulate where you are applying.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What is the Validity of the Visa Fee?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "The visa fee is typically valid for one year from the date of payment.",
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
