import mongoose from "mongoose";
import type { FormType } from "@/lib/validation";

// export const connection = await mongoose.connect(
// 	process.env.DATABASE_URL as string
// 	// {
// 	// 	user: "Anirudh",
// 	// 	pass: "Anirudh@8071",
// 	// }
// );

let isConnected = false;

export async function connectDB() {
	if (process.env.NEXT_PHASE === "phase-production-build") {
		console.log("Skipping DB connection during build");
		return null;
	}

	if (isConnected && mongoose.connection.readyState === 1) {
		return mongoose.connection;
	}
	try {
		const connection = await mongoose.connect(
			process.env.DATABASE_URL as string
		);
		isConnected = true;
		console.log("MongoDB connected successfully");
		return connection.connection;
	} catch (error) {
		console.error("MongoDB connection error:", error);
		throw error;
	}
}

export async function getMongoClient() {
	const conn = await connectDB();
	return {
		client: conn?.getClient(),
		db: conn?.db,
	};
}

export const forms = new mongoose.Schema({
	formId: {
		type: String,
		required: true,
	},
	name: { type: String, required: true },
	description: { type: String, required: true },
	fields: {
		type: Object,
		required: true,
	},
	responses: {
		type: [Object],
		default: [],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	authorId: {
		type: String,
		require: true,
	},
	authorName: {
		type: String,
		required: true,
	},
	accepts: {
		type: Boolean,
		default: true,
	},
	archived: {
		type: Boolean,
		default: false,
	},
});

const Forms = mongoose.models.Forms || mongoose.model("Forms", forms);
export { Forms };

export async function createForm(
	form: FormType,
	authorId: string,
	authorName: string
) {
	const doc = await Forms.insertOne({
		formId: crypto.randomUUID() as string,
		name: form.name,
		description: form.description,
		fields: form.fields,
		data: [],
		authorId,
		authorName,
	});
	console.log("Inserted document:", doc);
	return doc._id.toString();
}
