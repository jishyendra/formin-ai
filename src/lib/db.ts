import type { Form } from "@/lib/types";
import mongoose from "mongoose";

export const connection = await mongoose.connect(
	process.env.DATABASE_URL as string
	// {
	// 	user: "Anirudh",
	// 	pass: "Anirudh@8071",
	// }
);
export const client = connection.connection.getClient();

export const forms = new mongoose.Schema({
	formId: {
		type: String,
		required: true,
	},
	title: { type: String, required: true },
	description: { type: String, required: true },
	fields: {
		type: Object,
		required: true,
	},
	data: {
		type: [Object],
		default: [],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	author: {
		type: String,
		require: true,
	},
	accepts: {
		type: Boolean,
		default: true,
	},
	archived: {
		type: Boolean,
		default: false,
	},
});

const Forms = mongoose.models.Forms || mongoose.model("Forms", forms);
export { Forms };

export async function createForm(form: Form) {
	"use server";
	const doc = await Forms.insertOne({
		formId: crypto.randomUUID() as string,
		name: form.name,
		description: form.description,
		fields: form.fields_json,
		data: [],
		author: "1",
	});
	if (doc.formId) doc.formId;
	return null;
}