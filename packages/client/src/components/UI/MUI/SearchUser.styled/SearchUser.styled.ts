import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { DARK_PRIMARY_GREEN, DARK_SUBTITLE_TEXT, ERROR, WHITE } from '../../../../variables/colors.variables';

export const SearchUser = styled(TextField)({
  '&.MuiTextField-root': {
    width: '100%',

    '&.invisible': {
      opacity: 1,
      pointerEvents: 'none',

      '& .MuiInputLabel-root': {
        opacity: 0,
      },

      '& .MuiFormHelperText-root': {
        opacity: 0,
        display: 'none',
      },

      '& .search_icon .search_icon': {
        paddingRight: 10,
        color: DARK_PRIMARY_GREEN,
      },
    },

    '&:hover': {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: WHITE,
          borderRadius: '15px',
        },

        '& input': {
          padding: '5px 5px 5px 15px',
          color: WHITE,
        },
      },
      '& .MuiInputLabel-root': {
        color: WHITE,
      },
    },

    '& .MuiOutlinedInput-root.Mui-focused': {
      '& input': {
        color: WHITE,
        padding: '5px 5px 5px 15px',
      },
      '& fieldset': {
        borderColor: WHITE,
        borderRadius: '15px',

        '& legend': {
          display: 'none',
        },
      },
    },

    '& .MuiOutlinedInput-root': {
      transition: '0.3s linear',

      '& input': {
        padding: '5px 5px 5px 15px',
        color: DARK_SUBTITLE_TEXT,

        '&.Mui-error': {
          color: ERROR,
        },
      },

      '& fieldset': {
        borderColor: DARK_SUBTITLE_TEXT,
        borderRadius: '15px',
      },

      '&.Mui-error fieldset': {
        borderColor: ERROR,
      },
      '&.Mui-error input': {
        color: ERROR,
      },
    },

    '& .MuiInputLabel-root': {
      opacity: 1,
      color: DARK_SUBTITLE_TEXT,
      transition: 'color 0.3s ease, transform 0.3s ease',

      '&.Mui-focused, &.MuiFormLabel-filled': {
        opacity: 0,
        color: WHITE,
      },

      '&.Mui-error': {
        color: ERROR,
      },
    },

    '& .MuiFormHelperText-root': {
      marginTop: 5,
      color: WHITE,
    },
  },
  '& .MuiInputAdornment-root': {
    color: DARK_SUBTITLE_TEXT,
    cursor: 'pointer',

    '&:hover': {
      color: WHITE,
    },
  },
}) as typeof TextField;
