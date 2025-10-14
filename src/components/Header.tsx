import SunIcon from "../images/SunIcon.svg";
import MoonIcon from "../images/MoonIcon.svg";

import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-dark-secondary-background h-[42px] absolute w-full">
      <div className="h-full max-w-[640px] w-full flex justify-between m-auto">
        <nav className="h-full text-dark-primary-text font-roboto font-bold text-[14px] flex">
          <a href="" className="flex items-center pr-[20px]">
            About
          </a>
          <a href="" className="flex items-center px-[20px]">
            Experience
          </a>
          <a href="" className="flex items-center px-[20px]">
            Skills
          </a>
          <a href="" className="flex items-center px-[20px]">
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
