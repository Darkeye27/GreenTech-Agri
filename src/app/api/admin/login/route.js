import db from "../../../../../lib/db";
import bcrypt from "bcrypt";
import { generateToken } from "../../../../../lib/auth";
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const admin = db.prepare("SELECT * FROM admins WHERE username = ?").get(username);

    if (!admin) return Response.json({ error: "User not found" }, { status: 401 });

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) return Response.json({ error: "Invalid password" }, { status: 401 });

    const token = generateToken({ id: admin.id, username: admin.username });
    return Response.json({ token });

  } catch (err) {
    console.error("Login error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
