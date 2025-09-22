"use client";
import ChatBox from "@/components/ChatBox";
import { Toaster } from "@/components/ui/sonner";

type Props = {
	children: React.ReactNode;
};
export default function Layout({ children }: Props) {
	return (
		<div className='relative flex flex-col h-full overflow-hidden'>
			<section className='flex-1 overflow-y-scroll'>{children}</section>
			<Toaster className='absolute right-4 bottom-8' />
			<div className='sticky bottom-2'>
				<ChatBox />
			</div>
		</div>
	);
}
