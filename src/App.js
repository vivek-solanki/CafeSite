import React from "react";
import Protected from "./Components/Protected";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Main} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

