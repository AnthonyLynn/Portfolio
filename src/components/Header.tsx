import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-dark-secondary-background h-[42px]">
      <div className="h-full max-w-[640px] w-full flex justify-between m-auto">
        <nav className="h-full text-dark-primary-text flex">
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
          <img src="" alt="LightModeIcon" />
          <img src="" alt="DarkModeIcon" />
        </button>
      </div>
    </header>
  );
};
