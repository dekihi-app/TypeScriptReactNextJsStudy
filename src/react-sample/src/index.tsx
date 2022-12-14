import React from "react";
// ReactDOM.renderは、React18非対応 (https://zenn.dev/kohski/articles/create-react-app-error-v18, https://qiita.com/chatrate/items/4ef1058ddc0566e12cbc)
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
// import Hello from "./components/Hello";
// import { Parent as ContainerSampleParent } from "./components/ContainerSample";
// import { Page } from "./components/ContextSample";
// import { Counter as UseStateCounter } from "./components/UseStateSample";
// import { Counter as UseReducerCounter } from "./components/UseReducerSample";
// import { Parent } from "./components/Parent";
// import { Parent as UseCallbackParent } from "./components/UseCallbackSample";
// import { UseMemoSample } from "./components/UseMemoSample";
// import { Clock } from "./components/Clock";
// import { Parent as UseContextParent } from "./components/UseContextSample";
// import { ImageUploader } from "./components/UseRefSample";
// import { Parent as UseImperativeHandleParent } from "./components/UseImperativeHandle";
import { Input as CustomHookInput } from "./components/CustomHook";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(
    //  <App />
    //  <Hello />
    //  <ContainerSampleParent />
    //  <Page />
    //  <Page />
    //  <UseStateCounter initialValue={0} />
    //  <UseReducerCounter initialValue={0} />
    //  <Parent />
    //  <UseCallbackParent />,
    //  <UseMemoSample />
    //  <Clock />
    // <UseContextParent />
    // <ImageUploader />
    // <UseImperativeHandleParent />
    <React.StrictMode>
      <CustomHookInput />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
