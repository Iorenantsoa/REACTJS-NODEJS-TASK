import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import About from "./components/About";
import Task from "./components/Task";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-0 pt-3 ">
        <Routes>
          <Route path="/home" element={<Acceuil />} />
          <Route path="/task" element={<Task />} />
          <Route path="/about" element={<About />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
