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
          paddingLeft: 15,
          color: WHITE,
        },
      },
      '& .MuiInputLabel-root': {
        color: WHITE,
      },
    },

    '& .MuiOutlinedInput-root.Mui-focused': {
      '& input': {
        paddingLeft: 15,
        color: WHITE,
      },
      '& fieldset': {
        borderColor: WHITE,
        borderRadius: '15px',
      },
    },

    '& .MuiOutlinedInput-root': {
      transition: '0.3s linear',

      '& input': {
        paddingLeft: 15,
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
      color: DARK_SUBTITLE_TEXT,
      '&.Mui-focused': {
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
