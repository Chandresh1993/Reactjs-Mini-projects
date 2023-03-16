import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const getMode = () => {

     const initalMode = localStorage.getItem("mode") 
     if (initalMode == null){
      if (window.matchMedia("(prefers-color- scheme : dark)").matches){
        return true
      }
      else {
        return false 
      }
     } else {
      return JSON.stringify(localStorage.getItem("mode"))

     }

  }

  const [dark, setMode] = useState(getMode())

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))

  }, [dark])
 
  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <div className='nav'>
        <label className="switch">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setMode(!dark)}

          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className='content'>
        <h1>{dark ? "Dark mode is on" : "Light mode is on"}</h1>
        <p style={{ fontSize: "20px" }}>Want to see some magic ? press toggle button  </p>
      </div>
    </div>
  );
}

export default App;
