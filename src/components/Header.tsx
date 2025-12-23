import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";

interface HeaderProps {
  onThemeButtonClick: () => void;
  isDarkTheme: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onThemeButtonClick,
  isDarkTheme,
}) => {
  return (
    <header className="bg-base-primary/90 sticky z-20 left-0 top-0 w-full backdrop-blur-xs">
      <div className="h-full md:max-w-[720px] w-full flex justify-between m-auto">
        <nav className="h-full text-dark-primary-text font-bold text-xs sm:text-sm flex">
          <a
            href="#about"
            className="flex items-center px-3 md:pl-0 sm:px-4 py-4 hover:text-text-secondary"
          >
            About
          </a>
          <a
            href="#experience"
            className="flex items-center px-3 sm:px-4 py-4 hover:text-text-secondary"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="flex items-center px-3 sm:px-4 py-4 hover:text-text-secondary"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="flex items-center px-3 sm:px-4 py-4 hover:text-text-secondary"
          >
            Projects
          </a>
        </nav>
        <button
          className="hover:cursor-pointer px-3 md:pr-0 group"
          onClick={onThemeButtonClick}
        >
          {isDarkTheme ? (
            <SunIcon className="fill-orange-accent-color h-4 group-hover:fill-text-secondary" />
          ) : (
            <MoonIcon className="fill-purple-accent-color stroke-purple-accent-color h-4 group-hover:fill-text-secondary" />
          )}
        </button>
      </div>
    </header>
  );
};
