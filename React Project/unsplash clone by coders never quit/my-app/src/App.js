
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  //cIMBo7tyVP0gcmI0IGpFFewbHdoOYP_TEbbTFfsSMC0
  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=cIMBo7tyVP0gcmI0IGpFFewbHdoOYP_TEbbTFfsSMC0&query= ${value}&orientation=squarish`)
    .then(res => res.json())
      .then(data => {
        setResults(data.results)
      })

  }
  return (
    <div className="App">
      <div className='mydiv'>
        <span>Search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => fetchImage()}>Send</button>

      
      
      
      </div>
      <div className='gallery'>
        {
          results.map((item)=>{
            return <img className='item' key={item.id} src={item.urls.regular}></img>

          })
        }
      </div>

    </div>
  );
}

export default App;
