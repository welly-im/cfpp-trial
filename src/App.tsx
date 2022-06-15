import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <header></header>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<>asd</>} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
