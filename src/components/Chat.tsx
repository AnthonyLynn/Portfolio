"use client";

import React, { type FormEvent, useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

import { uuidv4 } from "../lib/utils/idGenerator";
import { useForm } from "../lib/hooks/useForm";

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
  isEnabled: boolean;
  onMessageSent: ({ message }: FromValues) => void;
  onModalClose: () => void;
}

export const Chat: React.FC<ChatProps> = ({
  messageStack,
  isLoadingResponse,
  isEnabled,
  onMessageSent,
  onModalClose,
}) => {
  const [inputHasAnimation, setInputHasAnimation] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { values, handleChange, setValues } = useForm<FromValues>({
    message: "",
  });

  const playErrorInputAnimation = () => {
    if (inputHasAnimation) {
      return;
    }

    setInputHasAnimation(true);
    setTimeout(() => {
      setInputHasAnimation(false);
    }, 1500);
  };

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (values.message === "") {
      return playErrorInputAnimation();
    }

    setValues({
      message: "",
    });
    onMessageSent(values);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageStack]);

  return (
    <dialog
      className={`fixed lg:absolute left-auto bottom-0 lg:bottom-4 lg:right-4 top-0 lg:top-auto w-full h-dvh lg:h-auto lg:w-95 bg-base-primary flex flex-col text-text-primary lg:rounded-lg ${
        !isEnabled && "border-2 border-red-500"
      }`}
      open
    >
      <div className="bg-base-tertiary flex justify-between p-3 lg:rounded-t-md">
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
      <div className="grow lg:h-128 overflow-y-scroll p-1 scrollbar mr-1">
        <ul className="flex flex-col gap-2">
          {messageStack.map((message) => {
            const isSender = message.role === "user";

            return (
              <Message
                isSender={isSender}
                shouldDisplayProfile={message.role === "assistant"}
                key={uuidv4()}
              >
                <article
                  className={`text-xs prose ${
                    isSender
                      ? "text-text-tertiary prose-strong:text-text-tertiary prose-li:text-text-tertiary"
                      : "text-text-primary prose-strong:text-text-primary prose-li:marker:text-text-primary"
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </article>
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
                <div className="w-2 aspect-square rounded-full bg-text-secondary animate-delayed-bounce"></div>
                <div
                  className="w-2 aspect-square rounded-full bg-text-secondary animate-delayed-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-2 aspect-square rounded-full bg-text-secondary animate-delayed-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </Message>
          )}
        </ul>
        <div ref={messagesEndRef} />
      </div>
      <div className="p-2 pb-8 sm:pb-2 lg:rounded-b-md bg-base-tertiary">
        <form
          className="rounded-sm bg-base-primary flex items-stretch justify-between"
          onSubmit={onSubmit}
        >
          <span className="relative grow">
            <input
              type="text"
              className="input-text text-xs p-3 w-full peer"
              placeholder=" "
              onChange={handleChange}
              name="message"
              id="message"
              value={values.message || ""}
            />
            <label
              htmlFor="message"
              className={`absolute top-0 left-0 text-text-secondary text-xs p-3 w-full peer-[:not(:placeholder-shown)]:hidden hover:cursor-text ${
                inputHasAnimation && "animate-error"
              }`}
            >
              Type message...
            </label>
          </span>

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
