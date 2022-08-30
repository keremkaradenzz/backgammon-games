export interface  IData {
    haveStone : any[],
    lineId: number,
}


export type GameContextType = {
    gameData: IData[];
    updateGameData: (data:IData[]) => void;
};