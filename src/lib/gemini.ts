"use server";
import { google } from "@ai-sdk/google";
import { GENERATE_PROMPT } from "./prompt";
import { generateText } from "ai";
import type { Form } from "./types";
import { parseResponse } from "./parseResponse";

export async function generateForm(
	user_query: string,
	form?: Form | any
	// mode: "generate" | "modify"
): Promise<Form & any> {
	const { text } = await generateText({
		model: google("gemini-2.5-flash"),
		system: GENERATE_PROMPT,
		prompt: `${user_query}\n data:${form}`,
	});
	return parseResponse(text);
}
