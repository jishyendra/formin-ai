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
} from "@/components/ui";

type InputBoxProps = {
	field: FieldType;
};

export const FieldComponent = ({ field: f }: { field: FieldType }) => {
	switch (f.type) {
		case "select":
			return <SelectBox key={crypto.randomUUID()} field={f} />;
		case "radio":
			return <RadioBox key={crypto.randomUUID()} field={f} />;
		case "checkbox":
			return <CheckBox key={crypto.randomUUID()} field={f} />;
		default:
			return <InputBox key={crypto.randomUUID()} field={f} />;
	}
};

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
						<SelectItem key={crypto.randomUUID()} value={val}>
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
