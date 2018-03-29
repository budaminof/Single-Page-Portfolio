import React, { Component } from 'react';
import Typist from 'react-typist';
import email from './images/email.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import './App.css';

class App extends Component {

  render() {

    console.log("=====================================");
    console.log("I am so happy to see you here!")
    console.log("Lets play with Ethereum contracts. Do you have MetaMask installed?");
    console.log("https://metamask.io/");
    console.log("My contract is currently a work in progress but I will deploy it very soon.");
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
            <img src={twitter} alt="twitter-icon"></img>
          </Typist>
          <Typist
            key={2}
            cursor={{
              hideWhenDone: true,
              blink: true,
              }}
            startDelay={200}
            avgTypingDelay={25}
          >
            · I love all things JS: React, Redux, Node.js and Express.js;
          <Typist.Delay ms={200} /> 
            <br key={3}/>
            <br key={4} className="mobile"/>
            · On my free time I build Ethereum applications and talk blockchain;
          <Typist.Delay ms={200} />
            <br key={5}/>
            <br key={6} className="mobile"/>
            · I can jump right into an Angu<Typist.Delay ms={200} />alr
          <Typist.Backspace count={3} delay={300} />
          <Typist.Delay ms={300} />
            lar project and work on Postgres DB;
          <Typist.Delay ms={200} />
            <br key={7}/>
            <br key={8} className="mobile"/>
            · Talk to me about code, music and surf.
            <br key={9} className="mobile"/>

            <div className="image-wrapper">
              <Typist.Delay ms={200} />
              <a href="mailto:budaminof@gmail.com">
                <img src={email} alt="email-icon"></img></a>

              <Typist.Delay ms={300} />
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/budaminof/">
                <img src={linkedin} alt="linkedin-icon"></img></a>
              
              <Typist.Delay ms={200} />
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/bud_aminof">
                <img src={twitter} alt="twitter-icon"></img></a>
                <Typist.Delay ms={100} />
            </div>

          </Typist>

        </div>
      </div>
    );
  }
}

export default App;
