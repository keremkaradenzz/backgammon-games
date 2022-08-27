import React from 'react'
import Stone from '../stone/Stone';
import './index.scss';
import { IData } from '../../utils/types';
interface IBoardLineProps {
  bgcolor: string;
  count?: number;
  game: IData;
}
const BoardLine: React.FC<IBoardLineProps> = ({ bgcolor, count = 0 }) => {
  const newArray = Array(count).fill('');

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    console.log(e.target);
  }
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    //console.log(e.target);
  }
  return (
    <div className='line' onDragOver={handleDragOver} onDrop={e => handleDrop(e)} style={{ background: bgcolor, borderColor: `transparent transparent ${bgcolor} transparent` }}>
      {
        newArray.map((i, index) => {
          return <Stone key={index} />
        })
      }
    </div>

  )
}

export default BoardLine