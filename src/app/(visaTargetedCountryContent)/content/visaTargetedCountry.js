import IndianVisaForAustralia from "./indianVisa/australia.mdx";
import TurkeyVisaForAustralia from "./turkeyVisa/australia.mdx";
import ThailandVisaForAustralia from "./thailandVisa/australia.mdx";
import IndianVisaForUK from "./indianVisa/uk.mdx";
import TurkeyVisaForUK from "./turkeyVisa/uk.mdx";
import ThailandVisaForUK from "./thailandVisa/uk.mdx";
import IndianVisaForCanada from "./indianVisa/canada.mdx";
import TurkeyVisaForCanada from "./turkeyVisa/canada.mdx";
import ThailandVisaForCanada from "./thailandVisa/canada.mdx";
import IndianVisaForUAE from "./indianVisa/uae.mdx";
import IndianVisaForUS from "./indianVisa/us.mdx";
import TurkeyVisaForUS from "./turkeyVisa/us.mdx";
import ThailandVisaForUS from "./thailandVisa/us.mdx";
import IndianVisaForSingapore from "./indianVisa/singapore.mdx";
import IndianVisaForThailand from "./indianVisa/thailand.mdx";
import { australiaFaq } from "./targetedCountrySubPagesFaq/australia/indianVisa/australiaFaq";
import { ukFaq } from "./targetedCountrySubPagesFaq/ukFaq/indianVisa/ukFaq";
import { usFaq } from "./targetedCountrySubPagesFaq/usFaq/indianVisa/usFaq";
import { canadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/indianVisa/canadaFaq";
import { turkeyAustraliaFaq } from "./targetedCountrySubPagesFaq/australia/turkeyVisa/australiaFaq";
import { turkeyUkFaq } from "./targetedCountrySubPagesFaq/ukFaq/turkeyVisa/ukFaq";
import { turkeyVisaCanadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/turkeyVisa/canadaFaq";
import { turkeyVisaUsFaq } from "./targetedCountrySubPagesFaq/usFaq/turkeyVisa/turkeyVisaUsFaq";
import { thailandVisaAustraliaFaq } from "./targetedCountrySubPagesFaq/australia/thailandVisa/thailandVisaAustraliaFaq";
import { thailandVisaCanadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/thailandVisa/thailandVisaCanadaFaq";
import { thailandVisaUKFaq } from "./targetedCountrySubPagesFaq/ukFaq/thailandVisa/thailandVisaUkFaq";
import { thailandVisaUsFaq } from "./targetedCountrySubPagesFaq/usFaq/thailandVisa/thailandVisaUsFaq";

export const visaPromotedInAustralia = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            name: "Australia",
            code: "AU",
            slug: "indian-tourist-visa-for-australian-citizens",
            countryPage: <IndianVisaForAustralia />,
            pageTitle: "Indian Tourist Visa for Australian Citizens",
            // pageTitleDescription: '',
            faq: australiaFaq,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: "Apply Indian tourist visa for Australian citizens | Visa Collect",
                description:
                    "Looking to visit India as an Australian citizen? Apply for your Indian tourist visa for Australian citizen with ease and convenience. Let us help you with the process. Apply now!                                ",
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/indian-tourist-visa-for-australian-citizens",
                },
                keywords:
                    "india tourist visa for australian citizens, indian visa for australian citizens, indian tourist visa for australian citizens, indian visa fees for australian citizens, indian tourist visa fees for australian citizens",

                openGraph: {
                    url: "/indian-tourist-visa-for-australian-citizens",
                },
            },
        },
    },
    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            name: "Australia",
            code: "AU",
            slug: "turkey-visa-for-australian-citizens",
            countryPage: <TurkeyVisaForAustralia />,
            pageTitle:
                "Australia to Turkey: Apply for Your Turkish visa for Australian citizens",
            pageTitleDescription:
                "Hop on your favourite flight to Turkey with VisaCollect’s Speedy eVisa services now.",
            faq: turkeyAustraliaFaq,
            faqTitle: `Some FAQs for Australian Travelers Traveling to Turkey`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: "Turkey Visa for Australian Citizens | Visa collect",
                description: `If you are looking for a Turkey visa for Australian citizens,here's a general guide for Australian citizens applying for a Turkey visa.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/turkey-visa-for-australian-citizens",
                },
                keywords: `turkey visa for australian citizens, turkey visa requirements for australian citizens, visa to turkey from australia, turkey visa for australians
, turkish visa for australian citizens`,

                openGraph: {
                    url: "/turkey-visa-for-australian-citizens",
                },
            },
        },
    },
    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            name: "Australia",
            code: "AU",
            slug: "thailand-visa-for-australian-citizens",
            countryPage: <ThailandVisaForAustralia />,
            pageTitle:
                "Australia to Thailand: Apply for Thailand eVisa Fast with VisaCollect",
            pageTitleDescription:
                "Enjoy the beauty and diversity of Thailand with VisaCollect’s convenient and secure eVisa service.",
            faq: thailandVisaAustraliaFaq,
            faqTitle: `Some FAQs for Aussies Travelling to Thailand from Australia`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: "Thailand Visa for Australian Citizens at Visa Collect",
                description: `If you want a Thailand visa for Australian citizens, this is the
right place to learn about the important things you need to know before traveling.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/thailand-visa-for-australian-citizens",
                },
                keywords: `thailand visa for australian citizens, thailand entry requirements for australian citizens, thailand visa australian citizen, thailand visa for australian permanent residents, thailand visa on arrival for australian citizens`,

                openGraph: {
                    url: "/thailand-visa-for-australian-citizens",
                },
            },
        },
    },
];

export const visaPromotedInUk = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            name: "United Kingdom",
            code: "UK",
            slug: "apply-for-india-visa-from-uk",
            countryPage: <IndianVisaForUK />,
            faq: ukFaq,
            pageTitle: `India Tourist Visa for the UK Citizens Traveling to India`,
        },
    },
    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            name: "United Kingdom",
            code: "UK",
            slug: "turkey-evisa-for-uk-citizens",
            countryPage: <TurkeyVisaForUK />,
            faq: turkeyUkFaq,
            faqTitle: "FAQs for Turkish e-Visas for UK Citizens",
            pageTitle: `UK to Turkey: Apply for Turkey e Visa Now at Speed with VisaCollect`,
            pageTitleDescription: `Apply your most awaited Turkey Visa-Easy & Fast-with visacollect now!`,
        },
    },
    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            name: "United Kingdom",
            code: "UK",
            slug: "thailand-visa-for-uk-citizens",
            countryPage: <ThailandVisaForUK />,
            faq: thailandVisaUKFaq,
            faqTitle: "Some UK to Thailand e Visa FAQs ",
            pageTitle: `UK to Thailand: Apply for Your Thailand eVisa Now!`,
            pageTitleDescription: `Obtain your Thailand e-Visa with VisaCollect's Easy & Fast Process Today!`,
        },
    },
];
export const visaPromotedInCanada = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            name: "Canada",
            code: "CA",
            slug: "india-evisa-for-canadian-citizens",
            countryPage: <IndianVisaForCanada />,
            faq: canadaFaq,
            pageTitle:
                "Canada to India: Apply for Your India tourist visa for canadian citizens",
            pageTitleDescription:
                "Explore the land of wonders and uncover the unseen with VisaCollect.",
        },
    },
    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            name: "Canada",
            code: "CA",
            slug: "turkish-visa-for-canadian-citizens",
            countryPage: <TurkeyVisaForCanada />,
            faq: turkeyVisaCanadaFaq,
            faqTitle: `Some FAQs to Further Ease Your Turkish eVisa Application Process`,
            pageTitle:
                "Canada to Turkey: Apply for Turkey eVISA for Canadian Citizens",
            pageTitleDescription:
                "Explore Turkey from north to south and east to west with visaCollect’s fast and secure Visa Services!",
        },
    },
    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            name: "Canada",
            code: "CA",
            slug: "thailand-visa-for-canadian-citizens",
            countryPage: <ThailandVisaForCanada />,
            faq: thailandVisaCanadaFaq,
            faqTitle: `Some FAQs for Canadian Travelers Traveling to Thailand`,
            pageTitle:
                "Canada to Thailand: Apply for Thailand eVisa with VisaCollect at Speed",
            pageTitleDescription:
                "Discover the wonders of Thailand with VisaCollect’s fast and easy eVisa service.",
        },
    },
];
export const visaPromotedInUs = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            name: "United States",
            code: "US",
            slug: "indian-visa-for-us-citizens",
            countryPage: <IndianVisaForUS />,
            faq: usFaq,
            pageTitle: `Indian Tourist Visa for American Citizens`,
            pageTitleDescription: `Explore India with our seamless online visa services!`,
        },
    },
    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            name: "United States",
            code: "US",
            slug: "turkey-visa-for-us-citizens",
            countryPage: <TurkeyVisaForUS />,
            faq: turkeyVisaUsFaq,
            pageTitle: `USA to Turkey: Apply for Turkey eVOA for US Citizens at High Velocity`,
            pageTitleDescription: `Introducing the Turkish eVisa with VisaCollect’s fast & hassle-free visa services.`,
        },
    },
    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            name: "United States",
            code: "US",
            slug: "thailand-tourist-visa-us-citizens",
            countryPage: <ThailandVisaForUS />,
            faq: thailandVisaUsFaq,
            faqTitle: `USA to Thailand Frequently Asked Questions (FAQs)`,
            pageTitle: `US to Thailand: Apply Thailand e Visa for US Citizens`,
            pageTitleDescription: `Get Your Thailand e-Visa in 3 Easy-Steps with VisaCollect Now!`,
        },
    },
];
export const visaPromotedInThailand = [
    {
        id: 5,
        visa: "Indian Visa",
        targetedCountry: {
            name: "Thailand",
            code: "TH",
            slug: "apply-indian-visa-from-thailand",
            countryPage: <IndianVisaForThailand />,
            faq: [],
        },
    },
];
export const visaPromotedInUAE = [
    {
        id: 6,
        visa: "Indian Visa",
        targetedCountry: {
            name: "United Arab Emirates",
            code: "AE",
            slug: "apply-for-india-visa-from-uae",
            countryPage: <IndianVisaForUAE />,
            faq: [],
            pageTitle: `UAE to India: Apply for Your Indian eVisa to UAE Today at Speed with VisaCollect`,
            pageTitleDescription: `Plan your visit to India with VisaCollect’s Fast and Reliable eVisa Services In UAE`,
        },
    },
];

export const visaPromotedInSingapore = [
    {
        id: 7,
        visa: "Indian Visa",
        targetedCountry: {
            name: "Singapore",
            code: "SG",
            slug: "evisa-india-for-singapore-citizens",
            countryPage: <IndianVisaForSingapore />,
            faq: [],
        },
    },
];
