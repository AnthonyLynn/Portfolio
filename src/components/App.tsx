import { useEffect, useState } from "react";

import { sendChatBotMessage } from "../utils/chatbaseApi";

import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";
import { ChatButton } from "./ChatButton";
import { Chat } from "./Chat";

interface FromValues {
  message: string;
}

type Role = "user" | "assistant";

export const App = ({}) => {
  const [messageStack, setMessageStack] = useState<
    { role: Role; content: string }[]
  >([]);

  const addMessage = (role: Role, message: string) => {
    setMessageStack([...messageStack, { role: role, content: message }]);
  };

  const onMessageSent = ({ message }: FromValues) => {
    addMessage("user", message);

    sendChatBotMessage({
      message: message,
      conversationId: "",
    })
      .then(({ text }) => {
        addMessage("assistant", text);
      })
      .catch((errorMessage: string) => {
        console.log(errorMessage);
      });
  };

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

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
      <main className="w-full md:max-w-[640px] px-3 sm:px-4 md:px-0 lg:pb-4 flex flex-col gap-4 sm:gap-7">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <div className="sticky z-10 w-full bottom-0 p-3 sm:p-4 lg:p-0 flex justify-end">
        <Chat onMessageSent={onMessageSent} />
        <ChatButton />
      </div>
      <Footer />
    </div>
  );
};
