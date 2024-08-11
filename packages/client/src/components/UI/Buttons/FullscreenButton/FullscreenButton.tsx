import { useFullscreenModeStore } from '../../../../zustand/customModes/useFullscreenModeStore';
import { useLightModeStore } from '../../../../zustand/customModes/useLightModeStore';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import './FullscreenButton.scss';

const FullscreenButton = () => {
  const { isFullscreenMode, setFullscreenMode } = useFullscreenModeStore();
  const { isLightMode } = useLightModeStore();

  return (
    <div className={`fullscreen_mode ${isLightMode ? 'light' : ''}`}>
      <button onClick={() => setFullscreenMode(!isFullscreenMode)}>{isFullscreenMode ? <FullscreenIcon /> : <FullscreenExitIcon />}</button>
    </div>
  );
};

export default FullscreenButton;
