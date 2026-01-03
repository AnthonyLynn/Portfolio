import React from "react";

import { BotProfile } from "./BotProfile";

interface MessageProps {
  shouldDisplayProfile: boolean;
  isSender: boolean;
  children: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({
  shouldDisplayProfile,
  isSender,
  children,
}) => {
  return (
    <li
      className={`p-3 flex flex-col gap-2 w-max max-w-[calc(100%*0.75)] rounded-sm ${
        isSender
          ? "self-end text-text-tertiary bg-text-primary"
          : "text-text-primary bg-base-tertiary"
      }`}
    >
      {shouldDisplayProfile && (
        <figure className="flex gap-2 items-center">
          <BotProfile
            backgroundClassName="w-6 bg-text-primary"
            iconClassName="fill-text-tertiary"
          />
          <figcaption className="text-xs">AI Assistant</figcaption>
        </figure>
      )}
      {children}
    </li>
  );
};
