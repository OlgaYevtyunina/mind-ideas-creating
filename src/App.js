import './App.css';
import videoBg from './mind.mp4';
import { useEffect, useState } from 'react';


function App() {

  const [tips, setTips] = useState("");

  const fetchTips = async () => {
  const response = await fetch("http://www.boredapi.com/api/activity/");

  const data = await response.json();
  setTips(data.activity);
  };

  useEffect(() => {
  fetchTips();
  }, []);
  return(
    <div className="App">
    <div className="container">
    <video autoPlay muted loop>
    <source src={videoBg} type='video/mp4'/>
    </video> 
    <h1>Get your perfect tip for today</h1>
    </div>
    <div className="container">
      <p className="par">{tips}</p>
    </div>
    <div className="container">
    <button onClick={fetchTips} role="button">Find Out</button>
    </div>


    </div>
  )
}

export default App;

