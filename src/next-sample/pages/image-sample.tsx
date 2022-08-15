import { NextPage } from "next";
import Image from "next/image";

// 画像ファイルをインポートする
import BibleImage from "../public/images/bible.jpeg";

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      {/* 通常のimgタグを使用して画像表示 */}
      <img src="/images/bible.jpeg" />
      <p>Imageコンポーネントで表示した場合</p>
      {/* Imageコンポーネントを使用して表示 */}
      {/* パスを指定する代わりに、インポートした画像を指定 */}
      <Image  alt="BibleImage" src={BibleImage} />
      <p>Imageで表示した場合は、事前に描画エリアが確保されます</p>
    </div>
  );
};

export default ImageSample;
