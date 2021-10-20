import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './components/context/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  
  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={"App "+ bg}>
        <Header onClick={() => setDarkMode(!darkMode)}/>
        <Characters></Characters>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
