"use client";
import React from "react";
import type { FieldType, FormType } from "@/lib/validation";
import { FieldComponent } from "./FieldComponent";
import EditFieldComponent from "./EditField";
import { Button } from "@/components/ui";

import { useFormStore } from "@/store/store";
import { toast } from "sonner";
import { addNewForm } from "@/app/actions";

type Props = {
	form: FormType;
};

async function saveForm(form: any) {
	try {
		console.log("formdata:", form);
		const res = await addNewForm(form);
		if (res.status === 201) {
			toast.success("Form created!");
		} else {
			throw Error;
		}
	} catch (error) {
		console.log(error);
		toast.error("Error creating form");
	}
}

export default function FormPreview({ form }: Props) {
	const { form: formdata, resetForm } = useFormStore((state) => state);
	return (
		<>
			<form className='w-full max-w-2xl mx-auto p-4'>
				<h2 className='text-2xl font-bold mb-4'>{form.name}</h2>
				<p>{form.description}</p>
				{form.fields.map((f, idx) => {
					return (
						<FieldWrapper key={crypto.randomUUID()} idx={idx} field={f}>
							<FieldComponent field={f} />
						</FieldWrapper>
					);
				})}
			</form>
			<Button
				variant='default'
				onClick={async () => await saveForm(formdata)}
				className='w-full cursor-pointer mt-8 mb-8'
			>
				Save Form
			</Button>
			<Button onClick={() => resetForm()} variant='destructive' className=''>
				Clear Form
			</Button>
		</>
	);
}

type InputBoxProps = {
	field: FieldType;
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
			fields: form.fields.filter((_, index) => index != idx),
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
