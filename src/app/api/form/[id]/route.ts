import { NextRequest, NextResponse } from "next/server";
import { form1, form2 } from "../route.ts";
import { BASE_URL } from "@/lib/utils";
import { db, Forms } from "../../db.ts";

interface GETProps {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: GETProps) {
  const { id } = await params;
  if (!id) {
    console.log("No id ");
    return NextResponse.json({ error: "Form ID is required" }, { status: 400 });
  }
  console.log("id found:", id);
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    console.log(formData);
    const form  = await Forms.findOne({formId})
    if(!form){
      return NextResponse.json({error:"Form is no loger taking responses"});
    }
    return NextResponse.json({ message: "Success", status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error inserting data" });
  }
}
