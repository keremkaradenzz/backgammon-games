import React from 'react'
import Stone from '../stone/Stone';
import './index.scss';

interface IBoardLineProps {
  bgcolor: string;
  count?: number;
}
const BoardLine: React.FC<IBoardLineProps> = ({ bgcolor, count = 0 }) => {
  const newArray = Array(count).fill('');


  return (
      <div className='line' style={{ background:bgcolor,borderColor: `transparent transparent ${bgcolor} transparent` }}>
        {
          newArray.map((i,index)=> {
            return <Stone  key={index}/>
          })
        }
      </div>
   
  )
}

export default BoardLine