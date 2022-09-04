import React from 'react'
import './index.scss';

interface IStoneProps {
  bgcolorFirst?: string;
  bgcolorSecond?: string;
  lineId:number;
  id:number;
}
type DragStoneType = {
    lineId: number,
    id:number,
    stoneType : string,
}
const Stone:React.FC <IStoneProps> = ({bgcolorFirst = 'black', bgcolorSecond = 'gray', lineId, id}) => {

  function handleDragStart(e:React.DragEvent){
      const dragStone:DragStoneType = {
          lineId,
          id,
          stoneType : bgcolorFirst === 'black' ? 'S' : 'B', 
      }
      localStorage.setItem('stone', JSON.stringify(dragStone))
  }
  return (
    <div  draggable={true} className='stone'   onDragStart={e => handleDragStart(e)}  style={{background:bgcolorFirst}}>
      <div className='round' style={{background:bgcolorSecond}}>
      </div>
    </div>
  )
}

export default Stone;