import React, { Component } from 'react';
import Typist from 'react-typist';
import email from './images/email.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import github from './images/github.png';
import arrow from './images/arrow.png';
import './App.css';

class App extends Component {

  render() {

    console.log("=====================================");
    console.log("I am so happy to see you here!")
    console.log("Let's play with an Ethereum contract. Do you have MetaMask installed?");
    console.log("https://metamask.io/");
    console.log("My contract is currently a work in progress but I will deploy it very soon.");
    console.log("=====================================");

    return (
      <div className="App">

        <div>
          <Typist
            key={2}
            cursor={{ 
              hideWhenDone: true, 
              show: false }}
            avgTypingDelay={20}
            className="header" >
            BUD AMINOF
          </Typist>
          <Typist
            key={3}
            cursor={{
              hideWhenDone: true,
              blink: true,
              }}
            startDelay={200}
            avgTypingDelay={25}
          >
            · I love all things JS: React, Redux, Node.js and Express.js;
          <Typist.Delay ms={200} key={4} /> 
            <br key={5}/>
            <br key={6} className="mobile"/>
            · On my free time I build Ethereum applications and talk blockchain;
          <Typist.Delay ms={200} key={7} />
            <br key={8}/>
            <br key={9} className="mobile"/>
            · I can jump right into an Angu<Typist.Delay ms={200} />alr
          <Typist.Backspace count={3} delay={300} key={10} />
            <Typist.Delay ms={300} key={11} />
            lar project and work with Postgres DB;
          <Typist.Delay ms={200} key={12} />
            <br key={13}/>
            <br key={14} className="mobile"/>
            · Talk to me about code, music and surf.
            <br key={15} className="mobile"/>

            <div className="image-wrapper" key={16}>
              <Typist.Delay ms={200} key={17} />
              <a href="mailto:budaminof@gmail.com">
                <img src={email} alt="email-icon"></img></a>
            
            <Typist.Delay ms={200} key={19} />
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/bud_aminof">
              <img src={twitter} alt="twitter-icon"></img></a>

              <Typist.Delay ms={300} key={18}/>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/budaminof/">
                <img src={linkedin} alt="linkedin-icon"></img></a>
              
              <Typist.Delay ms={300} key={20} />
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/budaminof">
                <img src={github} alt="github-icon"></img></a>
              <Typist.Delay ms={100} key={21} />
            </div>

          </Typist>

        </div>
        <div className="arrow bounce" key={22}>
              <img src={arrow} alt="arrow pointing down" className="arrow-img" key={23}></img>
        </div>
      </div>
    );
  }
}

export default App;
