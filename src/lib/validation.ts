import z from "zod";

export const fieldInputSchema = z.enum([
	"text",
	"email",
	"number",
	"date",
	"checkbox",
	"radio",
	"select",
	"mobile",
	"link",
	"longtext",
	"file",
]);

export type FieldInputType = z.infer<typeof fieldInputSchema>;

const fieldSchema = z.object({
	name: z.string(),
	type: fieldInputSchema,
	prompt: z.string(),
	required: z.boolean(),
	options: z.array(z.string()).optional(),
});
export type FieldType = z.infer<typeof fieldSchema>;

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long"),
	description: z.string(),
	accepts: z.boolean().optional(),
	fields: z.array(fieldSchema).min(1, "At least one field is required"),
	archived: z.boolean().optional(),
	author: z.string(),
});

export type FormType = z.infer<typeof formSchema>;
