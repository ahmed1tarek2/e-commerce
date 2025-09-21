import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createToken, hashPassword } from "@/lib/auth";

export async function POST(req) {
  const { email, password,name } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email & password required" }, { status: 400 });
  }
  const hashed = await hashPassword(password);
  const token = createToken({ email, password: hashed,name });

   const cookieStore = await cookies();
   cookieStore.set("user", token, {
     httpOnly: true,
     maxAge: 60 * 60 * 24 * 7, // 7 days
     path: "/",
   });


  return NextResponse.json({ message: "Signup success" }, { status: 201 });
}
