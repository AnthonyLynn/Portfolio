import React from "react";

import { ChatIcon } from "./Icons/ChatIcon";

interface ChatButtonProps {
  onModalOpen: () => void;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ onModalOpen }) => {
  return (
    <button
      className="absolute bottom-4 right-4 w-16 h-16 bg-base-tertiary hover:bg-base-primary rounded-full flex justify-center pt-4.5 hover:cursor-pointer group"
      onClick={onModalOpen}
    >
      <ChatIcon className="fill-text-primary w-9 h-8 group-hover:fill-text-secondary" />
    </button>
  );
};
