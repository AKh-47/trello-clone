import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ApolloClientProvider from "./context/ApolloClientContext";
import AuthProvider from "./context/AuthContext";
import SettingsProvider from "./context/SettingsContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <ApolloClientProvider>
            <App />
          </ApolloClientProvider>
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
