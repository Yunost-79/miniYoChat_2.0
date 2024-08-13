import { useState } from 'react';
import { useAuthStore } from '../../../zustand/authStores/useAuthStore';

import SearchInput from '../../UI/Inputs/SearchInput/SearchInput';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MoreInfoButton from '../../../components/UI/Buttons/MoreInfoButton/MoreInfoButton';
import { Menu, MenuItem } from '@mui/material';
import Fade from '@mui/material/Fade';
import { useDataStore } from '../../../zustand/dataStore/useDataStore';

const SidebarHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { userData } = useDataStore();

  const { signOut } = useAuthStore();

  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    signOut();
  };

  console.log(userData);

  return (
    <div className="sidebar_header">
      <div className="owner_info">
        <div className="user_info">
          {userData?.profileAvatar ? <img src={userData?.profileAvatar} /> : <AccountCircleIcon />}

          <span>{userData?.username}</span>
        </div>

        <div className="owner_setting">
          <MoreInfoButton onClick={handleClick} />
        </div>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Setting</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
      <div className="search">
        <SearchInput />
      </div>
    </div>
  );
};

export default SidebarHeader;
