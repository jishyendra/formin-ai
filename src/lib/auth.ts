import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/lib/db";

export const auth = betterAuth({
	//...
	database: mongodbAdapter(client.db(), { client }),
	socialProviders: {
		google: {
			prompt: "select_account",
			clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
		},
	},
});
