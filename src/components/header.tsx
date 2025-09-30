"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	const links = [
		{ to: "/", label: "formin-ai" },
		{ to: "/create", label: "New Form" },
	] as const;

	return (
		<div>
			<div className='flex flex-row items-center justify-between px-2 py-1'>
				<nav className='flex gap-4 text-lg w-full'>
					{links.map(({ to, label }) => {
						return (
							<Link key={crypto.randomUUID()} href={to}>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className='flex items-center gap-2'>
					<ModeToggle />
				</div>
			</div>
			<hr />
		</div>
	);
}
