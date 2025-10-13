import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createForm } from "@/lib/db";
import type { Form } from "@/lib/types";
import z from "zod";

export async function POST(request: NextRequest) {
	try {
		if (!request.bodyUsed) throw Error("Invalid form data");
		const req = await request.json();
		const { headers, body } = req;
		console.log("body::", body);
		const res = await auth?.api.getSession({ headers });
		const { session, user } = res!;
		if (!res?.session) {
			throw Error("Authentication failed.");
		}

		const formData = body as Form;
		console.log(formData);
		await createForm(formData as Form, user.id as string, user.name as string);
		return NextResponse.json({ success: "Form created" }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
