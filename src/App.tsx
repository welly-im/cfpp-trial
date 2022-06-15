import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./page/Login";
import { MainMenu } from "./page/MainMenu";
import { Onboarding } from "./page/Onboarding";
import { Repayment } from "./page/Repayment";
import { Disbursement } from "./page/Disbursement";
import { Preview } from "./page/preview";

function App() {
  return (
    <div>
      <body className="pt-5">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/repayment" element={<Repayment />} />
            <Route path="/home" element={<MainMenu />} />
            <Route path="/disbursement" element={<Disbursement />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
