import { apiUrl } from "@/src/lib/utils/constants";
import { request } from "@/src/lib/utils/request";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("conversationId");

  if (!id) {
    return new Response("Missing conversationId parameter", { status: 400 });
  }

  return request(`${apiUrl}/conversations/${id}/items?order=asc`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API}`,
    },
  });
}

export async function POST() {
  return request(`${apiUrl}/conversations`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API}`,
    },
  });
}
