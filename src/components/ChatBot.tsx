"use client";

import { useState } from "react";

import useOpenAI from "../lib/hooks/useOpenAI";

import { ChatButton } from "../components/ChatButton";
import { Chat } from "../components/Chat";

export const ChatBot: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPulseActive, setIsPulseActive] = useState(true);

  const { messageStack, isLoadingResponse, isEnabled, onMessageSent } =
    useOpenAI();

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onChatMouseEnter = () => {
    setIsPulseActive(false);
  };

  return (
    <div className="sticky z-50 w-full bottom-0 p-0 flex justify-center">
      {isModalOpen && (
        <Chat
          isLoadingResponse={isLoadingResponse}
          messageStack={messageStack}
          isEnabled={isEnabled}
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
  );
};
