import SunIcon from "../images/SunIcon.svg";
import MoonIcon from "../images/MoonIcon.svg";

import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-base-primary absolute left-0 w-full">
      <div className="h-full max-w-[640px] w-full flex justify-between m-auto">
        <nav className="h-full text-dark-primary-text font-roboto font-bold text-sm flex">
          <a href="" className="flex items-center pr-5 py-4">
            About
          </a>
          <a href="" className="flex items-center px-5 py-4">
            Experience
          </a>
          <a href="" className="flex items-center px-5 py-4">
            Skills
          </a>
          <a href="" className="flex items-center px-5 py-4">
            Projects
          </a>
        </nav>
        <button>
          <img src={SunIcon} alt="LightModeIcon" className="visible" />
          <img src={MoonIcon} alt="DarkModeIcon" className="hidden" />
        </button>
      </div>
    </header>
  );
};
