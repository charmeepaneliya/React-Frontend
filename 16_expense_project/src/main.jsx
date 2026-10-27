import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ExpenceProvider from "./context/ExpenceContext.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExpenceProvider>
      <App />
    </ExpenceProvider>
  </StrictMode>,
);
