import type { FieldType } from "@/lib/validation";
import {
	Input,
	RadioGroup,
	RadioGroupItem,
	Label,
	SelectGroup,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectLabel,
	Select,
	Checkbox,
} from "@/components/ui";

type FieldComponentProps = {
	field: FieldType;
};

export const FieldComponent = ({ field }: FieldComponentProps) => {
	switch (field.type) {
		case "select":
			return <SelectBox field={field} />;
		case "radio":
			return <RadioBox field={field} />;
		case "checkbox":
			return <CheckBox field={field} />;
		default:
			return <InputBox field={field} />;
	}
};

function FieldLabel({ field, label }: { field: FieldType; label: string }) {
	return (
		<Label className='mt-4 mb-2 block font-medium' htmlFor={field.name}>
			{label}
			{field.required && <span className='text-destructive'>*</span>}
		</Label>
	);
}

function InputBox({ field }: FieldComponentProps) {
	return (
		<>
			<FieldLabel field={field} label={field.name} />
			<Input
				id={field.name}
				name={field.name}
				type={field.type}
				placeholder={field.prompt}
				required={field.required}
			/>
		</>
	);
}

function SelectBox({ field }: FieldComponentProps) {
	return (
		<div className='space-y-2'>
			<FieldLabel field={field} label={field.prompt || field.name} />
			<Select name={field.name} defaultValue=''>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder={field.prompt || "Select an option"} />
				</SelectTrigger>
				<SelectContent>
					{field.options?.map((option) => (
						<SelectItem key={`${field.name}-${option}`} value={option}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}

function CheckBox({ field }: FieldComponentProps) {
	return (
		<fieldset className='space-y-3'>
			<FieldLabel field={field} label={field.prompt || field.name} />
			<div className='space-y-2'>
				{field.options?.map((option) => (
					<div
						key={`${field.name}-${option}`}
						className='flex items-center space-x-2'
					>
						<Checkbox
							id={`${field.name}-${option}`}
							name={field.name}
							value={option}
						/>
						<Label
							htmlFor={`${field.name}-${option}`}
							className='font-normal cursor-pointer'
						>
							{option}
						</Label>
					</div>
				))}
			</div>
		</fieldset>
	);
}

function RadioBox({ field }: FieldComponentProps) {
	return (
		<fieldset className='space-y-3'>
			<FieldLabel field={field} label={field.prompt || field.name} />
			<RadioGroup name={field.name} defaultValue=''>
				{field.options?.map((option) => (
					<div
						key={`${field.name}-${option}`}
						className='flex items-center space-x-2'
					>
						<RadioGroupItem value={option} id={`${field.name}-${option}`} />
						<Label
							htmlFor={`${field.name}-${option}`}
							className='font-normal cursor-pointer'
						>
							{option}
						</Label>
					</div>
				))}
			</RadioGroup>
		</fieldset>
	);
}
