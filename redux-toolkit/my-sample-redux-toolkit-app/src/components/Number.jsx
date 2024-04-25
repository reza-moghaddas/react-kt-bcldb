import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from '../features/number/NumberSlice';

function Number() {
    const number = useSelector((store) => store.number.numberValue)
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
  return (
      <div>
          <p>this is test Number {number}</p>
          <button onClick={() => dispatch(increment())}>increment number</button>
          <button onClick={() => dispatch(decrement())}>decrement number</button>
          <br />
          <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={() => dispatch(incrementByValue(value))}>Add {value} </button>
    </div>
  )
}

export default Number;