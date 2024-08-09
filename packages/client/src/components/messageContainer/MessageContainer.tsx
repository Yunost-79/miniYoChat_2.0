import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import { useFullscreenModeStore } from '../../zustand/customModes/useFullscreenModeStore';

import SendInput from '../UI/SendInput/SendInput';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import OwnerImage from '/test-user.png';

import './MessageContainer.scss';

const MessageContainer = () => {
  const { isLightMode, setLightMode } = useLightModeStore();
  const { isFullscreenMode, setFullscreenMode } = useFullscreenModeStore();

  return (
    <div className={`message_container_component ${isLightMode ? 'light' : ''}`}>
      <div className="top">
        <div className="user_receiver">
          <div className="receiver_image">{OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}</div>
          <div className="receiver_info">
            <span>John Dude</span>
          </div>
        </div>
        <div className="user_setting">
          <button>
            <MoreHorizIcon />
          </button>
        </div>
      </div>
      <div className="center">Center</div>
      <div className="bottom">
        <div className="send_item">
          <SendInput />
        </div>
        <div className="send_setting">
          <div className="fullscreen_mode">
            <button onClick={() => setFullscreenMode(!isFullscreenMode)}>{isFullscreenMode ? <FullscreenIcon /> : <FullscreenExitIcon />}</button>
          </div>
          <div className="switch_theme_mode">
            <button onClick={() => setLightMode(!isLightMode)}>{isLightMode ? <ModeNightIcon /> : <LightModeIcon />}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
