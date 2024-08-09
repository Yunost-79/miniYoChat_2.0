import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import { useFullscreenModeStore } from '../../zustand/customModes/useFullscreenModeStore';

import MessageContainer from '../../components/messageContainer/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import ChangeModes from '../../components/changeModes/ChangeModes';

import './Home.scss';

const Home = () => {
  const { isLightMode } = useLightModeStore();
  const { isFullscreenMode } = useFullscreenModeStore();

  return (
    <div className={`wrapper ${isLightMode ? 'light' : ''}`}>
      <ChangeModes />
      <div className={`container ${isFullscreenMode ? 'fullscreen' : ''}`}>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="message_component">
            <MessageContainer />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
