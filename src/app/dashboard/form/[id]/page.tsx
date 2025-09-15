"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Page() {
	const { id } = useParams();
	// const responses = {
	// 	"123": { answers: ["Yes", "No", "Maybe"] },
	// 	"456": { answers: ["Red", "Blue", "Green"] },
	// 	"789": { answers: ["Cat", "Dog", "Bird"] },
	// 	"101": { answers: ["Apple", "Banana", "Orange"] },
	// };
	return (
		<div className='p-4 w-full'>
			<div>Form Details Page</div>
			<div>
				<p>Form ID: {id}</p>
				<Button className='w-full max-w-md mx-auto'>Go to responses</Button>
			</div>
			<div className='grid grid-cols-2 gap-4 mt-4'>
				<div>
					<h1>Form Metrics</h1>
					<div className='pl-2'>
						<p>
							Total Respones :{" "}
							<span className='underline underline-offset-1 font-semibold'>
								{234}
							</span>
						</p>
					</div>
				</div>
				<div className='w-full'>
					Form Submissions
					<div>
						<Image
							src='https://cdn.prod.website-files.com/64776f616fe10aa341b02d35/649db3bc19dde16972cca6f9_5e69412bc2536c33924e0f1d_svg-line-chart-example-react.png'
							alt='Chart'
							// layout='responsive'
							height={0}
							width={0}
                            className="w-full h-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
