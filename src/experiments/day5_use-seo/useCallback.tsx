// * 🔹 useCallback – мемоизирует функции, чтобы они не создавались заново при каждом рендере.

import { useState, useCallback } from "react";

const Button = ({ onClick }: { onClick: () => void }) => {
  console.log("🔄 Button ререндерится!");
  return <button onClick={onClick}>Нажми</button>;
};

export default function Page() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Счётчик: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

// ✅ Теперь handleClick не пересоздается при каждом ререндере, а Button не ререндерится лишний раз!
