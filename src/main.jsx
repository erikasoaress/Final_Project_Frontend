import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthWrapper } from "./context/auth.context";
import { PlayerWrapper } from "./context/player.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthWrapper>
        <PlayerWrapper>
          <App />
        </PlayerWrapper>
      </AuthWrapper>
    </Router>
  </React.StrictMode>
);
