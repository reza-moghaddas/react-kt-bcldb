
import React from 'react';
import Profile from "./Profile";
import { UserProfiles } from '../assets/profiles.ts';

export default function Gallery() {
  // const up = UserProfiles;
  // console.log(up);
  return (
    <section>
      <h1>Amazing scientists</h1>
      <ul>
        {UserProfiles.map((profile) => {
          return (
            <li key={profile.person.name}>
              <Profile profile={profile} />
            </li>
          )
        })}
      </ul>   
    </section>
  );
}