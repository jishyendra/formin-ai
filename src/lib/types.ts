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
	fields: Field[];
	author: string;
}

export type FieldType =
	| "text"
	| "email"
	| "number"
	| "mobile"
	| "link"
	| "longtext"
	| "select"
	| "date"
	| "radio"
	| "checkbox"
	| "file";

// export enum FieldType {
// 	// "text | email | number | mobile | link | longtext | select | date | radio | checkbox | file",
// 	Name = "name",
// 	Email = "email",

// 	Phone = "phone",
// 	Numeric = "number",

// 	Default = "text)",

// 	Url = "url",
// 	File = "file",

// 	Country = "Country",
// }
