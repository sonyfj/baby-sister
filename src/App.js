import React from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import boy from './images/boy.png';
import girl from './images/girl.png';

function App() {

  const { width, height } = useWindowSize()

  return (
    <div className="App">
      <Confetti
        width={width}
        height={height}
      />
      <div width="100%" style={{paddingTop: "60px"}}>
        <div style={{margin: "0 auto", width: "700px"}}>
        <img src="http://c2.staticflickr.com/2/1596/23948188374_77061251e2_z.jpg"
            style={{marginLeft: '-70px'}}>
        </img>
        <div style={{marginTop: "-200px"}}>
        <div style={{display: "flex", width: "700px",
              justifyContent: "space-between"}} >
              <div>
                <img width="250px" src={girl} />
              </div>
              <div>
                <img width="250px" src={boy} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
