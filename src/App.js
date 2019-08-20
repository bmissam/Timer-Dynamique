import React from 'react';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds:0,
      
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stop = this.stop.bind(this)
  
  }

  startTimer() {
    
    this.second=setInterval(()=> this.setState({
    
      seconds: this.state.seconds+1
    }), 1000);
    this.setState({
      isOn : true
    })
  }
  stop(){
    clearInterval(this.second)
    this.setState({
      isOn : false
    })

  }

  reset = () => {
    clearInterval(this.second)
    this.setState({
     
      seconds: 0
    })
  }
  
  math(num) {
    var a =num/3600
 
  
    var h = Math.floor(a)
    var m= Math.floor((a-h)*60)
    var s= Math.round((((a-h)*60)-m)*60)

   
     return <div> 
        <span>{String(h).padStart(2,0)} : {String(m).padStart(2,0)} : {String(s).padStart(2,0)} </span>
     </div>
  }
      
  render() {
    return (
      <div className="Timer">
        <div className="clock">
         <h1>{this.math(this.state.seconds)}</h1>
        </div>
        <div class="Unit">
          <span>Hour</span>
          <span>Minute</span>
          <span>Seconds</span>
        </div>
        <div className="boutton">

          <button onClick={!this.state.isOn ? this.startTimer:console.log()}>Start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
           
        </div>
      </div>
    )
    } 
  }

export default App;
