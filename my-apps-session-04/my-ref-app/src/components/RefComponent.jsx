import React, {useRef} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function RefComponent() {
    console.log('Render');

    const services = [
        { id: 1, title: 'Payment' },
        { id: 2, title: 'Order' },
        { id: 3, title: 'Classification' },
        { id: 4, title: 'Wholesale' }        
    ]
    const number = useRef(0);
    const input = useRef(null);
    const [counter, setCounter] = useState(0);
    const handleCounterClick = () => {
        setCounter(counter => counter + 1);
        //console.log(services);
    }

    const handleClick = () => {
        //number.current = 5;
        number.current++;
        services.push({ id: 5, title: 'New Title' });
        console.log('This is ref number' + number.current);
        console.log(services);

        //console.log(input);
    }

    useEffect(() => {
        input.current.focus();
    },[])

    console.log(number);
  return (
      <div>
          <h2>RefComponent</h2>
          <input ref={input}/>
          <button onClick={handleClick}>Increase</button>
          <p>{counter}</p>
          <button onClick={handleCounterClick}>+ Counetr</button>
      </div>
  )
}

export default RefComponent