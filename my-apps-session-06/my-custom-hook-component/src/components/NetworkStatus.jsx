import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function StatusBar() {
    const { isOnline, setIsOnline } = useOnlineStatus();

    const handleVirtualNetworkStatusChange = () => {
        setIsOnline(!isOnline);
    }

    return (
        <div>
            <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
            <button onClick={handleVirtualNetworkStatusChange}>{isOnline ? 'Network Off' : 'Network On'}</button>
        </div>
    )
}
