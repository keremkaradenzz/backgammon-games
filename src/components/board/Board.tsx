import React from 'react'
import './index.scss';
import BoardLine from '../boardLine/BoardLine';
import { IData } from '../../utils/types';

interface IProps {
  gameData: IData[]
}

const Board: React.FC<IProps> = ({ gameData }) => {
  return (
    <div className='board-out'>
      <div className='board-in'>
        <div className='board-first' style={{ transform: 'rotate(180deg)', marginTop: -100 }}>
          {
            gameData.map((game, i) => i < 12 && (i % 2 === 0 ?
              <BoardLine bgcolor='black' count={game.haveStone.length} /> :
              <BoardLine bgcolor='red' count={game.haveStone.length} />
            ))}
        </div>

        <div className='board-line' />
        <div className='board-first' style={{ marginTop: 200 }} >
          {
            gameData.map((game, i) => i >= 12 && (i % 2 === 0 ?
              <BoardLine bgcolor='black' count={game.haveStone.length} /> :
              <BoardLine bgcolor='red' count={game.haveStone.length} />
            ))}
        </div>


      </div>
    </div>
  )
}

export default Board