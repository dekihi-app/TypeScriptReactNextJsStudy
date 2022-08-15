import { useState, useEffect } from "react";

const Sayhello = () => {
  // 内部で状態を持つためuseStateを利用
  const [data, setData] = useState({ name: "" });
  // 外部のAPIにリクエストするのは、副作用なのでuseEffect内で処理
  useEffect(() => {
    // pages/api/hello.tsの内容にリクエスト
    fetch("api/hello")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return <div>hello {data.name}</div>
}

export default Sayhello;
