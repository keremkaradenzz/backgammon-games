import React from 'react';
import './app.scss';
import Stone from './components/stone/Stone';
import Games from './pages/Games/Games';
function App() {
  return (
    <div className="main">
       <Games />
       <Stone bgcolorFirst='black'  bgcolorSecond='gray'/>

    </div>
  );
}

export default App;
