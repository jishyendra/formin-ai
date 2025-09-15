"use client";
import FormPreview from "@/components/FormPreview";
import HeroSection from "@/components/HeroSection";
import LoadingComponent from "@/components/LoadingComponent";
import { useFormStore } from "@/store/store";

export default function CreatePage() {
	const { form, formStatus } = useFormStore((state) => state);

	switch (formStatus) {
		case "loading":
			return <LoadingComponent />;
		case "success":
			return <FormPreview form={form} />;
		default:
			return <HeroSection />;
	}
}
