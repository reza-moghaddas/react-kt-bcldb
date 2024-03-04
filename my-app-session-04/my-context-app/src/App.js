import './App.css';
import MyApp from './components/MyApp';
import MyApp1 from './components/MyApp1';
import StartPage from './components/StartPage';
import { createContext, useState } from 'react';
import UsersPage from './components/UsersPage';

const users = [{ id: 1, name: 'Sri' }, { id: 2, name: 'Kai' }, { id: 3, name: 'Ka Yiu' }];

export const UserContext = createContext();

function App() {
  const [theme, SetTheme] = useState('white');
  
  return (
    <div>      
      {/* <UserContext.Provider value={{ users, author:"Reza Moghaddas", theme, SetTheme }}>
      <h2>Start Page</h2>
        <StartPage />
      </UserContext.Provider>       */}
      
      {/* <MyApp /> */}
      <MyApp1 />
    </div>

  );
}


export default App;
