export interface Field {
	name: string;
	type: string;
	prompt: string;
	required: boolean;
	options?: string[];
}

export interface Form {
	name: string;
	description: string;
	fields_json: Field[];
}

export enum FieldType {
	Name = "name",
	Email = "email",

	Phone = "phone",
	Numeric = "number",

	Default = "text)",

	Url = "url",
	File = "file",

	Country = "Country",
}
