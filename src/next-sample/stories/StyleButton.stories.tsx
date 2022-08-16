import { ComponentStory, ComponentMeta } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { StyledButton } from "../components/StyledButton";
import MDXDocument from "./StyledButton.mdx";

// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: "StyledButton",
  // 使用するコンポーネント
  component: StyledButton,
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      page: MDXDocument,
    },
  },
  // propsに渡すvariantをstorybookから変更できるように追加
  variant: {
    // ラジオボタンで設定できるように指定
    control: { type: "radio" },
    options: ["primary", "success", "transparent"],
  },
  // propsに渡すchildrenをStorybookから変更できるように追加
  children: {
    // テキストボックスで入力できるように指定
    control: { type: "text" },
  },
} as ComponentMeta<typeof StyledButton>;

// テンプレートコンポーネントを実装
const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({});

// デフォルトのpropsを設定する
TemplateTest.args = {
  variant: "primary",
  children: "primary",
};

export const Primary: ComponentStory<typeof StyledButton> = (props) => {
  return (
    <StyledButton
      {...props}
      variant="primary"
      onClick={linkTo("StyledButton", "Success")}
    >
      Primary
    </StyledButton>
  );
};

export const Success: ComponentStory<typeof StyledButton> = (props) => {
  return (
    <StyledButton
      {...props}
      variant="success"
      onClick={linkTo("StyledButton", "Transparent")}
    >
      Success
    </StyledButton>
  );
};

export const Transparent: ComponentStory<typeof StyledButton> = (props) => {
  return (
    <StyledButton
      {...props}
      variant="transparent"
      onClick={linkTo("StyledButton", "Primary")}
    >
      Transparent
    </StyledButton>
  );
};
