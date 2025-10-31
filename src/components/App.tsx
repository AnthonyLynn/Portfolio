import { useEffect, useState } from "react";

import { sendChatBotMessage, getConversations } from "../utils/chatbaseApi";

import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";
import { ChatButton } from "./ChatButton";
import { Chat } from "./Chat";
import { uuidv4 } from "../utils/idGenerator";

interface FromValues {
  message: string;
}

type Role = "user" | "assistant";

export const App = ({}) => {
  const [messageStack, setMessageStack] = useState<
    { role: Role; content: string }[]
  >([{ role: "assistant", content: "Hi! What can I help you with?" }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);

  let conversationId = localStorage.conversationId;
  if (!conversationId) {
    conversationId = uuidv4();
    localStorage.conversationId = conversationId;
  }

  const addMessage = (role: Role, message: string) => {
    setMessageStack((messageStack) => [
      ...messageStack,
      { role: role, content: message },
    ]);
  };

  const onMessageSent = ({ message }: FromValues) => {
    addMessage("user", message);
    setIsLoadingResponse(true);

    sendChatBotMessage({
      message: message,
      conversationId: conversationId,
    })
      .then(({ text }) => {
        addMessage("assistant", text);
      })
      .catch((errorMessage: string) => {
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoadingResponse(false);
      });
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
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

  useEffect(() => {
    getConversations()
      .then(({ data }) => {
        const conversation = data.find((conversation: { id: string }) => {
          return conversation.id === conversationId;
        });

        if (!conversation) {
          return;
        }

        const conversationData = conversation.messages.map((message) => {
          return { role: message.role, content: message.content };
        });

        setMessageStack(conversationData);
      })
      .catch(console.error);
  }, []);

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
        {isModalOpen && (
          <Chat
            isLoadingResponse={isLoadingResponse}
            messageStack={messageStack}
            onMessageSent={onMessageSent}
            onModalClose={onModalClose}
          />
        )}
        {!isModalOpen && <ChatButton onModalOpen={onModalOpen} />}
      </div>
      <Footer />
    </div>
  );
};
