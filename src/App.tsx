import React from 'react';
import './App.css';
import SineWave from "./SineWave";

function App() {
    return (
        <div className="App">
            <header className="App-header">
          <div>
      <SineWave
        width={1000}
        height={300}
        speed={0.1}
        amplitude={100}
        frequency={5}
        lineWidth={5}
        strokeStyle="white"
      />
    </div>

            </header>
        </div>
    );
}

export default App;
