import React from 'react';
import './app.scss';
import BoardLine from './components/boardLine/BoardLine';
import Stone from './components/stone/Stone';
import Games from './pages/Games/Games';
function App() {
  return (
    <div className="main">
       <Games />
       <Stone bgcolorFirst='black'  bgcolorSecond='gray'/>
       <BoardLine bgcolor='red'/>
    </div>
  );
}

export default App;
