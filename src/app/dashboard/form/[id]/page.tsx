"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { TriangleAlert, CircleCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ZodURL, z } from "zod";
import {
	Dialog,
	DialogTrigger,
	DialogHeader,
	DialogContent,
	DialogTitle,
} from "@/components/ui/dialog";
import { setupDevBundler } from "next/dist/server/lib/router-utils/setup-dev-bundler";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function Page() {
	const { id } = useParams();
	// const responses = {
	// 	"123": { answers: ["Yes", "No", "Maybe"] },
	// 	"456": { answers: ["Red", "Blue", "Green"] },
	// 	"789": { answers: ["Cat", "Dog", "Bird"] },
	// 	"101": { answers: ["Apple", "Banana", "Orange"] },
	// };
	return (
		<div className='p-4 w-full flex flex-col gap-8'>
			<div>Form Details Page</div>
			<FormDB />
			<div>
				<p>Form ID: {id}</p>
				<Button className='w-full max-w-md mx-auto'>Go to responses</Button>
			</div>
			<div className='grid grid-cols-2 gap-4 mt-4'>
				<div>
					<h1 className='text-lg font-bold'>Form Metrics</h1>
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
					<h1 className='text-lg font-bold'>Form Submissions</h1>
					<div>
						<Image
							src='https://cdn.prod.website-files.com/64776f616fe10aa341b02d35/649db3bc19dde16972cca6f9_5e69412bc2536c33924e0f1d_svg-line-chart-example-react.png'
							alt='Chart'
							// layout='fill'
							height={400}
							width={400}
							className='w-full h-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

const FormDB = () => {
	const [connected, setConnected] = useState(false);
	const [dbUrl, setDbUrl] = useState("");
	const [loading, setLoading] = useState(false);

	async function connectStorage() {
		setLoading(true);
		if (z.url().safeParse(dbUrl).success) {
			new Promise((resolve) => {
				setTimeout(resolve, 3000);
			});
			setConnected(true);
		} else {
			toast("Enter valid url");
		}
		setLoading(false);
	}

	return (
		<div>
			<h1 className='text-lg font-bold'>Form Storage</h1>
			<div>
				<p>
					Status:{" "}
					{connected ? (
						<span className='text-green-500'>
							<CircleCheck className='inline' /> Connected
						</span>
					) : (
						<span className='text-red-500'>
							<TriangleAlert className='inline' /> Not Connected
						</span>
					)}
				</p>
			</div>
			<Dialog>
				<DialogTrigger className='border-1 p-2 rounded-lg bg-accent'>
					{connected ? "Connected" : "Link Google Sheet"}
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>Connect Google Sheet</DialogTitle>
					<div>
						<Label htmlFor='dburl' className='mb-1'>
							Google Sheet url
						</Label>
						<Input
							name='dburl'
							placeholder='Enter google sheet url'
							onChange={(e) => setDbUrl(e.target.value)}
							type='text'
						></Input>
					</div>
					<Button disabled={loading} onClick={connectStorage} type='submit'>
						{loading ? "Connecting" : "Connect"}
					</Button>
				</DialogContent>
			</Dialog>
		</div>
	);
};
