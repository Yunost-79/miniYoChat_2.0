import { MouseEvent } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './MoreInfoButton.scss';
import { useLightModeStore } from '../../../../zustand/customModes/useLightModeStore';
import { Button } from '@mui/material';

type MoreInfoButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const MoreInfoButton = (props: MoreInfoButtonProps) => {
  const { onClick } = props;
  const { isLightMode } = useLightModeStore();

  return (
    <div className={`more_info_button common_button ${isLightMode ? 'light' : ''}`}>
      <Button onClick={onClick} component="button">
        <MoreHorizIcon />
      </Button>
    </div>
  );
};

export default MoreInfoButton;
