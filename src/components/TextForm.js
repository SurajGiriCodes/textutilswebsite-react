import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearText = ()=>{
        let newText = " ";
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
        var text = document.getElementById("area");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces remove!", "success");
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{ color: props.mode === 'dark' || props.mode1 === 'dark' ? 'white' : '#042743' }}>

            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{
            backgroundColor: props.mode === 'dark' ? 'grey' : (props.mode1 === 'dark' ? 'grey' : 'white'),
            color: props.mode === 'dark' ? 'white' : (props.mode1 === 'dark' ? 'white' : '#042743')
            }}id="area" rows="8"></textarea>

            </div>
            <button className='btn btn-primary mx-1' style={{backgroundColor: props.mode1 === 'dark' ? '#007741':'#5762fb'}} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' style={{backgroundColor: props.mode1 === 'dark' ? '#007741':'#5762fb'}} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' style={{backgroundColor: props.mode1 === 'dark' ? '#007741':'#5762fb'}} onClick={handleClearText}>Clear Text</button>
            <button  className='btn btn-primary mx-1' style={{backgroundColor: props.mode1 === 'dark' ? '#007741':'#5762fb'}} onClick={speak}>Speak</button>
            <button  className='btn btn-primary mx-1' style={{backgroundColor: props.mode1 === 'dark' ? '#007741':'#5762fb'}} onClick={handleCopy}>Copy text</button>
            <button  className='btn btn-primary mx-1' style={{backgroundColor: props.mode1 === 'dark' ? '#007741':'#5762fb'}} onClick={handleExtraSpaces}>Remove ExtraSpaces</button>

        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' || props.mode1 === 'dark' ? 'white' : '#042743' }} >
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).length - 1} words and {text.length-text.split(" ").length+1} characters</p>
            {/* <p>{text.split(" ").length - 1} word and {text.length-text.split(" ").length+1}  characters</p> */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the field above to preview it here"}</p>

        </div>

        </>
    )
}
