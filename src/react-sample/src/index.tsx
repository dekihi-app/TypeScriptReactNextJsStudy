// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Hello from "./components/Hello";
import { Parent as ContainerSampleParent } from "./components/ContainerSample";
import { Page } from "./components/ContextSample";
import { Counter as UseStateCounter } from "./components/UseStateSample";
import { Counter as UseReducerCounter } from "./components/UseReducerSample";
import { Parent } from "./components/Parent";
import { Parent as UseCallbackParent } from "./components/UseCallbackSample";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  // <React.StrictMode>
  //   <Hello />
  //   <ContainerSampleParent />
  //   <Page />
  //   <Page />
  //   <UseStateCounter initialValue={0} />
  //   <UseReducerCounter initialValue={0} />
  //   <Parent />
    <UseCallbackParent />,
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
