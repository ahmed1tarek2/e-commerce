import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";

export async function GET(req) {
  try {
    const token = getCookie("token", { req, res: undefined });
    if (!token)
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    return new Response(JSON.stringify({ user: decoded }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 403,
    });
  }
}
