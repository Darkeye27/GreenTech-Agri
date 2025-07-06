import db from "../../../../lib/db";

export async function GET() {
  const blogs = db.prepare("SELECT * FROM blog_posts ORDER BY created_at DESC").all();
  return Response.json(blogs);
} 

export async function POST(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { title, content, image } = body;

  const stmt = db.prepare(`
    INSERT INTO blog_posts (title, content, image, created_at)
    VALUES (?, ?, ?, ?)
  `);
  const result = stmt.run(title, content, image, new Date().toISOString());

  return Response.json({ success: true, id: result.lastInsertRowid });
}

export async function DELETE(req){
  const {id} = await req.json();
  db.prepare("DELETE FROM blog_posts WHERE id = ?").run(id);
  return Response.json({success: true});
}

export async function PUT(req) {
  const { id, title, content, image } = await req.json();

  db.prepare(`
    UPDATE blog_posts SET title = ?, image = ?,content = ?
    WHERE id = ?
  `).run( id, title, content, image);

  return Response.json({ success: true });
}
