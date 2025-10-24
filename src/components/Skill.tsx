import React from "react";

interface SkillProps {
  logo: string;
  name: string;
  description: string;
}

export const Skill: React.FC<SkillProps> = ({ logo, name, description }) => {
  return (
    <article className="flex flex-col sm:flex-row items-center sm:items-start border border-base-tertiary rounded-md p-1.5 gap-2 sm:gap-3">
      <div className="bg-base-tertiary rounded-sm p-1.5">
        <img src={logo} alt={name} className="h-6 w-6 object-contain" />
      </div>
      <div className="flex flex-col items-center sm:items-start justify-between">
        <p className="font-bold text-sm text-center sm:text-left">{name}</p>
        <p className="font-light text-xs text-text-secondary text-center sm:text-left">
          {description}
        </p>
      </div>
    </article>
  );
};
