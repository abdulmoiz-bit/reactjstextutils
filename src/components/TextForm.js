import React, { useState } from 'react'



export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Upper Case", "success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lower Case", "success");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Clear All Text", "success");
  }
  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    //text.select();
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Done", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(19, 0, 90)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container mt-3" my-3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}Minutes Read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )


}