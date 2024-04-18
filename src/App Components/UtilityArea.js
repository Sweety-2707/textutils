import React,{useState}from 'react'


export default function UtilityArea() {
    

    const onUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const onLowerClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }

    const onClearClick=()=>{
        let newtext="";
        setText(newtext);
    }

    const onchange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    
    return (
        <div className='container'>
            <h3 className='my-3 text-center'>Enter text in below textbox to Utilize it...</h3>
            <div className="form-group">
                <textarea className="form-control" id="textbox" rows="8" value={text} placeholder="Enter any text" onChange={onchange}></textarea>
            </div>
            <button className="btn btn-secondary my-3" onClick={onUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary me-auto mx-3 my-3" onClick={onLowerClick}>Convert to Lower Case</button>
            <button className="btn btn-success me-auto mx-3 my-3" onClick={onClearClick}>Clear TextBox</button>

            <h4>Summary of the Text</h4>
            <p>{text.trim().replace(/[\t\n\r\.\?\!]/gm, " ").split(" ").length} words and {text.length} characters {text.split("\n").length} sentences</p>
        </div>
    )
}
