import React from 'react'
import DrumPad from './DrumPad'


class DrumMachine extends React.Component {
  state = {
    keyArray: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    soundArray: ["Clap", "Crash", "Hi-Hat(Closed)", "Hi-Hat(Open)", "Kick", "Perc", "Ride", "Snare 1", "Snare 2"],
    srcArray: ["/sounds/Clap.wav", "../sounds/Crash.wav", "../sounds/HiHat_closed.wav", "../sounds/HiHat_open.wav", "../sounds/Kick.wav", "../sounds/Perc.wav", "../sounds/Ride.wav", "../sounds/Snare_1.wav", "../sounds/Snare_2.wav"],
  }


  render () {
    return (
      <div id="drum-machine">
        <DrumPad id={this.state.keyArray[0]} text={this.state.keyArray[0]} sound={this.state.soundArray[0]} src={this.state.srcArray[0]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[1]} text={this.state.keyArray[1]} sound={this.state.soundArray[1]} src={this.state.srcArray[1]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[2]} text={this.state.keyArray[2]} sound={this.state.soundArray[2]} src={this.state.srcArray[2]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[3]} text={this.state.keyArray[3]} sound={this.state.soundArray[3]} src={this.state.srcArray[3]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[4]} text={this.state.keyArray[4]} sound={this.state.soundArray[4]} src={this.state.srcArray[4]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[5]} text={this.state.keyArray[5]} sound={this.state.soundArray[5]} src={this.state.srcArray[5]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[6]} text={this.state.keyArray[6]} sound={this.state.soundArray[6]} src={this.state.srcArray[6]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[7]} text={this.state.keyArray[7]} sound={this.state.soundArray[7]} src={this.state.srcArray[7]} ref={this.state.myRef} />
        <DrumPad id={this.state.keyArray[8]} text={this.state.keyArray[8]} sound={this.state.soundArray[8]} src={this.state.srcArray[8]} ref={this.state.myRef} />
      </div>
    )
  }
}



export default DrumMachine;
