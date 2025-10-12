import { useSession } from "@/lib/auth-client";
import type { ReactNode } from "react";
import Link from "next/link";

export default function WithAuth({ children }: { children: ReactNode }) {
	const { data } = useSession();
	if (!data?.user) {
		return <div>Please login to access this page <Link href="/user">Login here.</Link></div>;
	}
	return <>{children}</>;
}
