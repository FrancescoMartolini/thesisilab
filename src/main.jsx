import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SITE } from "./config/site.js";
import "./styles/base.css";
import "./styles/invitation.css";
import "./styles/pages.css";

// La palette vive in config e diventa CSS custom properties
Object.entries(SITE.palette).forEach(([k, v]) => document.documentElement.style.setProperty(`--${k}`, v));

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
