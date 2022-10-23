import React from 'react'
import Stone from '../stone/Stone';
import './index.scss';
import { GameContextType, IData } from '../../utils/types';
import { GameContext } from '../../context/gameContext';
import { droppedControl } from '../../helper/gameHelper';
interface IBoardLineProps {
  bgcolor: string;
  game: IData;
}

type DragStoneType = {
  id: number;
  lineId: number;
  stoneType: string;
}


// 1. enemy renk 2 den fazlaysa oraya drop yapilmayacak 
// 2.si lineId drop id esitse drop yapilir 
// 3.si lineId dragStone id === 
let TOTAL_MOVE = 0;
const BoardLine: React.FC<IBoardLineProps> = ({ bgcolor, game }) => {
  const { gameData, updateGameData } = React.useContext(GameContext) as GameContextType;


  const moveStone = (dragStone: any) => {
    const droppedId = game.lineId;
    const firstDice = Number(localStorage.getItem('0'));
    const secondDice = Number(localStorage.getItem('1'));

    if (firstDice === Math.abs(droppedId - dragStone.lineId) || secondDice === Math.abs(droppedId - dragStone.lineId)) {
      console.log({ total_move: TOTAL_MOVE, droppedId, lineId: dragStone })
      TOTAL_MOVE = TOTAL_MOVE - Math.abs(droppedId - dragStone.lineId);
      return true;
    }
    return false;
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    let isRoll = JSON.parse(localStorage.getItem('isRoll') || 'false');
    console.log('isFirst', { TOTAL_MOVE, isRoll })
    if (isRoll) {
      // dice is even  
      const firstDice = Number(localStorage.getItem('0'));
      const secondDice = Number(localStorage.getItem('1'));
      if (firstDice === secondDice) {
        TOTAL_MOVE = (firstDice + secondDice) * 2;
      } else {
        TOTAL_MOVE = firstDice + secondDice;
      }
      localStorage.setItem('isRoll', JSON.stringify(false));
    }
    const dragStone: DragStoneType = JSON.parse(localStorage.getItem('stone') || '{}');
    let copyData = JSON.parse(JSON.stringify(gameData));
    if (dragStone) {
      const droppedId = game.lineId;
      copyData.forEach((item: any, index: number) => {
        if (droppedControl(copyData, item, dragStone, droppedId, TOTAL_MOVE)) {
          if (moveStone(dragStone)) {
            item.haveStone.push(dragStone.stoneType);
            copyData[dragStone.lineId].haveStone.pop();
          }
        }
        return item;
      });
      updateGameData(copyData);
    }

  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }
  return (
    <div className='line' onDragOver={handleDragOver} onDrop={e => handleDrop(e)} style={{ background: bgcolor, borderColor: `transparent transparent ${bgcolor} transparent` }}>
      {
        game.haveStone.map((i, index) => {
          return <Stone key={index} bgcolorFirst={i === 'S' ? 'black' : 'white'} lineId={game.lineId} id={index} />
        })
      }
    </div>

  )
}

export default BoardLine