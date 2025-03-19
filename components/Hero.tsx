import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { SparklesPreview } from "./SparklesPreview";
import { FaLocationCrosshairs, FaLocationPin } from "react-icons/fa6";
import MagicButton from "./MagicButton";

function Hero() {
    return (
        <>
            <section id="home" className="pb-20 pt-10">
                <div>

                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
                        fill="white"
                    />


                    <Spotlight
                        className="h-[80vh] w-[50vw] top-10 left-full "
                        fill="green"
                    />

                    <Spotlight
                        className="h-[80vh] w-[50vw] top-28 left-80 "
                        fill="purple"
                    />
                    <div className="w-full absolute left-0 -top-72 z-50 min-h-96 ">
                        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50 " />

                    </div>
                </div>



                <div className="flex relative justify-center my-20 z-10">

                    <div className="flex flex-col items-center justify-center">

                        <SparklesPreview />
                        
                        <div className="mt-9">
                            <a href="#about">
                                <MagicButton
                                    icon={<FaLocationCrosshairs />}
                                    title="Get Started Now"
                                    position="right"
                                />
                            </a>
                        </div>

                    </div>

                </div>




            </section>
        </>
    )
}

export default Hero