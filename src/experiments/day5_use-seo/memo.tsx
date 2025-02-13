//?🔹 React.memo – предотвращает повторный ререндер компонента, если пропсы не изменились.

import { memo, useState } from "react";

// без memo const HeavyComponent = ({ count }: { count: number }) => {
// *🔴 Проблема: HeavyComponent ререндерится даже при изменении otherState, хотя count не изменился.

const HeavyComponent = memo(({ count }: { count: number }) => {
  console.log("🔄 HeavyComponent ререндерится!");
  return <div>Счётчик: {count}</div>;
});

export default function Page() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>
      <button onClick={() => setOtherState(!otherState)}>
        Переключить состояние
      </button>
      <HeavyComponent count={count} />
    </div>
  );
}
