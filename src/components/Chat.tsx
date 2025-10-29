import React, { useEffect, useState } from "react";
import { sendChatBotMessage } from "../utils/chatbaseApi";

interface ChatProps {}

type Role = "user" | "assistant";

export const Chat: React.FC<ChatProps> = ({}) => {
  const [isLoadingMessage, setIsLoadingMessage] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);
  const [messageStack, setMessageStack] = useState<
    { role: Role; content: string }[]
  >([]);

  const addMessage = (role: Role, message: string) => {
    setMessageStack([...messageStack, { role: role, content: message }]);
  };

  const onMessageSent = (message: string) => {
    addMessage("user", message);

    sendChatBotMessage({
      message: message,
      conversationId: "",
    })
      .then(({ text }) => {
        addMessage("assistant", text);
      })
      .catch((errorMessage: string) => {
        console.log(errorMessage);
      });
  };

  useEffect(() => {}, []);

  return <dialog></dialog>;
};
