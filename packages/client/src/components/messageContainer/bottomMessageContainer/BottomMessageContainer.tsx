import { useLightModeStore } from '../../../zustand/customModes/useLightModeStore';
import { useFullscreenModeStore } from '../../../zustand/customModes/useFullscreenModeStore';

import SendInput from '../../UI/SendInput/SendInput';

import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const BottomMessageContainer = () => {
  const { isLightMode, setLightMode } = useLightModeStore();
  const { isFullscreenMode, setFullscreenMode } = useFullscreenModeStore();
  return (
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
  );
};

export default BottomMessageContainer;
