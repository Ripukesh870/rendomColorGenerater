import React from 'react'

function R1() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);

  return (
    <div>
      {color}
    </div>
  )
}

export default R1
