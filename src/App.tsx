import React from 'react';
import './app.scss';
import Stone from './components/stone/Stone';
import Games from './pages/Games/Games';
import GameProvider from "./context/gameContext";

function App() {
    return (
        <GameProvider>
            <div className="main">
                <Games/>
            </div>
        </GameProvider>
    );
}

export default App;
