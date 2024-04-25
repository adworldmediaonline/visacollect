import MainWrapper from "@/app/(blogContent)/blog/components/MainWrapper";
import PageWrapper from "@/app/(blogContent)/blog/components/PageWrapper";
import Banner3 from "@/components/ui/Banner3";

export default function AboutUs() {
    return (
        <>
            <Banner3
                className="pb-0"
                breadcrumb="About Us"
                pageTitle="Simplify your visa process for hassle-free travel"
            />
            <PageWrapper className="mt-10 mb-10">
                <MainWrapper>
                    <p>
                        Welcome to VisaCollect, the easiest way to travel around
                        the world. Our goal is to make it easier for you to get
                        a visa so that you can travel without any problems. We
                        see a world with limitless boundaries and a platform
                        that makes it easy to start your trip with just a few
                        clicks through our online visa services.
                    </p>
                    <h2 className="text-primary">Why Choose VisaCollect?</h2>
                    <p>
                        Avoid worrying about long lines or complicated papers
                        when you use VisaCollect. VisaCollect’s online visa
                        services make things easy and speed up every step of the
                        visa application process. We focus on what's most
                        important: restoring peace of mind and saving time
                    </p>{" "}
                    <h3 className="text-primary">
                        What makes VisaCollect unique?
                    </h3>
                    <p>
                        {" "}
                        Tired of navigating through complex visa procedures?
                        VisaCollect simplifies your travel prep with a
                        user-centric approach, ensuring a smooth and
                        straightforward experience. We understand the value of
                        your time and peace of mind, which is why we’ve
                        streamlined every step of the process.
                    </p>
                    <h4 className="text-primary">Our Promise</h4>
                    <p>
                        You must have an easy time using our e-visa services.
                        VisaCollect makes sure you're ready to go on your trip
                        with confidence by giving you access to clear payment
                        options and detailed information on visa requirements.
                    </p>
                    <h5 className="text-primary">Real and Popular</h5>
                    <p>
                        VisaCollect is a trustworthy source for your travel
                        documents requirements, providing up-to-date and correct
                        information. We're here to make your dream of travelling
                        the world come true without any problems.
                    </p>
                </MainWrapper>
            </PageWrapper>
        </>
    );
}
