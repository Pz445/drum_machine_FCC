import React from 'react'


const DrumPad = (props) => {
  return (
    <div className="drum-pad" id={props.sound}>
      <p className="drum-pad-text">{props.id}</p>
      <audio className="clip" src={props.src} id={props.id} type="audio/wav" />
    </div>
  )
}

window.addEventListener('keydown', (e) => {
  let audio = document.getElementById(e.key.toUpperCase())
  if (!audio) {
    return;
  }
  console.log(audio)
  audio.play()
})

export default DrumPad;
