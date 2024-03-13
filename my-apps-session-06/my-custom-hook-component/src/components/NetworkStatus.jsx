import { useState, useEffect } from 'react';

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
    const handleVirtualNetworkStatusChange = () => {
        setIsOnline(!isOnline);
    }

    return (
        <div>
            <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
            <button onClick={handleVirtualNetworkStatusChange}>{isOnline ? 'Off' : 'On'}</button>
        </div>
    )
}
