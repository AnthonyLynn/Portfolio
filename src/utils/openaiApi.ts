import { apiUrl, apiKey } from "./constants.js";

type APIOutput = {
  id: string;
  type: string;
  status: "in_progress" | "completed" | "incomplete";
  content: {
    text: string;
  }[];
  role: string;
}[];

function getResult(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url: RequestInfo | URL, options?: RequestInit) {
  return fetch(url, options).then(getResult);
}

export function createConversation(): Promise<{ id: string }> {
  console.log(apiKey);
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
  input,
}: {
  modelId: string;
  conversationId?: string;
  promptId?: string;
  input?: string;
}): Promise<{ output: APIOutput }> {
  if (!(input || promptId)) {
    return Promise.reject(
      `Error: createResponse function must receive input or promptId`
    );
  }

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
      input: input,
    }),
  });
}

export function getConversationItems({
  conversationId,
}: {
  conversationId: string;
}): Promise<{ data: APIOutput }> {
  return request(`${apiUrl}/conversations/${conversationId}/items?order=asc`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
  });
}
