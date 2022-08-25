import React from 'react'
import './index.scss';
import BoardLine from '../boardLine/BoardLine';

const Board:React.FC = () => {
  return (
    <div className='board-out'>
      <div className='board-in'>
        <div className='board-first' style={{transform:'rotate(180deg)', marginTop:-50}}>
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
        </div>
      
        <div className='board-line'/>
        <div className='board-first' style={{marginTop:100}} >
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
            <BoardLine bgcolor='red' />
            <BoardLine bgcolor='black' />
        </div>

      
      </div>
    </div>
  )
}

export default Board