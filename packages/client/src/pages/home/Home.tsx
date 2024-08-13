import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';
import { useFullscreenModeStore } from '../../zustand/customModesStores/useFullscreenModeStore';
import { useShowHeaderStore } from '../../zustand/customModesStores/useShowHeaderStore';

import MessageContainer from '../../components/messageContainer/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

import './Home.scss';
import { useDataStore } from '../../zustand/dataStore/useDataStore';
import { useEffect } from 'react';
import { updateUser } from '../../API/axiosRequests';

const Home = () => {
  const { isLightMode } = useLightModeStore();
  const { isFullscreenMode } = useFullscreenModeStore();
  const { setShowHeader } = useShowHeaderStore();

  const { userData } = useDataStore();

  useEffect(() => {
    updateUser();
  }, []);

  console.log(userData);

  return (
    <div className={`wrapper_home ${isLightMode ? 'light' : ''} `}>
      <div className={`container  ${isFullscreenMode ? 'fullscreen' : ''}`}>
        {/* <Header /> */}
        <div className="main" onClick={() => setShowHeader(false)}>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="message_component">
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
