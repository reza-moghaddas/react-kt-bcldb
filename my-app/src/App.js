
import { React, useState } from 'react';
import Gallery from "./components/Gallery";
import UserList from './components/UserList';
import PackingList from './components/PackingList';

// eslint-disable-next-line react/prop-types
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function App() {
  const [showUserList, SetShowUserList] = useState(false);
  const [showPackingList, SetShowPackingList] = useState(false);
  return (    
    <>
      <Card>
        <Gallery />
      </Card>
      <button onClick={()=>{SetShowUserList(!showUserList)}}>Toggle Show User List</button>
      {showUserList ?
        <UserList />
        :<div>No User List</div>
      }
      <button onClick={()=>{SetShowPackingList(!showPackingList)}}>Toggle Show Packing List</button>
      {showPackingList ?
        <PackingList />
        :<div>No Packing List</div>
      } 

    </>
  )
}