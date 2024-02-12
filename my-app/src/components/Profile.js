import React from 'react';
import Avatar
  from "./Avatar";


// eslint-disable-next-line react/prop-types
export default function Profile(props) {
  return (
    <div className="card">
      <Avatar
        // eslint-disable-next-line react/prop-types
        person={props.profile.person}
        // eslint-disable-next-line react/prop-types
        size={props.profile.size}        
      />
    </div>
   
  );
}
