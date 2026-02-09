"use server";

import z from "zod";
import { postSchema } from "./schemas/blog";
import { fetchAuthMutation } from "@/lib/auth-server";
import { api } from "../../convex/_generated/api";

export async function createBlogAction(values: z.infer<typeof postSchema>) {
  const parsed = postSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("invalid values something went wrong");
  }

  await fetchAuthMutation(api.post.createPost, {
    body: parsed.data.content,
    title: parsed.data.title,
  });

  return;
}
