
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
const [mode,  setMode] = useState('light'); //Whether dark mode is enabled or not 
const [mode1,  setMode1] = useState('light');

const [alert, setAlert] = useState(null)


const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500)
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enable", "success");
    document.title = 'TextUtils - Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable", "success");
    document.title = 'TextUtils - Light Mode';
  }
}

const toggleMode2 = ()=>{
  if(mode1 === 'light'){
    setMode1('dark');
    document.body.style.backgroundColor = '#284d02';
    showAlert("Green mode has been enable", "success");
    document.title = 'TextUtils - Green Mode';
  }
  else{
    setMode1('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable", "success");
    document.title = 'TextUtils - Light Mode';
  }
}


  return (
  <>
  {/* <Router> */}
  <Navbar title="Textutils" abouttext="Abouts" mode={mode} mode1={mode1} toggleMode={toggleMode} toggleMode2={toggleMode2} />
  <Alert alert={alert}/>
  <div className='container my-3'>
    {/* <Routes> */}
      {/* <Route exact path="/About" element={<About />} /> */}
      {/* <Route exact path="/" element={ */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} mode1={mode1}/>
      {/* } /> */}
    {/* </Routes> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
