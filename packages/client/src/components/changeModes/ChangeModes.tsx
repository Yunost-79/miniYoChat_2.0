import { useFullscreenModeStore } from '../../zustand/customModesStores/useFullscreenModeStore';
import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';
import { useShowHeaderStore } from '../../zustand/customModesStores/useShowHeaderStore';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './ChangeModes.scss';

const ChangeModes = () => {
  const { isLightMode, setLightMode } = useLightModeStore();
  const { isFullscreenMode, setFullscreenMode } = useFullscreenModeStore();
  const { setShowHeader } = useShowHeaderStore();

  // Timer for show Header component
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowHeader(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [isShowHeader, setShowHeader]);

  return (
    <div className={`test_settings ${isLightMode ? 'light' : ''}`}>
      <button className="test_light_mode" onClick={() => setLightMode(!isLightMode)}>
        <EmojiObjectsIcon />
      </button>
      <button className="test_fullscreen_mode" onClick={() => setFullscreenMode(!isFullscreenMode)}>
        {isFullscreenMode ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </button>
      <button className="test_site_name_mode" onClick={() => setShowHeader(true)}>
        <MoreVertIcon />
      </button>
    </div>
  );
};

export default ChangeModes;
