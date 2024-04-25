import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/user/UserSlice';

function Users() {
    const dispatch = useDispatch();
    //const users = useSelector(state => state);

    //console.log(users);

    // useEffect(() => {
    //     fetchUsers();
    // })
    

  return (
      <div>
          {/*<h2>Users</h2>
           {users.loading ? <h3>Loading....</h3> : null}
          {users.users.length ? users.users.map((user) => <p key={user.id}>{user.name}</p>):null } */}
      </div>
  )
}

export default Users