"use server";
import { google } from "@ai-sdk/google";
import { GENERATE_PROMPT } from "./prompt";
import { generateText } from "ai";
import type { Form } from "./types";
import { parseForm } from "./parseForm";
import { dummyForm } from "@/lib/formdata";

export async function generateForm(
	user_query: string,
	form?: Form | any
	// mode: "generate" | "modify"
): Promise<Form & any> {
	console.log("API Call: Create Form:", user_query);
	// const { text, content, reasoning } = await generateText({
	// 	model: google("gemini-2.5-flash"),
	// 	system: GENERATE_PROMPT,
	// 	prompt: `${user_query}\n data:${form}`,
	// });

	const parsed = parseForm(dummyForm);
	console.log("AI form :", parsed);
	// console.log("AI content", content);
	// console.log("AI reasoning", reasoning);
	return parsed;
}
