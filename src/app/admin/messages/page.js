export default async function AdminMessagesPage() {
    const res = await fetch("http://localhost:3000/api/contact", { cache: "no-store" });
    const messages = await res.json();
  
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Inbox</h1>
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white rounded-xl p-6 shadow">
              <p className="text-sm text-gray-500">{new Date(msg.created_at).toLocaleString()}</p>
              <h2 className="text-xl font-semibold mt-2">{msg.name} ({msg.email})</h2>
              <p className="mt-2">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  