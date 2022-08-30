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
}
const Stone:React.FC <IStoneProps> = ({bgcolorFirst = 'black', bgcolorSecond = 'gray', lineId, id}) => {

  function handleDragStart(e:React.DragEvent){
      console.log(e.target)
      const dragStone:DragStoneType = {
          lineId,
          id
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