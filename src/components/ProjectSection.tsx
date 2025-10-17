import React from "react";
import { Project } from "./Project";

import NewsAppScreenshot from "../images/NewsAppScreenshot.png";

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  return (
    <section className="flex flex-col gap-2" id="projects">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="grid grid-cols-3 gap-1.5">
        <Project
          image={NewsAppScreenshot}
          title="News Explorer"
          description="Front-end news site using React and JavaScript to search and save news articles."
          skills={["React.js", "JavaScript", "News API"]}
          websiteLink=""
          demoLink=""
          gitHubLink=""
        />
      </div>
      <button className="w-full text-sm text-text-secondary">view more</button>
    </section>
  );
};
