import type { Form, Field } from "@/lib/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
	form: Form;
	setForm: (form: Form) => void;
	// formFields: Field[];
	// setFormFields: (fields: Field[]) => void;
	formStatus: "idle" | "loading" | "error" | "success";
	setFormStatus: (status: "idle" | "loading" | "error" | "success") => void;
};

export const useFormStore = create<Store>()(
	persist(
		(set) => ({
			form: { name: "", description: "", fields_json: [], author: "" },
			setForm: (form) => set({ form }),
			// formFields: [],
			// setFormFields: (fields) => set({ formFields: fields }),
			formStatus: "idle",
			setFormStatus: (status) => set({ formStatus: status }),
		}),
		{
			name: "create-form-storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);