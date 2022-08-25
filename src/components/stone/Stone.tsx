import React from 'react'
import './index.scss';

interface IStoneProps {
  bgcolorFirst: string;
  bgcolorSecond: string;
}

const Stone:React.FC <IStoneProps> = ({bgcolorFirst, bgcolorSecond}) => {
  return (
    <div className='stone' style={{background:bgcolorFirst}}>
      <div className='round' style={{background:bgcolorSecond}}>
      </div>
    </div>
  )
}

export default Stone