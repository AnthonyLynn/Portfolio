import React from "react";
import { Project } from "./Project";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  return (
    <section>
      <h2></h2>
      <div>
        <Project />
      </div>
      <button>view more</button>
    </section>
  );
};
