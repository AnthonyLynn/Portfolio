import React from "react";

import { ChatIcon } from "./Icons/ChatIcon";

interface ChatButtonProps {}

export const ChatButton: React.FC<ChatButtonProps> = ({}) => {
  return (
    <button className="md:absolute md:bottom-4 md:right-4 w-16 h-16 bg-base-tertiary rounded-full flex justify-center pt-4.5">
      <ChatIcon className="fill-text-primary w-9 h-8" />
    </button>
  );
};
