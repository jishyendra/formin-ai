"use client";
import Loader from "@/components/loader";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui";
import { toast } from "sonner";
export default function Login() {
	const { data, isPending, error } = useSession();
	const login = async () => {
		const { error, data } = await authClient.signIn.social({
			provider: "google",
			callbackURL: "/dashboard",
			// errorCallbackURL: "/error",
			// newUserCallbackURL: "/dashboard",
			// /**
			//  * disable the automatic redirect to the provider.
			//  * @default false
			//  */
			// disableRedirect: true,
		});
		if (error) {
			toast.error("Login failed! Please try again.");
		}
	};
	if (isPending) {
		return <Loader></Loader>;
	}
	return (
		<div className="flex justify-center items-center">
			{data ? (
				<div>
					<h1>Welcome, {data.user?.name}</h1>
					<p>Email: {data.user?.email}</p>
				</div>
			) : (
				<div className="align-center text-center">
					<h1>User is not logged in.</h1>
					<Button
						onClick={async () => await login()}
						type='button'
						variant={"outline"}
					>
						Login
					</Button>
				</div>
			)}
		</div>
	);
}
