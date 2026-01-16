import React from "react";

import { skills } from "../lib/utils/skills";
import { uuidv4 } from "../lib/utils/idGenerator";

import { Skill } from "./Skill";
import { ExpandGrid } from "./ExpandGrid";

export const SkillSection: React.FC = () => {
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
