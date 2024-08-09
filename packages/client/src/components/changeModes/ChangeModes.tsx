import React from 'react';
import { useFullscreenModeStore } from '../../zustand/customModes/useFullscreenModeStore';
import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import { useShowFooterStore } from '../../zustand/customModes/useShowFooterStore';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './ChangeModes.scss';

const ChangeModes = () => {
  const { isLightMode, setLightMode } = useLightModeStore();
  const { isFullscreenMode, setFullscreenMode } = useFullscreenModeStore();
  const { isShowFooter, setShowFooter } = useShowFooterStore();

  return (
    <div className={`test_settings ${isLightMode ? 'light' : ''}`}>
      <button className="test_light_mode" onClick={() => setLightMode(!isLightMode)}>
        <EmojiObjectsIcon />
      </button>
      <button className="test_fullscreen_mode" onClick={() => setFullscreenMode(!isFullscreenMode)}>
        {isFullscreenMode ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </button>
      <button className="test_site_name_mode" onClick={() => setShowFooter(!isShowFooter)}>
        <MoreVertIcon />
      </button>
    </div>
  );
};

export default ChangeModes;
