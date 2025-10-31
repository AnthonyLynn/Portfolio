import AquariumReptileDenCompanyLogo from "../images/AquariumReptileDenCompanyLogo.png";
import TripleTenLogo from "../images/TripleTenCompanyLogo.png";

import React, { useState } from "react";
import { Experience } from "./Experience";

interface ExperienceSectionProps {}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({}) => {
  const [showExperience, setShowExperience] = useState<boolean>(true);

  function onExperienceToggle() {
    setShowExperience(!showExperience);
  }

  return (
    <section className="flex flex-col gap-8 sm:gap-2 text-base" id="experience">
      <button
        className="flex relative z-10 w-full bg-base-tertiary rounded-md p-0.75 items-center text-sm leading-[20px] hover:cursor-pointer"
        onClick={onExperienceToggle}
      >
        <div
          className={`absolute -z-10 w-[calc(50%-3px)] h-[calc(100%-6px)] rounded-sm bg-base-secondary ${
            !showExperience && "right-[3px]"
          }`}
        ></div>
        <p
          className={`w-[50%] relative top-[1px] ${
            !showExperience && "text-text-secondary"
          }`}
        >
          Work
        </p>
        <p
          className={`w-[50%] relative top-[1px] ${
            showExperience && "text-text-secondary"
          }`}
        >
          Education
        </p>
      </button>
      <div className="relative z-10 border border-base-tertiary rounded-md p-0 pb-2 sm:p-4">
        {showExperience ? (
          <div className="w-full shrink-0 flex flex-col gap-10 sm:gap-6">
            <Experience
              institutionLogo={AquariumReptileDenCompanyLogo}
              beginDate={"Jun 2025"}
              endDate={"Aug 2025"}
              companyName={"Electric City Aquarium & Reptile Den"}
              roleTitle={"Front-End Software Engineer"}
              descriptions={[
                "Developed React components with Tailwind CSS and Typescript based on Figma mockups, delivering clean UI and smooth user experiences.",
                "Collaborated in a team of 7 software engineers using Git, Jira, and Agile methodologies; effectively delivering a product in less than 3 months.",
                "Created storybooks and unit tested with Vitest to ensure quality.",
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
            <div className="absolute -z-10 h-full w-px bg-base-tertiary left-10 top-0 hidden sm:inline"></div>
          </div>
        ) : (
          <div className="w-full shrink-0 flex flex-col gap-6">
            <div className="absolute -z-10 h-full w-px bg-base-tertiary left-10 top-0 hidden sm:inline"></div>
          </div>
        )}
      </div>
    </section>
  );
};
