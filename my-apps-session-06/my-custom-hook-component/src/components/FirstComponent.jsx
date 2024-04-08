import React from 'react'
import { useTitle } from '../hooks/useTitle'

function FirstComponent() {
  useTitle('First title custom Hook');
  console.log('first re-render')
  return (
      <div>
          <h2>First Component</h2>
    </div>
  )
}

export default FirstComponent