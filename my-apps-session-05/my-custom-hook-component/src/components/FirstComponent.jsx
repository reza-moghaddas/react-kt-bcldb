import React, { useEffect } from 'react'

function FirstComponent() {

  useEffect(() => {
    document.title = 'First Component';
  },[])
  return (
      <div>
          <h2>First Component</h2>
    </div>
  )
}

export default FirstComponent