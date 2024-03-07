import React, { useReducer } from 'react'

function reducer(state, action) {
    console.log({ state,action })
        switch (action) {
            case 'increment':
                return state + 2;                
            default:
                return action;
        }
    }

function ReducerComponent() {
    const [state, dispatch] = useReducer(reducer, 10);
  return (
      <div>
          <h2>ReducerComponent</h2>
          <button onClick={() => {
              dispatch('increment')
          }}>+</button>
          <h3>{state}</h3>

    </div>
  )
}

export default ReducerComponent