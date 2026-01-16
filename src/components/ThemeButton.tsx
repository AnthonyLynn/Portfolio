/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";

export const ThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="hover:cursor-pointer px-3 md:pr-0 group" />;
  }

  return (
    <button
      className="hover:cursor-pointer px-3 md:pr-0 group"
      onClick={changeTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="fill-orange-accent-color h-4 group-hover:fill-text-secondary" />
      ) : (
        <MoonIcon className="fill-purple-accent-color stroke-purple-accent-color h-4 group-hover:fill-text-secondary" />
      )}
    </button>
  );
};
