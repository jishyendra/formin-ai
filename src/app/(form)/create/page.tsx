"use client";
import FormPreview from "@/components/FormPreview";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/loader";
import { useFormStore } from "@/store/store";

export default function CreatePage() {
	const { form, formStatus } = useFormStore((state) => state);

	switch (formStatus) {
		case "loading":
			return <Loader />;
		case "success":
			return <FormPreview form={form} />;
		default:
			return <HeroSection />;
	}
}
