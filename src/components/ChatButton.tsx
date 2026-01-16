"use client";

import React from "react";

import { ChatIcon } from "./Icons/ChatIcon";

interface ChatButtonProps {
  onModalOpen: () => void;
  onMouseEnter: () => void;
  isPulseActive: boolean;
}

export const ChatButton: React.FC<ChatButtonProps> = ({
  onModalOpen,
  onMouseEnter,
  isPulseActive,
}) => {
  return (
    <button
      className="absolute bottom-4 sm:right-4 w-16 aspect-square bg-base-tertiary hover:bg-base-primary rounded-full flex justify-center pt-4.5 hover:cursor-pointer group"
      onClick={onModalOpen}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={`absolute -z-10 bg-base-tertiary top-2 bottom-2 right-2 left-2 rounded-full ${
          isPulseActive && "animate-ping"
        }`}
      />
      <ChatIcon className="fill-text-primary w-9 h-8 group-hover:fill-text-secondary" />
    </button>
  );
};
