import React from 'react'
import { useReducer } from 'react';
import { useEffect } from 'react';
const initialState = {
    isLoading: true,
    data: [],
    error:''
};

const reducer = (state, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'SUCCESS':
            return ({ isLoading: false, data: action.payload, error: '' })
        case 'ERROR':
            return ({isLoading:false,data:[],error:action.payload})    
        default:
            return Error('Invalid Action');            
    }        
}

function HttpReqHandler() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplceholder.typicode.com/posts')
      .then(response => response.json())
            .then(json => dispatch({ type: 'SUCCESS', payload: json }))
            .catch(error => dispatch({type:'ERROR',payload:error.message}));
    },[])
  return (
      <div>
          <h2>HttpReqHandler</h2>
          <div>
              {state.isLoading && <p>Loading....</p>}
          </div>
          <div>
              {state.data.map((post) => (<p key={post.id}>{post.title}</p>))}
          </div>
          {state.error && <p>{state.error}</p>}

      </div>
  )
}

export default HttpReqHandler