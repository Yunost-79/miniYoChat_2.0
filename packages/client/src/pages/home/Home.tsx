import { useCustomizeModesStore } from '../../zustand/customModes/useCustomizeModes';

import MessageContainer from '../../components/messageContainer/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './Home.scss';

const Home = () => {
  const { isLightMode, setIsLightMode, isChangeSizeScreen, setIsChangeSizeScreen, isShowFooter, setIsShowFooter } = useCustomizeModesStore();

  return (
    <div className={`wrapper ${isLightMode ? 'light' : ''}`}>
      <div className="test_settings">
        <button className="test_light_mode" onClick={() => setIsLightMode(!isLightMode)}>
          <EmojiObjectsIcon />
        </button>
        <button className="test_fullscreen_mode" onClick={() => setIsChangeSizeScreen(!isChangeSizeScreen)}>
          {isChangeSizeScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </button>
        <button className="test_site_name_mode" onClick={() => setIsShowFooter(!isShowFooter)}>
          <MoreVertIcon />
        </button>
      </div>
      <div className={`container ${isChangeSizeScreen ? 'fullscreen' : ''}`}>
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
