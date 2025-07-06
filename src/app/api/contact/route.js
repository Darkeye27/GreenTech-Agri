import db from "../../../../lib/db";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  const stmt = db.prepare(`
    INSERT INTO contacts (name, email, message, created_at)
    VALUES (?, ?, ?, ?)
  `);

  stmt.run(name, email, message, new Date().toISOString());

  return Response.json({ success: true });
}

export async function GET() {
  const messages = db.prepare("SELECT * FROM contacts ORDER BY created_at DESC").all();
  return Response.json(messages);
}
