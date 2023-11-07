import './App.css';
import Alart from './components/Alart';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';


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
    }
  }



  return (
    <>
      <Navbar title="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alart alart={alart} />
      <TextFrom mode={mode} showAlart={showAlart} />
    </>
  );
}

export default App;
