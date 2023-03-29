
import React from "react"
// export default function AboutUs() {
// }
// import logo from './logo.svg';
// import './App.css';

 class AboutUs {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }

  sendText = _ => {
    const { text } = this.state
    //pass variables within the query string
    fetch('http://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}')
    .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;

    const spacer = {
      margin: 8
    }
    const textArea = {borderRadius: 4
    }

     return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo"/> */}
          <h1 className="App-title">Welcome to React</h1>
          </header>
          </div>
     )
  }
}
export default AboutUs