import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to Clipboard", "success");
  };
  
  const removExtraSpace = () => {
    setText(text.replaceAll(/\s+/g, " "));
    props.showAlert("Extra spaces removed", "success");
    };
  
  return (
    <>
    <h1 style={{marginLeft: '20px', marginRight: '20px'}}>Try Text Utiles- Word Counter, Character Counter, Remove Extra Spaces</h1>
      <div style={{marginLeft: '20px', marginRight: '20px'}}>
        <div className="mb-3" style={{color: props.mode === 'light'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="textArea"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'#606060', color: props.mode === 'light'?'black':'white',border: props.mode==='light'?'1px solid black':'1px solid white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase} disabled={text.length===0}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase} disabled={text.length===0}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText} disabled={text.length===0}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText} disabled={text.length===0}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={removExtraSpace} disabled={text.length===0}>
          Remove Extra Space
        </button>
      </div>
      <div className="mx-5 my-1" style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Number of Words</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length / 200} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview here!"}</p>
      </div>
    </>
  );
}
