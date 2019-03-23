import React from 'react'


const DrumPad = (props) => {


  return (
    <div className="drum-pad" id={props.sound} onClick={props.onClick}>
      <p className="drum-pad-text">{props.id}</p>
      <p style={{textAlign: "center"}} class="sound-text">{props.sound}</p>
      <audio className="clip" src={props.src} id={props.id} type="audio/wav" />
    </div>
  )
}




export default DrumPad;
