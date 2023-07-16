import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not  //body-tertiary =>light mode
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }; 
  
  return (
    <>
      <Navbar title="Nitika" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar  /> */}
      <div className="container my-3">
         <TextForm heading="Enter the text to analyze below" mode={mode}/>
         {/* <About  /> */}
      </div>
      
    </>
  );
}

export default App;
