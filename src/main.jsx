import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import "./index.css";
import ToastContainer from "./components/ToastContainer/ToastContainer";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "https://api.shrtco.de/v2/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
