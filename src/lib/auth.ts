import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getMongoClient } from "@/lib/db";

let authInstance: ReturnType<typeof betterAuth> | null = null;

async function initAuth() {
	if (authInstance) authInstance;
	try {
		const { client, db } = await getMongoClient();
		if (!client || !db) {
			throw new Error("No MongoDB client found");
		}
		authInstance = betterAuth({
			database: mongodbAdapter(db as any, { client } as any),
			socialProviders: {
				google: {
					prompt: "select_account",
					clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
					clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
				},
			},
		});
		return authInstance;
	} catch (e) {
		console.error("Error initializing auth:", e);
	}
}

export async function getAuth() {
	if (!authInstance) {
		await initAuth();
	}
	return authInstance;
}