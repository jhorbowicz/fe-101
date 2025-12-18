import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "../node_modules/@fontsource-variable/fira-code/index.css";
import "../node_modules/@fontsource/source-sans-pro/index.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
