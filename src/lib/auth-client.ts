import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient();
export const { signOut, useSession } = authClient;

export const login= () =>
	authClient.signIn.social({
		provider: "google",
		callbackURL: "/dashboard",
		errorCallbackURL: "/error",
		newUserCallbackURL: "/dashboard",
		/**
		 * disable the automatic redirect to the provider.
		 * @default false
		 */
		disableRedirect: true,
	});
