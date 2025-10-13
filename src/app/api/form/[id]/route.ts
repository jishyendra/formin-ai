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

		const form = await Forms.findById(id);

		if (!form) {
			throw Error("Form not found");
		}

		return NextResponse.json({ form }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error }, { status: 400 });
	}
}
