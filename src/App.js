import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === 'dark') {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#3e3e42';
    }
  }
  return (
    <>
      <Navbar title="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <TextFrom mode={mode} />
    </>
  );
}

export default App;
