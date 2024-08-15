import { useEffect, useState } from 'react';
import { useDataStore } from '../../../zustand/dataStore/useDataStore';
import { useAuthStore } from '../../../zustand/authStores/useAuthStore';
import SearchInput from '../../UI/Inputs/SearchInput/SearchInput';
import SearchListItem from './searchListItem/SearchListItem';
import { addUserToList, updateUser } from '../../../API/axiosRequests';

import MoreInfoButton from '../../../components/UI/Buttons/MoreInfoButton/MoreInfoButton';
import Fade from '@mui/material/Fade';
import { Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchUserData } from '../../../types/globalTypes';
import { useSocketContext } from '../../../context/socketContext';

const SidebarHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const { userData, searchUserData } = useDataStore();

  const { signOut } = useAuthStore();

  const { isConnected } = useSocketContext();

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


  const handleAddUser = async (id: string) => {
    try {
      await addUserToList(id);
      await updateUser();
    } catch (e) {
      const err = e as Error;
      console.error('SearchListItem error:', err.message);
    }
  };

  useEffect(() => {
    if (searchUserData) {
      const visibilityArray = new Array(searchUserData.length).fill(false);
      setVisibleItems(visibilityArray);

      searchUserData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => prev.map((visible, i) => (i === index ? true : visible)));
        }, index * 200);
      });
    }
  }, [searchUserData]);


  return (
    <div className="sidebar_header">
      <div className="owner_info">
        <div className={`user_info ${isConnected ? 'connected' : ''}`}>
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
      <div className="search_list">
        {searchUserData &&
          searchUserData.map((user: SearchUserData, index) => (
            <SearchListItem
              key={user._id}
              onClick={() => handleAddUser(user._id)}
              id={user._id}
              username={user.username}
              profileAvatar={user.profileAvatar}
              className={visibleItems[index] ? 'visible' : ''}
            />
          ))}
      </div>
    </div>
  );
};

export default SidebarHeader;
