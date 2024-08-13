import { useState } from 'react';

import { useLightModeStore } from '../../../../zustand/customModesStores/useLightModeStore';

import { Icon, IconButton, InputBase, Paper } from '@mui/material';

import CustomSendIcon from '../../Icons/CustomSendIcon';
import CustomUploadFile from '../../Icons/CustomUploadFile';

import './SendInput.scss';

const SendInput = () => {
  const [value, setValue] = useState<string>('');
  const { isLightMode } = useLightModeStore();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <div className={`send_input ${isLightMode ? 'light' : ''}`}>
      <Paper component="form" onSubmit={handleSubmit}>
        <Icon className="upload_icon">
          <CustomUploadFile />
        </Icon>
        <InputBase
          className="input_item"
          placeholder="Write a message..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <IconButton
          className="button send_button"
          type="button"
          aria-label="send"
          onClick={handleSubmit}
        >
          <Icon className="send_icon">
            <CustomSendIcon />
          </Icon>
        </IconButton>
      </Paper>
    </div>
  );
};

export default SendInput;
