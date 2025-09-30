import { NextResponse, type NextRequest } from "next/server";
import { form } from "@/lib/formdata";
import { parseForm } from "@/lib/parseForm";

export async function GET(req: NextRequest) {
	const parsed = parseForm(form.text);
	return NextResponse.json(parsed);
}
