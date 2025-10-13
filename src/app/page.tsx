"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.push("/dashboard");
	}, []);
	return <div className='container mx-auto max-w-3xl px-4 py-2'></div>;
}
