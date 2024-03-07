import React, {memo} from 'react'


function ChildComponent({ number,handleChildButtonClick}) {
    console.log('Child Component is Rendered');
  return (
      <div>
          <h2>ChildComponent: {number}</h2>
          <button onClick={handleChildButtonClick}>Call ADD in the Child Component</button>
      </div>
  )
}

export default memo(ChildComponent)