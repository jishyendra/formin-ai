"use client";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/store";
import { SendHorizonal } from "lucide-react";
import { generateForm } from "@/lib/gemini";
import LoadingComponent from "./LoadingComponent";

export default function ChatBox({ placeholder }: { placeholder?: string }) {
	const [query, setQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { setForm, setFormStatus } = useFormStore((state) => state);

	async function handleQuerySubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);
		setFormStatus("loading");
		const form = await generateForm(query);
		setForm(form);
		setIsLoading(false);
	}

	return (
		<form
			className='max-w-2xl mx-auto w-full flex gap-4 items-center'
			onSubmit={handleQuerySubmit}
		>
			<Textarea
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				placeholder={placeholder || "Ask AI to generate form..."}
				className='mb-4'
			/>
			<Button
				title='Send'
				className='cursor-pointer'
				disabled={isLoading}
				type='submit'
			>
				{isLoading ? <LoadingComponent /> : <SendHorizonal />}
			</Button>
		</form>
	);
}
