import { useLightModeStore } from '../../../../zustand/customModes/useLightModeStore';

import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import './SwitchLightButton.scss';

const SwitchLightModeButton = () => {
  const { isLightMode, setLightMode } = useLightModeStore();

  return (
    <div className={`switch_theme_mode ${isLightMode ? 'light' : ''}`} onClick={() => setLightMode(!isLightMode)}>
      <button>{isLightMode ? <ModeNightIcon /> : <LightModeIcon />}</button>
    </div>
  );
};

export default SwitchLightModeButton;
