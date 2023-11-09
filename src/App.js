import './App.css';
import { About } from './components/About';
import Alart from './components/Alart';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alart, setAlart] = useState(null);

  function showAlart(type, messege) {
    setAlart({
      type: type,
      messege: messege,
    });

    setTimeout(() => {
      setAlart(null);
    }, 1500);

  }


  function toggleMode() {
    if (mode === 'dark') {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlart("success", "Light mode enable successfully");

    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#3e3e42';
      showAlart("success", "Dark mode enable successfully");
      // Called every 1.5 second
      // setInterval(() => {
      //   document.title = "welcome";
      // }, 1500)
    }
  }



  return (
    <>
      <BrowserRouter>

        <Navbar title="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alart alart={alart} />


        <Routes>

          <Route exect path="/" element={<TextFrom mode={mode} showAlart={showAlart} />} />
          <Route exect path="/about" element={<About />} />

        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
