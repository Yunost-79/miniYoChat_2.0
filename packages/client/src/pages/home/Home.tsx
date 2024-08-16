import { useEffect, useState } from 'react';

import { updateUser } from '../../API/axiosRequests';
import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';
import { useFullscreenModeStore } from '../../zustand/customModesStores/useFullscreenModeStore';

import MessageContainer from '../../components/messageContainer/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from '../../components/UI/Loader/Loader';

import './Home.scss';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { isLightMode } = useLightModeStore();
  const { isFullscreenMode } = useFullscreenModeStore();

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

  return (
    <div className={`wrapper_home ${isLightMode ? 'light' : ''} `}>
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
