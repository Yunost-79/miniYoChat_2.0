import { useState } from 'react';

import { IconButton, InputBase, Paper } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './AuthInput.scss';

type AuthInputProps = {
  className?: string;
  type: string;
  isLightMode?: boolean;
  placeholder?: string;
  value?: string;
  setValue?: ((value: string) => void) | undefined;
  handleSubmit?: () => void;
};

const AuthInput = (props: AuthInputProps) => {
  const { className, type, isLightMode, placeholder, value, setValue } = props;

  const [isShowText, setIsShowText] = useState<boolean>(false);

  return (
    <div className={`${className ? className : ''} input ${isLightMode ? 'light' : ''}`}>
      <Paper className="input_form">
        <InputBase
          className="input_item"
          placeholder={placeholder}
          value={value}
          type={type === 'password' && isShowText ? 'text' : 'password'}
          onChange={(e) => setValue && setValue(e.target.value)}
        />
        {type === 'password' && (
          <IconButton
            className={`button show_button ${value ? 'show' : ''}`}
            type="button"
            aria-label="show-input"
            onClick={() => setIsShowText(!isShowText)}
          >
            {isShowText ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        )}
      </Paper>
    </div>
  );
};

export default AuthInput;
