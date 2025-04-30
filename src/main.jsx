import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { MaterialTailwindControllerProvider } from "./context/sidenav-context/index.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <MaterialTailwindControllerProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MaterialTailwindControllerProvider>
    </HelmetProvider>
  </React.StrictMode>
);
