import db from "../../../../lib/db";
export const dynamic = 'force-dynamic';

export async function GET(){
    const products = db.prepare("SELECT * FROM products").all();
    return Response.json(products);
}

export async function POST(req){
    const body = await req.json();
    const {name, category, price, image, description} = body;

    const stmt = db.prepare(`INSERT INTO products (name, category, price, image, description) VALUES (?,?,?,?,?)`);

    const result = stmt.run(name, category, price, image, description);
    return Response.json({success: true, id: result.lastInsertRowid});

}

export async function PUT(req) {
    const { id, name, description, image, price } = await req.json();
  
    db.prepare(`
      UPDATE products SET name = ?, description = ?, image = ?, price = ?
      WHERE id = ?
    `).run(name, description, image, price, id);
  
    return Response.json({ success: true });
  }
  

export async function DELETE(req){
    const {id} = await req.json();

    const stmt = db.prepare(`DELETE FROM products WHERE id = ?`);
    stmt.run(id);

    return Response.json({success: true});
}
 