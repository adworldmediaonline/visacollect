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
                    <h2 className="text-primary">Our Mission</h2>
                    <p>
                        The goal of Visa Collect is to enable unrestricted
                        global travel for individuals. Our focus is on making
                        travel a more accessible and effortless experience for
                        everyone. Through our service, we offer a quick, easy,
                        and smooth journey to your destination. Let&apos;s
                        collaborate in shaping a world where exploration knows
                        no bounds!
                    </p>
                    <h2 className="text-primary">
                        Are there any queries you&apos;d like us to address?
                    </h2>
                    <h3 className="text-primary">Why Choose VisaCollect?</h3>
                    <p>
                        VisaCollect makes the visa application process a lot
                        easier, offering a platform that’s not only swift but
                        also accessible globally. Say goodbye to long queues and
                        tedious paperwork; with VisaCollect, your journey begins
                        with just a few clicks.
                    </p>
                    <h4>What makes VisaCollect unique?</h4>
                    <p>
                        {" "}
                        Tired of navigating through complex visa procedures?
                        VisaCollect simplifies your travel prep with a
                        user-centric approach, ensuring a smooth and
                        straightforward experience. We understand the value of
                        your time and peace of mind, which is why we’ve
                        streamlined every step of the process.
                    </p>
                    <h5 className="text-primary">
                        What is the best thing about VisaCollect’s?
                    </h5>
                    <p>
                        Discover the convenience of VisaCollect by visiting our
                        website. Get into detailed visa requirements for your
                        destination country and only proceed with payment when
                        you’re ready to submit your application.
                    </p>
                    <h6 className="text-primary">Is VisaCollect authentic?</h6>
                    <p>
                        VisaCollect is a trusted source for your travel
                        documentation needs. We pride ourselves on providing the
                        most current and precise information.
                    </p>
                </MainWrapper>
            </PageWrapper>
        </>
    );
}
