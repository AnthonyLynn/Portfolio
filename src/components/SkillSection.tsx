import React from "react";
import { Skill } from "./Skill";

interface SkillSectionProps {}

export const SkillSection: React.FC<SkillSectionProps> = ({}) => {
  return (
    <section>
      <h2></h2>
      <div>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
      <button>view more</button>
    </section>
  );
};
