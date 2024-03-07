import React , {useReducer} from 'react'
const initialValue = { count: 0, number: 0 };
//const initialValue2 = { count: 100, number: 0 };

const reducer = (state, action) => {
    console.log(state,action);
    switch (action.type) {
        case 'INCREASE':
            return {...state,count:state.count + 1};
        case 'DECREASE':
            return {...state,count:state.count - 1};
        case 'RESET':
            return {...state,count:0};
        case 'ADD-AMOUNT':
            return {...state,count:state.count + action.payload};
        default:
            throw new Error('Invalid Action');
    }
}

function ReducerComponent2() {
    const [state, dispatch] = useReducer(reducer, initialValue);       
    const [state2, dispatch1] = useReducer(reducer, initialValue);       

    // const increaseHandler = () => {
    //     dispatch({type:'INCREASE'});
    // }
    // const decreaseHandler = () => {
    //     dispatch({type:'DECREASE'});
    // }
    // const resetHandler = () => {
    //     dispatch({type:'RESET'});
    // }
    // const addAmountHandler = () => {
    //     dispatch({type:'ADD-AMOUNT' , payload:10});
    // }
    
  return (
      <div>
          <h2>ReducerComponent2</h2>
          <button onClick={()=>{dispatch({type:'INCREASE'})}}>+</button>
          <button onClick={()=>{dispatch({type:'DECREASE'})}}>-</button>
          <button onClick={()=>{dispatch({type:'RESET'})}}>0</button>
          <button onClick={()=>{dispatch({type:'ADD-AMOUNT',payload:10})}}>+10</button>
          <h3>{state.count}</h3>
          <h3>{state.number}</h3>
          <button onClick={()=>{dispatch1({type:'INCREASE'})}}>+</button>
          <button onClick={()=>{dispatch1({type:'DECREASE'})}}>-</button>
          <button onClick={()=>{dispatch1({type:'RESET'})}}>0</button>
          <button onClick={()=>{dispatch1({type:'ADD-AMOUNT',payload:15})}}>+15</button>
          <h3>{state2.count}</h3>          
          

    </div>
  )
}

export default ReducerComponent2