import Script from "next/script";

export const metadata = {
    title: "Apply Egypt Visa Online | Visa collect",
    description:
        "Effortlessly apply for your Egypt visa online through Visa Collect. Streamline your travel plans with our convenient application process.",
    metadataBase: "https://www.visacollect.com",
    alternates: {
        canonical: `/eg/`,
    },
    keywords:
        "egypt e visa, apply for egypt visa, online visa for egypt, egypt e visa online, Apply egypt visa online, egypt visa application, egypt online visa application",
    openGraph: {
        url: `/eg/`,
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
                                    name: "How far in advance of my trip should I apply for my Egypt e-visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "It is advised to apply for your Egypt e-visa at least 30 days in advance of the date you want to go to allow for processing time and to take care of any potential problems.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Can I enter Egypt more than once with my Egypt e-visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Typically, an Egypt e-visa is only good for one entrance. However, for people who must enter the nation more than once in a short period, multiple entry visas might be available. Please make this criterion clear when submitting your application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What happens if my application for an e-visa is denied?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "If your visa application is denied, you should review the comments or explanations given before proceeding. To learn more about the reasons in detail and to get advice on reapplying or fixing any problems with your application, get in touch with VisaCollect's customer service.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is there a certain kind of photo required for the visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, a colour, white-background photo that was shot within the last six months is required for your visa application. Without a hat or shades, it should be a full-face shot facing the camera.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "How do minors apply for an Egypt electronic visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "A parent or legal guardian must apply on behalf of a minor. Copies of their birth certificate and, if they are travelling with their parents or guardians, information on their visas should also be included in their application.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Is it feasible for me to stay in Egypt longer than the time allowed by my visa?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "It is feasible for you to stay longer. Before your existing visa expires, you must request an extension at the closest immigration office in Egypt. Recognise that approval is situation-specific and not granted automatically.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What occurs if my trip to Egypt ends soon after my passport expires?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "At least six months must pass after the date of your admission into Egypt for your passport to be valid. Before requesting an Egypt e-visa, you should renew your passport if it will expire soon after your trip.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "What COVID-19 criteria or restrictions apply when visiting Egypt?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Requirements for travel can change quickly. Please visit the official Egyptian government website or get in touch with VisaCollect's customer care for the most recent information on travel warnings and requirements about health.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "I have a tourist visa; can I work in Egypt?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "No, holders with a tourist visa are not allowed to work in Egypt in any capacity. You should apply for the necessary work visa through the proper channels if you plan to work",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "If I misplace my passport in Egypt, what should I do?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Inform the local police and get in touch with the embassy or consulate of your country in Egypt right away if you misplace your passport while visiting Egypt. They can help you with the processes involved in getting an emergency passport or travel document so you can return home.",
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
