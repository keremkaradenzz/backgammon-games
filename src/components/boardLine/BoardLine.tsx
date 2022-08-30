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
const BoardLine: React.FC<IBoardLineProps> = ({ bgcolor, game }) => {
  const { gameData, updateGameData } = React.useContext(GameContext) as GameContextType;
  function handleDrop(e: React.DragEvent) {
    const droppedId = game.lineId;
    const dragStone: DragStoneType = JSON.parse(localStorage.getItem('stone') || '{}');
    let copyData = JSON.parse(JSON.stringify(gameData));

    if (dragStone) {
      if (droppedId <= dragStone.lineId && dragStone.stoneType === 'B') {
        copyData.forEach((item: any, index: number) => {
          if (item.lineId === droppedId) {
            item.haveStone.push('B');
          } if (item.lineId === dragStone.lineId) {
            item.haveStone.pop();
          }
          return item;
        });
      } else if (droppedId >= dragStone.lineId && dragStone.stoneType === 'S') {
        copyData.forEach((item: any, index: number) => {
          if (item.lineId === droppedId) {
            item.haveStone.push('S');
          } if (item.lineId === dragStone.lineId) {
            item.haveStone.pop();
          }
          return item;
        });
      }
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