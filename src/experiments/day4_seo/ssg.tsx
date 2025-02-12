export async function generateStaticParams() {
  return []; // Next.js поймёт, что страницу можно генерировать статически
}

export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    cache: "force-cache", // Кешируем запрос во время сборки
  });
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">SSG (Static Site Generation)</h1>
      <p className="mt-4">{data.title}</p>
    </div>
  );
}
