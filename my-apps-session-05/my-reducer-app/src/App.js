import './App.css';
import Statecomponent from './components/Statecomponent';
import ReducerComponent from './components/ReducerComponent';
import ReducerComponent2 from './components/ReducerComponent2';
import HttpReqHandler from './components/HttpReqHandler';

function App() {
  return (
    <div className="App">
      <h2>My App</h2>
      {/* <Statecomponent /> */}
      {/* <ReducerComponent /> */}
      {/* <ReducerComponent2 /> */}
      <HttpReqHandler />
    </div>
  );
}

export default App;
