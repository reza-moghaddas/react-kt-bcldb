import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import { Route, Routes } from 'react-router-dom';
import SecondComponent from './components/SecondComponent';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/first' element={<FirstComponent />} />
        <Route path='/second' element={<SecondComponent />} />        
      </Routes>      
    </div>
  );
}

export default App;
