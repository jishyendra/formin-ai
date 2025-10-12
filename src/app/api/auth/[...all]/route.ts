import { getAuth} from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const auth = await getAuth();
if (!auth) {
	throw Error("failed to initialize auth");
}
export const { GET, POST } = toNextJsHandler(auth.handler);
