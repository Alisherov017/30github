//! SSR (Server-Side Rendering) – рендеринг на сервере при каждом запросе.
export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store", // Делаем запрос на каждый рендер
  });
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">SSR (Server-Side Rendering)</h1>
      <p className="mt-4">{data.title}</p>
    </div>
  );
}
