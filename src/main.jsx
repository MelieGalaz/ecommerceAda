import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </CssBaseline>
  </React.StrictMode>
);
