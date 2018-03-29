import React, { Component } from 'react';
import Typist from 'react-typist';
import email from './images/email.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import './App.css';

class App extends Component {
  state = {
    renderMsg: false,
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true });
  }

  render() {
    return (
      <div className="App">

        <div>
          <Typist
            className="header"
            avgTypingSpeed={50}
            startDelay={2000}
            onTypingDone={this.onHeaderTyped}
            cursor={{ hideWhenDone: true }}
          >
            BUD AMINOF
          </Typist>
          
          <div>
            {this.state.renderMsg ? (
             <Typist
                cursor={{ hideWhenDone: true }}
                startDelay={1000}
              >
                · I love all things JS: React, Redux, Node.js and Express.js.
              <Typist.Delay ms={1250} /> 
                <br />
                <br />
                · On my free time I build Ethereum applications and talk blockchain.
              <Typist.Delay ms={1250} />
                <br />
                <br />
                · I can jump right into an Angu<Typist.Delay ms={500} />alr
              <Typist.Backspace count={3} delay={1000} />
                <Typist.Delay ms={750} />
                lar project and work on Postgres DB.
              <Typist.Delay ms={1250} />
                <br />
                <br />
                · Talk to me code, music and surf.
                <br />
                <div className="image-wrapper">
                  <Typist.Delay ms={1250} />
                  <a href="mailto:budaminof@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src={email} alt="email-icon"></img></a>
                  <Typist.Delay ms={750} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/budaminof/">
                    <img src={linkedin} alt="linkedin-icon"></img></a>
                  <Typist.Delay ms={1250} />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/bud_aminof">
                    <img src={twitter} alt="twitter-icon"></img></a>
                </div>
                {''}
              </Typist>
            ) : null}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
