import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./page/Login";
import { MainMenu } from "./page/MainMenu";
import { Onboarding } from "./page/Onboarding";
import { Repayment } from "./page/Repayment";

function App() {
  return (
    <div>
      <header></header>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/repayment" element={<Repayment />} />
            <Route path="/home" element={<MainMenu />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
