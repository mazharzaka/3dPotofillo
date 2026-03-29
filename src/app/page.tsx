import { Header } from "@/components/Header";
import { StickyImage } from "@/components/StickyImage";
import WorkExper from "@/components/WorkExper";
import MyProjects from "@/components/MyProjects";
import { ComponentScroll } from "@/features/scroll-animation/components/ComponentScroll";
import { BEATSHero } from "@/features/scroll-animation/dummydata/data";
import MySkillsCard from "@/ui/MySkills";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <ComponentScroll
        sequences={[
          { folder: "video-split", totalFrames: 168 },
          { folder: "cert-split", totalFrames: 216 },
          { folder: "showcert-split", totalFrames: 224 },
        ]}
        BEATS={BEATSHero}
      />
      <StickyImage
        image1="/work.png"
        image2="/spider.png"
        title="WORK <span class='text-[#cca362]'>EXPERIENCE</span>"
      />
      <WorkExper />
      <MyProjects />

      <StickyImage
        image1="/skills1.png"
        image2="/skills2.png"
        title="MY <span class='text-[#cca362]'>SKILLS</span>"
      />
      <MySkillsCard />
      <MySkillsCard isReverse={true} />
    </main>
  );
}
