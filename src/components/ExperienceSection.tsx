import React from "react";
import { Experience } from "./Experience";

interface ExperienceSectionProps {}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({}) => {
  return (
    <section>
      <button>
        <div></div>
        <p></p>
        <p></p>
      </button>
      <div>
        <div>
          <Experience />
          <Experience />
          <div></div>
        </div>
        <div>
          <Experience />
          <div></div>
        </div>
      </div>
    </section>
  );
};
