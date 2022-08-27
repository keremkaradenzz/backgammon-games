import React from 'react'
import Board from '../../components/board/Board'
import { useReducer } from 'react'
import { GameContext } from '../../context/gameContext';
import { GameContextType } from '../../utils/types';

const Games = () => {
  const { gameData, updateGameData } = React.useContext(GameContext) as GameContextType;

  return (
    <div className='games'>Games
      <Board gameData={gameData}/>
    </div>
  )
}

export default Games

/*  
  BEYAZ TAS = 15   
  SIYAH TAS = 15 
  // BEYAZ TAS
  ID      TAS
  5       5 BEYAZ
  7       3 BEYAZ
  12      5 BEYAZ
  23      2 BEYAZ


  // SIYAH 
  0   2 SIYAH
  11  5 SIYAH
  16  3 SIYAH
  18  5 SIYAH


  Amac ->  butun taslarini kendi alanina toplamak . 

  0 - Herkesin tas toplama alani vardir bu alana butun taslar girildi zaman taslar
    toplanir. 
  1 - Zar atilicak 
  2 - Gelen zarlar kadar hareket ettirilecek 
     ( sira hangi renkte oyuncudaysa ) / beyaz or siyah
  3 - Eger yalniz kalmis bir tas varsa ve rakip oyuncunun attigi zar ile 
      oynadigi tas yalniz kalmis tasin ustune geliyorsa o tas kirilir. 
  4 - Kirilan tasi oyuna sokmak icin yine zar atilir ve rakibin ana yerinden bos yer varsa
      ve attigini zar numarasi ile ( tek zar icin ) bos yer numarasi uyuyorsa  , 
      oraya girer .
      
 B B B B B B                                  S  S  S  S  S  S
 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
*/