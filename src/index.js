import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import { ProfileDataProvider } from "./context/ProfileDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <CurrentUserProvider>
        <ProfileDataProvider>
          <App />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
);
reportWebVitals();
