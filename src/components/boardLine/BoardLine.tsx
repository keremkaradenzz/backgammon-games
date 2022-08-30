import React from 'react'
import Stone from '../stone/Stone';
import './index.scss';
import { IData } from '../../utils/types';
import stone from "../stone/Stone";
interface IBoardLineProps {
  bgcolor: string;
  game: IData;
}

type DragStoneType = {
  id : number;
  lineId: number;
}
const BoardLine: React.FC<IBoardLineProps> = ({ bgcolor, game }) => {

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const dragStone:DragStoneType = JSON.parse(localStorage.getItem('stone') || '{}') ;
    if(dragStone){
      console.log(dragStone)
    }

  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
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