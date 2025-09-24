import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("user")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ user: null }, { status: 403 });
  }

  return NextResponse.json({ user: { email: decoded.email } }, { status: 200 });
}
