"use client";
import { useParams } from "next/navigation";
import { FieldComponent } from "@/components/FieldComponent";
import type { Form } from "@/lib/types";
import { BASE_URL } from "@/lib/utils";
import axios from "axios";
import { type FormEvent, useRef } from "react";
import { toast } from "sonner";
import Loader from "@/components/loader";
import { postResponse } from "@/app/actions";
import useSWR from "swr";
import { Button } from "@/components/ui";

type FormRes = Form & { _id?: string; author?: string };

export default function SubmitPage() {
	const { id } = useParams();

	const fetchForm = (id: string) =>
		axios.get(`${BASE_URL}/api/form/${id}`).then((res) => res.data);

	const { data, error, isLoading } = useSWR(id, fetchForm);
	const form = data as FormRes;
	console.log(form);

	const formRef = useRef(null);
	async function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		toast.loading("Submitting data...");
		try {
			const formData = new FormData(formRef.current!);
			if (!formData) throw Error("Form data invalid");
			const status = await postResponse(form._id, formData);
			if (status.error) {
				throw Error((status.error as string) || "Error submitting form");
			}
			toast.success("Data submitted successfully");
		} catch (error) {
			console.log(error);
			toast.error("Data cannot be submitted!Please try later");
		}
	}

	if (isLoading) {
		return <Loader />;
	}
	if (error) {
		return <div>Error loading form</div>;
	}
	return (
		<div className='p-2 w-full max-w-xl mx-auto'>
			<form ref={formRef} onSubmit={submit} className='p-2'>
				<h1 className='font-bold text-xl'>{form.name}</h1>
				<p>{form.description}</p>
				{Array.from(form.fields).map((field) => (
					<FieldComponent field={field} key={crypto.randomUUID()} />
				))}
				<Button
					variant={"default"}
					type='submit'
					className='w-full py-2 mt-3 font-semibold cursor-pointer border-2'
				>
					Submit
				</Button>
			</form>
		</div>
	);
}
