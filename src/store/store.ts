import type { Form, Field } from "@/lib/types";
import { create } from "zustand";

type Store = {
	form: Form;
	setForm: (form: Form) => void;
	// formFields: Field[];
	// setFormFields: (fields: Field[]) => void;
	formStatus: "idle" | "loading" | "error" | "success";
	setFormStatus: (status: "idle" | "loading" | "error" | "success") => void;
};

export const useFormStore = create<Store>()((set) => ({
	form: { name: "", description: "", fields_json: [], author: "" },
	setForm: (form) => set({ form }),
	// formFields: [],
	// setFormFields: (fields) => set({ formFields: fields }),
	formStatus: "idle",
	setFormStatus: (status) => set({ formStatus: status }),
}));

type User = {
	username: string;
	id: string;
};

interface AuthStore {
	auth: User;
	setAuth: (usr: User) => void;
}

export const authStore = create<AuthStore>()((set) => ({
	auth: { username: "", id: "" },
	setAuth: (user) => set({ auth: user }),
}));
