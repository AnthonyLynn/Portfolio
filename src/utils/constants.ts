import { v4 as uuidv4 } from "uuid";

export let conversationId = localStorage.getItem("conversationId");
if (!conversationId) {
  const newId = uuidv4();
  localStorage.setItem("conversationId", newId);
  conversationId = newId;
}

export const apiKey = process.env.CHATBASE_KEY;
export const chatbotId = "gRkwKa2e8Q2Cna51rAeqP";
export const apiUrl = "https://www.chatbase.co/api/v1";
