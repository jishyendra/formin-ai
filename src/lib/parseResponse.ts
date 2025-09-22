export function parseResponse(data: string) {
	return JSON.parse(data.replace(/^```json\n/, "").replace(/\n```$/, ""));
}
