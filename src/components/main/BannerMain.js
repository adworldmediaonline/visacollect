"use client";

import { useRouter } from "next/navigation";
import BannerInlineForm from "../ui/banner-inline-form";
import ExperienceStatsSection from "../ui/experience-stats-section";
import HighlightedText from "../ui/highlighted-text";
import Image from "next/image";
import { homePagesBanner } from "@/constant/images";

const BannerMain = () => {
    return (
        <div className="relative w-full pt-32">
            <div className="relative h-[700px] overflow-hidden -translate-y-28">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 "></div>
                <Image
                    alt="Apply for Visa - Stress free travel"
                    src={homePagesBanner}
                    className="object-cover w-full h-full"
                />
                <div className="container absolute top-0 mt-32">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col justify-center space-y-3">
                            <h1 className="text-white text-center md:text-[55px] text-[40px] font-bold leading-[1.2]">
                                24x7 online visa services started anytime,
                                anywhere.
                            </h1>
                            <p className="text-center text-white mx-auto md:w-[50%] py-2">
                                Fast and secure: Trust our secure online visa
                                services platform to handle your sensitive
                                information with care.
                            </p>
                        </div>
                    </div>
                    <div className="my-10">
                        <BannerInlineForm />
                    </div>
                    <ExperienceStatsSection />
                </div>
            </div>
        </div>
    );
};

export default BannerMain;
