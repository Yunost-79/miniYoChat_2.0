import { useState } from 'react';

import { IconButton, InputBase, Paper } from '@mui/material';

import { useLightModeStore } from '../../../../zustand/customModesStores/useLightModeStore';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import './SearchInput.scss';

const SearchInput = () => {
  const [value, setValue] = useState<string>('');

  const { isLightMode } = useLightModeStore();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setValue('');
  };

  const handleClearValue = () => {
    setValue('');
  };

  return (
    <div className={`search_input ${isLightMode ? 'light' : ''}`}>
      <Paper component="form" onSubmit={handleSubmit}>
        <IconButton
          className="button search_button"
          type="button"
          aria-label="search"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className="input_item"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <IconButton
          className={`button clear_button ${value ? 'show' : ''}`}
          type="button"
          aria-label="clear-input"
          onClick={handleClearValue}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchInput;
