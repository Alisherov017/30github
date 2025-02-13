// ? 🔹 useMemo – кеширует вычисления, чтобы не пересчитывать их при каждом рендере.

import { useState, useMemo } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const expensiveCalculation = (num: number) => {
    console.log("🔄 Выполняем сложные вычисления...");
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setOtherState(!otherState)}>Переключить</button>
      <div>Результат: {result}</div>
    </div>
  );
}
