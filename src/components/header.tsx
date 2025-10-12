"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useSession } from "@/lib/auth-client";

export default function Header() {
	const llinks = [{ to: "/", label: "formin-ai" }] as const;

	const rlinks = [
		{ to: "/create", label: "New Form" },
		{ to: "/dashboard", label: "Dashboard" },
	] as const;
	const { data: session } = useSession();

	return (
		<div>
			<div className='flex flex-row items-center justify-between px-2 py-1'>
				<nav className='flex justify-between text-lg w-full'>
					<div className='flex gap-4 '>
						{llinks.map(({ to, label }) => {
							return (
								<Link key={crypto.randomUUID()} href={to}>
									{label}
								</Link>
							);
						})}
					</div>
					<div className='flex gap-4 '>
						{session?.user ? (
							rlinks.map(({ to, label }) => {
								return (
									<Link key={crypto.randomUUID()} href={to}>
										{label}
									</Link>
								);
							})
						) : (
							<Link key={crypto.randomUUID()} href="/user">
								Login
							</Link>
						)}

						<div className='flex items-center gap-2'>
							<ModeToggle />
						</div>
					</div>
				</nav>
			</div>
			<hr />
		</div>
	);
}
