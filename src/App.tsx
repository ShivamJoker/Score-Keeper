import React, { useState, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import './App.css';
interface AppProps {}

function App({}: AppProps) {
  const [p1Name, setP1Name] = useState<string>('Dev Girl');
  const [p2Name, setP2Name] = useState<string>('Dev Boy');

  const [p1Score, setP1Score] = useState<number>(10);
  const [p2Score, setP2Score] = useState<number>(10);

  return (
    <div className="App">
      <div className="player-container">
        <p>DEV GIRL</p>
        <h2>
          <ContentEditable
            html={p1Name}
            onChange={(e) => setP1Name(e.target.value)}
          />
        </h2>
        <h3>{'score - ' + p1Score}</h3>
        <button onClick={() => setP1Score(p1Score - 1)}>-</button>
      </div>
      <div className="player-container">
        <p>DEV BOY</p>
        <h2>
          <ContentEditable
            html={p2Name}
            onChange={(e) => setP2Name(e.target.value)}
          />
        </h2>
        <h3>{'score - ' + p2Score}</h3>
        <button onClick={() => setP2Score(p2Score - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
