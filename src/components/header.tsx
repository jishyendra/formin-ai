"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useSession } from "@/lib/auth-client";
import NewFormBtn from "./NewFormBtn";

export default function Header() {
	const { data: session } = useSession();
	return (
		<div>
			<div className='flex flex-row items-center justify-between px-2 py-1'>
				<nav className='flex justify-between text-lg w-full'>
					<div className='flex gap-4 '>
						<Link href='/'>formin-ai</Link>
					</div>
					<div className='flex gap-4 align-middle items-center '>
						{session?.user ? (
							<>
								<NewFormBtn />
								<Link href='/dashboard'>Dashboard</Link>
							</>
						) : (
							<Link href='/user'>Login</Link>
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
