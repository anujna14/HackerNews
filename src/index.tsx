import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import SearchContextProvider from "./Context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </Router>
  </React.StrictMode>
);
