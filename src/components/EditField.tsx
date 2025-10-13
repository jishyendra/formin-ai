"use client";
import React, { useState, type FormEvent } from "react";
import type { FieldType, Field } from "@/lib/types";
import {
	Label,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from "@/components/ui";
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui";

import { useFormStore } from "@/store/store";
import { XIcon } from "lucide-react";
import { FIELD_TYPES } from "@/lib/constants";
import { setFlagsFromString } from "v8";

export default function EditFieldComponent({
	field,
	idx,
}: {
	field: Field;
	idx: number;
}) {
	const { setForm } = useFormStore((state) => state);
	return (
		<Dialog>
			<DialogTrigger>Modify</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Customise field</DialogTitle>
				</DialogHeader>
				{/* <p className='text-gray-400'>Field preview</p> */}
				<div className='rounded-l'>
					{/* <FieldComponent field={field} /> */}
					<EditField field={field} idx={idx} />
				</div>
			</DialogContent>
		</Dialog>
	);
}

type EditFieldProps = {
	field: Field;
	idx: number;
};

function EditField(props: EditFieldProps) {
	const { field, idx } = props;
	const { form, setForm } = useFormStore((state) => state);
	// const [field, setField] = useState(props.field);
	const [name, setName] = useState<string>(field.name);
	const [prompt, setPrompt] = useState<string>(field.prompt);
	const [required, setRequired] = useState<boolean>(field.required);
	const [type, setType] = useState<FieldType>(field.type as FieldType);
	const [options, setOptions] = useState<string[] | undefined>(field.options);
	const [customOption, setCustomOption] = useState("");

	function removeField(idx: number) {
		setOptions(options?.filter((opt, i) => i != idx));
		return;
	}
	function handleSaveField(e: FormEvent, idx: number) {
		e.preventDefault();
		const fields = form.fields;
		const newField = { name, type, prompt, required, options };
		fields[idx] = newField;
		setForm({ ...form, fields: fields });
	}

	return (
		<form className='flex flex-col gap-3 [&_div>*:nth-child(2)]:ml-1 [&>div]:flex [&>div]:gap-2'>
			<div>
				<Label>Name:</Label>
				<Input
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder={name}
					value={name}
				></Input>
			</div>
			<div>
				<Label>Prompt:</Label>
				<Input
					onChange={(e) => setPrompt(e.target.value)}
					type='text'
					placeholder={prompt}
					value={prompt}
				></Input>
			</div>
			<div>
				<Label>Type:</Label>
				<Select>
					<SelectGroup>
						<SelectTrigger className='w-[180px]'>
							<SelectValue placeholder={type} />
						</SelectTrigger>
						<SelectContent>
							{FIELD_TYPES.map((val) => (
								<SelectItem key={crypto.randomUUID()} value={val}>
									{val}
								</SelectItem>
							))}
						</SelectContent>
					</SelectGroup>
				</Select>
			</div>
			<div>
				<Label>Required?:</Label>
				<div className='[&>button]:px-3 [&>button]:py-2'>
					<Button
						variant={required ? "default" : "outline"}
						type='button'
						onClick={() => setRequired(true)}
					>
						True
					</Button>
					<Button
						variant={!required ? "default" : "outline"}
						type='button'
						onClick={() => setRequired(false)}
					>
						False
					</Button>
				</div>
			</div>
			{field.options && (
				<div>
					<Label>Options:</Label>
					<div>
						<div className='flex flex-wrap gap-1 p-1 m-1 border rounded-md'>
							{options?.map((opt, idx) => (
								<span
									className='flex align-center rounded-md px-2 gap-2 border-2 w-max'
									key={crypto.randomUUID()}
								>
									<span>{opt}</span>
									<button type='button' onClick={() => removeField(idx)}>
										<XIcon className="hover:text-red-400 hover:cursor-pointer"/>
									</button>
								</span>
							))}
						</div>
						<div className='flex '>
							<Input
								className='flex-1'
								type='text'
								value={customOption}
								onChange={(e) => setCustomOption(e.target.value)}
								placeholder='Custom option..'
							></Input>
							<Button
								type='button'
								onClick={(e) => {
									e.preventDefault();
									setOptions((prev) => [...prev!, customOption]);
									setCustomOption("");
								}}
							>
								Add
							</Button>
						</div>
					</div>
				</div>
			)}
			<Button onClick={(e) => handleSaveField(e, idx)}>Finish</Button>
		</form>
	);
}
