import React, {useState} from 'react'

export default function TextForm (props) {
    const handleUpclick=()=>{
        //console.log("UpperCase was Clicked")
        let newText=text.toLocaleUpperCase();
        setText(newText)
    }


     const handleLowclick=()=>{
        //console.log("UpperCase was Clicked")
        let newText=text.toLocaleLowerCase();
        setText(newText)
    }
    const handleClrclick=()=>{
        //console.log("UpperCase was Clicked")
        let newText="";
        setText(newText)
    }
    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div>
        <h1>{props.heading}  </h1>
    
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}id="mybox" rows="8"></textarea>
        </div>
       <button className='btn btn-primary mx-2' onClick={handleUpclick}>Convert to Upper Case</button>
    
       <button className='btn btn-primary mx-2' onClick={handleLowclick}>Convert to Lower Case</button>
      
       <button className='btn btn-primary mx-2' onClick={handleClrclick}>Clear</button>
       
       
      
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 >Your Text Summery</h2>
        <p>{text.split(" ").length} Words And {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter somthing in the textbox above to preview it here'}</p>

    </div>
    </div>
    </>
  )
}
