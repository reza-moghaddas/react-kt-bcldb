import React from 'react'
import { useTitle } from '../hooks/useTitle'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Page() {
  useTitle('Page title with Custom hook')
  const [name, setName] = useLocalStorage('name', '');


  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Page