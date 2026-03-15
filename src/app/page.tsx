import { Header } from "@/components/Header";
import { ComponentScroll } from "@/features/scroll-animation/components/ComponentScroll";
import { BEATSHero } from "@/features/scroll-animation/dummydata/data";

export default function Home() {
  return (
    <main>
      <Header />
      <ComponentScroll
        sequences={[
          { folder: "video-split", totalFrames: 168 },
          { folder: "cert-split", totalFrames: 216 },
          { folder: "showcert-split", totalFrames: 224 },
        ]}
        BEATS={BEATSHero}
      />
    </main>
  );
}
