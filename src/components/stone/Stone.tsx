import React from 'react'
import './index.scss';

interface IStoneProps {
  bgcolorFirst?: string;
  bgcolorSecond?: string;
}

const Stone:React.FC <IStoneProps> = ({bgcolorFirst = 'black', bgcolorSecond = 'gray'}) => {

  function handleDragStart(e:React.DragEvent){
      console.log(e.target)
  }
  return (
    <div  draggable={true} className='stone'   onDragStart={e => handleDragStart(e)}  style={{background:bgcolorFirst}}>
      <div className='round' style={{background:bgcolorSecond}}>
      </div>
    </div>
  )
}

export default Stone;