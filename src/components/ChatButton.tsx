import React from "react";

import { ChatIcon } from "./Icons/ChatIcon";

interface ChatButtonProps {
  onModalOpen: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ onModalOpen }) => {
  return (
    <button
      className="md:absolute md:bottom-4 md:right-4 w-16 h-16 bg-base-tertiary rounded-full flex justify-center pt-4.5 hover:cursor-pointer"
      onClick={onModalOpen}
    >
      <ChatIcon className="fill-text-primary w-9 h-8" />
    </button>
  );
};
