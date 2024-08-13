import { FocusEvent, useEffect, useState } from 'react';
import { FormHelperText, IconButton, InputBase, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './AuthInput.scss';

type AuthInputProps = {
  className?: string;
  name?: string;
  type: string;
  isLightMode?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: string | false | undefined;
};

const AuthInput = (props: AuthInputProps) => {
  const {
    className,
    name,
    type,
    isLightMode,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    helperText,
  } = props;

  const [isShowText, setIsShowText] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'text') {
      setIsShowText(false);
    }
  }, [type]);

  return (
    <div
      className={`${className ? className : ''} input ${isLightMode ? 'light' : ''} ${
        error ? 'error' : ''
      }`}
    >
      <Paper className="input_form">
        <InputBase
          className="input_item"
          placeholder={placeholder}
          value={value}
          name={name}
          type={type === 'password' && isShowText ? 'text' : type}
          onChange={onChange}
          onBlur={onBlur}
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
      {helperText && (
        <FormHelperText className="helper-text" error={error}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};

export default AuthInput;
