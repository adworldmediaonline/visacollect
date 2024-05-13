import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Be_Vietnam_Pro } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { FormProvider } from "@/context/formContext";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import Script from "next/script";

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
    // robots: {
    //   index: false,
    //   googleBot: {
    //     index: false,
    //   },
    // },
    title: "24X7 Online Visa Services | Get Your Visa Apply Today",
    description:
        "Plan your stress-free travel with our 24/7 online visa services. Enjoy quick and reliable visa processing at any time. Apply Visa Today.",
    metadataBase: new URL("https://visacollect.com"),

    alternates: {
        canonical: "/",
    },
    keywords:
        "visa application, apply for visa, online visa application, visa services, apply visa online, online visa, online visa services, e visa services, apply for e visa, Online visa services apply Today",

    openGraph: {
        url: "/",
    },
    verification: {
        google: "YsTlOsZiwtGZbGt2tjHOKhd10CXrHKhEez-SUhmCDg0",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${beVietnamPro.className} antialiased flex flex-col min-h-screen`}
            >
                <FormProvider>
                    <ReactQueryProvider>
                        <Header />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <ToastContainer />
                    </ReactQueryProvider>
                </FormProvider>
                <GoogleTagManager gtmId="G-FRMR0BTRLH" />
                <GoogleAnalytics gaId="G-FRMR0BTRLH" />
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org/",
                                "@type": "WebSite",
                                name: "Visa Collect",
                                url: "https://visacollect.com/",
                                potentialAction: {
                                    "@type": "SearchAction",
                                    target: "{search_term_string}",
                                    "query-input":
                                        "required name=search_term_string",
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "TouristInformationCenter",
                                name: "Visa Collect",
                                image: "https://visacollect.com/",
                                "@id": "",
                                url: "https://visacollect.com/",
                                telephone: "‎+91 82914 35253",
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress:
                                        "Plot No. 136, 3rd Floor, Rider House, Sector 44",
                                    addressLocality: "Gurugram",
                                    postalCode: "122003",
                                    addressCountry: "IN",
                                },
                                geo: {
                                    "@type": "GeoCoordinates",
                                    latitude: 28.4514829,
                                    longitude: 77.0751763,
                                },
                                openingHoursSpecification: {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                    ],
                                    opens: "09:00",
                                    closes: "18:00",
                                },
                                sameAs: [
                                    "https://www.facebook.com/people/Visa-Collect/61556054082156/?mibextid=ZbWKwL",
                                    "https://twitter.com/visacollect",
                                    "https://www.instagram.com/visacollect/?igsh=MXFjbzFpZDJlNHZmaw%3D%3D",
                                    "https://www.linkedin.com/in/visa-collect-9283752b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                                ],
                            },
                        ]),
                    }}
                />
            </body>
        </html>
    );
}
