import { auth } from "@/lib/auth";
import { Forms } from "@/lib/db";
import Link from "next/link";
import { headers } from "next/headers";
export default async function Page() {
	try {
		const hh = await headers();
		const userId = await auth?.api
			.getSession({ headers: hh })
			.then((session) => session?.user?.id);
		const forms = await Forms.find({ authorId:userId });
		console.log(forms);
		return (
			<div className='p-4'>
				<div>Dashboard</div>
				<div>
					<div className='text-xl font-bold'>Forms</div>
					<div>
						<h2 className='text-xl font-bold'>Your forms:</h2>
						<div className='pl-2'>
							{forms.map((form) => (
								<div key={form.id}>
									<Link href={`/dashboard/form/${form.id}`}>
										<span className='font-bold'>{form.name}</span>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	} catch (error) {
		console.log(error);
		return <div>Error loading dashboard</div>;
	}
}
