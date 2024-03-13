import React, { useReducer } from 'react'

function mycustomfunction(state, action) {
        switch (action.type) {
            case 'increment':
                return state + action.incrementValue;                
            default:
                return action;
        }
    }

function ReducerComponent() {
    const [state, dispatch] = useReducer(mycustomfunction, 10);
  return (
      <div>
          <h2>ReducerComponent</h2>
          <button onClick={() => {
              dispatch({type:'increment',incrementValue:1})
          }}>+</button>
          <h3>{state}</h3>

    </div>
  )
}

export default ReducerComponent