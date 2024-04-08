import './App.css';
import FirstComponent from './components/FirstComponent';
import { Route, Routes } from 'react-router-dom';
import SecondComponent from './components/SecondComponent';
import Page from './components/Page';
import NetworkStatus from './components/NetworkStatus';
import SaveButton from './components/SaveButton';
import PageTwo from './components/PageTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/first' element={<FirstComponent />} />
        <Route path='/second' element={<SecondComponent />} />
        <Route path='/network' element={<NetworkStatus />} />
        <Route path='/save-btn' element={<SaveButton />} />
        <Route path='/p-2' element={<PageTwo />} />
      </Routes>      
    </div>
  );
}

export default App;
