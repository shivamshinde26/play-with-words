import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(" Converted To UpperCase","success")
  }
  const handleOnChange = (event) => {
    // console.log("Up Change")
    setText(event.target.value)
  }
  const handleDownClick = () => {
    // console.log("LowerCase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert(" Converted To LowerCase","success")
  }
  const clear=()=>{
    setText("")
    props.showAlert(" Cleared The Textarea","success")
  }
  const copy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert(" Copied To Clipboard","success")
  }
  const [text, setText] = useState('');
  // text="new Text" wrong wat
  //setText("new Text") correct way
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:'light'?'black':'white'}} id="exampleFormControlTextarea1" rows="5" placeholder="Enter Text Here" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-secondary mx-1 " onClick={handleDownClick}>Convert To LowerCase</button>
      <button type="button" className="btn btn-dark" onClick={clear} >Clear</button>
      <button type="button" className="btn btn-dark mx-1" onClick={copy} >Copy</button>
    </div>
    <div className="container my-3">
      <h1>Text Summary</h1>
      <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
      <p>{0.008*text.length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  );
}
