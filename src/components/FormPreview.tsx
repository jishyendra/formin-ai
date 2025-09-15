"use client";
import type { Field, Form } from "@/lib/types";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import Link from "next/link";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from "./ui/select";

import { SelectGroup } from "@radix-ui/react-select";
import { useFormStore } from "@/store/store";
import axios from "axios";
import { toast } from "sonner";
import ChatBox from "./ChatBox";

type Props = {
	form: Form;
};

export default function FormPreview({ form }: Props) {
	console.log(form.fields_json);
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
					<Button className='w-full cursor-pointer mt-8 mb-8'>Finish</Button>
				</Link>
			</form>
		</>
	);
}

const FieldComponent = ({ field: f }: { field: Field }) => {
	switch (f.type) {
		case "select":
			return <SelectBox key={crypto.randomUUID()} field={f} />;
		case "radio":
			return <RadioBox key={crypto.randomUUID()} field={f} />;
		case "checkbox":
			return <CheckBox key={crypto.randomUUID()} field={f} />;
		case "submit":
			return (
				<Input
					className='p-2 mx-auto mt-2'
					type='submit'
					key={crypto.randomUUID()}
				/>
			);
		default:
			return <InputBox key={crypto.randomUUID()} field={f} />;
	}
};
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

function EditFieldComponent({ field, idx }: { field: Field; idx: number }) {
	const { form, setForm } = useFormStore((state) => state);

	async function modifyFieldWithAi() {
		await axios
			.post("/api/field/", field)
			.then((res) => {
				setForm({
					...form,
					fields_json: form.fields_json.map((field, index) =>
						index === idx ? res.data : field
					),
				});
			})
			.catch((err) => {
				toast("Can`t modify, Please try again.");
			});
	}
	return (
		<Dialog>
			<DialogTrigger>Modify</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Customise field</DialogTitle>
				</DialogHeader>
				<p className='text-gray-400'>Field preview</p>
				<div className='p-4 rounded-l border shadow-2xl'>
					<FieldComponent field={field} />
				</div>
				<ChatBox placeholder='Ask ai to modify title, prompt, options..' />
			</DialogContent>
		</Dialog>
	);
}

function InputLabel({ field: f }: InputBoxProps) {
	return (
		<Label className='mt-4 mb-2 block font-medium' htmlFor={f.name}>
			{f.name}
			{f.required ? "*" : ""}
		</Label>
	);
}
function InputBox({ field: f }: InputBoxProps) {
	return (
		<>
			<Label className='mt-4 mb-2 block font-medium' htmlFor={f.name}>
				{f.name}
				{f.required ? "*" : ""}
			</Label>
			<Input
				name={f.name}
				type={f.type}
				placeholder={f.prompt}
				required={f.required}
			/>
		</>
	);
}

function SelectBox({ field: f }: InputBoxProps) {
	return (
		<Select>
			<SelectGroup>
				<Label className='mt-4 mb-2 block font-medium' htmlFor={f.name}>
					{f.prompt}
					{f.required ? "*" : ""}
				</Label>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder={f.prompt} />
				</SelectTrigger>
				<SelectContent>
					{f.options?.map((val, idx) => (
						<SelectItem key={val + idx} value={val}>
							{val}
						</SelectItem>
					))}
				</SelectContent>
			</SelectGroup>
		</Select>
	);
}

function OptionsBox({ field: f }: InputBoxProps) {
	return (
		<>
			{f.options?.map((opt, idx) => (
				<div className='grid grid-col-2' key={crypto.randomUUID()}>
					<label>{opt}</label>
					<input
						name={f.name}
						type='radio'
						key={crypto.randomUUID()}
						value={opt}
						placeholder={opt}
					></input>
				</div>
			))}
		</>
	);
}

function CheckBox({ field: f }: InputBoxProps) {
	return (
		<>
			<Label className='mt-4 mb-2 block font-medium' htmlFor={f.name}>
				{f.prompt}
				{f.required ? "*" : ""}
			</Label>
			<OptionsBox field={f} />
		</>
	);
}

function RadioBox({ field: f }: InputBoxProps) {
	return (
		<RadioGroup defaultValue='none'>
			<Label className='mt-4 mb-2 block font-medium' htmlFor={f.name}>
				{f.prompt}
				{f.required ? "*" : ""}
			</Label>
			{f.options?.map((opt) => {
				return (
					<div
						key={crypto.randomUUID()}
						className='flex items-center space-x-2'
					>
						<RadioGroupItem value={opt} id={opt} />
						<Label htmlFor={opt}>{opt}</Label>
					</div>
				);
			})}
		</RadioGroup>
	);
}
