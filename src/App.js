import React from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {

  const { width, height } = useWindowSize()

  return (
    <div className="App">
      <Confetti
      width={width}
      height={height}
    />
    </div>
  );
}

export default App;
