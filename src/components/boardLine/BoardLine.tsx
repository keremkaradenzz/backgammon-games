import React from 'react'
import Stone from '../stone/Stone';
import './index.scss';
import { GameContextType, IData } from '../../utils/types';
import { GameContext } from '../../context/gameContext';
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
const BoardLine: React.FC<IBoardLineProps> = ({ bgcolor, game }) => {
  const { gameData, updateGameData } = React.useContext(GameContext) as GameContextType;

  const droppedControl = (data: any, item: DragStoneType, dragItem: DragStoneType) => {
    const droppedId = game.lineId;
    let enemyColor = dragItem.stoneType === 'B' ? 'S' : 'B'
    let filteredData = data?.[droppedId]?.haveStone?.filter((i: any) => i === enemyColor);
    if (filteredData?.length > 1) return false;
    if (droppedId <= dragItem.lineId && dragItem.stoneType === 'B') {
      if (item.lineId === droppedId) return true;
      else return false;
    }
    if (droppedId >= dragItem.lineId && dragItem.stoneType === 'S') {
      if (item.lineId === droppedId) return true;
      else return false;
    }
    return false;
  }

  function handleDrop(e: React.DragEvent) {

    const dragStone: DragStoneType = JSON.parse(localStorage.getItem('stone') || '{}');
    let copyData = JSON.parse(JSON.stringify(gameData));
    if (dragStone) {
      copyData.forEach((item: any, index: number) => {
        if (droppedControl(copyData, item, dragStone)) {
          item.haveStone.push(dragStone.stoneType);
          copyData[dragStone.lineId].haveStone.pop();
        }
        return item;
      });
      updateGameData(copyData);
    }

  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    console.log('drop=>', game.lineId);
    //console.log(e.target);
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