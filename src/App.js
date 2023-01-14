import React, { useState } from 'react'
import Alert from './Alert';
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }
  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#3f464d'
      document.body.style.color = 'white'
      showAlert(" Dark Mode Has Been Enabled", "success")
      document.title = 'PlayWithWords-Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert(" Light Mode Has Been Enabled", "success")
      document.title = 'PlayWithWords-Light Mode'
    }
  }
  return (
    <>
     {/* <BrowserRouter>
      <Navbar title="PlayWithWords" AboutUs="About US" mode={mode} darkMode={darkMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
         <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<TextForm headong="Enter Text Here" mode={mode} showAlert={showAlert}/>}></Route>
         </Routes>
         
      </div>
      </BrowserRouter> */}
      <Navbar title="PlayWithWords" AboutUs="About US" mode={mode} darkMode={darkMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm heading="Enter Text Here" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}
export default App;