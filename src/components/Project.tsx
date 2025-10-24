import React from "react";

import { YouTubeIcon } from "./Icons/YouTubeIcon";
import { ExternalLinkIcon } from "./Icons/ExternalLinkIcon";
import { GitHubIcon } from "./Icons/GitHubIcon";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  skills: string[];
  websiteLink: string;
  demoLink: string;
  gitHubLink: string;
}

export const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  skills,
  websiteLink,
  demoLink,
  gitHubLink,
}) => {
  return (
    <article className="flex flex-col gap-1">
      <a
        href={websiteLink}
        target="_blank"
        className="p-1 border border-base-tertiary rounded-md box-border"
      >
        <img src={image} alt={title} />
      </a>
      <div>
        <div className="flex justify-between">
          <h3 className="font-bold text-base">{title}</h3>
          <nav className="flex gap-2 items-center p-1">
            <a href={websiteLink} target="_blank">
              <ExternalLinkIcon className="h-3 stroke-link-color hover:stroke-text-secondary" />
            </a>
            <a href={demoLink} target="_blank">
              <YouTubeIcon className="h-3 stroke-link-color hover:stroke-text-secondary" />
            </a>
            <a href={gitHubLink} target="_blank" className="fill-white">
              <GitHubIcon className="h-3 stroke-link-color hover:stroke-text-secondary" />
            </a>
          </nav>
        </div>
        <p className="text-xs text-text-secondary">{description}</p>
      </div>
      <div className="flex gap-1">
        {skills.map((skill) => {
          return (
            <div className="text-xs font-medium py-0.5 px-1.5 rounded-sm bg-base-tertiary">
              {skill}
            </div>
          );
        })}
      </div>
    </article>
  );
};
