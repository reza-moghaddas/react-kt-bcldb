import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './feature/userSlice';


function User() {
    const users = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());          
    },[])

    console.log(users);


  return (
      <div>
          <p>User</p>
          {users.loading && <div>Loading....</div>}
          {!users.loading && users.error ? <div>Error : {users.error} </div> : null}
          {!users.loading && users.users.length ? <ul>
              {users.users.map((user) => <li>
                  {user.name}
              </li>)}
          </ul> : null}

      </div>
  )
}

export default User