import React, { Component } from 'react';
import Typist from 'react-typist';
import email from './images/email.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import github from './images/github.png';
// import arrow from './images/arrow.png';
import './App.css';

class App extends Component {

  render() {

    console.log("=====================================");
    console.log("I am so happy to see you here!");
    console.log("I am working on an Ethereum contract for us to play with");
    console.log("but for now – make sure you have MetaMask installed");
    console.log("https://metamask.io/");
    console.log("=====================================");

    return (
      <div className="App">

        <div>
          <Typist
            key={1}
            cursor={{ 
              hideWhenDone: true, 
              show: false }}
            avgTypingDelay={20}
            className="header" >
            BUD AMINOF
          </Typist>
          <Typist
            key={2}
            cursor={{
              hideWhenDone: true,
              blink: true,
              }}
            startDelay={200}
            avgTypingDelay={25}
            className="main"
          >
            · I love all things JS: React, Redux, Node.js and Express.js;
          <Typist.Delay ms={200}/> 
            <br />
            · On my free time I build Ethereum applications and talk blockchain;
          <Typist.Delay ms={200} />
            <br />
            · I can jump right into an Angu<Typist.Delay ms={200} />alr
          <Typist.Backspace count={3} delay={300} />
            <Typist.Delay ms={300} />
            lar project and work with Postgres DB;
          <Typist.Delay ms={200} />
            <br />
            · Talk to me about code, music and surf.

            <div className="image-wrapper" >
              <Typist.Delay ms={200} />
              <a href="mailto:budaminof@gmail.com">
                <img src={email} alt="email-icon"></img></a>
            
            <Typist.Delay ms={200} />
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/bud_aminof">
              <img src={twitter} alt="twitter-icon"></img></a>

              <Typist.Delay ms={300} />
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/budaminof/">
                <img src={linkedin} alt="linkedin-icon"></img></a>
              
              <Typist.Delay ms={300} />
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/budaminof">
                <img src={github} alt="github-icon"></img></a>
              <Typist.Delay ms={100} />
            </div>

          </Typist>

        </div>
        {/* <div className="arrow bounce">
              <img src={arrow} alt="arrow pointing down" className="arrow-img" key={23}></img>
        </div> */}
        {/* <div className="dev-tools">
          <p>Open developer tools to interact with my Etheruem contract</p>
        </div> */}
      </div>
    );
  }
}

export default App;
