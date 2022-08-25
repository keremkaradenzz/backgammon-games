import React from 'react'
import './index.scss';

interface IBoardLineProps { 
  bgcolor : string;
  degree : number | 0
}
const BoardLine:React.FC<IBoardLineProps> = ({bgcolor, degree}) => {
  console.log(degree)
  return (
    <div className='line' style={{transform:`rotate(${degree}deg)`, borderColor:`transparent transparent ${bgcolor} transparent`}}></div>
  )
}

export default BoardLine