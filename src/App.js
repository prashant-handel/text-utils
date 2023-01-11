import "./App.css";
import Navbar from "../src/components/Navbar";
import PropTypes from 'prop-types';
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { type } from "@testing-library/user-event/dist/type";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#6d6767';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 800);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div>
      <Alert alert={alert} type={type}/>
      </div>
      <h1 style={{marginLeft: '20px', marginRight: '20px'}}>Try Text Utiles- Word Counter, Character Counter, Remove Extra Spaces</h1>
      <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}/>
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
        </Router>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
export default App;