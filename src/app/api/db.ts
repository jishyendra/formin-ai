import mongoose from "mongoose";
export const connection = await mongoose.connect(
  process.env.DATABASE_URL as string,
);

export const forms = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  fields: {
    type: Object,
    required: true,
  },
  data: {
    type: [Object],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    require: true,
  },
  accepts: {
    type: Boolean,
    default: true,
  },
  archived:{
    type:Boolean,
    default:false,
  }
});

const Forms = mongoose.models.Forms || mongoose.model("Forms", forms);
export { Forms };

export async function createForm(fields){
  const doc = await Forms.insertOne({
    formId: crypto.randomUUID() as string,
    fields,
    data: [],
    author: "1",
  });
  if (doc.formId) doc;
  return null;
}

