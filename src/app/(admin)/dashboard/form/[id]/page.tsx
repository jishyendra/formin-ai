"use client";
import { useParams } from "next/navigation";
import useSwr from "swr";
import Loader from "@/components/loader";
import { getFormData } from "@/app/actions";

export default function Page() {
	const formFetch = async (id: string) =>
		await getFormData(id).then((res) => JSON.parse(res));
	const { id } = useParams();
	const { data, error, isLoading } = useSwr(id, formFetch);

	if (isLoading) {
		return <Loader />;
	}
	if (error) {
		console.log("Error:", error);
		return (
			<div className='flex min-h-dvh items-center justify-center'>
				Error loading form data
			</div>
		);
	}
	return (
		<>
			<div>Form Details Page</div>
			<div className='p-4 w-full flex flex-col gap-8'>
				<section className='flex flex-col'>
					<h1 className='text-lg font-bold'>Form Metadata</h1>
					<div>
						<h2>{data.name}</h2>
					</div>
				</section>
				<section className='grid grid-cols-2 gap-4 mt-4'>
					<h1 className='text-lg font-bold underlined'>Metrics</h1>
					<div className='pl-2'>
						<p>
							Total Respones :{" "}
							<span className='underline underline-offset-1 font-semibold'>
								{data.data?.length || 0}
							</span>
						</p>
					</div>
				</section>
				<section className='w-full'>
					<h1 className='text-lg font-bold'>Form Submissions</h1>
					<div>
						{data.responses?.length === 0 ? (
							<p className='italic'>No responses yet</p>
						) : (
							data.responses?.slice(0, 6).map((item) => {
								return (
									<div key={item.id} className='border p-2 my-2 rounded'>
										{item}
									</div>
								);
							})
						)}
					</div>
				</section>
			</div>
		</>
	);
}
