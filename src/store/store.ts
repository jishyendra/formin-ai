import type { FormType } from "@/lib/validation";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
	form: FormType;
	setForm: (form: FormType) => void;
	formStatus: "idle" | "loading" | "error" | "success";
	setFormStatus: (status: "idle" | "loading" | "error" | "success") => void;
	resetForm: () => void;
};

export const useFormStore = create<Store>()(
	persist(
		(set) => ({
			form: { name: "", description: "", fields: [], author: "" },
			setForm: (form) => set({ form }),
			formStatus: "idle",
			setFormStatus: (status) => set({ formStatus: status }),
			resetForm: () =>
				set({
					form: { name: "", description: "", fields: [], author: "" },
					formStatus: "idle",
				}),
		}),
		{
			name: "create-form-storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
