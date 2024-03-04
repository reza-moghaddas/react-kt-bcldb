import React, {memo} from 'react'


function ChildComponent({ number }) {
    console.log('Child Component is Rendered');
  return (
      <div>
          <h2>ChildComponent: {number}</h2>
      </div>
  )
}

export default memo(ChildComponent)