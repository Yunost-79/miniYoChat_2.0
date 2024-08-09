import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchUser } from '../MUI/SearchUser.styled/SearchUser.styled';
import { InputAdornment } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchTextField = () => {
  return (
    <SearchUser
      label="Search"
      variant="outlined"
      autoComplete="off"
      margin="none"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchUser;
