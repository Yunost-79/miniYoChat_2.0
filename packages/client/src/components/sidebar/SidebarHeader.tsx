import { InputAdornment } from '@mui/material';

import { SearchUser } from '../UI/MUI/SearchUser.styled/SearchUser.styled';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import OwnerImage from '/test-user.png';

const SidebarHeader = () => {
  return (
    <div className="sidebar_header">
      <div className="owner_info">
        <div className="owner_avatar">{OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}</div>
        <div className="owner_setting">
          <MoreVertIcon />
        </div>
      </div>
      <div className="search">
        <SearchUser
          label="Search"
          variant="outlined"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
