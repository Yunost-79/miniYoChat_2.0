
import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import { useFullscreenModeStore } from '../../zustand/customModes/useFullscreenModeStore';
import { useShowHeaderStore } from '../../zustand/customModes/useShowHeaderStore';

import MessageContainer from '../../components/messageContainer/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
// import Header from '../../components/header/Header';

import './Home.scss';

const Home = () => {
  const { isLightMode } = useLightModeStore();
  const { isFullscreenMode } = useFullscreenModeStore();
  const { setShowHeader } = useShowHeaderStore();




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
