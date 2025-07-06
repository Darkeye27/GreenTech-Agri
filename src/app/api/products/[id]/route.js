import db from "../../../../../lib/db";

export async function GET(_req, context) {
  const { id } = context.params;

  const product = db.prepare("SELECT * FROM products WHERE id = ?").get(id);

  if (!product) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(product);
}
