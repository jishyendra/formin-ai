import type { FieldInputType } from "../validation";
export interface FormResponse {
	_id: string;
	name: string;
	description: string;
	authorName: string;
	fields: {
		prompt: string;
		type: FieldInputType;
		required: boolean;
		name: string;
		options?: string[];
	}[];
}

export type FormDataResponse = {
	[key: string]: string | boolean | File | null;
};
