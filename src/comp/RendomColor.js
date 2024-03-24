import React, { useState } from 'react'

function RendomColor() {

  const [code,setcode]=useState(1);

  const getrendomcolor=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const gethashcode=()=>{
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  const randomColors = new Array(1000).fill().map(code ===1 ? getrendomcolor : gethashcode);
  const handleClick = () => {
    setcode(code === 1 ? 0 : 1);
  };

  const handleCopy=(color)=>{
    const copy = navigator.clipboard.writeText(color);
    window.alert(" color code is copied");
    return copy;
  }
  


  return (
    <>
      <div>
          <div style={{border:"2px solid red",display:"flex",justifyContent:"space-around"}}>
            <p>Random color generate { code === 1 ? "rgb color code" : " hash color Code "} </p>
            <button style={{width:"100px",textAlign:"center",background:"",fontSize:"17px"}} onClick={()=>handleClick()}>{code === 1 ? "hash code" : " rgb code "}</button>
          </div>
          {
            code === 1 ?
            <ul style={{display:"flex",margin:"10px", flexWrap:"wrap"}}>
              {
                randomColors.map((color,index)=>(
                  <li key={index} style={{border:"2px solid red",background:color,width:"150px",height:"120px",textAlign:"center",listStyle:"none",margin:"10px"}} onClick={()=>handleCopy(color)}>
                    {color}
                  </li>
                ))
              }
            </ul>
            :
            <ul style={{display:"flex",margin:"10px", flexWrap:"wrap"}}>
              {
                randomColors.map((color,index)=>(
                  <li key={index} style={{border:"2px solid red",background:color,width:"150px",height:"120px",textAlign:"center",listStyle:"none",margin:"10px"}} onClick={()=>handleCopy(color)}>
                    {color}
                  </li>
                ))
              }
              {/* <li>hell0</li> */}
            </ul>
          }
      </div>
    </>
  )
} 

export default RendomColor





