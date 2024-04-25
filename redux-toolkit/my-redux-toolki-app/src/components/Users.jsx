import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../feature/userSlice';

function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchUsers());
    }, [])
    
    console.log(users.users.length);
    console.log(users.loading);

  return (
      <div>
          <p>Users</p>
          {users.loading && <div>Loading....</div>}
          {!users.loading && users.error ? <div>Error: Network Issue...</div> : null}
          {!users.loading && parseInt(users.users.length) > 0 ?
              <ul>
                  {users.users.map(user => {
                      <li key={user.id}>
                          123{user.name}
                      </li>
                  })}
                  
              </ul> : <h3>Hello</h3>
          }


      </div>
  )
}

export default Users