import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement, incrementByValue } from '../feature/counterSlice';
import { useState } from 'react';


function Counter() {
    const counter = useSelector(store => store.counter.counterValue);   
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
  return (
      <div>
          <h3>Counter</h3>
          <button onClick={() => { dispatch(increment()) }}>increment</button> 
          <button onClick={() => { dispatch(decrement()) }}>decrement</button> 
          <input type='text' value={value} onChange={(e) => { setValue(e.target.value) }} />
          <button onClick={() => { dispatch(incrementByValue(value)) }}>Add {value}</button> 
          <h3>{counter}</h3>
    </div>
  )
}

export default Counter;