import { useRouter } from "next/router"; // インポート
import React from "react";

const Page = () => {
  const router = useRouter(); // useRouterの使用

  // 以下のコメント部分のコメントを解除すると/userouterに移動するようになる
  // React.useEffect(() => {
  //   router.push("/userouter");
  // });

  return <span>{router.pathname}</span>
};

export default Page;
