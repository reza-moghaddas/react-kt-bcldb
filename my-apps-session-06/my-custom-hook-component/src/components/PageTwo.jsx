import React from 'react'
import { useTitle } from '../hooks/useTitle'
import { useLocalStorage } from '../hooks/useLocalStorage'

function PageTwo() {
  useTitle('Page title with Custom hook')
  const [family, setFamily] = useLocalStorage('family', '');


  return (
    <div>
      <input type='text' value={family} onChange={(e) => setFamily(e.target.value)} />
    </div>
  )
}

export default PageTwo