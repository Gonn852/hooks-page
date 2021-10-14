import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Personajes from './components/Personajes';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  
  return (
    <div className={"App "+ bg}>
      <Header darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}/>
      <Personajes darkMode={darkMode}></Personajes>
    </div>
  );
}

export default App;
