import type { FieldType, FieldInputType } from "@/lib/validation";
import { Input } from "./ui/input";

import { z } from "zod";
import type { FieldValues, UseFormRegister } from "react-hook-form";

type RegisterProp = UseFormRegister<FieldValues>;

export const RenderField = (field: FieldType, register: RegisterProp) => {
	switch (field.type) {
		case "email":
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
		case "number":
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
		case "link":
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
		case "mobile":
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
		case "file":
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
