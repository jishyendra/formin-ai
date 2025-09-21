import { NextResponse, NextRequest } from "next/server";
import { createForm } from "../../db.ts";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("adding form to db");
    const doc = await createForm(body);
    if (!doc) throw Error("Error saving form fields to db");
    return NextResponse.json({ message: "Form created", status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error as string, status: 400 });
  }
}
