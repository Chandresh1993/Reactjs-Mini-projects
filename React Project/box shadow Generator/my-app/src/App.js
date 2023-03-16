import React, { useState } from 'react';
import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [veri, setVeri] = useState(10)
  const [blur, setBlur] = useState(10)
  const [color, setColor] = useState("black")
  const [checkon, setcheckOn] = useState(false)


  return (
    <div className="App">
      <div className="controls">
        <label > Horizontal length</label>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />

        <label > Verticle length</label>
        <input type="range" min="-200" max="200" value={veri} onChange={(e) => setVeri(e.target.value)} />

        <label > blur</label>
        <input type="range" min="0" max="200" value={blur} onChange={(e) => setBlur(e.target.value)} />

        <label >color</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <div className='switch'>
          <label>
            Outline
            <input type="checkbox" checked={checkon} onChange={() => setcheckOn(!checkon)} />
            <span class="lever"></span>
            Inset
          </label>
        </div>


      </div>
      <div className="output" ></div>
      <div className='box' style={{ boxShadow: ` ${checkon ? "inset" : ""} ${Hori}px ${veri}px ${blur}px ${color}` }}>

        <p>box-shadow:{Hori}px {veri}px {blur}px {color}</p>
      </div>
    </div>
  );
}

export default App;
