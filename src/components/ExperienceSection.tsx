"use client";

import React, { useState } from "react";
import { Experience } from "./Experience";

export const ExperienceSection: React.FC = () => {
  const [showExperience, setShowExperience] = useState<boolean>(true);

  function onExperienceToggle() {
    setShowExperience(!showExperience);
  }

  return (
    <section className="flex flex-col gap-8 sm:gap-2 text-base" id="experience">
      <button
        className="flex relative z-10 w-full bg-base-tertiary rounded-md p-0.75 items-center text-sm leading-5 hover:cursor-pointer"
        onClick={onExperienceToggle}
      >
        <div
          className={`absolute -z-10 w-[calc(50%-3px)] h-[calc(100%-6px)] rounded-sm bg-base-secondary ${
            !showExperience && "right-0.75"
          }`}
        ></div>
        <p
          className={`w-[50%] relative top-px ${
            !showExperience && "text-text-secondary"
          }`}
        >
          Work
        </p>
        <p
          className={`w-[50%] relative top-px ${
            showExperience && "text-text-secondary"
          }`}
        >
          Education
        </p>
      </button>
      <div className="relative z-10 border border-base-tertiary rounded-md p-0 sm:p-4 pb-4 flex flex-col gap-10 sm:gap-6">
        {showExperience ? (
          <>
            <Experience
              institutionLogo={"/images/FreelanceLogo.svg"}
              beginDate={"Jan 2020"}
              endDate={"Present"}
              companyName={"Freelance"}
              roleTitle={"Software Engineer"}
              descriptions={[
                "Developed React applications with Typescript and Tailwind CSS based on Figma mockups, delivering pixel perfect responsive design across different devices.",
                "Integrating third-party REST APIs with custom hooks and context APIs, improving user engagement and satisfaction.",
                "Recognized for rapidly delivering high-quality applications under tight deadlines, contributing to project success and wins during code jams and sprints.",
              ]}
              externalLinks={[]}
            />
            <Experience
              institutionLogo={"/images/AquariumReptileDenCompanyLogo.png"}
              beginDate={"Jun 2025"}
              endDate={"Aug 2025"}
              companyName={"Electric City Aquarium & Reptile Den"}
              roleTitle={"Front-End Software Engineer"}
              descriptions={[
                "Streamlined development workflows by documenting and testing UI with Storybook, creating a catalog of reusable components with consistent design and reducing development time.",
                "Wrote unit tests with Vitest, achieving 80% test coverage and reducing production bugs, increasing the confidence of stakeholders in the product.",
                "Improved team efficiency by collaborating in an Agile environment using Jira and GitHub, meeting sprint goals and exceeding stakeholder expectations.",
              ]}
              externalLinks={[
                {
                  link: "https://d2iglzmdn49e7r.cloudfront.net",
                  name: "Shark Interactive",
                },
              ]}
            />
            <Experience
              institutionLogo={"/images/ColdStoneCreameryLogo.png"}
              beginDate={"May 2021"}
              endDate={"Current"}
              companyName={"ColdStone Creamery"}
              roleTitle={"Assistant Manager"}
              descriptions={[
                "Took ownership of overseeing daily operations in a fast paced environment, ensuring smooth execution, and improving customer satisfaction.",
                "Mentored and guided team members in daily activities and practices, fostering a collaborative and high-functioning team.",
                "Built leadership, teamwork, and problem-solving skills transferable to collaborative software development.",
              ]}
              externalLinks={[]}
            />
          </>
        ) : (
          <>
            <Experience
              institutionLogo={"/images/TripleTenCompanyLogo.png"}
              beginDate={"2024"}
              endDate={"2025"}
              companyName={"TripleTen"}
              roleTitle={"Full-Stack Software Engineer"}
              descriptions={[
                "Developed basic HTML and CSS websites using best practices, like responsive and accessible design for increased user support.",
                "Built Full-Stack projects through google cloud allowing for more feature rich applications.",
              ]}
              externalLinks={[]}
            />
            <Experience
              institutionLogo={"/images/AcademyOfArtUniversityLogo.png"}
              beginDate={"2021"}
              endDate={"2024"}
              companyName={"Academy of Art University"}
              roleTitle={"Game Design"}
              descriptions={[
                "Designed and developed user experiences using Unity and Unreal, focusing on creating a good player experience.",
                "Created 3D models and images using editing software like Photoshop, Illustrator, Blender, and Maya.",
              ]}
              externalLinks={[]}
            />
          </>
        )}
        <div className="absolute -z-10 h-full w-px bg-base-tertiary left-10 top-0 hidden sm:inline"></div>
      </div>
    </section>
  );
};
