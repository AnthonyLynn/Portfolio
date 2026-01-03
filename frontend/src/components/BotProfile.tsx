import React from "react";

import { BotIcon } from "./Icons/BotIcon";

interface BotProfileProps {
  backgroundClassName: string;
  iconClassName: string;
}

export const BotProfile: React.FC<BotProfileProps> = ({
  backgroundClassName,
  iconClassName,
}) => {
  return (
    <div
      className={`${backgroundClassName} aspect-square rounded-full flex justify-center pt-[calc(100% * calc(5/32))]`}
    >
      <BotIcon
        className={`${iconClassName} w-[calc(100%*calc(22/32))] h-calc[(100%*calc(20/32))]`}
      />
    </div>
  );
};
