import React, {useState} from "react"; //state hook

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UpperCase was clicked: " + text);
    // setText("You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
  } 

  const handleCopyClick = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  } 

  const handleRemoveExtraSpaceClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  } 

  const handleUpChange = (event) =>{
    setText(event.target.value);
  }  
     

  // Declare a new state variable, which we'll call "text"  
  const [text, setText] = useState(''); //useState('Enter text here2');
  //text = "new text";  //wrong way to change the state
  //setTest("new text"); //Correct way to change the state 
  
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'dark'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'dark'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaceClick}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'dark'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}  
