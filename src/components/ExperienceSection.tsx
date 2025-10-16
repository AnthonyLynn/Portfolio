import AquariumReptileDenCompanyLogo from "../images/AquariumReptileDenCompanyLogo.png";
import TripleTenLogo from "../images/TripleTenCompanyLogo.png";

import React from "react";
import { Experience } from "./Experience";

interface ExperienceSectionProps {}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({}) => {
  return (
    <section className="flex flex-col gap-2 text-base">
      <button className="flex relative z-10 w-full bg-base-tertiary rounded-md p-1 items-center leading-[24px]">
        <div className="absolute -z-10 w-[calc(50%-4px)] h-[calc(100%-8px)] rounded-sm bg-base-secondary"></div>
        <p className="w-[50%]">Work</p>
        <p className="w-[50%] text-text-secondary">Education</p>
      </button>
      <div className="relative z-10 border border-base-tertiary rounded-md p-4 flex overflow-hidden">
        <div className="w-full shrink-0 flex flex-col gap-6">
          <Experience
            institutionLogo={AquariumReptileDenCompanyLogo}
            beginDate={"Jun 2025"}
            endDate={"Aug 2025"}
            companyName={"Electric City Aquarium & Reptile Den"}
            roleTitle={"Front-End Software Engineer"}
            descriptions={[
              "Developed and improved website visuals using React, Tailwind CSS, and Typescript.",
              "Collaborated with a team of 7 developers using Git and Agile methodologies.",
              "Programmed reusable components with UI documentation in Storybook, and unit tests with Vitest.",
            ]}
            externalLinks={[
              {
                link: "https://d2iglzmdn49e7r.cloudfront.net",
                name: "Shark Interactive",
              },
            ]}
          />
          <Experience
            institutionLogo={TripleTenLogo}
            beginDate={"May 2024"}
            endDate={"Apr 2025"}
            companyName={"TripleTen"}
            roleTitle={"Full-Stack Software Engineer"}
            descriptions={[
              "Designed responsive UI elements using React and JavaScript based on Figma mock-ups.",
              "Collaborated with multiple teams to develop front-end web applications within a weeks deadline.",
            ]}
            externalLinks={[]}
          />
          <div className="absolute -z-10 h-full w-px bg-base-tertiary left-10 top-0"></div>
        </div>
        <div className="w-full shrink-0">
          <div className="absolute -z-10 h-full w-px bg-base-tertiary left-10 top-0"></div>
        </div>
      </div>
    </section>
  );
};
