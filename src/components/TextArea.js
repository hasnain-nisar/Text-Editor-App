import React, {useState} from 'react'

export default function TextArea(props) {
        


    const handleUpClick = ()=>{
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success ")
    }
    
    const handleLoClick = ()=>{
        console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success ")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared" , "success ")
    }

    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard" , "success ")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed" , "success ")
    }
    
    
    
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');



    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" style={{backgroundColor: props.mode==='dark'?'#0c0c72':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>    
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter some text to preview it here"}</p>
            </div>
        </>
    )
}
