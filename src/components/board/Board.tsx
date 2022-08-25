import React from 'react'
import './index.scss';
import BoardLine from '../boardLine/BoardLine';

const Board:React.FC = () => {
  return (
    <div className='board-out'>
      <div className='board-in'>
        <div className='board-first'>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
        </div>
      
        <div className='board-line'/>
        <div className='board-first' style={{transform:'rotate(180deg)'}}>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
            <BoardLine bgcolor='red' degree={180}/>
            <BoardLine bgcolor='black' degree={180}/>
        </div>

      
      </div>
    </div>
  )
}

export default Board