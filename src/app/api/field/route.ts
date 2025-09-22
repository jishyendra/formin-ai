import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		console.log(body.field);

		//handle field modify req with custom prompt

		const updated = {
			name: "This is updated field",
			type: "text",
			prompt: "Enter valid data",
			required: true,
		};
		return NextResponse.json(updated);
	} catch (error) {
		console.log("Error modifying field", error);
	}
}