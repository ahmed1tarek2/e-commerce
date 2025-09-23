import { NextResponse } from "next/server";

export async function POST() {
  // Clear the JWT cookie
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set("user", "", {
    httpOnly: true,
    sameSite: "strict",
    expires: new Date(0), // expire immediately
    path: "/",
  });

  return response;
}
