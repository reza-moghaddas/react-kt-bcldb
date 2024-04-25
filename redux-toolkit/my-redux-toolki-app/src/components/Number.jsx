import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,incrementByValue } from '../feature/numberSlice';
import React,{ useState } from 'react';

function Number() {
  const number = useSelector(store => store.number.numberValue);   
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
  return (
      <div>
          <h3>Number</h3>
          <button onClick={() => { dispatch(increment()) }}>increment</button> 
          <button onClick={() => { dispatch(decrement()) }}>decrement</button> 
          <input type='text' value={value} onChange={(e) => { setValue(e.target.value) }} />
          <button onClick={() => { dispatch(incrementByValue(value)) }}>Add {value}</button> 
          <h3>{number}</h3>
    </div>
  )
}

export default Number