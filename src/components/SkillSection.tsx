import React from "react";
import { Skill } from "./Skill";
import { ExpandGrid } from "./ExpandGrid";

import FigmaIcon from "../images/FigmaIcon.svg";
import ReactIcon from "../images/ReactIcon.svg";
import TypeScriptIcon from "../images/TypescriptIcon.svg";
import TailwindIcon from "../images/TailwindIcon.svg";
import GithubSilhouetteIcon from "../images/GithubSilhouetteIcon.svg";
import JiraIcon from "../images/JiraIcon.svg";

interface SkillSectionProps {}

export const SkillSection: React.FC<SkillSectionProps> = ({}) => {
  return (
    <section className="flex flex-col gap-2" id="skills">
      <h2 className="text-xl font-bold">Skills</h2>
      <ExpandGrid rowAmount={3} initialRowsShown={2}>
        <Skill logo={FigmaIcon} name="Figma" description="Design Tool" />
        <Skill logo={ReactIcon} name="React" description="JavaScript Library" />
        <Skill
          logo={TypeScriptIcon}
          name="TypeScript"
          description="Programming Language"
        />
        <Skill
          logo={TailwindIcon}
          name="Tailwind"
          description="CSS Framework"
        />
        <Skill
          logo={GithubSilhouetteIcon}
          name="GitHub"
          description="Version Control"
        />
        <Skill logo={JiraIcon} name="Jira" description="Project Management" />
      </ExpandGrid>
    </section>
  );
};
