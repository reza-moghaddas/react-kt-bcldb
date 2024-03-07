import React, { useEffect } from 'react'

function SecondComponent() {

  useEffect(() => {
    document.title = 'Second Component';
      },[])    
    
  return (
      <div>
          <h2>Second Component</h2>
    </div>
  )
}

export default SecondComponent