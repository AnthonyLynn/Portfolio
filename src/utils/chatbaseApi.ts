import { chatbotId, apiUrl, apiKey } from "./constants.js";

function getResult(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function request(url: RequestInfo | URL, options?: RequestInit) {
  return fetch(url, options).then(getResult);
}

interface APIMessage {
  message: string;
  conversationId: string;
}

export function sendChatBotMessage({
  message,
  conversationId,
}: APIMessage): Promise<{ text: string }> {
  return request(`${apiUrl}/chat`, {
    method: "POST",
    body: JSON.stringify({
      chatbotId: chatbotId,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      conversationId: conversationId,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
  });
}

type Role = "user" | "assistant";

export function getConversations(): Promise<{
  data: { id: string; messages: { role: Role; content: string }[] }[];
}> {
  return request(
    `${apiUrl}/get-conversations?chatbotId=${chatbotId}&filteredSources=API`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
    }
  );
}
