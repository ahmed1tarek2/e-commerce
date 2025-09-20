import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import cookie from "cookie";

export async function POST(req) {
  try {
    const { email, password,name } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password required" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Get current users from cookie
    const cookieStore = cookies();
    const usersCookie = cookieStore.get("users");
    let users = usersCookie ? JSON.parse(usersCookie.value) : [];

    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    // Save new user
    users.push({ email, password: hashedPassword,name });

    // Set cookie again
    cookies().set("users", JSON.stringify(users), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return new Response(JSON.stringify({ message: "Signup successful!" }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error signing up", error: error.message }), { status: 500 });
  }
}
