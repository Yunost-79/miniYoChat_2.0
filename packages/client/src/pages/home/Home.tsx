import { useEffect, useState } from 'react';

import { updateUser } from '../../API/axiosRequests';
import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';
import { useFullscreenModeStore } from '../../zustand/customModesStores/useFullscreenModeStore';

import MessageContainer from '../../components/messageContainer/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from '../../components/UI/Loader/Loader';

import './Home.scss';
import { useDataStore } from '../../zustand/dataStore/useDataStore';
import { useSocketContext } from '../../context/socketContext';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { isLightMode } = useLightModeStore();
  const { isFullscreenMode } = useFullscreenModeStore();
  const { userData } = useDataStore();

  // Strange behavior on reload page
  useEffect(() => {
    try {
      setLoading(true);
      updateUser();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log(userData);

  const { onlineUsers, isConnected } = useSocketContext();

  console.log('isConnected: ', isConnected);
  console.log('onlineUsers: ', onlineUsers);

  return (
    <div className={`wrapper_home ${isLightMode ? 'light' : ''} `}>
      <div>
        <h2>{isConnected ? 'Connected' : 'Disconnected'}</h2>
        <h3>Online Users:</h3>
        <ul>
          {onlineUsers.map((user) => (
            <li key={user.userId}>{user.userId}</li>
          ))}
        </ul>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={`container ${isFullscreenMode ? 'fullscreen' : ''}`}>
            <div className="main">
              <div className="sidebar">
                <Sidebar />
              </div>
              <div className="message_component">
                <MessageContainer />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
