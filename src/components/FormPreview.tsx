"use client";
import React from "react";
// import axios from "axios";
import Link from "next/link";
import type { Field, Form } from "@/lib/types";
import { FieldComponent } from "./FieldComponent";
import EditFieldComponent from "./EditField";
import {
	Button,
	// Dialog,
	// DialogContent,
	// DialogHeader,
	// DialogTitle,
	// DialogTrigger,
} from "@/components/ui";

import { useFormStore } from "@/store/store";
import { toast } from "sonner";
// import ChatBox from "./ChatBox";

type Props = {
	form: Form;
};

function saveForm() {}

export default function FormPreview({ form }: Props) {
	return (
		<>
			<form className='w-full max-w-2xl mx-auto p-4'>
				<h2 className='text-2xl font-bold mb-4'>{form.name}</h2>
				<p>{form.description}</p>
				{form.fields_json.map((f, idx) => {
					return (
						<FieldWrapper key={crypto.randomUUID()} idx={idx} field={f}>
							<FieldComponent field={f} />
						</FieldWrapper>
					);
				})}

				<Link href='/dashboard/form/123'>
					<Button
						className='w-full cursor-pointer mt-8 mb-8'
						onClick={saveForm}
					>
						Finish
					</Button>
				</Link>
			</form>
		</>
	);
}

type InputBoxProps = {
	field: Field;
};

type FieldWrapperProps = InputBoxProps & {
	children: React.ReactNode;
	idx: number;
};

function FieldWrapper({ children, field, idx }: FieldWrapperProps) {
	const { form, setForm } = useFormStore((state) => state);

	function removeField() {
		setForm({
			...form,
			fields_json: form.fields_json.filter((_, index) => index != idx),
		});
		toast(`Removed '${field.name}'`);
	}

	return (
		<div className='relative'>
			<div className='flex-1'>{children}</div>
			<div className='flex gap-4 text-sm text-gray-400 italic absolute top-0 right-2 cursor-pointer'>
				<EditFieldComponent field={field} idx={idx} />
				<button onClick={removeField}>Remove</button>
			</div>
		</div>
	);
}
