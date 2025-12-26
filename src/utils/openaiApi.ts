import { apiUrl, apiKey } from "./constants.js";

function getResult(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url: RequestInfo | URL, options?: RequestInit) {
  return fetch(url, options).then(getResult);
}

export function createConversation() {
  return request(`${apiUrl}/conversations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
  });
}

export function createResponse({
  modelId,
  conversationId,
  promptId,
}: {
  modelId: string;
  conversationId: string | undefined;
  promptId: string | undefined;
}) {
  return request(`${apiUrl}/responses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: modelId,
      prompt:
        (promptId && {
          id: promptId,
        }) ||
        undefined,
      conversation: conversationId,
    }),
  });
}

export function getConversationItems({
  conversationId,
}: {
  conversationId: string;
}) {
  return request(`${apiUrl}/conversations/${conversationId}/items&order=asc`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
  });
}
