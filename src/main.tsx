import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "./assets/logo.jpeg";

const existingFavicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
if (existingFavicon) {
  existingFavicon.href = logo;
} else {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = logo;
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);
