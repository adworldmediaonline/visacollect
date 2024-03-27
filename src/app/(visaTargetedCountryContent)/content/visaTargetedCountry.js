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
import AustraliaVisaForIndia from "./australiaVisa/india.mdx";
import AustraliaVisaForUk from "./australiaVisa/uk.mdx";
import AustraliaVisaForUS from "./australiaVisa/us.mdx";
import AustraliaVisaForSingapore from "./australiaVisa/singapore.mdx";
import SrilankaVisaForCanada from "./srilankaVisa/canada.mdx";
import SrilankaVisaForIndia from "./srilankaVisa/india.mdx";
import SrilankaVisaForUk from "./srilankaVisa/uk.mdx";
import SrilankaVisaForUS from "./srilankaVisa/us.mdx";
import { australiaFaq } from "./targetedCountrySubPagesFaq/australia/indianVisa/australiaFaq";
import { ukFaq } from "./targetedCountrySubPagesFaq/ukFaq/indianVisa/ukFaq";
import { usFaq } from "./targetedCountrySubPagesFaq/usFaq/indianVisa/usFaq";
import { turkeyAustraliaFaq } from "./targetedCountrySubPagesFaq/australia/turkeyVisa/australiaFaq";
import { turkeyUkFaq } from "./targetedCountrySubPagesFaq/ukFaq/turkeyVisa/ukFaq";
import { turkeyVisaCanadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/turkeyVisa/canadaFaq";
import { turkeyVisaUsFaq } from "./targetedCountrySubPagesFaq/usFaq/turkeyVisa/turkeyVisaUsFaq";
import { thailandVisaAustraliaFaq } from "./targetedCountrySubPagesFaq/australia/thailandVisa/thailandVisaAustraliaFaq";
import { thailandVisaCanadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/thailandVisa/thailandVisaCanadaFaq";
import { thailandVisaUKFaq } from "./targetedCountrySubPagesFaq/ukFaq/thailandVisa/thailandVisaUkFaq";
import { thailandVisaUsFaq } from "./targetedCountrySubPagesFaq/usFaq/thailandVisa/thailandVisaUsFaq";
import { australiaVisaIndiaFaq } from "./targetedCountrySubPagesFaq/india/australiaVisa/australiaVisaIndiaFaq";
import { australiaVisaUkFaq } from "./targetedCountrySubPagesFaq/ukFaq/australiaVisa/ukFaq";
import { australiaVisaUsFaq } from "./targetedCountrySubPagesFaq/usFaq/australiaVisa/australiaVisaUsFaq";
import { australiaVisaSingaporeFaq } from "./targetedCountrySubPagesFaq/singapore/australiaVisa/australiaVisaSingaporeFaq";
import { srilankaVisaUkFaq } from "./targetedCountrySubPagesFaq/ukFaq/srilankaVisa/ukFaq";
import { srilankaVisaCanadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/srilankaVisa/canadaFaq";
import { srilankaVisaIndiaFaq } from "./targetedCountrySubPagesFaq/india/srilankaVisa/indiaFaq";
import { srilankaVisaUsFaq } from "./targetedCountrySubPagesFaq/usFaq/srilankaVisa/usFaq";
import { canadaFaq } from "./targetedCountrySubPagesFaq/canadaFaq/indianVisa/canadaFaq";

function setRelatedBlogs(visas, baseUrl) {
    const relatedBlogs = [];
    for (const visa of visas) {
        relatedBlogs.push({
            metadata: visa.targetedCountry.metadata,
            href: `/${baseUrl}/${visa.targetedCountry.slug}`,
            slug: visa.targetedCountry.slug,
        });
    }
    return relatedBlogs;
}

function finalPromotedVisaAfterRelatedBlogs(visas, baseUrl) {
    visas.forEach((visa) => {
        visa.targetedCountry.relatedBlogs = setRelatedBlogs(visas, baseUrl);
    });
}

// visa promoted in australia
export const visaPromotedInAustralia = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "Australia",
            code: "AU",
            slug: "indian-tourist-visa-for-australian-citizens",
            countryPage: <IndianVisaForAustralia />,
            pageTitle: "Indian Tourist Visa for Australian Citizens",
            faq: australiaFaq,
            metadata: {
                title: "Apply Indian tourist visa for Australian citizens | Visa Collect",
                description:
                    "Looking to visit India as an Australian citizen? Apply for your Indian tourist visa for Australian citizen with ease and convenience. Let us help you with the process. Apply now!",
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical:
                        "/au/indian-tourist-visa-for-australian-citizens",
                },
                keywords:
                    "india tourist visa for australian citizens, indian visa for australian citizens, indian tourist visa for australian citizens, indian visa fees for australian citizens, indian tourist visa fees for australian citizens",

                openGraph: {
                    url: "/au/indian-tourist-visa-for-australian-citizens",
                },
            },
        },
    },

    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            applyNow: "/tr",
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
                title: "Turkey Visa for Australian Citizens | Visa collect",
                description: `If you are looking for a Turkey visa for Australian citizens,here's a general guide for Australian citizens applying for a Turkey visa.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/au/turkey-visa-for-australian-citizens",
                },
                keywords: `turkey visa for australian citizens, turkey visa requirements for australian citizens, visa to turkey from australia, turkey visa for australians
, turkish visa for australian citizens`,

                openGraph: {
                    url: "/au/turkey-visa-for-australian-citizens",
                },
            },
        },
    },

    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            applyNow: "/th",
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
                title: "Thailand Visa for Australian Citizens at Visa Collect",
                description: `If you want a Thailand visa for Australian citizens, this is the
right place to learn about the important things you need to know before traveling.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/au/thailand-visa-for-australian-citizens",
                },
                keywords: `thailand visa for australian citizens, thailand entry requirements for australian citizens, thailand visa australian citizen, thailand visa for australian permanent residents, thailand visa on arrival for australian citizens`,

                openGraph: {
                    url: "/au/thailand-visa-for-australian-citizens",
                },
            },
        },
    },
];

// visa promoted in uk
export const visaPromotedInUk = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "United Kingdom",
            code: "UK",
            slug: "apply-for-india-visa-from-uk",
            countryPage: <IndianVisaForUK />,
            faq: ukFaq,
            pageTitle: `India Tourist Visa for the UK Citizens Traveling to India`,
            metadata: {
                title: "India Visa - Apply for India Visa from UK",
                description:
                    "As you apply for India visa from UK, you are opening the doors to a world of experiences that await. So, Begin your Indian adventure with confidence!",
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/uk/apply-for-india-visa-from-uk",
                },
                keywords: `e visa india for british citizen, apply for india visa from uk, how can i get a quick visa to india from uk, Apply for Your India eVisa from the UK , India Tourist Visa for UK citizens`,

                openGraph: {
                    url: "/uk/apply-for-india-visa-from-uk",
                },
            },
        },
    },

    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            applyNow: "/tr",
            name: "United Kingdom",
            code: "UK",
            slug: "turkey-evisa-for-uk-citizens",
            countryPage: <TurkeyVisaForUK />,
            faq: turkeyUkFaq,
            faqTitle: "FAQs for Turkish e-Visas for UK Citizens",
            pageTitle: `UK to Turkey: Apply for Turkey e Visa Now at Speed with VisaCollect`,
            pageTitleDescription: `Apply your most awaited Turkey Visa-Easy & Fast-with visacollect now!`,
            metadata: {
                title: "Turkey E-Visa for UK Citizens - Visa Collect",
                description: `"Apply for a Turkey E-Visa for UK citizens in just a few simple steps:
Visit the website, Visa Collect, Fill out the Application form. Make the Payment and Receive E-Visa"`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/uk/turkey-evisa-for-uk-citizens",
                },
                keywords: `turkey visa for uk citizens, visa to turkey from uk, turkey visa on arrival for uk citizens, turkey e visa for uk citizens, turkish visa for uk nationals, turkish visa for uk citizens`,

                openGraph: {
                    url: "/uk/turkey-evisa-for-uk-citizens",
                },
            },
        },
    },

    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            applyNow: "/th",
            name: "United Kingdom",
            code: "UK",
            slug: "thailand-visa-for-uk-citizens",
            countryPage: <ThailandVisaForUK />,
            faq: thailandVisaUKFaq,
            faqTitle: "Some UK to Thailand e Visa FAQs ",
            pageTitle: `UK to Thailand: Apply for Your Thailand eVisa Now!`,
            pageTitleDescription: `Obtain your Thailand e-Visa with VisaCollect's Easy & Fast Process Today!`,
            metadata: {
                title: "Travel to Thailand | Thailand Visa for UK Citizens",
                description: `Thailand Visa for UK Citizens: Before you travel, you must obtain
a visa if you plan to stay longer (for employment, study, or other purposes).`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/uk/thailand-visa-for-uk-citizens",
                },
                keywords: `thailand visa for uk citizens, thailand visa requirements for uk citizens, visa for thailand from uk, thai visa for uk citizen, tourist visa for thailand from uk`,

                openGraph: {
                    url: "/uk/thailand-visa-for-uk-citizens",
                },
            },
        },
    },

    {
        id: 4,
        visa: "Australia Visa",
        targetedCountry: {
            applyNow: "/au",
            name: "United Kingdom",
            code: "UK",
            slug: "australian-visa-for-uk-citizens",
            countryPage: <AustraliaVisaForUk />,
            faq: australiaVisaUkFaq,
            faqTitle: "Frequently Asked Questions for Australian eVisa",
            pageTitle: `UK to Australia: Australian  eVisa for the Citizens of the United Kingdom (UK)`,
            pageTitleDescription: `Say Hello to Australia or Explore the Beautiful Beaches of Sydney with VisaCollect’s Fast & Secure Visa Application Process! `,
            metadata: {
                title: `Australia visa for UK Citizens | Visa Collect`,
                description: `Visit Visa Collect if you want to apply for the Australia visa for UK
citizens. You may be eligible for an UK Electronic Travel Authority (ETA).`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/uk/australian-visa-for-uk-citizens",
                },
                keywords: `australia tourist visa for uk citizens, australia visa application uk, australia visit visa from uk, holiday visa for australia from uk, uk visa for australian citizens`,

                openGraph: {
                    url: "/uk/australian-visa-for-uk-citizens",
                },
            },
        },
    },
    {
        id: 5,
        visa: "Srilanka Visa",
        targetedCountry: {
            applyNow: "/lk",
            name: "United Kingdom",
            code: "UK",
            slug: "sri-lanka-visa-for-uk-citizens",
            countryPage: <SrilankaVisaForUk />,
            faq: srilankaVisaUkFaq,
            faqTitle: "Some UK to Sri Lanka e Visa FAQs",
            pageTitle: `UK to Sri Lanka: Apply Sri Lanka eVisa for UK Citizens`,
            pageTitleDescription: `Apply your most awaited Turkey Visa-Easy & Fast-with Visacollect now!`,
            metadata: {
                title: `Apply Sri lanka tourist visa for UK citizens | Visa Collect`,
                description: `Looking to visit Sri lanka as an UK citizen? Apply for your Sri lanka tourist visa for UK citizen with ease and convenience. Let us help you with the process. Apply now!`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/uk/sri-lanka-visa-for-uk-citizens",
                },
                keywords: `sri lanka visa for uk citizens, visa requirements for sri lanka for uk citizens, sri lanka tourist visa for uk citizens, sri lanka entry requirements for uk citizens, sri lanka visa for uk citizens cost`,

                openGraph: {
                    url: "/uk/sri-lanka-visa-for-uk-citizens",
                },
            },
        },
    },
];

export const visaPromotedInCanada = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "Canada",
            code: "CA",
            slug: "india-evisa-for-canadian-citizens",
            countryPage: <IndianVisaForCanada />,
            faq: canadaFaq,
            pageTitle:
                "Canada to India: Apply for Your India tourist visa for canadian citizens",
            pageTitleDescription:
                "Explore the land of wonders and uncover the unseen with VisaCollect.",
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Apply your Indian e-visa for Canadian citizens`,
                description: `Applying for your India e-Visa as a Canadian citizen is a streamlined process designed to enhance your travel preparations.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: "/ca/india-evisa-for-canadian-citizens",
                },
                keywords: `india visa for canadian citizens, india e visa for canadian citizens, e visa india for canadian citizens, e visa for india for canadian citizens, e visa india for canadian citizens`,

                openGraph: {
                    url: "/ca/india-evisa-for-canadian-citizens",
                },
            },
        },
    },

    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            applyNow: "/tr",
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
            metadata: {
                title: `Turkish Visa for Canadian Citizens | Turkey eVisa for Canadians`,
                description: `If you are applying for a Turkish visa for Canadian citizens,
ensure your passport is valid for at least 150 days beyond the date you plan to enter Turkey.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/ca/turkish-visa-for-canadian-citizens`,
                },
                keywords: `turkey visa for canadian citizens, e visa turkey for canadian, turkey visa requirements for canadian citizens, turkish visa for canadian permanent residents, turkish visa for canadian citizens`,

                openGraph: {
                    url: "/ca/turkish-visa-for-canadian-citizens",
                },
            },
        },
    },

    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            applyNow: "/th",
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
            metadata: {
                title: `Apply for a Thailand Visa for Canadian Citizens`,
                description: `If you are Applying for a Thailand Visa for Canadian Citizens
You should know that Visa Collect is the fastest and easiest way to obtain a visa online.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/ca/thailand-visa-for-canadian-citizens`,
                },
                keywords: `thailand visa for canadian citizens, visa for thailand from canada, tourist visa for thailand from canada, thai tourist visa canada, thailand tourist visa canada`,

                openGraph: {
                    url: "/ca/thailand-visa-for-canadian-citizens",
                },
            },
        },
    },
    {
        id: 4,
        visa: "Srilanka Visa",
        targetedCountry: {
            applyNow: "/lk",
            name: "Canada",
            code: "CA",
            slug: "sri-lanka-visa-for-canadian-citizens",
            countryPage: <SrilankaVisaForCanada />,
            faq: srilankaVisaCanadaFaq,
            faqTitle: `Some FAQs to Further Ease Your Sri Lanka eVisa Application Process`,
            pageTitle:
                "Canada to Sri Lanka: Apply for Sri Lanka eVisa with VisaCollect at Speed",
            pageTitleDescription:
                "Discover the wonders of Sri Lanka with VisaCollect’s fast and easy eVisa service.",
            metadata: {
                title: `Apply Sri lanka tourist visa for Canada citizens | Visa Collect`,
                description: `Looking to visit Sri lanka as an Canadian citizen? Apply for your Sri lanka tourist visa for Canadian citizen with ease and convenience. Let us help you with the process. Apply now!`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/ca/sri-lanka-visa-for-canadian-citizens`,
                },
                keywords: `"sri lanka visa for canadian citizens, sri lanka visa for canadian passport holders, "sri lanka visa requirements for canadian citizens, apply sri lanka visa for canadian citizens, sri lanka tourist visa for canadian citizens"`,

                openGraph: {
                    url: "/ca/sri-lanka-visa-for-canadian-citizens",
                },
            },
        },
    },
];

export const visaPromotedInUs = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "United States",
            code: "US",
            slug: "indian-visa-for-us-citizens",
            countryPage: <IndianVisaForUS />,
            faq: usFaq,
            pageTitle: `Indian Tourist Visa for American Citizens`,
            pageTitleDescription: `Explore India with our seamless online visa services!`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Indian Visa Online - Apply for e-visa India`,
                description: `US citizens can apply for e-visa India easily with the help of Visacollect. Submit your application with required documents at Visa Collect Application`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/us/indian-visa-for-us-citizens`,
                },
                keywords: `india visa online, indian visa online application, apply for evisa india, apply for indian visa, india e tourist visa`,

                openGraph: {
                    url: "/us/indian-visa-for-us-citizens/",
                },
            },
        },
    },

    {
        id: 2,
        visa: "Turkey Visa",
        targetedCountry: {
            applyNow: "/tr",
            name: "United States",
            code: "US",
            slug: "turkey-visa-for-us-citizens",
            countryPage: <TurkeyVisaForUS />,
            faq: turkeyVisaUsFaq,
            pageTitle: `USA to Turkey: Apply for Turkey eVOA for US Citizens at High Velocity`,
            pageTitleDescription: `Introducing the Turkish eVisa with VisaCollect’s fast & hassle-free visa services.`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Apply for Turkey Visa for US Citizens`,
                description: `Turkey Visa for US Citizens: All US citizens are required to have a valid visa in order to visit Turkey,Whether planning a vacation or a business trip.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/us/turkey-visa-for-us-citizens`,
                },
                keywords: `turkey visa for us citizens, visa to turkey from usa, turkey visa on arrival for us citizens, turkey e visa for us citizens, turkey tourist visa for us citizens `,

                openGraph: {
                    url: "/us/turkey-visa-for-us-citizens",
                },
            },
        },
    },

    {
        id: 3,
        visa: "Thailand Visa",
        targetedCountry: {
            applyNow: "/th",
            name: "United States",
            code: "US",
            slug: "thailand-tourist-visa-us-citizens",
            countryPage: <ThailandVisaForUS />,
            faq: thailandVisaUsFaq,
            faqTitle: `USA to Thailand Frequently Asked Questions (FAQs)`,
            pageTitle: `US to Thailand: Apply Thailand e Visa for US Citizens`,
            pageTitleDescription: `Get Your Thailand e-Visa in 3 Easy-Steps with VisaCollect Now!`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Apply Thailand Tourist Visa For US Citizens | Visa Collect`,
                description: `Thailand Tourist Visa US Citizens:  American citizens can enter Thailand as a tourist for up to 30 days without needing a pre-approved Thai visa.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/us/thailand-tourist-visa-us-citizens`,
                },
                keywords: `thailand visa for us citizens, thailand entry requirements for us citizens, thailand visa requirements for us citizens, thailand visa requirements for american citizens, thailand visa for american citizens, thailand tourist visa for us citizens, thailand tourist visa us citizens `,

                openGraph: {
                    url: "/us/thailand-tourist-visa-us-citizens",
                },
            },
        },
    },

    {
        id: 4,
        visa: "Australia Visa",
        targetedCountry: {
            applyNow: "/au",
            name: "United States",
            code: "US",
            slug: "australia-visa-for-us-citizens",
            countryPage: <AustraliaVisaForUS />,
            faq: australiaVisaUsFaq,
            faqTitle: `FAQs for Australian eVisa to American Citizens`,
            pageTitle: `Australian eVisa for the Citizens of the United States of America (USA): Apply Visa Now!`,
            pageTitleDescription: `eVisa Application for the American citizens travelling to Australia is now a few clicks away!  `,
            metadata: null,
        },
    },
    {
        id: 4,
        visa: "Srilanka Visa",
        targetedCountry: {
            applyNow: "/lk",
            name: "United States",
            code: "US",
            slug: "sri-lanka-tourist-visa-for-us-citizens",
            countryPage: <SrilankaVisaForUS />,
            faq: srilankaVisaUsFaq,
            faqTitle: `USA to Sri Lanka Frequently Asked Questions (FAQs)`,
            pageTitle: `US to Sri Lanka: Apply Sri Lanka eVisa for US Citizens`,
            pageTitleDescription: `Introducing the Sri Lanka eVisa with VisaCollect’s fast & hassle-free visa services.`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Sri Lanka E-Visa for US Citizens | Visa Collect`,
                description: `Effortlessly apply for your Sri Lanka visa online through Visa Collect. Streamline your travel plans with our convenient application process.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/us/sri-lanka-tourist-visa-for-us-citizens`,
                },
                keywords: `sri lanka visa for us citizens, sri lanka tourist visa for us citizens, sri lanka visa requirements for us citizens, sri lanka visa for us passport holders, sri lanka entry requirements for us citizens`,

                openGraph: {
                    url: "/us/sri-lanka-tourist-visa-for-us-citizens",
                },
            },
        },
    },
];

export const visaPromotedInThailand = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "Thailand",
            code: "TH",
            slug: "apply-indian-visa-from-thailand",
            countryPage: <IndianVisaForThailand />,
            faq: [],
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Apply for an Indian visa from Thailand | Visa Collect`,
                description: `Applying for your Indian visa from Thailand is a straightforward process, designed to make your travel preparations convenient and efficient.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/th/apply-indian-visa-from-thailand`,
                },
                keywords: `indian e visa for thai citizens, india visa fee for thai citizens, indian visa from thailand, indian visa online thailand, visa on arrival for thai citizens in india`,

                openGraph: {
                    url: "/th/apply-indian-visa-from-thailand",
                },
            },
        },
    },
];
export const visaPromotedInIndia = [
    {
        id: 1,
        visa: "Australia Visa",
        targetedCountry: {
            applyNow: "/au",
            name: "India",
            code: "IN",
            slug: "australia-visa-apply-from-india",
            countryPage: <AustraliaVisaForIndia />,
            faq: australiaVisaIndiaFaq,
            faqTitle: "",
            pageTitle:
                "India to Australia: Apply for Australian ETA or eVisa - fast & Secure - with VisaCollect",
            pageTitleDescription:
                "Visit your favorite place in Australia with VisaCollect’s Fast and Secure Visa Services In the Country!",
            metadata: {
                title: `Australia visa apply from India | Australia Visa`,
                description: `Indian citizens can apply for an Australia visa from India for several purposes. The common categories include business visas, family/friends visas, and tourist visas.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/in/australia-visa-apply-from-india`,
                },
                keywords: `australia visa apply from india, Australian visa requirements for indian, australia work permit for indian, australian work visa for indian, australia work permit visa fees in india, australia work visa cost for indian, australia work visa requirements for indian citizens`,
                openGraph: {
                    url: "/in/australia-visa-apply-from-india",
                },
            },
        },
    },
    {
        id: 2,
        visa: "Srilanka Visa",
        targetedCountry: {
            applyNow: "/lk",
            name: "India",
            code: "IN",
            slug: "sri-lanka-visa-for-indian-citizens",
            countryPage: <SrilankaVisaForIndia />,
            faq: srilankaVisaIndiaFaq,
            faqTitle: "FAQs for Sri Lanka e-Visas for Indian Citizens",
            pageTitle:
                "India to Sri Lanka: Apply for Sri Lanka Visa or eVisa - fast & Secure - with VisaCollect",
            pageTitleDescription: null,
            metadata: {
                title: `Apply Sri lanka tourist visa for Indian citizens | Visa Collect`,
                description: `Looking to visit Sri lanka as an Indian citizen? Apply for your Sri lanka tourist visa for Indian citizen with ease and convenience. Let us help you with the process. Apply now!`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/in/sri-lanka-visa-for-indian-citizens`,
                },
                keywords: `sri lanka visa for indian citizens, sri lanka visa requirements for indian citizens, sri lanka tourist visa requirements for indian citizens, sri lanka tourist visa for indian citizens on arrival, sri lanka visa cost for indian citizens `,
                openGraph: {
                    url: "/in/sri-lanka-visa-for-indian-citizens",
                },
            },
        },
    },
];
export const visaPromotedInUAE = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "United Arab Emirates",
            code: "AE",
            slug: "apply-for-india-visa-from-uae",
            countryPage: <IndianVisaForUAE />,
            faq: [],
            pageTitle: `UAE to India: Apply for Your Indian eVisa to UAE Today at Speed with VisaCollect`,
            pageTitleDescription: `Plan your visit to India with VisaCollect’s Fast and Reliable eVisa Services In UAE`,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `India Tourist Visa for UAE Residents | Tourist eVisa`,
                description: `Get your India tourist visa for UAE residents online at Visa Collect. And explore the rich culture, diverse landscapes of India.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/ae/apply-for-india-visa-from-uae`,
                },
                keywords: `india tourist visa for uae residents, india visa for uae residents, indian visa for emirati, indian visa for emiratis citizens, india e visa for emirati citizens`,
                openGraph: {
                    url: "/ae/apply-for-india-visa-from-uae",
                },
            },
        },
    },
];

export const visaPromotedInSingapore = [
    {
        id: 1,
        visa: "Indian Visa",
        targetedCountry: {
            applyNow: "/in",
            name: "Singapore",
            code: "SG",
            slug: "evisa-india-for-singapore-citizens",
            countryPage: <IndianVisaForSingapore />,
            faq: [],
            metadata: {
                title: `Indian visa for Singapore Citizens| Visa Collect`,
                description: `If you are applying for a Indian visa for Singapore citizens. Don't forget to verify if the procedure for applying for a visa has any new requirements.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/sg/evisa-india-for-singapore-citizens`,
                },
                keywords: `indian visa for singapore citizens, india visa for singapore citizens, apply for indian visa for singapore citizens, india visa processing time singapore, india e visa fee for singaporean`,
                openGraph: {
                    url: `/sg/evisa-india-for-singapore-citizens`,
                },
            },
        },
    },

    {
        id: 2,
        visa: "Australia Visa",
        targetedCountry: {
            applyNow: "/au",
            name: "Singapore",
            code: "SG",
            slug: "australia-visa-for-singapore-citizens",
            countryPage: <AustraliaVisaForSingapore />,
            faq: australiaVisaSingaporeFaq,
            faqTitle: `Some FAQs for Singaporeans applying for an ETA or eVisa to Australia`,
            pageTitle: `Singapore to Australia: Apply for Australia eVisa for the Citizens of Singapore`,
            pageTitleDescription: `Discover Sydney’s Beautiful Beaches or Explore Melbourne with VisaCollect’s Speedy Visa Services. `,
            metadata: {
                // robots: {
                //   index: false,
                //   googleBot: {
                //     index: false,
                //   },
                // },
                title: `Tourist Visa Australia from Singapore | Visa Collect`,
                description: `Tourist Visa Australia from Singapore: The conditions for obtaining a visa are simple and convenient for Singapore travelers.`,
                metadataBase: new URL("https://visacollect.com"),

                alternates: {
                    canonical: `/sg/australia-visa-for-singapore-citizens`,
                },
                keywords: `australian visa requirements for singapore citizens, tourist visa australia from singapore, australia visa processing time singapore, australia eta visa singapore, australia visa application from singapore`,
                openGraph: {
                    url: `/sg/australia-visa-for-singapore-citizens`,
                },
            },
        },
    },
];

finalPromotedVisaAfterRelatedBlogs(visaPromotedInAustralia, "au");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInUk, "uk");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInCanada, "ca");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInUs, "us");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInThailand, "th");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInIndia, "in");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInUAE, "ae");
finalPromotedVisaAfterRelatedBlogs(visaPromotedInSingapore, "sg");
