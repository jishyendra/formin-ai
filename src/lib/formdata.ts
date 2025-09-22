// import type { Form } from "@/lib/types";
export const form = {
	text: '```json\n{\n  "name": "Hackathon Registration Form",\n  "description": "Sign up for our exciting hackathon event and showcase your skills!",\n  "fields_json": [\n    {\n      "name": "Full Name",\n      "type": "text",\n      "prompt": "What is your full name?",\n      "required": true\n    },\n    {\n      "name": "Email Address",\n      "type": "email",\n      "prompt": "What is your email address?",\n      "required": true\n    },\n    {\n      "name": "Team Name",\n      "type": "text",\n      "prompt": "What is your team name? (If applicable)",\n      "required": false\n    },\n    {\n      "name": "Skills/Expertise",\n      "type": "longtext",\n      "prompt": "Tell us about your skills and areas of expertise.",\n      "required": true,\n      "followUp": true\n    },\n    {\n      "name": "Preferred Hackathon Track",\n      "type": "select",\n      "prompt": "Which hackathon track are you most interested in?",\n      "options": ["Web Development", "Mobile Apps", "Data Science", "AI/ML", "Other"],\n      "required": true\n    },\n    {\n      "name": "Dietary Restrictions",\n      "type": "text",\n      "prompt": "Do you have any dietary restrictions or allergies?",\n      "required": false\n    }\n  ]\n}\n```',
};
// export const form1: Form = JSON.parse(
// 	form.text.replace(/^```json\n/, "").replace(/\n```$/, "")
// );
// form1.fields = form1.fields.concat([
// 	{
// 		name: "Date",
// 		type: "date",
// 		prompt: "Enter valid data",
// 		required: true,
// 	},
// 	{
// 		name: "checkbox",
// 		type: "checkbox",
// 		prompt: "Enter valid date",
// 		required: true,
// 	},
// 	{
// 		name: "file",
// 		type: "file",
// 		prompt: "Enter valid file",
// 		required: true,
// 	},
// 	{
// 		name: "radio",
// 		type: "radio",
// 		prompt: "Enter valid radio",
// 		required: true,
// 		options: ["option1", "option2"],
// 	},
// ]);

// export const form2: Form = {
// 	name: "Entry pass",
// 	description: "Please enter you info for entry ticket.",
// 	fields_json: [
// 		{
// 			name: "Name",
// 			type: "text",
// 			prompt: "Enter valid Name",
// 			required: true,
// 		},
// 		{
// 			name: "mail",
// 			type: "mail",
// 			prompt: "Enter valid mail",
// 			required: true,
// 		},
// 		{
// 			name: "phone",
// 			type: "phone",
// 			prompt: "Enter valid phone",
// 			required: false,
// 		},
// 	],
// };
