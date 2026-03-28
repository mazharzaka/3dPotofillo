import React from "react";
import ExperienceCard from "@/ui/Experience";
import { ExperienData } from "@/features/scroll-animation/dummydata/data";

function WorkExper() {
  return (
    <div className="mt-5 flex flex-col gap-2 pb-20">
      {ExperienData?.map((e, index) => (
        <div
          key={e.id}
          style={{
            position: "sticky",
            top: `${100 + index * 40}px`,
            zIndex: index,

          }}
        >
          <ExperienceCard
            id={e.id}
            company={e.company}
            description={e.description}
            href={e.href}
            logo={e.logo}
            role={e.role}
            date={e.date}
            isReversed={e.id % 2 === 0}
          />
        </div>
      ))}
    </div>
  );
}

export default WorkExper;
