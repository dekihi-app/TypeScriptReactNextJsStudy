import { useState } from "react";

type CounterProps = {
  initialValue: number;
};

export const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  // カウントを保持する1つの状態をuseState()で宣言します。引数には初期値を指定します
  // countが現在の状態、setCountが状態を更新する関数です
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Count: {count} </p>
      {/* setCountを呼ぶことで状態を更新します */}
      {/* setCount(number)は非推奨(https://zenn.dev/stin/articles/use-appropriate-api) */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};
