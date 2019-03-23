import React from 'react'
import DrumPad from './DrumPad'
import Display from './Display'




class DrumMachine extends React.Component {
  state = {
    keyArray: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    soundArray: ["Clap", "Crash", "Hi-Hat(Closed)", "Hi-Hat(Open)", "Kick", "Perc", "Ride", "Snare 1", "Snare 2"],
    srcArray: ["../sounds/Clap.wav", "../sounds/Crash.wav", "../sounds/HiHat_closed.wav", "../sounds/HiHat_open.wav", "../sounds/Kick.wav", "../sounds/Perc.wav", "../sounds/Ride.wav", "../sounds/Snare_1.wav", "../sounds/Snare_2.wav"],
    displayText: "",
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      let audio = document.getElementById(e.key.toUpperCase())
      if (!audio) {
        return undefined;
      }
      console.log(audio.previousSibling)
      this.setState({
        displayText: audio.previousSibling.textContent
      })
      audio.parentElement.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
      setTimeout(() => {audio.parentElement.classList.remove("playing");}, 200)
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    let id = e.target.closest('div').firstChild.textContent;
    let audio = document.getElementById(id);
    if (!audio) {
      return undefined;
    }
    this.setState({
      displayText: e.target.closest('div').childNodes[1].textContent
    })
    audio.parentElement.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {audio.parentElement.classList.remove("playing");}, 200)
  }


  render () {
    return (
      <div id="drum-machine">
        <h1>The Drum Machine</h1>
        <Display text={this.state.displayText}/>
        <DrumPad id={this.state.keyArray[0]} text={this.state.keyArray[0]} sound={this.state.soundArray[0]} src={this.state.srcArray[0]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[1]} text={this.state.keyArray[1]} sound={this.state.soundArray[1]} src={this.state.srcArray[1]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[2]} text={this.state.keyArray[2]} sound={this.state.soundArray[2]} src={this.state.srcArray[2]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[3]} text={this.state.keyArray[3]} sound={this.state.soundArray[3]} src={this.state.srcArray[3]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[4]} text={this.state.keyArray[4]} sound={this.state.soundArray[4]} src={this.state.srcArray[4]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[5]} text={this.state.keyArray[5]} sound={this.state.soundArray[5]} src={this.state.srcArray[5]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[6]} text={this.state.keyArray[6]} sound={this.state.soundArray[6]} src={this.state.srcArray[6]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[7]} text={this.state.keyArray[7]} sound={this.state.soundArray[7]} src={this.state.srcArray[7]} ref={this.state.myRef} onClick={this.handleClick} />
        <DrumPad id={this.state.keyArray[8]} text={this.state.keyArray[8]} sound={this.state.soundArray[8]} src={this.state.srcArray[8]} ref={this.state.myRef} onClick={this.handleClick} />
      </div>
    )
  }
}



export default DrumMachine;
