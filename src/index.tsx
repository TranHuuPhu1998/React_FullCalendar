import React from "react";
import ReactDOM from "react-dom/client";
import "./build.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as dayjs from "dayjs";
import * as isLeapYear from "dayjs/plugin/isLeapYear"; // import plugin
import "dayjs/locale/vi"; // import locale
import ContextWrapper from "./context/ContextWrapper";

dayjs.extend(isLeapYear as any); // use plugin
dayjs.locale("vi"); // use locale
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
