"use client";
import { useParams } from "next/navigation";
import { FieldComponent } from "@/components/FieldComponent";
import type { Form } from "@/lib/types";
import { BASE_URL } from "@/lib/utils";
import axios from "axios";
import { useEffect, type FormEvent, useState, useRef } from "react";
import { toast } from "sonner";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import { postResponse } from "@/app/actions";

type FormRes = Form & { id?: string; author?: string };
export default function SubmitPage() {
	const router = useRouter();
	const { id } = useParams();
	const [status, setStatus] = useState(false);
	if (!id) {
		toast.error("Invalid Id");
	}
	const [form, setForm] = useState<FormRes>();
	const formRef = useRef(null);

	useEffect(() => {
		(async () => {
			setStatus(true);
			await axios
				.get(`${BASE_URL}/api/form/${id}`)
				.then((res) => setForm(res.data.form as FormRes))
				.catch((error) => {
					console.log(error);
				});
			setStatus(false);
		})();
	}, []);

	async function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			if (!form) throw Error("Error getting form");
			const formData = new FormData(formRef.current!);
			if (!formData) throw Error("Form data invalid");
			const status = await postResponse(form.id!, formData);
			if (!status.success) {
				throw Error("Response input failed");
			}
		} catch (error) {
			toast.error("Data cannot be submitted!Pleas try later");
		}
	}
	if (status) {
		return <Loader />;
	}
	if (!form) {
		return (
			<div className='flex min-h-dvh items-center justify-center'>
				Form not found
			</div>
		);
	}
	return (
		<div className='p-2 w-full max-w-xl mx-auto'>
			<form ref={formRef} onSubmit={submit} className='p-2'>
				<h1 className='font-bold text-xl'>{form.name}</h1>
				<p>{form.description}</p>
				{form.fields_json.map((field, idx) => (
					<FieldComponent field={field} key={idx} />
				))}
				<button
					type='submit'
					className='w-full py-2 font-semibold cursor-pointer'
				>
					Submit
				</button>
			</form>
		</div>
	);
}
