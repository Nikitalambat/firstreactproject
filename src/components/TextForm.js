import React, {useState} from "react"; //state hook

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UpperCase was clicked: " + text);
    // setText("You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>{
    // console.log("LowerCase was clicked: " + text);
    // setText("You have clicked on handleLoClick");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleUpChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }  
  

  // Declare a new state variable, which we'll call "text"  
  const [text, setText] = useState(''); //useState('Enter text here2');
  //text = "new text";  //wrong way to change the state
  //setTest("new text"); //Correct way to change the state
  
  return (
    <>
    <div className="container">
      <h3>{props.heading}</h3>
      <div class="mb-3">
          <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  );
}  
