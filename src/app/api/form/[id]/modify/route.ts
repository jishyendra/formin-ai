import { NextRequest, NextResponse } from "next/server";
import { Form, createForm } from "../../../db.ts";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formId, fields } = body;
    if (!formId) NextResponse.json({ error: "Invalid form id", status: 400 });
    const form = await Form.findOne({ formId });
    form.fields = fields;
    await form.save();
  } catch (error) {
    return NextResponse.json({ error, status: 400 });
  }
}
