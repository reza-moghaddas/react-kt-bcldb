import React from 'react';
import { Users } from './../assets/users.ts';


export default function UserList(){
    return (
        <ul>
            {Users.map(user => {
                return(
                    <li key={user.userId}>{user.username} / {user.email}</li>
                )
            })}
        </ul>        
    )
}