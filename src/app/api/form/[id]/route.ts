import { NextRequest, NextResponse } from "next/server";
import { Forms } from "@/lib/db";

interface GETProps {
	params: Promise<{
		id: string;
	}>;
}

export async function GET(req: NextRequest, { params }: GETProps) {
	const { id } = await params;
	try {
		if (!id) {
			throw Error("Form not found");
		}
		const form = await Forms.findById(
			id,
			"fields name description authorName accepts archived"
		);
		if (!form) {
			throw Error("Form not found");
		}
		if (form.archived || form.accepts === false) {
			return NextResponse.json(
				{ error: "Form is not accepting responses" },
				{ status: 403 }
			);
		}
		return NextResponse.json(
			{
				_id:form._id,
				name: form.name,
				description: form.description,
				fields: form.fields,
				authorName: form.authorName,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 400 });
	}
}
