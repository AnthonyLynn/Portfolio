import React, { FormEvent } from "react";
import { uuidv4 } from "../utils/idGenerator";

import { useForm } from "../hooks/useForm";

import { BotProfile } from "./BotProfile";
import { XIcon } from "./Icons/XIcon";
import { ArrowIcon } from "./Icons/ArrowIcon";

import { Message } from "./Message";

interface FromValues {
  message: string;
}

type Role = "user" | "assistant";

interface ChatProps {
  messageStack: { role: Role; content: string }[];
  isLoadingResponse: boolean;
  onMessageSent: ({}: FromValues) => void;
  onModalClose: () => void;
}

export const Chat: React.FC<ChatProps> = ({
  messageStack,
  isLoadingResponse,
  onMessageSent,
  onModalClose,
}) => {
  const { values, handleChange, setValues } = useForm<FromValues>({
    message: "",
  });

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setValues({
      message: "",
    });
    onMessageSent(values);
  };

  return (
    <dialog
      className="lg:absolute left-auto bottom-0 lg:right-4 lg:bottom-4 w-full lg:w-[380px] h-screen lg:h-auto bg-transparent flex flex-col text-text-primary"
      open
    >
      <div className="bg-base-tertiary flex justify-between p-3 rounded-t-md">
        <figure className="flex items-center gap-3">
          <BotProfile
            backgroundClassName="w-8 bg-text-primary"
            iconClassName="fill-text-tertiary"
          />
          <figcaption>AI Assistant</figcaption>
        </figure>
        <button
          className="w-8 aspect-square flex items-center justify-center hover:cursor-pointer group"
          onClick={onModalClose}
        >
          <XIcon className="w-4 aspect-square fill-text-primary group-hover:fill-text-secondary" />
        </button>
      </div>
      <div className="grow bg-base-primary">
        <ul className="lg:h-[512px] overflow-y-scroll p-1 scrollbar mr-1 flex flex-col gap-2">
          {messageStack.map((message) => {
            return (
              <Message
                isSender={message.role === "user"}
                shouldDisplayProfile={message.role === "assistant"}
                key={uuidv4()}
              >
                <p className="text-xs">{message.content}</p>
              </Message>
            );
          })}
          {isLoadingResponse && (
            <Message
              isSender={false}
              shouldDisplayProfile={false}
              key={uuidv4()}
            >
              <div className="flex gap-2">
                <div className="w-2 aspect-square rounded-full bg-text-secondary"></div>
                <div className="w-2 aspect-square rounded-full bg-text-secondary"></div>
                <div className="w-2 aspect-square rounded-full bg-text-secondary"></div>
              </div>
            </Message>
          )}
        </ul>
      </div>
      <div className="p-2 lg:rounded-b-md bg-base-tertiary">
        <form
          className="rounded-sm bg-base-primary flex items-stretch justify-between"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Type message..."
            className="placeholder:text-text-secondary text-text-primary text-xs p-3 grow"
            onChange={handleChange}
            name="message"
            value={values.message || ""}
            required
          />
          <button
            type="submit"
            className="hover:cursor-pointer flex justify-center items-center px-3 group"
          >
            <ArrowIcon className="h-5.5 fill-text-primary group-hover:fill-text-secondary" />
          </button>
        </form>
      </div>
    </dialog>
  );
};
