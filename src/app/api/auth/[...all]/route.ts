import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

if (!auth) {
	throw Error("failed to initialize auth");
}
export const { GET, POST } = toNextJsHandler(auth.handler);
