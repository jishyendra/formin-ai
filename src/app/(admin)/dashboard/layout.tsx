"use client";
import Link from "next/link";
import type { ReactNode } from "react";

import {
	SidebarProvider,
	SidebarTrigger,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarHeader,
} from "@/components/ui/sidebar";
import NewFormBtn from "@/components/NewFormBtn";

type Props = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<div>
			{/* <SidebarProvider>
				<FormSidebar />
				<SidebarTrigger></SidebarTrigger> */}
			{children}
			{/* </SidebarProvider> */}
		</div>
	);
}

// const ListForms = () => {
// 	const forms = [1, 2, 3, 4, 5];
// 	return (
// 		<>
// 			{forms.map((form) => (
// 				<Link
// 					className='w-full overflow-x-hidden'
// 					key={crypto.randomUUID()}
// 					href={`/dashboard/form/${form}`}
// 				>
// 					Form {form}
// 				</Link>
// 			))}
// 		</>
// 	);
// };

const FormSidebar = () => {
	return (
		<Sidebar>
			<SidebarHeader>
				<h1>Forms</h1>
			</SidebarHeader>
			<SidebarContent className='pl-4 flex pb-8'>
				<SidebarGroup className='flex-1'>
					<SidebarGroupContent className='flex flex-col justify-between'>
						{/* <ListForms /> */}
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupContent className='flex flex-col justify-between'>
						<NewFormBtn />
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
