import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../App';

function UserList() {
    const {users,author} = useContext(UserContext);
    console.log(author);
    
  return (
      <div>
          <ul>
              {users.map((user) => ( <li key={user.id}>{user.name}</li>))}              
          </ul>
    </div>
  )
}

export default UserList