import { modelId, promptId } from "../utils/constants";
import { useEffect, useState } from "react";

import {
  createConversation,
  createResponse,
  getConversationItems,
} from "../utils/openaiApi";

import { Header } from "./Header";
import { About } from "./About";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";
import { ProjectSection } from "./ProjectSection";
import { Footer } from "./Footer";
import { ChatButton } from "./ChatButton";
import { Chat } from "./Chat";

type Role = "user" | "assistant";

export const App = () => {
  const [messageStack, setMessageStack] = useState<
    { role: Role; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hello,\n\nWelcome to Anthony Lynn's portfolio site! I'm here to give career related information about Anthony in an easy accessible way. How can I help you?",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatEnabled, setIsChatEnabled] = useState(true);
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [isPulseActive, setIsPulseActive] = useState(true);

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  function onThemeChange() {
    setIsDarkTheme(!isDarkTheme);
    localStorage.theme = isDarkTheme ? "light" : "dark";
  }

  let conversationId = localStorage.conversationId;

  const addMessage = (role: Role, message: string) => {
    setMessageStack((messageStack) => [
      ...messageStack,
      { role: role, content: message },
    ]);
  };

  const addErrorMessage = () => {
    addMessage(
      "assistant",
      "I'm currently unavailable, please try again later or email anthonywlynn2002@gmail.com any questions."
    );
  };

  const handleApiError = (errorMessage: string) => {
    if (isChatEnabled) {
      setIsChatEnabled(false);
    }
    addErrorMessage();
    console.log(errorMessage);
  };

  const createNewConversation = () => {
    createConversation()
      .then(({ id }) => {
        localStorage.conversationId = id;
      })
      .catch(handleApiError);
  };

  const createNewResponse = (message: string) => {
    createResponse({
      modelId: modelId,
      conversationId: conversationId,
      promptId: promptId,
      input: message,
    })
      .then(({ output }) => {
        setIsChatEnabled(true);
        output.forEach(({ content, role }) => {
          if (role !== "user" && role !== "assistant") {
            return;
          }

          content.forEach(({ text }) => {
            addMessage(role, text);
          });
        });
      })
      .catch(handleApiError)
      .finally(() => {
        setIsLoadingResponse(false);
      });
  };

  const onMessageSent = ({ message }: { message: string }) => {
    addMessage("user", message);
    setIsLoadingResponse(true);

    if (!conversationId) {
      createNewConversation();
      createNewResponse(message);
    } else {
      createNewResponse(message);
    }
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onChatMouseEnter = () => {
    setIsPulseActive(false);
  };

  useEffect(() => {
    if (!conversationId) {
      return;
    }

    getConversationItems({ conversationId: conversationId })
      .then(({ data }) => {
        data.forEach(({ content, role }) => {
          if (role !== "user" && role !== "assistant") {
            return;
          }

          content.forEach(({ text }) => {
            addMessage(role, text);
          });
        });
      })
      .catch((err) => {
        localStorage.removeItem("conversationId");
        handleApiError(err);
      });
  }, []);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center bg-base-secondary text-text-primary ${
        isDarkTheme ? "dark" : "light"
      }`}
    >
      <Header onThemeButtonClick={onThemeChange} isDarkTheme={isDarkTheme} />
      <main className="w-full md:max-w-[720px] pb-22 lg:pb-4 px-3 sm:px-4 md:px-0 flex flex-col gap-4 sm:gap-7 sm:pt-4">
        <About />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
      </main>
      <div className="sticky z-50 w-full bottom-0 p-0 flex justify-center">
        {isModalOpen && (
          <Chat
            isLoadingResponse={isLoadingResponse}
            messageStack={messageStack}
            isEnabled={isChatEnabled}
            onMessageSent={onMessageSent}
            onModalClose={onModalClose}
          />
        )}
        {!isModalOpen && (
          <ChatButton
            onModalOpen={onModalOpen}
            onMouseEnter={onChatMouseEnter}
            isPulseActive={isPulseActive}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};
