import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";

import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-base-primary/90 sticky left-0 top-0 w-full backdrop-blur-xs">
      <div className="h-full max-w-[640px] w-full flex justify-between m-auto">
        <nav className="h-full text-dark-primary-text font-roboto font-bold text-sm flex">
          <a href="#about" className="flex items-center pr-5 py-4">
            About
          </a>
          <a href="#experience" className="flex items-center px-5 py-4">
            Experience
          </a>
          <a href="#skills" className="flex items-center px-5 py-4">
            Skills
          </a>
          <a href="#projects" className="flex items-center px-5 py-4">
            Projects
          </a>
        </nav>
        <button>
          <SunIcon className="visible fill-orange-accent-color h-4" />
          <MoonIcon className="hidden stroke-purple-accent-color h-4" />
        </button>
      </div>
    </header>
  );
};
