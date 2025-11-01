import React from "react";
import { skills } from "../utils/skills";

import { Skill } from "./Skill";
import { ExpandGrid } from "./ExpandGrid";
import { uuidv4 } from "../utils/idGenerator";

interface SkillSectionProps {}

export const SkillSection: React.FC<SkillSectionProps> = ({}) => {
  return (
    <section className="flex flex-col gap-2" id="skills">
      <h2 className="text-xl font-bold">Skills</h2>
      <ExpandGrid rowAmount={3} initialRowsShown={2} viewMoreAmount={2}>
        {skills.map((skill) => {
          return (
            <Skill
              logo={skill.logo}
              name={skill.name}
              description={skill.description}
              key={uuidv4()}
            />
          );
        })}
      </ExpandGrid>
    </section>
  );
};
