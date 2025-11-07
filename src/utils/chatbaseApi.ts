import { chatbotId, apiUrl, apiKey } from "./constants.js";

interface APIMessage {
  message: string;
  conversationId: string;
}

interface APIConversation {
  id: string;
  messages: { role: Role; content: string }[];
}

type Role = "user" | "assistant";

function getResult(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function request(url: RequestInfo | URL, options?: RequestInit) {
  return fetch(url, options).then(getResult);
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

export function getConversations(): Promise<{ data: APIConversation[] }> {
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
