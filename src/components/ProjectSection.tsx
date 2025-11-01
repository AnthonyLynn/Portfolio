import React from "react";
import { uuidv4 } from "../utils/idGenerator";

import { Project } from "./Project";
import { ExpandGrid } from "./ExpandGrid";
import useWindowWidth from "../hooks/useWindowWidth";

import { projects } from "../utils/projects";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const width = useWindowWidth();

  return (
    <section className="flex flex-col gap-2" id="projects">
      <h2 className="text-xl font-bold">Projects</h2>
      <ExpandGrid rowAmount={width > 640 ? 3 : 1} initialRowsShown={1}>
        {projects.map((project) => {
          return (
            <Project
              image={project.image}
              description={project.description}
              title={project.title}
              websiteLink={project.websiteLink}
              demoLink={project.demoLink}
              gitHubLink={project.gitHubLink}
              skills={project.skills}
              key={uuidv4()}
            />
          );
        })}
      </ExpandGrid>
    </section>
  );
};
