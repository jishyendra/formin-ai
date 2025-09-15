import type { Field, Form } from "@/lib/types";
import { FieldType } from "@/lib/types";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { z } from "zod";
import type { FieldValues, UseFormRegister } from "react-hook-form";

type RegisterProp = UseFormRegister<FieldValues>;

export const RenderField = (field: Field, register: RegisterProp) => {
	switch (field.type) {
		case FieldType.Email:
			return (
				<Input
					type='email'
					{...register(field.name, {
						// required: "Email is required",
						validate: (value) => {
							const res = z.email().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.prompt}
					placeholder='Enter valid email'
					required={field.required}
				/>
			);
		case FieldType.Numeric:
			return (
				<Input
					type='number'
					{...register(field.prompt, {
						required: "This is required",
						validate: (value) => {
							const res = z.number().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.prompt}
					placeholder={field.prompt}
					required={field.required}
				/>
			);
		case FieldType.Url:
			return (
				<Input
					type='url'
					{...register(field.prompt, {
						required: field.required,
						validate: (value) => {
							const res = z.url().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.prompt}
					placeholder='Enter URL'
					required={field.required}
				/>
			);
		case FieldType.Phone:
			return (
				<Input
					type='tel'
					{...register(field.prompt, {
						required: field.required,
						validate: (value) => {
							const res = z.number().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.prompt}
					placeholder='Phone Number'
					required={field.required}
				/>
			);
		case FieldType.File:
			return (
				<Input
					type='file'
					{...register(field.prompt, { required: field.required })}
					name={field.prompt}
					placeholder='Upload File'
					required={field.required}
				/>
			);
		default:
			return (
				<Input
					type='text'
					{...register(field.prompt, {
						required: field.required,
						validate: (value) => {
							const res = z.string().safeParse(value);
							return res.success || res.error.message;
						},
					})}
					name={field.prompt}
					placeholder={field.prompt}
					required={field.required}
				/>
			);
	}
};
