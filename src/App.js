import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Personajes from './components/Personajes';
import ThemeContext from './components/context/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  
  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={"App "+ bg}>
        <Header onClick={() => setDarkMode(!darkMode)}/>
        <Personajes></Personajes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
