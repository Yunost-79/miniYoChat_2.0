import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './MoreInfoButton.scss';
import { useLightModeStore } from '../../../../zustand/customModes/useLightModeStore';

const MoreInfoButton = () => {
  const { isLightMode } = useLightModeStore();

  return (
    <div className={`more_info_button common_button ${isLightMode ? 'light' : ''}`}>
      <button>
        <MoreHorizIcon />
      </button>
    </div>
  );
};

export default MoreInfoButton;
