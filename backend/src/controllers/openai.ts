import express, { Request, NextFunction } from "express";
import { modelId, promptId, apiUrl, env } from "../utils/constants";

const { VITE_OPENAI_API } = env;

function getResult(res: Response): Promise<unknown> | Promise<never> {
  if (res.ok) {
    return res.json();
  }

  res
    .json()
    .then((data) => {
      console.error(data);
    })
    .catch((err) => {
      console.error(err);
    });

  return Promise.reject(`Error: ${res.status}`);
}

async function request(
  url: string | URL | globalThis.Request,
  options?: RequestInit
) {
  return fetch(url, options).then(getResult);
}

export function createConversation(
  _: Request,
  res: express.Response,
  next: NextFunction
) {
  request(`${apiUrl}/conversations`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${VITE_OPENAI_API}`,
    },
  })
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

export function createResponse(
  req: Request,
  res: express.Response,
  next: NextFunction
) {
  const id = req.body.conversationId;
  const input = req.body.input;

  request(`${apiUrl}/responses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${VITE_OPENAI_API}`,
    },
    body: JSON.stringify({
      model: modelId,
      prompt: {
        id: promptId,
      },
      conversation: id,
      input: input,
    }),
  })
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

export function getConversationItems(
  req: Request,
  res: express.Response,
  next: NextFunction
) {
  const id = req.query.conversationId;

  request(`${apiUrl}/conversations/${id}/items?order=asc`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${VITE_OPENAI_API}`,
    },
  })
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
