import React, {useEffect} from 'react'

function Page() {

  useEffect(() => {
    document.title = 'Main Page';
  },[])
  return (
    <div>Page</div>
  )
}

export default Page