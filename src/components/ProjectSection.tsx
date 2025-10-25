import React from "react";
import { Project } from "./Project";
import { ExpandGrid } from "./ExpandGrid";
import useWindowWidth from "../hooks/useWindowWidth";

import NewsAppScreenshot from "../images/NewsAppScreenshot.png";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const width = useWindowWidth();

  return (
    <section className="flex flex-col gap-2" id="projects">
      <h2 className="text-xl font-bold">Projects</h2>
      <ExpandGrid rowAmount={width > 640 ? 3 : 1} initialRowsShown={1}>
        <Project
          image={NewsAppScreenshot}
          title="News Explorer"
          description="Front-end news site using React and JavaScript to search and save news articles."
          skills={["React.js", "JavaScript", "News API"]}
          websiteLink=""
          demoLink=""
          gitHubLink=""
        />
      </ExpandGrid>
    </section>
  );
};
