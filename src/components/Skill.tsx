import React from "react";

interface SkillProps {
  logo: string;
  name: string;
  description: string;
}

export const Skill: React.FC<SkillProps> = ({ logo, name, description }) => {
  return (
    <article className="flex border border-base-tertiary rounded-md p-1.5 gap-3">
      <div className="bg-base-tertiary rounded-sm p-1.5">
        <img src={logo} alt={name} className="h-6 w-6 object-contain" />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-bold text-sm">{name}</p>
        <p className="font-light text-xs text-text-secondary">{description}</p>
      </div>
    </article>
  );
};
