import React from 'react'
import Stone from '../stone/Stone';
import './index.scss';
import { GameContextType, IData } from '../../utils/types';
import { GameContext } from '../../context/gameContext';
import { droppedControl } from '../../utils/gameHelper';
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
    console.log({ total_move: TOTAL_MOVE, droppedId, lineId: dragStone })

    if (dragStone.stoneType === 'B' && TOTAL_MOVE < dragStone.lineId - droppedId) { return false }
    if (dragStone.stoneType === 'S' && TOTAL_MOVE < droppedId - dragStone.lineId) { return false }

    TOTAL_MOVE = TOTAL_MOVE - Math.abs(droppedId - dragStone.lineId);
    return true;
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();

    let isRoll = JSON.parse(localStorage.getItem('isRoll') || 'false');

    console.log('isFirst', { TOTAL_MOVE, isRoll })
    if (isRoll) {
      console.log('birada')
      TOTAL_MOVE = Number((localStorage.getItem('0'))) + Number(localStorage.getItem('1'));
      localStorage.setItem('isRoll', JSON.stringify(false));
    }
    const dragStone: DragStoneType = JSON.parse(localStorage.getItem('stone') || '{}');
    let copyData = JSON.parse(JSON.stringify(gameData));
    if (dragStone) {
      const droppedId = game.lineId;
      copyData.forEach((item: any, index: number) => {
        if (droppedControl(copyData, item, dragStone, droppedId)) {
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