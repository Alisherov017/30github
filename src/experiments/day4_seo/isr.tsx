// !ISR (Incremental Static Regeneration) – статический рендеринг с возможностью обновления страниц без перегенерации всего сайта.
export default async function ISRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
    next: { revalidate: 10 }, // Обновление кеша каждые 10 секунд
  });
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        ISR (Incremental Static Regeneration)
      </h1>
      <p className="mt-4">{data.title}</p>
    </div>
  );
}
