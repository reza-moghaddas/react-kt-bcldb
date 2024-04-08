import { useOnlineStatus } from '../hooks/useOnlineStatus';


export default function SaveButton() {
  const { isOnline, setIsOnline } = useOnlineStatus();
  

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
            <button onClick={handleVirtualNetworkStatusChange}>{isOnline ? 'Network Off' : 'Network On'}</button>
      </div>
  );
}