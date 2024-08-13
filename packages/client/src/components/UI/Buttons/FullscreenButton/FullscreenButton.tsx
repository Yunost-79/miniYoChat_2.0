import { useFullscreenModeStore } from '../../../../zustand/customModesStores/useFullscreenModeStore';
import { useLightModeStore } from '../../../../zustand/customModesStores/useLightModeStore';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import './FullscreenButton.scss';

const FullscreenButton = () => {
  const { isFullscreenMode, setFullscreenMode } = useFullscreenModeStore();
  const { isLightMode } = useLightModeStore();

  return (
    <div
      className={`fullscreen_mode ${isLightMode ? 'light' : ''}`}
      onClick={() => setFullscreenMode(!isFullscreenMode)}
    >
      <button>{isFullscreenMode ? <FullscreenIcon /> : <FullscreenExitIcon />}</button>
    </div>
  );
};

export default FullscreenButton;
