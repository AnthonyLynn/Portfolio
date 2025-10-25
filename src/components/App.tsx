import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";

import { useEffect, useState } from "react";

export const App = ({}) => {
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.theme === "dark");

  function onThemeChange() {
    setIsDarkTheme(!isDarkTheme);
    localStorage.theme = isDarkTheme ? "light" : "dark";
  }

  useEffect(() => {}, []);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center bg-base-secondary text-text-primary ${
        isDarkTheme ? "dark" : "light"
      }`}
    >
      <Header onThemeButtonClick={onThemeChange} isDarkTheme={isDarkTheme} />
      <main className="w-full max-w-[640px] pb-2 sm:py-5 flex flex-col gap-4 sm:gap-7 px-2">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
};
