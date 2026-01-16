"use client";

import { useEffect, useRef, useState } from "react";
import {
  createConversation,
  createResponse,
  getConversationItems,
} from "../utils/openai";
import { OpenAI } from "openai";

type Role = "user" | "assistant";

const useOpenAI = () => {
  const [messageStack, setMessageStack] = useState<
    { role: Role; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hello,\n\nWelcome to Anthony Lynn's portfolio site! I'm here to give career related information about Anthony in an easy accessible way. How can I help you?",
    },
  ]);
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const conversationIdRef = useRef("");

  const addMessage = (role: Role, message: string) => {
    setMessageStack((messageStack) => [
      ...messageStack,
      { role: role, content: message },
    ]);
  };

  const addErrorMessage = () => {
    addMessage(
      "assistant",
      "I'm currently unavailable, please try again later or email anthonywlynn2002@gmail.com any questions."
    );
  };

  const handleApiError = (errorMessage: string) => {
    if (isEnabled) {
      setIsEnabled(false);
    }

    addErrorMessage();
    console.error(errorMessage);
  };

  const addResponseMessage = (res: OpenAI.Responses.Response) => {
    const output = res.output;
    if (!output) {
      return;
    }

    (output as OpenAI.Responses.ResponseOutputMessage[]).forEach(
      ({ content }) => {
        if (!content) {
          return;
        }
        (content as OpenAI.Responses.ResponseOutputText[]).forEach(
          ({ text }) => {
            if (!text) {
              return;
            }

            addMessage("assistant", text);
          }
        );
      }
    );
  };

  const createNewResponse = (message: string, conversationId: string) => {
    createResponse(conversationId, message)
      .then((data) => {
        setIsEnabled(true);
        addResponseMessage(data);
      })
      .catch(handleApiError)
      .finally(() => {
        setIsLoadingResponse(false);
      });
  };

  const onMessageSent = async ({ message }: { message: string }) => {
    addMessage("user", message);
    setIsLoadingResponse(true);

    if (conversationIdRef.current === "") {
      createConversation()
        .then((data) => {
          conversationIdRef.current = data.id;
          localStorage.setItem("conversationId", conversationIdRef.current);
          createNewResponse(message, data.id);
        })
        .catch(handleApiError);
    } else {
      createNewResponse(message, conversationIdRef.current);
    }
  };

  useEffect(() => {
    conversationIdRef.current = localStorage.getItem("conversationId") ?? "";

    if (conversationIdRef.current === "") {
      return;
    }

    getConversationItems(conversationIdRef.current)
      .then(({ data }) => {
        (data as OpenAI.Conversations.Message[]).forEach(
          ({ content, role }) => {
            if (role !== "user" && role !== "assistant") {
              return;
            }

            (content as OpenAI.Conversations.TextContent[]).forEach(
              ({ text }) => {
                addMessage(role, text);
              }
            );
          }
        );
      })
      .catch((err) => {
        conversationIdRef.current = "";
        localStorage.removeItem("conversationId");
        handleApiError(err);
      });
  }, []);

  return {
    onMessageSent,
    isEnabled,
    messageStack,
    isLoadingResponse,
  };
};

export default useOpenAI;
