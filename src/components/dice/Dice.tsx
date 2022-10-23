import React, { useMemo, useState } from 'react';
import './index.scss'

function Dice(props: any) {
  localStorage.setItem(props.id, JSON.stringify(props.draw));
  if (props.id === 1) {
    localStorage.setItem('isRoll', JSON.stringify(true));
  }
  if (props.draw === 1) {
    return <div className="dice img-1"></div>;
  } else if (props.draw === 2) {
    return <div className="dice img-2"></div>;
  } else if (props.draw === 3) {
    return <div className="dice img-3"></div>;
  } else if (props.draw === 4) {
    return <div className="dice img-4"></div>;
  } else if (props.draw === 5) {
    return <div className="dice img-5"></div>;
  } else if (props.draw === 6) {
    return <div className="dice img-6"></div>;
  } else {
    return <div className="dice ">!!!</div>;
  }
}
function RollDice(props: any) {
  const [draw, setDraw] = useState(1);
  let counter = 0;

  useMemo(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      counter += 1;
      if (counter >= 15)
        clearInterval(interval);

      setDraw(Math.round((Math.random() * 5) + 1));
    }, 100);

  }, [props.isIsolated, props.diceRef]);

  return <Dice draw={draw} id={props.id} />;
}

export const MemoRollDice = React.memo(RollDice);