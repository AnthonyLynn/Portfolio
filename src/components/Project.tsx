import React from "react";
import { uuidv4 } from "../lib/utils/idGenerator";

import { YouTubeIcon } from "./Icons/YouTubeIcon";
import { ExternalLinkIcon } from "./Icons/ExternalLinkIcon";
import { GitHubIcon } from "./Icons/GitHubIcon";
import Image from "next/image";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  skills: string[];
  websiteLink?: string;
  demoLink?: string;
  gitHubLink?: string;
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
        <Image
          src={image}
          alt={title}
          width={590}
          height={354}
          className="object-cover w-full aspect-5/3 rounded-sm"
        />
      </a>
      <div>
        <div className="flex justify-between">
          <h3 className="font-bold">{title}</h3>
          <nav className="flex gap-2 items-center p-1">
            {websiteLink && (
              <a href={websiteLink} target="_blank">
                <ExternalLinkIcon className="h-3 stroke-text-primary hover:stroke-text-secondary" />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank">
                <YouTubeIcon className="h-3 stroke-text-primary hover:stroke-text-secondary" />
              </a>
            )}
            {gitHubLink && (
              <a href={gitHubLink} target="_blank" className="fill-white">
                <GitHubIcon className="h-3 stroke-text-primary hover:stroke-text-secondary" />
              </a>
            )}
          </nav>
        </div>
        <p className="text-xs text-text-secondary">{description}</p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {skills.map((skill) => {
          return (
            <div
              className="text-xs font-medium py-0.5 px-1.5 rounded-sm bg-base-tertiary w-max"
              key={uuidv4()}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </article>
  );
};
