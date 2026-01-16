import { LocationIcon } from "./Icons/LocationIcon";
import { FileDownloadIcon } from "./Icons/FileDownloadIcon";
import { MailIcon } from "./Icons/MailIcon";
import { LinkedInIcon } from "./Icons/LinkedInIcon";
import { GitHubIcon } from "./Icons/GitHubIcon";

import React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section
      className="flex flex-col-reverse sm:flex-row py-8 sm:py-10 justify-center gap-2 sm:gap-10 items-center sm:items-stretch"
      id="about"
    >
      <div className="flex flex-col items-center sm:items-start justify-between gap-8 sm:gap-0">
        <div className="flex flex-col sm:items-start items-center">
          <div className="flex flex-col sm:items-start items-center">
            <h1 className="font-bold text-2xl sm:text-4xl w-max">
              Anthony Lynn
            </h1>
            <p className="font-bold sm:text-lg">Software Engineer</p>
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
        <div className="flex flex-col gap-4 w-max sm:gap-3 sm:flex-row justify-start items-center">
          <a
            href="/Resume.pdf"
            download="AnthonyLynnResume"
            className="flex justify-center w-full border border-text-primary px-2 py-1 rounded-sm
           gap-2 group hover:bg-base-tertiary"
          >
            <p className="text-xs leading-none">Resume</p>
            <FileDownloadIcon className="h-3 fill-text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-w-lynn"
            target="_blank"
            className="flex justify-center w-full border border-text-primary px-2 py-1 sm:p-0 rounded-sm
           gap-2 group hover:bg-base-tertiary sm:hover:bg-transparent sm:border-none"
          >
            <p className="text-xs leading-none sm:hidden">LinkedIn</p>
            <LinkedInIcon className="h-3 stroke-text-primary sm:hover:stroke-text-secondary" />
          </a>
          <a
            href="https://github.com/AnthonyLynn"
            target="_blank"
            className="flex justify-center w-full border border-text-primary px-2 py-1 sm:p-0 rounded-sm
           gap-2 group hover:bg-base-tertiary sm:hover:bg-transparent sm:border-none"
          >
            <p className="text-xs leading-none sm:hidden">GitHub</p>
            <GitHubIcon className="h-3 stroke-text-primary sm:hover:stroke-text-secondary" />
          </a>
          <a
            href="mailto:anthonywlynn2002@gmail.com"
            target="_blank"
            className="flex justify-center w-full border border-text-primary px-2 py-1 sm:p-0 rounded-sm
           gap-2 group hover:bg-base-tertiary sm:hover:bg-transparent sm:border-none"
          >
            <p className="text-xs leading-none sm:hidden">Email</p>
            <MailIcon className="h-3 stroke-text-primary fill-text-primary sm:hover:fill-text-secondary sm:hover:stroke-text-secondary" />
          </a>
        </div>
      </div>
      <Image
        src="/images/ProfilePicture.png"
        alt="Profile Picture"
        width="127"
        height="150"
        className="rounded-full sm:rounded-md w-18.75 sm:w-auto aspect-square sm:aspect-auto object-cover"
      />
    </section>
  );
};
