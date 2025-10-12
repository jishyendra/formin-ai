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

type Props = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<div>
			<SidebarProvider>
				<FormSidebar />
				<SidebarTrigger></SidebarTrigger>
				{children}

			</SidebarProvider>
		</div>
	);
}

const ListForms = () => {
	const forms = [1, 2, 3, 4, 5];
	return (
		<div className='grid gap-2 w-full'>
			{forms.map((form) => (
				<Link
					className='w-full overflow-x-hidden'
					key={crypto.randomUUID()}
					href={`/dashboard/form/${form}`}
				>
					Form {form}
				</Link>
			))}
		</div>
	);
};

const FormSidebar = () => {
	return (
		<Sidebar className=''>
			<SidebarHeader>
				<h1>Forms</h1>
			</SidebarHeader>
			<SidebarContent className='pl-4'>
				<SidebarGroup>
					<SidebarGroupContent>
						<ListForms />

					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
