import type OpenAI from "openai";

function getResult(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function request(url: string, options: RequestInit) {
  return fetch(url, options).then(getResult);
}

export function createConversation(): Promise<OpenAI.Conversations.Conversation> {
  return request(`/openai/conversations`, {
    method: "POST",
  });
}

export function createResponse(
  conversationId: string,
  input: string
): Promise<OpenAI.Responses.Response> {
  console.log(conversationId);
  console.log(input);

  return request(`/openai/responses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      conversationId: conversationId,
      input: input,
    }),
  });
}

export function getConversationItems(
  conversationId: string
): Promise<OpenAI.Conversations.ConversationItemList> {
  return request(`/openai/conversations?conversationId=${conversationId}`, {
    method: "GET",
  });
}
