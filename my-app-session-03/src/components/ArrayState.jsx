import { useState } from 'react';

let nextId = 0;

export default function ArrayState() {
  const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);
    
    console.log(artists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
       setArtists([
  { id: nextId++, name: name },
  ...artists // Put old items at the end
]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
