"use client";
import { useParams } from "next/navigation";
import { FieldComponent } from "@/components/FieldComponent";
import { BASE_URL } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";
import Loader from "@/components/loader";
import { postResponse } from "@/app/actions";
import useSWR from "swr";
import { Button } from "@/components/ui";
import { useActionState } from "react";

import type { FormResponse } from "@/lib/types/api";

export default function SubmitPage() {
	const { id } = useParams();
	const fetchForm = (id: string) =>
		axios.get(`${BASE_URL}/api/form/${id}`).then((res) => res.data);
	const { data, error, isLoading } = useSWR(id, fetchForm);
	const form = data as FormResponse;

	const [state, formAction, isPending] = useActionState(postResponse, null);
	if (isLoading) {
		return <Loader />;
	}
	if (error) {
		return <div>Error loading form</div>;
	}
	return (
		<div className='p-2 w-full max-w-xl mx-auto'>
			<form action={formAction} className='p-2'>
				<h1 className='font-bold text-xl'>{form.name}</h1>
				<p>{form.description}</p>
				<input type='text' hidden name='_id' readOnly value={id}></input>
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
