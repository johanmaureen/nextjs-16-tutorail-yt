import { NextResponse } from "next/server";

export async function POST() {
  console.log("Hello create-blog POST");
  return NextResponse.json({ success: true });
}
