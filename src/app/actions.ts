"use server";
import type { Form } from "@/lib/types.ts";
import { createForm, Forms } from "./db.ts";

export async function addNewForm(form: Form) {
	const formId = await createForm(form);
	if (!formId) return { error: "Error saving form fields to db", status: 400 };
	return { message: "Form created", formId, status: 201 };
}

export async function modifyForm(form: Form) {
	try {
		return { success: true, status: 200 };
	} catch (error) {
		return { error, status: 400 };
	}
}

export async function postResponse(formId: string, data: FormData) {
	try {
		const form = await Forms.findOne({ formId });
		if (!form || form.archived || !form.accepts) {
			throw Error("Form is no longer taking responses");
		}
		await form.data.push(data);
		return { success: true, status: 201 };
	} catch (error) {
		return { error, status: 400 };
	}
}
