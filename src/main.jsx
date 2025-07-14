import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ IMPORT THIS
import App from "./App";
import "./index.css"; // or your global Tailwind/Styling file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ THE MISSING PIECE */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
