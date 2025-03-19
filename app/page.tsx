import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { FeaturesSectionDemo } from "@/components/FeatureSectionDemo";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import Clients from "@/components/Clients";
import LayoutGridDemo from "@/components/LayoutGridDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black relative overflow-hidden mx-auto flex flex-col justify-center items-center sm:px-10 px-5">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Experience/>
      <RecentProjects/>
      <FeaturesSectionDemo/>
      <CanvasRevealEffectDemo/>
      <Clients/>
      <LayoutGridDemo/>
      <Footer/>
    </main>
  )
}
