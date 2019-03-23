import React from 'react'

const Display = (props) => {
  return (
    <div id="display-box">
      <p id="display" style={{textAlign: "center"}}>{props.text}</p>
    </div>
  )
}

export default Display;
