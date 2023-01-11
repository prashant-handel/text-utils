import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    text.length !== 0 && props.showAlert("Converted to UpperCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    text.length !== 0 && props.showAlert("Converted to LowerCase", "success");
  };
  const clearText = () => {
    setText("");
    text.length !== 0 && props.showAlert("Text Cleared", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text)
    text.length !== 0 && props.showAlert("Copied to Clipboard", "success");
  };
  const removExtraSpace = () => {
    setText(text.replaceAll(/\s+/g, " "));
    text.length !== 0 && props.showAlert("Extra spaces removed", "success");
    };
  
  return (
    <>
      <div>
        <div className="mb-3" style={{color: props.mode === 'light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="textArea"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'#606060', color: props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-1" style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Number of Words</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length / 200} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview here!"}</p>
      </div>
    </>
  );
}
