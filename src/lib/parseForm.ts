export function parseForm(data: string) {
	return JSON.parse(data.replace(/^```json\n/, "").replace(/\n```$/, ""));
}
