import ProfilePicture from "../images/ProfilePicture.png";
import { LocationIcon } from "./Icons/LocationIcon";
import { FileDownloadIcon } from "./Icons/FileDownloadIcon";
import { MailIcon } from "./Icons/MailIcon";
import { LinkedInIcon } from "./Icons/LinkedInIcon";
import { GitHubIcon } from "./Icons/GitHubIcon";

import React from "react";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="flex py-12 justify-center gap-10" id="about">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="font-bold text-4xl">Anthony Lynn</h1>
            <p className="font-bold text-lg">
              Software Engineer | Game Developer
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/Shrt4vb5u3qmSd7X9"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <LocationIcon className="stroke-text-secondary h-3" />
            <p className="text-text-secondary text-sm">USA, Virginia</p>
          </a>
        </div>
        <div className="flex justify-start items-center gap-3">
          <a
            href=""
            download="AnthonyLynnResume"
            className="flex border border-text-primary px-2 py-1 rounded-sm
           gap-2 group hover:bg-base-tertiary"
          >
            <p className="text-xs leading-none">Resume</p>
            <FileDownloadIcon className="h-3 fill-text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/anthony-w-lynn" target="_blank">
            <LinkedInIcon className="h-3 stroke-text-primary hover:stroke-text-secondary" />
          </a>
          <a href="https://github.com/AnthonyLynn" target="_blank">
            <GitHubIcon className="h-3 stroke-text-primary hover:stroke-text-secondary" />
          </a>
          <a href="mailto:anthonywlynn2002@gmail.com" target="_blank">
            <MailIcon className="h-3 stroke-text-primary fill-text-primary hover:fill-text-secondary hover:stroke-text-secondary" />
          </a>
        </div>
      </div>
      <img src={ProfilePicture} alt="Profile Picture" className="rounded-md" />
    </section>
  );
};
