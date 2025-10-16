"use server";
// import type { Form } from "@/lib/types.ts";
import type { FormType as Form } from "../lib/validation.ts";
import { createForm, Forms } from "../lib/db.ts";
import { headers } from "next/headers";
import { auth } from "@/lib/auth.ts";

export async function addNewForm(form: Form) {
	try {
		console.log("Creating new form:", form);
		const authSession = await auth?.api.getSession({
			headers: await headers(),
		});
		console.log("Auth session:", authSession);
		const user = authSession?.user;
		if (!user) throw Error("Invalid authentication");
		const formId = await createForm(form, user.id, user.name);
		if (!formId) throw Error("Error saving form fields to db");
		return { message: "Form created", formId, status: 201 };
	} catch (error) {
		console.log(error);
		return { error: "Error creating form", status: 400 };
	}
}
export async function postResponse(formId: string, data: FormData) {
	try {
		const form = await Forms.findById(formId);
		if (!form || form.archived || form.accepts === false) {
			throw Error("Form is no longer taking responses");
		}
		console.log("user submiting response:", data);
		await form.data.push(data);
		await form.save();
		return { success: true, status: 201 };
	} catch (error) {
		console.log(error);
		return { error: "Error submitting", status: 400 };
	}
}

export async function modifyForm(form: Form) {
	try {
		return { success: true, status: 200 };
	} catch (error) {
		return { error: "Error", status: 400 };
	}
}
export async function getFormData(formId: string) {
	const form = await Forms.findById(formId);
	if (!form) {
		return JSON.stringify({ error: "Form not found", status: 404 });
	}
	return JSON.stringify({ data: form, status: 200 });
}
