import { apiUrl, modelId, promptId } from "@/src/lib/utils/constants";
import { request } from "@/src/lib/utils/request";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { conversationId, input } = await req.json();

  return request(`${apiUrl}/responses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.OPENAI_API}`,
    },
    body: JSON.stringify({
      model: modelId,
      prompt: {
        id: promptId,
      },
      conversation: conversationId,
      input: input,
    }),
  });
}
