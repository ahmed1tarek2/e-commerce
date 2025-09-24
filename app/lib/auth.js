import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = process.env.JWT_SECRET || "my-secret"; // 🔑 keep it safe

// create JWT token
export function createToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

// verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

// hash password
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// compare password
export async function comparePassword(password, hashed) {
  return await bcrypt.compare(password, hashed);
}
