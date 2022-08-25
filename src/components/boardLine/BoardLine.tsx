import React from 'react'
import './index.scss';

interface IBoardLineProps { 
  bgcolor : string;
}
const BoardLine:React.FC<IBoardLineProps> = ({bgcolor}) => {
  return (
    <div className='line' style={{borderColor:`transparent transparent ${bgcolor} transparent`}}></div>
  )
}

export default BoardLine