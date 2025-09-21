import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const { url, formId } = body.url;
    if (!url || !z.url().safeParse(url).success) throw Error("Invalid url");
    //handle store url in db with form id
    return NextResponse.json({ success: true, url: url });
  } catch (_error) {
    return NextResponse.json({ success: false });
  }
}
