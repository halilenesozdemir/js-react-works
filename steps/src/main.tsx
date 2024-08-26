import React from "react";
import ReactDOM from "react-dom/client";
// import AppV1 from "./AppV1";

import "./index.css";
import App from "./TextExpander";
// import TextExpander from "./TextExpander";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AppV1 /> */}
    <App />
  </React.StrictMode>
);
