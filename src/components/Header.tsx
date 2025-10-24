import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";

import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-base-primary/90 sticky z-20 left-0 top-0 w-full backdrop-blur-xs">
      <div className="h-full max-w-[640px] w-full flex justify-between m-auto">
        <nav className="h-full text-dark-primary-text font-bold text-xs sm:text-sm flex">
          <a
            href="#about"
            className="flex items-center px-2 sm:pl-0 sm:pr-5 py-3 sm:py-4 hover:text-text-secondary"
          >
            About
          </a>
          <a
            href="#experience"
            className="flex items-center px-2 sm:px-5 py-3 sm:py-4 hover:text-text-secondary"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="flex items-center px-2 sm:px-5 py-3 sm:py-4 hover:text-text-secondary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="flex items-center px-2 sm:px-5 py-3 sm:py-4 hover:text-text-secondary"
          >
            Projects
          </a>
        </nav>
        <button className="hover:cursor-pointer px-2 sm:pr-0 group">
          <SunIcon className="visible fill-orange-accent-color h-4 group-hover:fill-text-secondary" />
          <MoonIcon className="hidden stroke-purple-accent-color h-4" />
        </button>
      </div>
    </header>
  );
};
