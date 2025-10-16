import React from "react";

import GitHubIcon from "../images/GithubIcon.svg";
import YouTubeIcon from "../images/YouTubeIcon.svg";
import ExternalLinkIcon from "../images/ExternalLinkIcon.svg";

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
    <article>
      <a
        href={websiteLink}
        target="_blank"
        className="p-1 border border-dark-tertiary-background rounded-md box-border"
      >
        <img src={image} alt={title} />
      </a>
      <div className="flex justify-between">
        <h3 className="font-bold text-base">{title}</h3>
        <nav className="flex gap-2 items-center">
          <a href={websiteLink} target="_blank">
            <img
              src={ExternalLinkIcon}
              alt="External Link Icon"
              className="h-3 aspect-square text-white"
            />
          </a>
          <a href={demoLink} target="_blank">
            <img
              src={YouTubeIcon}
              alt="YouTube Icon"
              className="h-3 aspect-square stroke-white"
            />
          </a>
          <a href={gitHubLink} target="_blank" className="fill-white">
            <img
              src={GitHubIcon}
              alt="GitHub Icon"
              className="h-3 aspect-square stroke-white fill-none"
            />
          </a>
        </nav>
      </div>
      <p>{description}</p>
      <div className="flex">
        {skills.map((skill) => {
          return <div>{skill}</div>;
        })}
      </div>
    </article>
  );
};
