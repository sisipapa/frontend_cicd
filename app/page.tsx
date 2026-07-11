interface Item {
  id: number;
  name: string;
}

async function getItems(): Promise<Item[]> {
  const res = await fetch(`${process.env.API_URL}/api/items`, {
    cache: "no-store", // 매 요청마다 최신 데이터 (SSR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json();
}

export default async function Home() {
  const items = await getItems();

  return (
    <main style={{ padding: 40 }}>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
