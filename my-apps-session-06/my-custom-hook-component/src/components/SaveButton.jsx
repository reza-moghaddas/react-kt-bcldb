import { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function SaveButton() {
  // const [isOnline, setIsOnline] = useState(true);
  // useEffect(() => {
  //   function handleOnline() {
  //     setIsOnline(true);
  //   }
  //   function handleOffline() {
  //     setIsOnline(false);
  //   }
  //   window.addEventListener('online', handleOnline);
  //   window.addEventListener('offline', handleOffline);
  //   return () => {
  //     window.removeEventListener('online', handleOnline);
  //     window.removeEventListener('offline', handleOffline);
  //   };
  // }, []);

  const {isOnline, setIsOnline} = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
    }
     const handleVirtualNetworkStatusChange = () => {
        setIsOnline(!isOnline);
    }


    return (
      <div>
            <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
            </button>
            <br />
            <button onClick={handleVirtualNetworkStatusChange}>{isOnline ? 'Off' : 'On'}</button>
      </div>
  );
}