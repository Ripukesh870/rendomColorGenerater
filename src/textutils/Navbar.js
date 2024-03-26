import React, { useState } from 'react'

function Navbar() {
    const [dark,setDark]=useState(1);

    const [text,setText]=useState("");
    // console.log(value1);

    const handleDarkmode=()=>{
        setDark(dark===1?0:1);
    }
    
    const handleTextarea=(e)=>{
        // console.log(e.target.value);
        setText(e.target.value);
    }
    
    const handleUppercase=()=>{
        setText(text.toUpperCase());
    }

    const handleLowercase=()=>{
        setText(text.toLowerCase());
    }

    const handleExtraspace=()=>{
        setText(text.replace(/\s+/g, ' '));
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        window.alert(" text copied");
        // return copy;
    }

    const handleClear=()=>{
        setText("");
    }

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;


  return (
    <>
        <div style={{border:"2px solid red",display:"flex", justifyContent:"space-between",padding:"0 3em", background:dark===1?"rgb(170, 190, 156)":"#141414"}}>
            <h2 style={{color:dark===1?"black":"white"}}>TextUtils</h2>
            <button style={{fontSize:"16px",height:"40px",margin:"auto 0",borderRadius:"10px",border:"none",padding:"10px 10px",background:dark===1?" ":"gray",color:dark===1?" ":"white"}} onClick={handleDarkmode}> <b> {dark===1 ? "Dark mode ": "Light mode"} </b></button>
        </div>
        <div style={{margin:".5em 0",border:"2px solid red",background:dark===1?"white":"#1f1c1b"}}>
            <div style={{marginTop:".5em",margin:"3em 0 0 3em"}}>
                <textarea name="" id="" cols="" rows="14"  placeholder='Enter text...'  style={{border:"3px solid black", width:"calc(100% - 6em)",fontSize:"20px",background:dark===1?"white":"gray",color:dark===1?"black":"black" , }} value={text} onChange={handleTextarea}></textarea>
            </div>
            <div style={{marginTop:".5em",display:"flex",flexWrap:"wrap",margin:"1em 0 0 3em"}}>

                <button style={{marginLeft:"20px",fontSize:"18px",borderRadius:"5px",padding:"3px 14px",fontWeight:"bold",background:dark===1?"white":"gray"}} onClick={handleUppercase}>Convert Upper Case</button>
                <button style={{marginLeft:"20px",fontSize:"18px",borderRadius:"5px",padding:"3px 14px",fontWeight:"bold",background:dark===1?"white":"gray"}} onClick={handleLowercase}>Convert Lower Case</button>
                <button style={{marginLeft:"20px",fontSize:"18px",borderRadius:"5px",padding:"3px 14px",fontWeight:"bold",background:dark===1?"white":"gray"}} onClick={handleExtraspace}>Remove Extra Space</button>
                <button style={{marginLeft:"20px",fontSize:"18px",borderRadius:"5px",padding:"3px 14px",fontWeight:"bold",background:dark===1?"white":"gray"}} onClick={handleCopy}>Copy Texts</button>
                <button style={{marginLeft:"20px",fontSize:"18px",borderRadius:"5px",padding:"3px 14px",fontWeight:"bold",background:dark===1?"white":"gray"}} onClick={handleClear}>Clear all Text</button>
            </div>
            <div style={{marginTop:".5em",margin:"4em 0 0 3em"}}>
                <h4 style={{color:dark===1?" ":"white"}}>total no of world : {wordCount}</h4>
                <h3 style={{color:dark===1?" ":"white"}}>Converted formate </h3>
                <p style={{padding:"2px 10px 30px 10px",color:dark===1?" ":"white"}}>{text}</p>
            </div> 
            
        </div>
    </>
  )
}

export default Navbar

