import * as React from 'react';
import {GameContextType, IData} from "../utils/types";
import {data} from "../utils/data";

export const GameContext = React.createContext<GameContextType | null>(null);

const GameProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [gameData, setGameData] = React.useState<IData[]>(data);

    const updateGameData = (id: number) => {
        setGameData(prevState => prevState.filter(game => game.lineId === id));
    }
    return (
        <GameContext.Provider value={{gameData, updateGameData}}>
            {children}
        </GameContext.Provider>
    );

}

export default GameProvider;
