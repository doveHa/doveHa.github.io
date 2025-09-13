import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind가 여기에 들어가야 함
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
