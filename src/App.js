import React from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
    </Routes>
  );
};

export default App;
