import React,{ useState, useEffect} from 'react';

function Test(props) {

    const [testState, setTestState] = useState(0);
    const [testState2, setTestState2] = useState(0);

    const [users, setUsers] = useState([]);

    const [counter, SetCounter] = useState(0);
    const [error, SetError] = useState(false);

    useEffect(() => {        
        async function loadUsers() {
            try {
                console.log('Effect runs for the first load');
                const res = await fetch('https://jsonplceholder.typicode.com/users');
                const json = await res.json();
                console.log(json);
                SetError(false);
                setUsers(json);
            } catch (error) {
                console.log('error loading data');                
                SetError(true);
            }
        }
        loadUsers();
    }, [])

    // //Cleanup function
    // useEffect(() => {
    //    //some effect function
    //     return () => {            
    //     }
    // },[]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         SetCounter(count => count + 1);
    //     }, 1000);

    //     return () => {
    //         console.log('Cleanup');
    //         clearInterval(interval);
    //     }
    // },[counter]);
    
    // useEffect(() => {
    //     console.log('testState Changed to:' + testState);
    //     setTestState2(testState2 + 1);
    // }, [testState2])

    // useEffect(() => {
    //     console.log('testState2 Changed to:' + testState2);
    //     setTestState(testState + 1);
    // }, [testState])
    
    function handleClick() {
        setTestState(testState + 1);
    }

    function handleClick2() {
        setTestState2(testState2 + 1);
    }

    return (
        <div>
            <div>
                <h2>{counter}</h2>
            </div>
            <h2>{ testState }</h2>
            <button onClick={handleClick}> + </button>
            <h2>{ testState2 }</h2>
            <button onClick={handleClick2}> + </button>
            {!users.length && !error && <h1>Loading....</h1>}
            {error && <h1>Something went wrong...</h1>}
            <div>
                <ul>
                    {users.map(user => 
                        <li key={user.id}>{ user.name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Test;
