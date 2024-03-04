import React from 'react'
import { useState, useMemo } from 'react'
import ChildComponent from './ChildComponent';

function MemoComponent() {
    console.log('Parentb Rerendering');
    

    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    const handleClick = () => {
        setCounter(counter => counter + 1);
    }
    
    const slow = useMemo(() => {
        for (let index = 0; index < 1000000000; index++) { }
        return counter;        
    }, [counter]);
    

    const handleNumberClick = () => {
        setNumber(number => number + 1);
    }
  return (
      <div>
          <h2>MemoComponent</h2>
          <span>{slow}</span>
          <button onClick={handleClick}>+Counter</button>
          <br />
          <span>{number}</span>
          <button onClick={handleNumberClick}>+Number</button>
          <ChildComponent number={number} />
      </div>
  )
}

export default MemoComponent