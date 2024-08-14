import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce'; // Correct import from lodash
import { IconButton, InputBase, Paper } from '@mui/material';
import { useDataStore } from '../../../../zustand/dataStore/useDataStore';
import { useLightModeStore } from '../../../../zustand/customModesStores/useLightModeStore';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { searchUsers } from '../../../../API/axiosRequests';
import './SearchInput.scss';

const SearchInput = () => {
  const [value, setValue] = useState<string>('');

  const { clearSearchUserData } = useDataStore();
  const { isLightMode } = useLightModeStore();

  const handleChange = useCallback(async (searchValue: string) => {
    if (searchValue) {
      try {
        await searchUsers(searchValue.trim());
      } catch (e) {
        console.error('Search failed:', e);
      }
    }
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const debouncedOnChange = useMemo(() => {
    return debounce((newValue: string) => {
      handleChange(newValue);
    }, 300);
  }, [handleChange]);

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  const handleClearValue = () => {
    setValue('');
    clearSearchUserData();
  };

  return (
    <div className={`search_input ${isLightMode ? 'light' : ''}`}>
      <Paper component="form" onSubmit={handleSubmit}>
        <IconButton className="button search_button" type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          className="input_item"
          placeholder="Search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            debouncedOnChange(e.target.value);
          }}
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
