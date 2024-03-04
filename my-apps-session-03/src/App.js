import './App.css';
// import { useState, useEffect } from 'react';
// import Gallery from './components/Gallery';
// import Clock from './components/Clock';
// import Counter from './components/Counter';
 import Counter5 from './components/Counter5';
//import CounterUpdater from './components/CounterUpdater';
import PlayerEffect from './components/PlayerEffect';
// import Form from './components/Form';
// import Test from './components/Test';
//import FormWithNestedObject from './components/FormWithNestedObject';
import Test2 from './components/Test2';
import Toolbar from './components/Toolbar';
import Signup from './components/Signup';
import MovingDot from './components/MovingDot';
import Users from './components/Users';
import Test from './components/Test';
import ArrayState from './components/ArrayState';




export default function Page() {

//   function useTime() {
// const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }
//   const time = useTime();
   
  const text = 'This is the prop test passing to the child component!';

  function handleClickOnInput() {
    console.log(text);
  }
  return (
    <div className="Page">  
      {/* <Test2 handleClickOnInput={handleClickOnInput} />   */}
      {/* <Toolbar /> */}
      {/* <Signup /> */}
      {/* <Counter /> */}
      {/* <CounterUpdater />        */}
      {/* <Counter5 /> */}
      {/* <MovingDot /> */}
      {/* <FormWithNestedObject /> */}
      {/* <Gallery />
      <Gallery /> */}
      {/* <Form /> */}
      {/* <ArrayState /> */}
      {/* Show how React re-render is working */}      
      {/* <Clock time={time.toLocaleTimeString()} /> */}
      {/* <PlayerEffect /> */}
      {/* <Users /> */}
      <Test />
    </div>
  );
}