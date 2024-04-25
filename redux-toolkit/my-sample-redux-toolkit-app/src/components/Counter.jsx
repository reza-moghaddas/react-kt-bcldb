import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from '../features/counter/CounterSlice';


function Counter() {
    const counter = useSelector((store) => store.counter.counterValue)
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
  return (
      <div>
          <p>this is test Counter {counter}</p>
          <button onClick={() => dispatch(increment())}>increment count</button>
          <button onClick={() => dispatch(decrement())}>decrement count</button>
          <br />
          <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={() => dispatch(incrementByValue(value))}>Add {value}</button>
    </div>
  )
}

export default Counter;