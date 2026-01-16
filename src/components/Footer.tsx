import React from "react";

import { LinkedInIcon } from "./Icons/LinkedInIcon";
import { GitHubIcon } from "./Icons/GitHubIcon";
import { MailIcon } from "./Icons/MailIcon";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-base-primary flex justify-center">
      <div className="flex justify-between w-full md:w-180 p-4 px-3 sm:px-4 md:px-0 items-center">
        <p className="font-medium text-xs text-text-secondary">
          &copy; {currentYear} anthony-lynn.com
        </p>
        <nav className="flex gap-4">
          <a href="https://www.linkedin.com/in/anthony-w-lynn" target="_blank">
            <LinkedInIcon className="stroke-text-secondary hover:stroke-text-primary h-3" />
          </a>
          <a href="https://github.com/AnthonyLynn" target="_blank">
            <GitHubIcon className="stroke-text-secondary hover:stroke-text-primary h-3" />
          </a>
          <a href="mailto:anthonywlynn2002@gmail.com" target="_blank">
            <MailIcon className="fill-text-secondary stroke-text-secondary h-3 hover:fill-text-primary hover:stroke-text-primary" />
          </a>
        </nav>
      </div>
    </footer>
  );
};
