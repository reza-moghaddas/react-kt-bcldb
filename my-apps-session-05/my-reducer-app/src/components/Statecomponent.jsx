import React, { useState } from 'react'

function Statecomponent() {
    console.log('component rendered!')



    const [count, setCount] = useState(10);
  return (
      <div>
          <h2>Statecomponent</h2>
          <button onClick={() => { setCount(count => count + 1) }}>+</button>
          <button onClick={() => { setCount(count => count - 1) }}>-</button>
          <button onClick={() => { setCount(0) }}>0</button>
          <button onClick={() => { setCount(count => count + 5) }}>+5</button>
          <h3>{count}</h3>
      </div>
      
  )
}

export default Statecomponent