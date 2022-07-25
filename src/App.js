import React from "react";
import { Routes, Route } from "react-router";
import { AppBar, HomePage } from "./components";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
