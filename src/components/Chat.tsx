import React, { FormEvent } from "react";

import { useForm } from "../hooks/useForm";

import { BotIcon } from "./Icons/BotIcon";
import { XIcon } from "./Icons/XIcon";
import { ArrowIcon } from "./Icons/ArrowIcon";

interface FromValues {
  message: string;
}

interface ChatProps {
  onMessageSent: ({}: FromValues) => void;
}

export const Chat: React.FC<ChatProps> = ({ onMessageSent }) => {
  const { values, handleChange } = useForm<FromValues>({
    message: "",
  });

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    onMessageSent(values);
  };

  return (
    <dialog
      className="lg:absolute left-auto lg:right-4 lg:bottom-4 w-[380px] h-[718px] bg-transparent flex flex-col text-text-primary"
      open
    >
      <div className="bg-base-tertiary flex justify-between p-3 rounded-t-md">
        <div className="flex items-center gap-3">
          <div className="w-8 aspect-square bg-text-primary rounded-full flex justify-center pt-[5px]">
            <BotIcon className="w-5.5 h-5 fill-text-tertiary" />
          </div>
          <h2>AI Assistant</h2>
        </div>
        <button className="w-8 aspect-square flex items-center justify-center">
          <XIcon className="w-4 aspect-square fill-text-primary" />
        </button>
      </div>
      <div className="grow bg-base-primary">
        <ul className="h-full overflow-y-scroll p-2 pt-1 pr-2 scrollbar mr-1 mt-1 mb-1">
          <li className="h-[200%] w-full"></li>
        </ul>
      </div>
      <div className="p-2 rounded-b-md bg-base-tertiary">
        <form
          className="p-2 pl-4 rounded-sm bg-base-primary flex items-center justify-between"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Type message..."
            className="placeholder:text-text-secondary text-text-primary text-xs"
            onChange={handleChange}
            value={values.message || ""}
            required
          />
          <button type="submit">
            <ArrowIcon className="h-5.5 fill-text-primary" />
          </button>
        </form>
      </div>
    </dialog>
  );
};
