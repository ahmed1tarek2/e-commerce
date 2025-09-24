import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createToken, comparePassword, verifyToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  const cookieStore =await cookies();
  const token = cookieStore.get("user")?.value;

  if (!token) {
    return NextResponse.json({ error: "No user registered" }, { status: 404 });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }

  const isMatch = await comparePassword(password, decoded.password);

  if (!isMatch || decoded.email !== email) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const newToken = createToken({ email, password: decoded.password });
   cookieStore.set("user", newToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });

  return NextResponse.json({ message: "Login success",data:{email,password} }, { status: 200 });
}
